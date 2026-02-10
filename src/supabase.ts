import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Simple validation to prevent crash with placeholders
const isValidUrl = supabaseUrl && supabaseUrl.startsWith('https://');

if (!isValidUrl || !supabaseAnonKey) {
    console.error('Supabase configuration is missing or invalid! Update your .env file with actual credentials.');
}

export const supabase = createClient(
    isValidUrl ? supabaseUrl : 'https://placeholder-url.supabase.co',
    supabaseAnonKey || 'placeholder-key'
);
