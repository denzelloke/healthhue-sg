-- Create a table for storing sample request form submissions
CREATE TABLE public.sample_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  address TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.sample_requests ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert (public form)
CREATE POLICY "Anyone can submit sample requests" 
ON public.sample_requests 
FOR INSERT 
WITH CHECK (true);

-- Create a policy that allows only authenticated users to view all submissions
CREATE POLICY "Only authenticated users can view sample requests" 
ON public.sample_requests 
FOR SELECT 
USING (auth.role() = 'authenticated');

-- Add an index for better query performance
CREATE INDEX idx_sample_requests_created_at ON public.sample_requests(created_at DESC);