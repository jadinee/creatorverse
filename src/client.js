import { createClient } from '@supabase/supabase-js'

const URL = 'https://bgibnckeyfjilpozibhx.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJnaWJuY2tleWZqaWxwb3ppYmh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwOTA2MTUsImV4cCI6MjA3MTY2NjYxNX0.DwpHF7hwg-o0AwZH_87XQ-fC_bcLYokQ-LrSsQ6MI-M'

export const supabase = createClient(URL, API_KEY)
