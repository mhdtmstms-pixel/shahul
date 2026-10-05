import React, { useState } from 'react';
import { X, Mail, Lock, User, ArrowRight, CheckCircle2, Leaf, Eye, EyeOff } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: { name: string; email: string } | null;
  onLoginSuccess: (user: { name: string; email: string }) => void;
  onLogout: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onLoginSuccess,
  onLogout,
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setError('');
    const userName = mode === 'signup' && name ? name : email.split('@')[0];
    const capitalized = userName.charAt(0).toUpperCase() + userName.slice(1);

    setSuccessMsg(
      mode === 'signup'
        ? `Account created! Welcome to Terra Escapes, ${capitalized}.`
        : `Welcome back, ${capitalized}!`
    );

    setTimeout(() => {
      onLoginSuccess({
        name: capitalized,
        email: email,
      });
      setSuccessMsg('');
      onClose();
    }, 900);
  };

  const handleSocialLogin = (provider: 'Google' | 'Apple') => {
    const demoName = provider === 'Google' ? 'Alex Rivera' : 'Jordan Chen';
    const demoEmail = provider === 'Google' ? 'alex.rivera@gmail.com' : 'jordan.chen@icloud.com';

    setSuccessMsg(`Authenticated via ${provider}! Welcome, ${demoName}.`);
    setTimeout(() => {
      onLoginSuccess({
        name: demoName,
        email: demoEmail,
      });
      setSuccessMsg('');
      onClose();
    }, 750);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border border-[#C8E6C9] rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close authentication modal"
          className="absolute top-5 right-5 text-[#4A5568] hover:text-[#1B4332] p-2 rounded-full hover:bg-[#E8F5E9] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* If user is already logged in, show their account card */}
        {currentUser ? (
          <div className="text-center py-4 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#E8F5E9] border border-[#C8E6C9] text-[#2D6A4F] mx-auto flex items-center justify-center shadow-inner">
              <User className="w-8 h-8" />
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 text-xs text-[#2D6A4F] font-bold bg-[#E8F5E9] px-3 py-1 rounded-full border border-[#C8E6C9] mb-2">
                <Leaf className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>Terra Escapes Member</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#1B4332]">
                {currentUser.name}
              </h3>
              <p className="text-xs text-[#4A5568]">{currentUser.email}</p>
            </div>

            <div className="bg-[#FAFCF8] p-4 rounded-2xl border border-[#C8E6C9] text-left text-xs space-y-2">
              <div className="flex justify-between text-[#1B4332] font-semibold">
                <span>Saved Eco Passports:</span>
                <span className="text-[#2D6A4F]">3 Active Itineraries</span>
              </div>
              <div className="flex justify-between text-[#1B4332] font-semibold">
                <span>Carbon Neutral Badges:</span>
                <span className="text-[#2D6A4F]">1.4 Tonnes Offset</span>
              </div>
              <div className="flex justify-between text-[#1B4332] font-semibold">
                <span>AI Voice Guides:</span>
                <span className="text-[#2D6A4F]">Full Offline Access</span>
              </div>
            </div>

            <div className="pt-2 flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-xl bg-[#2D6A4F] hover:bg-[#1B4332] text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                Close & Explore
              </button>
              <button
                onClick={() => {
                  onLogout();
                  setMode('login');
                }}
                className="py-3 px-4 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 font-semibold text-xs transition-colors cursor-pointer"
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header branding */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#2D6A4F] font-bold mb-2">
              <Leaf className="w-3.5 h-3.5 text-[#2D6A4F]" />
              <span>Terra Escapes Traveler Portal</span>
            </div>

            <h3 className="font-display text-2xl font-bold text-[#1B4332] mb-1">
              {mode === 'login' ? 'Sign In to Your Journey' : 'Create Your Eco Account'}
            </h3>
            <p className="text-xs text-[#4A5568] mb-5">
              Access your personalized AI voice itineraries, zero-plastic passes, and member discounts.
            </p>

            {/* Tab switch */}
            <div className="flex bg-[#E8F5E9] p-1 rounded-xl border border-[#C8E6C9] mb-5">
              <button
                type="button"
                onClick={() => {
                  setMode('login');
                  setError('');
                }}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  mode === 'login'
                    ? 'bg-white text-[#1B4332] shadow-sm'
                    : 'text-[#2D6A4F] hover:text-[#1B4332]'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode('signup');
                  setError('');
                }}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  mode === 'signup'
                    ? 'bg-white text-[#1B4332] shadow-sm'
                    : 'text-[#2D6A4F] hover:text-[#1B4332]'
                }`}
              >
                Create Account
              </button>
            </div>

            {/* Error or Success notification */}
            {error && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                {error}
              </div>
            )}
            {successMsg && (
              <div className="mb-4 p-3 rounded-xl bg-[#E8F5E9] border border-[#C8E6C9] text-[#1B4332] text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0" />
                <span>{successMsg}</span>
              </div>
            )}

            {/* Social Logins */}
            <div className="space-y-2.5 mb-5">
              <button
                type="button"
                onClick={() => handleSocialLogin('Google')}
                className="w-full py-2.5 px-4 rounded-xl border border-[#C8E6C9] hover:border-[#2D6A4F] hover:bg-[#FAFCF8] text-xs font-semibold text-[#1B4332] flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-xs"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.9c2.28-2.1 3.645-5.2 3.645-9.15z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.9-3.05c-1.08.72-2.45 1.16-4.03 1.16-3.1 0-5.74-2.1-6.68-4.93H1.21v3.15C3.25 21.36 7.34 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.32 14.27c-.24-.73-.38-1.5-.38-2.27s.14-1.54.38-2.27V6.58H1.21C.44 8.11 0 9.99 0 12s.44 3.89 1.21 5.42l4.11-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.25 2.64 1.21 6.58l4.11 3.15c.94-2.83 3.58-4.98 6.68-4.98z"
                  />
                </svg>
                <span>Continue with Google</span>
              </button>

              <button
                type="button"
                onClick={() => handleSocialLogin('Apple')}
                className="w-full py-2.5 px-4 rounded-xl border border-[#C8E6C9] hover:border-[#2D6A4F] hover:bg-[#FAFCF8] text-xs font-semibold text-[#1B4332] flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-xs"
              >
                <svg className="w-4 h-4 fill-current text-[#1B4332]" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.87c.66-.82 1.11-1.96.99-3.1-.96.04-2.14.65-2.82 1.45-.6.69-1.12 1.83-.98 2.95 1.07.08 2.16-.57 2.81-1.3" />
                </svg>
                <span>Continue with Apple</span>
              </button>
            </div>

            <div className="relative flex items-center justify-center mb-5">
              <div className="border-t border-[#C8E6C9] w-full" />
              <span className="bg-white px-3 text-[11px] uppercase tracking-wider text-[#4A5568] font-bold shrink-0">
                or with email
              </span>
            </div>

            {/* Email & Password Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {mode === 'signup' && (
                <div>
                  <label className="text-xs text-[#2D3748] block mb-1 font-semibold">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required={mode === 'signup'}
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Maya Lin"
                      className="w-full bg-[#FAFCF8] border border-[#C8E6C9] focus:border-[#2D6A4F] focus:outline-none rounded-xl pl-10 pr-4 py-2.5 text-xs md:text-sm text-[#1B4332] placeholder-gray-400"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="text-xs text-[#2D3748] block mb-1 font-semibold">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="maya@mindfuljourney.org"
                    className="w-full bg-[#FAFCF8] border border-[#C8E6C9] focus:border-[#2D6A4F] focus:outline-none rounded-xl pl-10 pr-4 py-2.5 text-xs md:text-sm text-[#1B4332] placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs text-[#2D3748] font-semibold">Password</label>
                  {mode === 'login' && (
                    <button
                      type="button"
                      onClick={() => alert('A password reset link has been sent to your email.')}
                      className="text-[11px] text-[#2D6A4F] hover:underline cursor-pointer"
                    >
                      Forgot?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="At least 6 characters"
                    className="w-full bg-[#FAFCF8] border border-[#C8E6C9] focus:border-[#2D6A4F] focus:outline-none rounded-xl pl-10 pr-10 py-2.5 text-xs md:text-sm text-[#1B4332] placeholder-gray-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-3 text-gray-400 hover:text-[#1B4332] cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 px-6 rounded-xl bg-[#2D6A4F] hover:bg-[#1B4332] active:scale-98 text-white font-bold text-xs md:text-sm transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <span>{mode === 'login' ? 'Sign In' : 'Create My Account'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-4 pt-3 border-t border-[#C8E6C9] text-center text-[11px] text-[#4A5568]">
              {mode === 'login' ? (
                <span>
                  New to Terra Escapes?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setMode('signup');
                      setError('');
                    }}
                    className="text-[#2D6A4F] font-bold hover:underline cursor-pointer"
                  >
                    Create an account
                  </button>
                </span>
              ) : (
                <span>
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setMode('login');
                      setError('');
                    }}
                    className="text-[#2D6A4F] font-bold hover:underline cursor-pointer"
                  >
                    Sign in here
                  </button>
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
