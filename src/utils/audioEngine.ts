/**
 * Dedicated Pure AI Text-to-Speech Audio Guide Engine
 * Focuses on nature, happiness, and peace — strictly without any background music.
 */

export interface SpeechStatus {
  isPlaying: boolean;
  currentTrackId: string | null;
  currentWord: string;
  progress: number;
}

class SpeechGuideEngine {
  private utterance: SpeechSynthesisUtterance | null = null;
  public isSpeaking: boolean = false;
  public currentTrackId: string | null = null;
  private listeners: ((status: SpeechStatus) => void)[] = [];
  private progressInterval: number | null = null;
  private currentProgress: number = 0;
  private currentWord: string = '';

  public subscribe(fn: (status: SpeechStatus) => void) {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter(l => l !== fn);
    };
  }

  private notify() {
    this.listeners.forEach(fn =>
      fn({
        isPlaying: this.isSpeaking,
        currentTrackId: this.currentTrackId,
        currentWord: this.currentWord,
        progress: this.currentProgress,
      })
    );
  }

  /**
   * Speak destination story with peaceful, calm pacing and NO background music.
   */
  public speak(
    id: string,
    text: string,
    rate: number = 0.9,
    onComplete?: () => void
  ) {
    this.stop();

    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported on this browser.');
      return;
    }

    // Cancel any prior speech
    window.speechSynthesis.cancel();

    this.currentTrackId = id;
    this.isSpeaking = true;
    this.currentProgress = 0;
    this.currentWord = '';

    const utterance = new SpeechSynthesisUtterance(text);
    this.utterance = utterance;

    // Peaceful, calm vocal cadence
    utterance.rate = Math.max(0.7, Math.min(1.2, rate));
    utterance.pitch = 1.0;

    // Pick a natural, warm voice if available
    const voices = window.speechSynthesis.getVoices();
    const naturalVoice = voices.find(
      v =>
        v.lang.startsWith('en') &&
        (v.name.includes('Natural') ||
          v.name.includes('Samantha') ||
          v.name.includes('Google') ||
          v.name.includes('Serena') ||
          v.name.includes('Karen') ||
          v.name.includes('Daniel') ||
          v.name.includes('Oliver'))
    ) || voices.find(v => v.lang.startsWith('en'));

    if (naturalVoice) {
      utterance.voice = naturalVoice;
    }

    const estimatedDurationSec = Math.max(8, text.split(/\s+/).length * (0.42 / rate));
    const stepTimeMs = 100;
    const increment = 1 / (estimatedDurationSec * 10);

    this.progressInterval = window.setInterval(() => {
      if (this.isSpeaking) {
        this.currentProgress = Math.min(0.99, this.currentProgress + increment);
        this.notify();
      }
    }, stepTimeMs);

    utterance.onboundary = (e) => {
      if (e.name === 'word') {
        const spoken = text.substring(e.charIndex, e.charIndex + e.charLength);
        this.currentWord = spoken;
        this.notify();
      }
    };

    utterance.onend = () => {
      this.currentProgress = 1;
      this.isSpeaking = false;
      this.currentWord = '';
      if (this.progressInterval) clearInterval(this.progressInterval);
      this.notify();
      if (onComplete) onComplete();
    };

    utterance.onerror = () => {
      this.isSpeaking = false;
      this.currentWord = '';
      if (this.progressInterval) clearInterval(this.progressInterval);
      this.notify();
      if (onComplete) onComplete();
    };

    window.speechSynthesis.speak(utterance);
    this.notify();
  }

  public pause() {
    if ('speechSynthesis' in window && this.isSpeaking) {
      window.speechSynthesis.pause();
      this.isSpeaking = false;
      if (this.progressInterval) clearInterval(this.progressInterval);
      this.notify();
    }
  }

  public resume() {
    if ('speechSynthesis' in window && window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      this.isSpeaking = true;
      this.notify();
    }
  }

  public stop() {
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
      this.progressInterval = null;
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this.isSpeaking = false;
    this.currentTrackId = null;
    this.currentProgress = 0;
    this.currentWord = '';
    this.notify();
  }
}

export const speechEngine = new SpeechGuideEngine();
