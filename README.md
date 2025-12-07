# 🎵 AI Music Generator

A beautiful Next.js application that generates music using the Suno AI API. Simply describe your song idea, and let AI create it for you!

## ✨ Features

- **AI-Powered Music Generation** - Create songs from text descriptions
- **Real-time Progress Tracking** - Live updates during song generation (2-4 minutes)
- **Song History** - Automatically saves your generated songs locally
- **Download Functionality** - Download your favorite creations
- **Credits Management** - Check your API credits
- **Content Moderation** - Built-in validation for appropriate content
- **Beautiful UI** - Modern, responsive design with animated music notes

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- A Suno API key from [https://api.sunoapi.org/](https://api.sunoapi.org/)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   # Copy the example env file
   copy .env.example .env
   
   # Edit .env and add your Suno API key
   SUNOAPI_ORG=your_actual_api_key_here
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 How to Use

1. **Enter a prompt** describing your song (max 500 characters)
   - Example: "An upbeat hip-hop song about new beginnings and confidence"
   - Example: "Smooth jazz ballad with piano, perfect for a romantic evening"

2. **Click "Generate Song"** and wait 2-4 minutes

3. **Listen and download** your AI-generated music!

## 💡 Prompt Tips

### ✅ Best Practices:
- Keep prompts **under 200 characters** for best results
- Focus on **musical style and mood** (e.g., upbeat jazz)
- Describe **instruments and genre** specifically
- Use **generic themes** instead of specific names or places

### ❌ Avoid:
- Real names of people or specific locations
- Violent, explicit, or controversial content
- Very long, detailed stories (over 200 chars)
- Personal or private information

## 🛠️ Tech Stack

- **Next.js 15.5.4** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Suno API** - AI music generation

## 📁 Project Structure

```
music/
├── app/
│   ├── api/
│   │   ├── generate/route.ts    # Music generation endpoint
│   │   ├── status/route.ts      # Status polling endpoint
│   │   ├── callback/route.ts    # Webhook callback
│   │   └── credits/route.ts     # Credits check endpoint
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Main page component
├── .env                         # Environment variables (not in git)
├── .env.example                 # Example env file
├── package.json                 # Dependencies
└── README.md                    # This file
```

## 🔧 API Endpoints

- `POST /api/generate` - Initiate music generation
- `GET /api/status?taskId=xxx` - Check generation status
- `POST /api/callback` - Receive Suno callbacks
- `GET /api/credits` - Check remaining API credits

## 🎨 Features in Detail

### Real-time Status Updates
- Polls every 30 seconds (as recommended by Suno API)
- Shows elapsed time in MM:SS format
- Maximum 10-minute timeout with 20 polling attempts

### Local Storage
- Automatically saves up to 50 songs
- Persistent across browser sessions
- Quick access to your song history

### Content Validation
- Client-side prompt length validation
- Server-side sensitive content detection
- User-friendly error messages

## 🚀 Deployment

This app can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- Any Node.js hosting platform

Make sure to set the `SUNOAPI_ORG` environment variable in your deployment platform.

## 📄 License

Created with ❤️ by Dr. Lee

## 🤝 Contributing

This is a learning project. Feel free to fork and modify for your own use!

## 📞 Support

For Suno API support, visit [https://api.sunoapi.org/](https://api.sunoapi.org/)
