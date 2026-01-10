import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  User,
  CircleUserRound,
  ShoppingBag,
  Heart,
  Menu,
  ShoppingCart,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import AuthModal from "@/components/auth/AuthModal";
import { useAuth } from "@/context/AuthContext";

interface HeaderProps {
  onMenuOpen: () => void;
  onCartOpen: () => void;
  onWishlistOpen: () => void;
}

const Header = ({ onMenuOpen, onCartOpen, onWishlistOpen }: HeaderProps) => {
  const navigate = useNavigate();
  const { totalItems } = useCart();
  const { user, logout } = useAuth();

  const [searchQuery, setSearchQuery] = useState("");
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMarquee, setShowMarquee] = useState(true);

  const marqueeMessages = [
    "🎉 Free shipping on orders above ₹2000.",
    "🎁 Buy 2 and Get 10% off on your purchase.",
    "🚚 Fast delivery across India.",
  ];

  // Rotate marquee
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % marqueeMessages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Show marquee only at top
  useEffect(() => {
    const handleScroll = () => {
      setShowMarquee(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(
        `/collections/jersey/all?search=${encodeURIComponent(
          searchQuery.trim()
        )}`
      );
      setSearchQuery("");
    }
  };

  return (
    <>
      <header className="relative h-0 top-0 left-0 right-0 z-50">
        <div className="relative">
          {/* Marquee */}
          <div
            className={`absolute top-0 left-0 w-full bg-black text-white text-xs md:text-sm px-4 flex justify-center md:justify-between items-center transition-transform duration-300 z-50 ${
              showMarquee ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="overflow-hidden flex-1 text-center md:text-left">
              <span key={currentIndex} className="inline-block animate-fade">
                {marqueeMessages[currentIndex]}
              </span>
            </div>
            <div className="hidden md:block font-semibold ml-4">India</div>
          </div>

          {/* Navbar */}
          <div
            className="fixed container max-w-full mx-auto px-4 flex items-center justify-between h-16 md:h-20 bg-[#FBFFFF] backdrop-blur-sm border-b border-border"
            style={{ paddingTop: "1.25rem" }}
          >
            <button
              onClick={onMenuOpen}
              className="lg:hidden p-2 hover:bg-secondary"
            >
              <Menu className="w-6 h-6" />
            </button>

            <Link
              to="/"
              className="font-heading text-xl md:text-2xl font-bold tracking-wider"
            >
              Zerć India
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link to="/" className="nav-link">
                HOME
              </Link>
              <Link to="/shop" className="nav-link">
                SHOP
              </Link>
              <Link to="/our-story" className="nav-link">
                OUR STORY
              </Link>
              <Link to="/contact" className="nav-link">
                CONTACT US
              </Link>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Search */}
              <div className="relative hidden md:block">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearchKeyDown}
                  placeholder="Am looking for..."
                  className="w-40 lg:w-52 pl-9 pr-4 py-2 text-sm bg-secondary rounded-full border border-border focus:outline-none"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>

              {/* Wishlist */}
              <button
                onClick={onWishlistOpen}
                className="hidden md:block p-2 hover:bg-secondary"
              >
                <Heart className="w-5 h-5" />
              </button>

              {/* Bag */}
              <button className="hidden md:block p-2 hover:bg-secondary">
                <ShoppingBag className="w-5 h-5" />
              </button>

              {/* Cart */}
              <button
                onClick={onCartOpen}
                className="hidden md:block relative p-2 hover:bg-secondary"
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-foreground text-background text-xs font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Auth */}
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setUserMenuOpen((p) => !p)}
                    className="p-2 hover:bg-secondary"
                  >
                    <CircleUserRound className="w-5 h-5" />
                  </button>

                  {userMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg p-3 z-50">
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {user.email}
                      </p>
                      <button
                        onClick={async () => {
                          await logout();
                          setUserMenuOpen(false);
                        }}
                        className="mt-3 w-full text-left text-sm text-red-500 hover:text-red-400"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="p-2 hover:bg-secondary"
                >
                  <User className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
};

export default Header;
