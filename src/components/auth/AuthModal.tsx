import { useState } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';
import { useAuth } from "@/context/AuthContext";



interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });


  const { refreshUser } = useAuth();
  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      const endpoint = mode === "login" ? "login" : "signup";

      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/auth/${endpoint}`,
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) {
        const data = await res.json();

        if (data?.error === "Email already in use") {
          setEmailError("User with this email already exists");
        }

        setLoading(false);
        return;
      }

      if (mode === "signup") {
        setSignupSuccess(true);
        setMode("login");
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        return;
      }

      await refreshUser();
      onClose();


    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-[100] animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
        <div
          className="bg-background w-full max-w-md rounded-lg shadow-2xl animate-scale-in overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative p-6 pb-4 border-b border-border">
            <button
              onClick={() => {
                setSignupSuccess(false);
                onClose();
              }}
              className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="font-heading text-2xl font-bold text-center">
              {mode === 'login' ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-muted-foreground text-center text-sm mt-1">
              {mode === 'login'
                ? 'Sign in to access your account'
                : 'Join Zerć India for exclusive offers'}
            </p>
            {signupSuccess && mode === "login" && (
              <p className="text-center text-sm text-green-600 mt-2">
                Account created successfully. Please sign in.
              </p>
            )}


          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>

              <input
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  setEmailError(null);
                }}
                placeholder="Enter your email"
                className={`w-full px-4 py-3 bg-secondary rounded-lg focus:outline-none focus:ring-2
      ${emailError
                    ? "border border-red-500 focus:ring-red-500/30"
                    : "border border-border focus:ring-foreground/20"
                  }`}
                required
              />

              {emailError && (
                <p className="mt-1 text-sm text-red-500">{emailError}</p>
              )}
            </div>


            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {mode === 'signup' && (
              <div>
                <label className="block text-sm font-medium mb-2">Confirm Password</label>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder="Confirm your password"
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  required
                />
              </div>
            )}

            {/* to be added */}
            {/* {mode === 'login' && (
              <div className="flex justify-end">
                <button type="button" className="text-sm text-muted-foreground hover:text-foreground">
                  Forgot password?
                </button>
              </div>
            )} */}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-foreground text-background font-heading text-sm tracking-wide rounded-lg hover:bg-foreground/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading
                ? mode === "login"
                  ? "Signing in..."
                  : "Creating account..."
                : mode === "login"
                  ? "Sign In"
                  : "Create Account"}
            </button>

          </form>

          {/* Footer */}
          <div className="p-6 pt-0 text-center">
            <p className="text-sm text-muted-foreground">
              {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
              <button
                type="button"
                onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                className="text-foreground font-medium hover:underline"
              >
                {mode === 'login' ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthModal;
