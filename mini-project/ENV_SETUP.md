# Environment Variables Setup

## Required Environment Variables

Create a `.env.local` file in the `mini-project` directory with the following variables:

```bash
# Supabase Configuration
# Get these from your Supabase project settings: https://app.supabase.com/
VITE_SUPABASE_URL=your_supabase_project_url_here
VITE_SUPABASE_KEY=your_supabase_anon_public_key_here
```

## Instructions

1. **Create the file**: Create a new file named `.env.local` in the `mini-project` folder
2. **Add your keys**: Copy the template above and replace the placeholder values with your actual Supabase credentials
3. **Get Supabase keys**: 
   - Go to [Supabase Dashboard](https://app.supabase.com/)
   - Select your project
   - Go to Settings → API
   - Copy the Project URL and anon/public key

## Backend Services (Optional)

If you're running the backend services, you'll also need:
- **OCR.space API Key** - For OCR processing
- **Google Gemini API Key** - For AI-powered medicine extraction

These should be configured in your backend service files.

## Security Note

⚠️ **NEVER commit your `.env.local` file to version control!**  
It should be in your `.gitignore` file already.

