-- iPLUG YAMA CAMPUS - COMPLETE DATABASE
-- Run this ONCE in Supabase SQL Editor

DROP TABLE IF EXISTS public.attendance CASCADE;
DROP TABLE IF EXISTS public.submissions CASCADE;
DROP TABLE IF EXISTS public.assignments CASCADE;
DROP TABLE IF EXISTS public.resources CASCADE;
DROP TABLE IF EXISTS public.timetable CASCADE;
DROP TABLE IF EXISTS public.announcements CASCADE;
DROP TABLE IF EXISTS public.verified_students CASCADE;
DROP TABLE IF EXISTS public.verified_lecturers CASCADE;
DROP TABLE IF EXISTS public.campuses CASCADE;
DROP TABLE IF EXISTS public.profiles CASCADE;
DROP FUNCTION IF EXISTS public.handle_new_user() CASCADE;
DROP FUNCTION IF EXISTS public.get_email_by_user_id(TEXT) CASCADE;

CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  role TEXT NOT NULL DEFAULT 'student',
  campus TEXT NOT NULL DEFAULT 'springs',
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  user_id TEXT,
  avatar_url TEXT,
  verified BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE public.verified_students (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  student_number TEXT NOT NULL UNIQUE,
  campus TEXT NOT NULL DEFAULT 'springs',
  course TEXT,
  status TEXT DEFAULT 'pending',
  added_by UUID REFERENCES public.profiles(id),
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE public.verified_lecturers (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  employee_number TEXT NOT NULL UNIQUE,
  campus TEXT NOT NULL DEFAULT 'springs',
  department TEXT,
  status TEXT DEFAULT 'pending',
  added_by UUID REFERENCES public.profiles(id),
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE public.campuses (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  code TEXT NOT NULL UNIQUE,
  address TEXT,
  phone TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

INSERT INTO public.campuses (name, code, address, phone) VALUES
  ('Springs Campus', 'springs', 'Springs, Ekurhuleni', '011 730 6600'),
  ('Kwa-Thema Campus', 'kwa-thema', 'Kwa-Thema, Springs', '011 730 6700'),
  ('Benoni Campus', 'benoni', 'Benoni, Ekurhuleni', '011 421 6800'),
  ('Daveyton Campus', 'daveyton', 'Daveyton, Ekurhuleni', '011 421 6900');

CREATE TABLE public.announcements (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT,
  campus TEXT,
  audience TEXT DEFAULT 'all',
  author_id UUID REFERENCES public.profiles(id),
  is_public BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE public.assignments (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  course TEXT,
  campus TEXT,
  due_date DATE,
  file_url TEXT,
  author_id UUID REFERENCES public.profiles(id),
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE public.submissions (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  assignment_id BIGINT REFERENCES public.assignments(id) ON DELETE CASCADE,
  student_id UUID REFERENCES public.profiles(id),
  file_url TEXT,
  status TEXT DEFAULT 'submitted',
  mark INTEGER,
  feedback TEXT,
  submitted_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE public.resources (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  course TEXT,
  campus TEXT,
  file_url TEXT,
  file_type TEXT DEFAULT 'PDF',
  author_id UUID REFERENCES public.profiles(id),
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE public.timetable (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  day TEXT NOT NULL,
  time TEXT NOT NULL,
  subject TEXT NOT NULL,
  room TEXT,
  campus TEXT,
  lecturer_id UUID REFERENCES public.profiles(id),
  course TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE public.attendance (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  student_id UUID REFERENCES public.profiles(id),
  lecturer_id UUID REFERENCES public.profiles(id),
  subject TEXT,
  date DATE DEFAULT CURRENT_DATE,
  status TEXT DEFAULT 'present',
  campus TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, role, campus, first_name, last_name, user_id)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'role', 'student'),
    COALESCE(NEW.raw_user_meta_data->>'campus', 'springs'),
    NEW.raw_user_meta_data->>'first_name',
    NEW.raw_user_meta_data->>'last_name',
    NEW.raw_user_meta_data->>'user_id'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

CREATE OR REPLACE FUNCTION public.get_email_by_user_id(uid TEXT)
RETURNS TEXT AS $$
  SELECT email FROM auth.users
  WHERE id = (SELECT id FROM public.profiles WHERE user_id = uid LIMIT 1);
$$ LANGUAGE sql SECURITY DEFINER;

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.verified_students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.verified_lecturers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.campuses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.timetable ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.attendance ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Read students" ON public.verified_students FOR SELECT USING (true);
CREATE POLICY "Insert students" ON public.verified_students FOR INSERT WITH CHECK (auth.uid() IN (SELECT id FROM public.profiles WHERE role IN ('lecturer', 'admin')));
CREATE POLICY "Update students" ON public.verified_students FOR UPDATE USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role IN ('lecturer', 'admin')));
CREATE POLICY "Delete students" ON public.verified_students FOR DELETE USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role IN ('lecturer', 'admin')));

CREATE POLICY "Read lecturers" ON public.verified_lecturers FOR SELECT USING (true);
CREATE POLICY "Insert lecturers" ON public.verified_lecturers FOR INSERT WITH CHECK (auth.uid() IN (SELECT id FROM public.profiles WHERE role = 'admin'));
CREATE POLICY "Update lecturers" ON public.verified_lecturers FOR UPDATE USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role = 'admin'));
CREATE POLICY "Delete lecturers" ON public.verified_lecturers FOR DELETE USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role = 'admin'));

CREATE POLICY "Anyone can read campuses" ON public.campuses FOR SELECT USING (true);

CREATE POLICY "Read announcements" ON public.announcements FOR SELECT USING (auth.uid() IS NOT NULL);
CREATE POLICY "Insert announcements" ON public.announcements FOR INSERT WITH CHECK (auth.uid() IN (SELECT id FROM public.profiles WHERE role IN ('lecturer', 'admin')));
CREATE POLICY "Update announcements" ON public.announcements FOR UPDATE USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role IN ('lecturer', 'admin')));
CREATE POLICY "Delete announcements" ON public.announcements FOR DELETE USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role IN ('lecturer', 'admin')));

CREATE POLICY "Read assignments" ON public.assignments FOR SELECT USING (auth.uid() IS NOT NULL);
CREATE POLICY "Insert assignments" ON public.assignments FOR INSERT WITH CHECK (auth.uid() IN (SELECT id FROM public.profiles WHERE role IN ('lecturer', 'admin')));
CREATE POLICY "Update assignments" ON public.assignments FOR UPDATE USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role IN ('lecturer', 'admin')));
CREATE POLICY "Delete assignments" ON public.assignments FOR DELETE USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role IN ('lecturer', 'admin')));

CREATE POLICY "Read own submissions" ON public.submissions FOR SELECT USING (student_id = auth.uid());
CREATE POLICY "Lecturers read submissions" ON public.submissions FOR SELECT USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role IN ('lecturer', 'admin')));
CREATE POLICY "Students submit" ON public.submissions FOR INSERT WITH CHECK (student_id = auth.uid());
CREATE POLICY "Lecturers grade" ON public.submissions FOR UPDATE USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role IN ('lecturer', 'admin')));

CREATE POLICY "Read resources" ON public.resources FOR SELECT USING (auth.uid() IS NOT NULL);
CREATE POLICY "Insert resources" ON public.resources FOR INSERT WITH CHECK (auth.uid() IN (SELECT id FROM public.profiles WHERE role IN ('lecturer', 'admin')));
CREATE POLICY "Update resources" ON public.resources FOR UPDATE USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role IN ('lecturer', 'admin')));
CREATE POLICY "Delete resources" ON public.resources FOR DELETE USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role IN ('lecturer', 'admin')));

CREATE POLICY "Read timetable" ON public.timetable FOR SELECT USING (auth.uid() IS NOT NULL);
CREATE POLICY "Insert timetable" ON public.timetable FOR INSERT WITH CHECK (auth.uid() IN (SELECT id FROM public.profiles WHERE role IN ('lecturer', 'admin')));
CREATE POLICY "Update timetable" ON public.timetable FOR UPDATE USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role IN ('lecturer', 'admin')));
CREATE POLICY "Delete timetable" ON public.timetable FOR DELETE USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role IN ('lecturer', 'admin')));

CREATE POLICY "Read attendance" ON public.attendance FOR SELECT USING (student_id = auth.uid() OR auth.uid() IN (SELECT id FROM public.profiles WHERE role IN ('lecturer', 'admin')));
CREATE POLICY "Insert attendance" ON public.attendance FOR INSERT WITH CHECK (auth.uid() IN (SELECT id FROM public.profiles WHERE role IN ('lecturer', 'admin')));
CREATE POLICY "Update attendance" ON public.attendance FOR UPDATE USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role IN ('lecturer', 'admin')));
CREATE POLICY "Delete attendance" ON public.attendance FOR DELETE USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role IN ('lecturer', 'admin')));

UPDATE public.profiles SET role = 'admin' WHERE id = (SELECT id FROM auth.users WHERE email = 'jamasmathata@gmail.com');
