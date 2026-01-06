import { Link } from 'react-router-dom';
import { ArrowLeft, Bell } from 'lucide-react';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

const ComingSoon = () => {
  const [email, setEmail] = useState('');

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      toast({
        title: "You're on the list!",
        description: "We'll notify you when this collection drops."
      });
      setEmail('');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/coming-soon-bg.jpg"
          alt="Coming Soon"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <h1 className="font-heading text-5xl md:text-7xl font-black tracking-tight mb-6">
          COMING
          <br />
          <span className="text-muted-foreground">SOON</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          We're working hard to bring you this collection. Be the first to know when it drops!
        </p>

        {/* Notify Form */}
        <form onSubmit={handleNotify} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
            required
          />
          <button 
            type="submit"
            className="px-6 py-4 bg-foreground text-background font-heading text-sm tracking-widest hover:bg-foreground/90 transition-colors inline-flex items-center justify-center gap-2"
          >
            <Bell className="w-4 h-4" />
            NOTIFY ME
          </button>
        </form>

        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-heading text-sm tracking-wide"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
