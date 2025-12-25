'use client';
import { useState, useEffect } from 'react';

interface Song {
  id: string;
  title: string;
  audioUrl: string;
  prompt: string;
  createdAt: string;
  lyric?: string;
}

type Language = 'en' | 'es';

interface Translations {
  en: {
    title: string;
    subtitle: string;
    oneTimeNotice: string;
    legalDisclaimer: string;
    generationTime: string;
    howItWorksTitle: string;
    howItWorks1: string;
    howItWorks2: string;
    howItWorks3: string;
    howItWorks4: string;
    showTips: string;
    hideTips: string;
    bestPractices: string;
    avoid: string;
    examplePrompts: string;
    checkCredits: string;
    showHistory: string;
    hideHistory: string;
    yourSongs: string;
    noSongs: string;
    play: string;
    placeholder: string;
    generateButton: string;
    generating: string;
    download: string;
    downloadLyrics: string;
    createdBy: string;
    longPromptWarning: string;
    enterPrompt: string;
    sensitiveWarning: string;
    contentModeration: string;
    generationFailed: string;
    timeout: string;
    downloadFailed: string;
    creditsFailed: string;
    songReady: string;
    startingGeneration: string;
    taskCreated: string;
    tips: {
      practice1: string;
      practice2: string;
      practice3: string;
      practice4: string;
      avoid1: string;
      avoid2: string;
      avoid3: string;
      avoid4: string;
      example1: string;
      example2: string;
      example3: string;
      example4: string;
    };
  };
  es: {
    title: string;
    subtitle: string;
    oneTimeNotice: string;
    legalDisclaimer: string;
    generationTime: string;
    howItWorksTitle: string;
    howItWorks1: string;
    howItWorks2: string;
    howItWorks3: string;
    howItWorks4: string;
    showTips: string;
    hideTips: string;
    bestPractices: string;
    avoid: string;
    examplePrompts: string;
    checkCredits: string;
    showHistory: string;
    hideHistory: string;
    yourSongs: string;
    noSongs: string;
    play: string;
    placeholder: string;
    generateButton: string;
    generating: string;
    download: string;
    downloadLyrics: string;
    createdBy: string;
    longPromptWarning: string;
    enterPrompt: string;
    sensitiveWarning: string;
    contentModeration: string;
    generationFailed: string;
    timeout: string;
    downloadFailed: string;
    creditsFailed: string;
    songReady: string;
    startingGeneration: string;
    taskCreated: string;
    tips: {
      practice1: string;
      practice2: string;
      practice3: string;
      practice4: string;
      avoid1: string;
      avoid2: string;
      avoid3: string;
      avoid4: string;
      example1: string;
      example2: string;
      example3: string;
      example4: string;
    };
  };
}

const translations: Translations = {
  en: {
    title: 'Songs4u – AI Music Generator',
    subtitle: 'Describe your track and let AI turn it into music.',
    oneTimeNotice: 'This is a one-time song generator. Please download your song immediately after it is generated. Songs are not stored permanently.',
    legalDisclaimer: 'Legal notice: Music generated here is for personal entertainment purposes only. There is no intention to copy, imitate, or infringe any artist, song, or copyrighted work.',
    generationTime: '⏱️ Generation typically takes 2-4 minutes',
    howItWorksTitle: 'How it works (3 steps)',
    howItWorks1: '1. Describe your song – mood, genre, instruments, tempo, vibe.',
    howItWorks2: '2. Click “Generate Song” – we send your prompt securely to the AI music engine.',
    howItWorks3: '3. Listen & download – preview your track and save it for personal use.',
    howItWorks4: '4. (Optional) Add your own Suno API key to use your own credits.',
    showTips: 'Show Prompt Tips & Best Practices',
    hideTips: 'Hide Prompt Tips & Best Practices',
    bestPractices: '✅ Best Practices:',
    avoid: '❌ Avoid:',
    examplePrompts: '🎵 Example Prompts:',
    checkCredits: '💰 Check Credits',
    showHistory: '🎵 Show Song History',
    hideHistory: '🎵 Hide Song History',
    yourSongs: 'Your Songs',
    noSongs: 'No songs yet. Generate your first one!',
    play: '▶️ Play',
    placeholder: 'A melancholic jazz ballad about coffee shops...',
    generateButton: 'Generate Song',
    generating: 'Creating your song...',
    download: 'Download Song',
    downloadLyrics: 'Download Lyrics (if available)',
    createdBy: 'Created by Jessie, with guidance from Dr. Lee',
    longPromptWarning: '⚠️ Long prompts may have issues',
    enterPrompt: 'Please enter a song idea',
    sensitiveWarning: '⚠️ Warning: Your prompt may contain sensitive content that could be rejected. Consider using more neutral language.',
    contentModeration: '⚠️ Content Moderation: Your prompt contains words that are not allowed. Please try:\n• Avoiding violent, explicit, or offensive content\n• Using more general descriptions\n• Focusing on musical style and mood instead of specific topics',
    generationFailed: 'Music generation failed. Please try again.',
    timeout: 'Generation timed out after 10 minutes. The song may still be processing. Please check back later or try again.',
    downloadFailed: 'Failed to download song. Please try again.',
    creditsFailed: 'Failed to fetch credits',
    songReady: 'Song ready!',
    startingGeneration: 'Starting generation...',
    taskCreated: 'Task created, waiting for generation...',
    tips: {
      practice1: 'Keep prompts under 1000 characters for optimal results',
      practice2: 'Focus on musical style, mood, and tempo (e.g., upbeat jazz, slow ballad)',
      practice3: 'Describe instruments, genre, and vocal style specifically',
      practice4: 'Use vivid imagery and emotions to inspire the AI',
      avoid1: 'Real names of people, brands, or specific locations',
      avoid2: 'Violent, explicit, or controversial content',
      avoid3: 'Overly complex or confusing descriptions',
      avoid4: 'Personal, private, or copyrighted content',
      example1: 'Upbeat hip-hop track with heavy bass and confident rap vocals. Themes of fresh starts, overcoming obstacles, and self-belief. Modern trap beats with energetic tempo around 140 BPM.',
      example2: 'Smooth jazz ballad featuring soft piano melodies and warm saxophone. Slow tempo, romantic mood perfect for intimate evenings. Gentle vocals with emotional depth and subtle string accompaniment.',
      example3: 'High-energy rock anthem with powerful electric guitars and driving drums. Inspiring lyrics about chasing dreams and perseverance. Stadium-rock style with anthemic chorus and motivational message.',
      example4: 'Mellow acoustic folk song with fingerpicked guitar and soft vocals. Nostalgic themes of home, memories, and simpler times. Warm, intimate atmosphere with gentle harmonica touches.',
    },
  },
  es: {
    title: 'Songs4u – Generador de Música IA',
    subtitle: 'Describe tu pista y deja que la IA la convierta en música.',
    oneTimeNotice: 'Este es un generador de canciones de uso puntual. Descarga tu canción inmediatamente después de generarla. Las canciones no se almacenan de forma permanente.',
    legalDisclaimer: 'Aviso legal: La música generada aquí es solo para fines de entretenimiento personal. No existe intención de copiar, imitar ni infringir a ningún artista, canción u obra protegida por derechos de autor.',
    generationTime: '⏱️ La generación suele tardar 2-4 minutos',
    howItWorksTitle: 'Cómo funciona (3 pasos)',
    howItWorks1: '1. Describe tu canción: estado de ánimo, género, instrumentos, tempo y ambiente.',
    howItWorks2: '2. Haz clic en “Generar Canción”: enviamos tu prompt de forma segura al motor de música IA.',
    howItWorks3: '3. Escucha y descarga: cuando esté lista, prévala y guárdala para uso personal.',
    howItWorks4: '4. (Opcional) Agrega tu propia clave de Suno para usar tus créditos.',
    showTips: 'Mostrar Consejos y Mejores Prácticas',
    hideTips: 'Ocultar Consejos y Mejores Prácticas',
    bestPractices: '✅ Mejores Prácticas:',
    avoid: '❌ Evitar:',
    examplePrompts: '🎵 Ejemplos de Prompts:',
    checkCredits: '💰 Verificar Créditos',
    showHistory: '🎵 Mostrar Historial',
    hideHistory: '🎵 Ocultar Historial',
    yourSongs: 'Tus Canciones',
    noSongs: '¡Aún no hay canciones. Genera tu primera!',
    play: '▶️ Reproducir',
    placeholder: 'Una balada de jazz melancólica sobre cafeterías...',
    generateButton: 'Generar Canción',
    generating: 'Creando tu canción...',
    download: 'Descargar Canción',
    downloadLyrics: 'Descargar Letra (si disponible)',
    createdBy: 'Creado por Jessie, con la guía del Dr. Lee',
    longPromptWarning: '⚠️ Los prompts largos pueden tener problemas',
    enterPrompt: 'Por favor ingresa una idea de canción',
    sensitiveWarning: '⚠️ Advertencia: Tu prompt puede contener contenido sensible que podría ser rechazado. Considera usar un lenguaje más neutral.',
    contentModeration: '⚠️ Moderación de Contenido: Tu prompt contiene palabras que no están permitidas. Por favor intenta:\n• Evitar contenido violento, explícito u ofensivo\n• Usar descripciones más generales\n• Enfocarte en el estilo musical y el estado de ánimo en lugar de temas específicos',
    generationFailed: 'La generación de música falló. Por favor intenta de nuevo.',
    timeout: 'La generación expiró después de 10 minutos. La canción aún puede estar procesándose. Por favor verifica más tarde o intenta de nuevo.',
    downloadFailed: 'Error al descargar la canción. Por favor intenta de nuevo.',
    creditsFailed: 'Error al obtener créditos',
    songReady: '¡Canción lista!',
    startingGeneration: 'Iniciando generación...',
    taskCreated: 'Tarea creada, esperando generación...',
    tips: {
      practice1: 'Mantén los prompts bajo 1000 caracteres para resultados óptimos',
      practice2: 'Enfócate en estilo musical, estado de ánimo y tempo (ej. jazz alegre, balada lenta)',
      practice3: 'Describe instrumentos, género y estilo vocal específicamente',
      practice4: 'Usa imágenes vívidas y emociones para inspirar a la IA',
      avoid1: 'Nombres reales de personas, marcas o ubicaciones específicas',
      avoid2: 'Contenido violento, explícito o controvertido',
      avoid3: 'Descripciones demasiado complejas o confusas',
      avoid4: 'Contenido personal, privado o con derechos de autor',
      example1: 'Pista hip-hop alegre con bajo potente y voces de rap confiadas. Temas de nuevos comienzos, superación de obstáculos y autoconfianza. Beats trap modernos con tempo energético alrededor de 140 BPM.',
      example2: 'Balada de jazz suave con melodías de piano suaves y saxofón cálido. Tempo lento, ambiente romántico perfecto para veladas íntimas. Voces gentiles con profundidad emocional y acompañamiento sutil de cuerdas.',
      example3: 'Himno de rock de alta energía con guitarras eléctricas potentes y batería contundente. Letras inspiradoras sobre perseguir sueños y perseverancia. Estilo rock de estadio con coro épico y mensaje motivacional.',
      example4: 'Canción folk acústica melódica con guitarra punteada y voces suaves. Temas nostálgicos de hogar, recuerdos y tiempos más simples. Atmósfera cálida e íntima con toques gentiles de armónica.',
    },
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const [prompt, setPrompt] = useState('');
  const [audioUrl, setAudioUrl] = useState('');
  const [songTitle, setSongTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [credits, setCredits] = useState<number | null>(null);
  const [showSongs, setShowSongs] = useState(false);
  const [songs, setSongs] = useState<Song[]>([]);
  const [showTips, setShowTips] = useState(false);
  const [lyrics, setLyrics] = useState('');
  const [userApiKey, setUserApiKey] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);

  const t = translations[language];

  // Load API key from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedKey = localStorage.getItem('sunoApiKey');
      if (savedKey) {
        setUserApiKey(savedKey);
      }
    }
  }, []);

  const checkStatus = async (taskId: string) => {
    const maxAttempts = 20; // 10 minutes max (20 * 30 seconds) - following API recommendations
    let attempts = 0;
    const startTime = Date.now();

    // Update timer display every second for smooth countdown
    const timerInterval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const elapsedMinutes = Math.floor(elapsed / 60);
      const elapsedSeconds = elapsed % 60;
      const generatingText = language === 'en' ? 'Generating your song...' : 'Generando tu canción...';
      setStatusMessage(`${generatingText} ${elapsedMinutes}:${elapsedSeconds.toString().padStart(2, '0')}`);
    }, 1000);

    while (attempts < maxAttempts) {
      attempts++;

      try {
        const response = await fetch(`/api/status?taskId=${taskId}`);

        if (!response.ok) {
          console.error('Status check failed:', response.status);
          await new Promise(resolve => setTimeout(resolve, 30000)); // 30 seconds as recommended
          continue;
        }

        const data = await response.json();

        // Log for debugging
        console.log('Poll response:', data);

        if (data.error) {
          // Check if it's a sensitive word error
          if (data.sensitiveWordError) {
            setError(t.contentModeration);
          } else {
            setError(data.error);
          }
          setLoading(false);
          return;
        }

        if (data.status === 'SUCCESS' && data.audioUrl) {
          clearInterval(timerInterval); // Stop the timer
          setAudioUrl(data.audioUrl);
          setSongTitle(data.title || (language === 'en' ? 'Your Song' : 'Tu Canción'));
          setLyrics(data.lyric || '');
          setStatusMessage(t.songReady);
          setLoading(false);

          // Save to localStorage
          const song: Song = {
            id: taskId,
            title: data.title || (language === 'en' ? 'Your Song' : 'Tu Canción'),
            audioUrl: data.audioUrl,
            prompt: prompt,
            createdAt: new Date().toISOString(),
            lyric: data.lyric || ''
          };
          const saved = JSON.parse(localStorage.getItem('sunoSongs') || '[]') as Song[];
          saved.unshift(song);
          localStorage.setItem('sunoSongs', JSON.stringify(saved.slice(0, 50))); // Keep last 50

          return;
        } else if (data.status === 'FAILED') {
          clearInterval(timerInterval); // Stop the timer
          setError(t.generationFailed);
          setLoading(false);
          return;
        } else if (data.status === 'GENERATING' || data.status === 'PENDING') {
          await new Promise(resolve => setTimeout(resolve, 30000)); // 30 seconds as recommended by API docs
        } else {
          // Unknown status, keep polling
          await new Promise(resolve => setTimeout(resolve, 30000)); // 30 seconds as recommended
        }
      } catch {
        console.error('Status check error');
        await new Promise(resolve => setTimeout(resolve, 30000)); // 30 seconds as recommended
      }
    }

    clearInterval(timerInterval); // Stop the timer on timeout
    setError(t.timeout);
    setLoading(false);
  };

  const generateSong = async () => {
    if (!prompt.trim()) {
      setError(t.enterPrompt);
      return;
    }

    // Basic content validation
    const sensitivePatterns = /\b(kill|death|violence|explicit|nsfw|sexual|drug|hate)\b/i;
    if (sensitivePatterns.test(prompt)) {
      setError(t.sensitiveWarning);
      // Still allow submission, just warn
    }

    setLoading(true);
    setError('');
    setAudioUrl('');
    setSongTitle('');
    setStatusMessage(t.startingGeneration);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, userApiKey }),
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
        setLoading(false);
      } else if (data.taskId) {
        setStatusMessage(t.taskCreated);
        await checkStatus(data.taskId);
      }
    } catch {
      setError(t.generationFailed);
      setLoading(false);
    }
  };

  const downloadSong = async () => {
    if (!audioUrl) return;

    try {
      const response = await fetch(audioUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${songTitle || 'song'}.mp3`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch {
      setError(t.downloadFailed);
    }
  };

  const downloadLyrics = () => {
    if (!lyrics) return;

    const blob = new Blob([lyrics], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${songTitle || 'song'}_lyrics.txt`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const checkCredits = async () => {
    try {
      const response = await fetch('/api/credits');
      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        setCredits(data.credits);
      }
    } catch {
      setError(t.creditsFailed);
    }
  };

  const loadSongHistory = () => {
    const saved = JSON.parse(localStorage.getItem('sunoSongs') || '[]') as Song[];
    setSongs(saved);
    setShowSongs(!showSongs);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Music Notes Background (music-only theme) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Edge music icons (corners and mid-sides) */}
        <div className="absolute top-10 left-10 text-5xl opacity-35 animate-float" style={{filter: 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.6))'}}>🎵</div>
        <div className="absolute bottom-10 left-12 text-5xl opacity-30 animate-float-slow" style={{filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.6))'}}>🎼</div>
        <div className="absolute bottom-10 right-12 text-6xl opacity-26 animate-float" style={{filter: 'drop-shadow(0 0 12px rgba(251, 191, 36, 0.6))'}}>🎹</div>
        <div className="absolute top-1/2 right-8 text-5xl opacity-32 animate-float-slow" style={{filter: 'drop-shadow(0 0 10px rgba(236, 72, 153, 0.6))'}}>🎤</div>
        <div className="absolute top-1/2 left-6 text-5xl opacity-28 animate-float" style={{filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.6))'}}>🎺</div>
        <div className="absolute top-10 right-10 text-5xl opacity-30 animate-float-delayed" style={{filter: 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.6))'}}>🎶</div>

      </div>

      <div className="max-w-3xl w-full bg-purple-50 rounded-2xl shadow-2xl p-8 relative z-10" style={{boxShadow: '0 0 60px rgba(168, 85, 247, 0.4), 0 0 100px rgba(236, 72, 153, 0.3)'}}>
        <div className="mb-2 flex justify-start">
          <button
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition shadow-md"
          >
            <span className="text-xl">{language === 'en' ? '🇪🇸' : '🇺🇸'}</span>
            <span className="text-sm">{language === 'en' ? 'Español' : 'English'}</span>
          </button>
        </div>

        <div className="mb-4 flex justify-center">
          <h1 className="text-3xl font-bold text-gray-800 text-center flex items-center justify-center gap-3 leading-tight">
            <span>🎵</span>
            <span className="flex flex-col items-center">
              <span>Songs4u</span>
              <span className="text-2xl font-semibold">Music Generator</span>
            </span>
            <span>🎶</span>
          </h1>
        </div>
        {/* How it works overview */}
        <div className="mb-3 text-center text-[11px] text-gray-700 leading-snug">
          <p className="font-semibold text-purple-700 mb-1 text-[11px]">{t.howItWorksTitle}</p>
          <p className="mb-0.5">{t.howItWorks1}</p>
          <p className="mb-0.5">{t.howItWorks2}</p>
          <p className="mb-0.5">{t.howItWorks3}</p>
          <p>{t.howItWorks4}</p>
        </div>

        {/* Optional: let users bring their own Suno API key */}
        <div className="mb-4 px-4 py-3 bg-indigo-50 border border-indigo-200 rounded-lg text-xs text-gray-700">
          <button
            type="button"
            onClick={() => setShowApiKeyInput(!showApiKeyInput)}
            className="w-full flex items-center justify-center gap-2 text-indigo-700 font-semibold"
          >
            <span>{language === 'en' ? 'Use my own Suno API key' : 'Usar mi propia clave de Suno'}</span>
            <span className="text-sm">{showApiKeyInput ? '−' : '+'}</span>
          </button>

          {showApiKeyInput && (
            <div className="mt-3 space-y-2">
              <input
                type="password"
                value={userApiKey}
                onChange={(e) => setUserApiKey(e.target.value)}
                placeholder={language === 'en' ? 'Paste your Suno API key here' : 'Pega aquí tu clave de Suno'}
                className="w-full px-3 py-2 border border-indigo-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
              />
              <p className="text-[11px] text-gray-500">
                {language === 'en'
                  ? 'Your key is stored only in this browser and used for your own song generations.'
                  : 'Tu clave se guarda solo en este navegador y se usa para tus propias generaciones de canciones.'}
              </p>
              <div className="flex gap-2 justify-center">
                <button
                  type="button"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      if (userApiKey.trim()) {
                        localStorage.setItem('sunoApiKey', userApiKey.trim());
                      } else {
                        localStorage.removeItem('sunoApiKey');
                      }
                    }
                    setShowApiKeyInput(false);
                  }}
                  className="px-3 py-1.5 bg-indigo-600 text-white rounded-md text-xs font-semibold hover:bg-indigo-700"
                >
                  {language === 'en' ? 'Save key' : 'Guardar clave'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setUserApiKey('');
                    if (typeof window !== 'undefined') {
                      localStorage.removeItem('sunoApiKey');
                    }
                  }}
                  className="px-3 py-1.5 bg-gray-200 text-gray-700 rounded-md text-xs font-semibold hover:bg-gray-300"
                >
                  {language === 'en' ? 'Clear key / use family key' : 'Borrar clave / usar clave familiar'}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Decorative music emoji row near main controls */}
        <div className="mb-2 flex items-center justify-center gap-3 text-lg text-purple-500">
          <span>🎵</span>
          <span>🎧</span>
          <span>🎸</span>
          <span>🥁</span>
        </div>

        <div className="mb-4">
          <button
            onClick={() => setShowTips(!showTips)}
            className="w-full text-xs text-blue-600 hover:text-blue-700 transition flex items-center justify-center gap-2"
          >
            <span>💡</span>
            <span className="font-medium">
              {showTips ? t.hideTips : t.showTips}
            </span>
            <svg 
              className={`w-4 h-4 transition-transform ${showTips ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showTips && (
            <div className="mt-3 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg text-left space-y-3 border border-purple-200">
              <div>
                <h3 className="text-sm font-bold text-gray-800 mb-2">{t.bestPractices}</h3>
                <ul className="text-xs text-gray-700 space-y-1 ml-4">
                  <li>• {t.tips.practice1}</li>
                  <li>• {t.tips.practice2}</li>
                  <li>• {t.tips.practice3}</li>
                  <li>• {t.tips.practice4}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-800 mb-2">{t.avoid}</h3>
                <ul className="text-xs text-gray-700 space-y-1 ml-4">
                  <li>• {t.tips.avoid1}</li>
                  <li>• {t.tips.avoid2}</li>
                  <li>• {t.tips.avoid3}</li>
                  <li>• {t.tips.avoid4}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-800 mb-2">{t.examplePrompts}</h3>
                <div className="space-y-2">
                  <div className="bg-white p-2 rounded border border-purple-200">
                    <p className="text-xs text-gray-600 italic">{t.tips.example1}</p>
                  </div>
                  <div className="bg-white p-2 rounded border border-purple-200">
                    <p className="text-xs text-gray-600 italic">{t.tips.example2}</p>
                  </div>
                  <div className="bg-white p-2 rounded border border-purple-200">
                    <p className="text-xs text-gray-600 italic">{t.tips.example3}</p>
                  </div>
                  <div className="bg-white p-2 rounded border border-purple-200">
                    <p className="text-xs text-gray-600 italic">{t.tips.example4}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl mb-6 border border-purple-100">
          <div className="flex gap-2">
            <button
              onClick={checkCredits}
              className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition text-sm shadow-md"
            >
              {t.checkCredits} {credits !== null && `(${credits})`}
            </button>
            <button
              onClick={loadSongHistory}
              className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-pink-600 hover:to-pink-700 transition text-sm shadow-md"
            >
              {showSongs ? t.hideHistory : t.showHistory}
            </button>
          </div>
        </div>

        {showSongs && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg max-h-96 overflow-y-auto">
            <h3 className="font-bold mb-3">{t.yourSongs} ({songs.length})</h3>
            {songs.length === 0 ? (
              <p className="text-gray-500 text-sm">{t.noSongs}</p>
            ) : (
              <div className="space-y-3">
                {songs.map((song: Song) => (
                  <div key={song.id} className="p-4 bg-white rounded-lg border border-purple-200 shadow-sm">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-purple-800">{song.title}</p>
                        <p className="text-xs text-gray-500">{new Date(song.createdAt).toLocaleString()}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mb-3 italic line-clamp-2">{song.prompt}</p>
                    <div className="flex gap-2 flex-wrap">
                      <button
                        onClick={() => {
                          setAudioUrl(song.audioUrl);
                          setSongTitle(song.title);
                          setLyrics(song.lyric || '');
                          setShowSongs(false);
                          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                        }}
                        className="flex-1 min-w-[100px] px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-lg hover:from-purple-600 hover:to-pink-600 transition shadow-sm font-semibold"
                      >
                        ▶️ {t.play}
                      </button>
                      <button
                        onClick={() => {
                          setPrompt(song.prompt);
                          setShowSongs(false);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="flex-1 min-w-[100px] px-3 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs rounded-lg hover:from-blue-600 hover:to-cyan-600 transition shadow-sm font-semibold"
                      >
                        ✏️ {language === 'en' ? 'Refine' : 'Refinar'}
                      </button>
                      <button
                        onClick={async () => {
                          try {
                            const response = await fetch(song.audioUrl);
                            const blob = await response.blob();
                            const url = window.URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = `${song.title}.mp3`;
                            document.body.appendChild(a);
                            a.click();
                            window.URL.revokeObjectURL(url);
                            document.body.removeChild(a);
                          } catch {
                            setError(t.downloadFailed);
                          }
                        }}
                        className="px-3 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs rounded-lg hover:from-green-600 hover:to-emerald-600 transition shadow-sm font-semibold"
                      >
                        ⬇️
                      </button>
                      <button
                        onClick={() => {
                          const updated = songs.filter(s => s.id !== song.id);
                          setSongs(updated);
                          localStorage.setItem('sunoSongs', JSON.stringify(updated));
                        }}
                        className="px-3 py-2 bg-gradient-to-r from-red-500 to-rose-500 text-white text-xs rounded-lg hover:from-red-600 hover:to-rose-600 transition shadow-sm font-semibold"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="space-y-4">
          <p className="text-gray-500 text-center text-[11px]">
            {t.subtitle}
          </p>

          <div className="relative">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={t.placeholder}
              className="w-full h-40 p-4 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:outline-none resize-y text-sm bg-white"
              disabled={loading}
              maxLength={500}
            />
            <div className={`absolute bottom-2 right-2 text-xs font-semibold ${
              prompt.length > 450 ? 'text-red-500' : 
              prompt.length > 350 ? 'text-orange-500' : 
              'text-gray-400'
            }`}>
              {prompt.length}/500 {prompt.length > 400 && t.longPromptWarning}
            </div>
          </div>

          <p className="text-xs text-gray-500 text-center">
            {t.generationTime} ⏱️
          </p>

          <button
            onClick={generateSong}
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-white py-4 rounded-lg font-semibold hover:from-purple-700 hover:via-pink-600 hover:to-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-lg"
          >
            {loading ? t.generating : t.generateButton}
          </button>

          {loading && statusMessage && (
            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg text-purple-700">
              <div className="flex items-center space-x-3">
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>{statusMessage}</span>
              </div>
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
              <div className="whitespace-pre-line">{error}</div>
            </div>
          )}

          {audioUrl && (
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg space-y-4">
              <p className="text-purple-800 font-semibold text-lg">{songTitle}</p>
              <audio controls className="w-full" src={audioUrl}>
                Your browser does not support audio playback.
              </audio>
              <button
                onClick={downloadSong}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition flex items-center justify-center space-x-2 shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>{t.download}</span>
              </button>
            </div>
          )}
        </div>

        <div className="mt-4 px-4 py-3 bg-red-50 border border-red-200 rounded-lg text-xs text-gray-700 text-center">
          <p className="font-semibold text-red-700 mb-1">{t.oneTimeNotice}</p>
          <p className="text-[11px] leading-snug">{t.legalDisclaimer}</p>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500">
            <span className="font-semibold text-purple-600">❤️ Created by Jessie ❤️</span>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            <span className="font-semibold text-purple-600">Guidance from Dr. Lee</span>
          </p>
        </div>
      </div>
    </main>
  );
}
