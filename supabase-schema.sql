-- ========================================================
-- SUPABASE CLOUD SETUP SCRIPT FOR PHAN HOÀNG QUỲNH CHI PORTFOLIO
-- Paste this script into Supabase SQL Editor and click RUN
-- ========================================================

-- 1. Create table for storing project image slot mappings
CREATE TABLE IF NOT EXISTS public.project_images (
  id TEXT PRIMARY KEY, -- slotId (e.g. 'hero-cafloop', 'mind-research', 'profile-avatar')
  image_url TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.project_images ENABLE ROW LEVEL SECURITY;

-- Allow public read access to project images
DROP POLICY IF EXISTS "Public Read Access" ON public.project_images;
CREATE POLICY "Public Read Access"
ON public.project_images FOR SELECT
USING (true);

-- Allow public insert/update access
DROP POLICY IF EXISTS "Public Upsert Access" ON public.project_images;
CREATE POLICY "Public Upsert Access"
ON public.project_images FOR ALL
USING (true)
WITH CHECK (true);

-- 2. Create public storage bucket 'project-images'
INSERT INTO storage.buckets (id, name, public)
VALUES ('project-images', 'project-images', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Storage Policies for 'project-images' bucket
DROP POLICY IF EXISTS "Public Storage Read" ON storage.objects;
CREATE POLICY "Public Storage Read"
ON storage.objects FOR SELECT
USING (bucket_id = 'project-images');

DROP POLICY IF EXISTS "Public Storage Upload" ON storage.objects;
CREATE POLICY "Public Storage Upload"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'project-images');

DROP POLICY IF EXISTS "Public Storage Update" ON storage.objects;
CREATE POLICY "Public Storage Update"
ON storage.objects FOR UPDATE
USING (bucket_id = 'project-images');

DROP POLICY IF EXISTS "Public Storage Delete" ON storage.objects;
CREATE POLICY "Public Storage Delete"
ON storage.objects FOR DELETE
USING (bucket_id = 'project-images');

-- 3. Create table for in-context website reviews & feedback
CREATE TABLE IF NOT EXISTS public.website_reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_path TEXT NOT NULL,
  selected_text TEXT,
  element_context TEXT,
  comment TEXT NOT NULL,
  reviewer_name TEXT DEFAULT 'Reviewer',
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

ALTER TABLE public.website_reviews ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public Read Reviews" ON public.website_reviews;
CREATE POLICY "Public Read Reviews"
ON public.website_reviews FOR SELECT
USING (true);

DROP POLICY IF EXISTS "Public Insert Reviews" ON public.website_reviews;
CREATE POLICY "Public Insert Reviews"
ON public.website_reviews FOR INSERT
WITH CHECK (true);

DROP POLICY IF EXISTS "Public Update Reviews" ON public.website_reviews;
CREATE POLICY "Public Update Reviews"
ON public.website_reviews FOR UPDATE
USING (true);

DROP POLICY IF EXISTS "Public Delete Reviews" ON public.website_reviews;
CREATE POLICY "Public Delete Reviews"
ON public.website_reviews FOR DELETE
USING (true);

