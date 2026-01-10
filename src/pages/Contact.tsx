import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append('access_key', '5e122438-f721-40d0-a3a3-945fd061b4fe');
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('subject', formData.subject);
      data.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Error sending message. Please try again later.');
      }
    } catch (error) {
      console.error('Web3Forms Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Thank You!</h2>
          <p className="text-muted-foreground mb-6">
            Your message has been received. We will get back to you shortly.
          </p>
          <button
            className="py-4 px-8 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            onClick={() => setIsSubmitted(false)}
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

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
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-4 bg-transparent border border-border focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-4 bg-transparent border border-border focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                required
                className="w-full px-4 py-4 bg-transparent border border-border focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows={6}
                required
                className="w-full px-4 py-4 bg-transparent border border-border focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              />
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
                <p className="text-muted-foreground">zercindia@gmail.com</p>
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
                  Faridabad, New Delhi 400001<br />
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
