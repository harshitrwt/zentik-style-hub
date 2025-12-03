import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address').max(255),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      setErrors({});
      setLoading(true);

      // Simulate form submission
      setTimeout(() => {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible."
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setLoading(false);
      }, 1000);
    } catch (err) {
      if (err instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        err.errors.forEach(error => {
          if (error.path[0]) {
            newErrors[error.path[0] as string] = error.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-heading text-3xl md:text-4xl font-bold tracking-wide mb-4">
            CONTACT US
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Have a question or need assistance? We're here to help. Reach out to us and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className={`w-full px-4 py-4 bg-transparent border ${errors.name ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-1 focus:ring-primary`}
                />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className={`w-full px-4 py-4 bg-transparent border ${errors.email ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-1 focus:ring-primary`}
                />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  className={`w-full px-4 py-4 bg-transparent border ${errors.subject ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-1 focus:ring-primary`}
                />
                {errors.subject && <p className="text-destructive text-sm mt-1">{errors.subject}</p>}
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows={6}
                  className={`w-full px-4 py-4 bg-transparent border ${errors.message ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-1 focus:ring-primary resize-none`}
                />
                {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-primary text-primary-foreground font-heading text-sm tracking-wide hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {loading ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 border border-border">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground">support@zentik.com</p>
                <p className="text-muted-foreground">orders@zentik.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 border border-border">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-semibold mb-1">Phone</h3>
                <p className="text-muted-foreground">+91 98765 43210</p>
                <p className="text-muted-foreground">+91 98765 43211</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 border border-border">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-semibold mb-1">Address</h3>
                <p className="text-muted-foreground">
                  123 Fashion Street<br />
                  Mumbai, Maharashtra 400001<br />
                  India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 border border-border">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-semibold mb-1">Working Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Saturday: 10:00 AM - 7:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
