import { Video, FileText, Film, Image, Play, Star } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Content Creation",
      description: "End-to-end content production that captures attention and builds authority in your niche."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Script Writing",
      description: "Compelling narratives that hold viewers captive and drive engagement through every second."
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Video Editing",
      description: "Cinematic editing with razor-sharp pacing that turns raw footage into premium content."
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "Thumbnail Design",
      description: "High-CTR thumbnails engineered to stop the scroll and maximize your views."
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: "Faceless Content Creation",
      description: "Anonymous but authoritative content that scales your brand without showing your face."
    }
  ];

  const testimonials = [
    {
      name: "Rohan Sharma",
      role: "Finance YouTuber, 850K Subscribers",
      content: "Nevox transformed my channel from amateur to industry-leading. Their scripts are so tight, my watch time jumped 73% in two months. Worth every rupee.",
      rating: 5
    },
    {
      name: "Priya Mehta",
      role: "Business Coach & Speaker",
      content: "I was skeptical about outsourcing content, but Nevox gets my voice better than I do. They've made me look like a 10M subscriber creator overnight.",
      rating: 5
    },
    {
      name: "Arjun Patel",
      role: "Tech Reviewer, 1.2M Subscribers",
      content: "The faceless content they produce for my second channel is indistinguishable from my main channel quality. It's like cloning myself but better.",
      rating: 5
    },
    {
      name: "Ananya Desai",
      role: "Lifestyle & Wellness Creator",
      content: "From thumbnails to final edits, Nevox elevated my entire brand. My sponsors literally asked if I hired a new team. I said yes — the best one.",
      rating: 5
    },
    {
      name: "Vikram Malhotra",
      role: "E-commerce Entrepreneur",
      content: "Our ad content needed to compete with the big brands. Nevox made us look bigger than we are. ROI increased 3x in the first quarter.",
      rating: 5
    },
    {
      name: "Sneha Iyer",
      role: "Education Content Creator",
      content: "They don't just edit videos, they engineer viewer psychology. My completion rates are through the roof. This is what premium feels like.",
      rating: 5
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold tracking-tight">NEVOX</div>
            <div className="hidden md:flex gap-8 text-sm">
              <a href="#services" className="hover:text-cream transition-colors">Services</a>
              <a href="#testimonials" className="hover:text-cream transition-colors">Testimonials</a>
              <a href="#work" className="hover:text-cream transition-colors">Work</a>
            </div>
            <button className="bg-white text-black px-6 py-2.5 text-sm font-semibold hover:bg-cream transition-colors">
              Book a Call
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cream/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
            Authority That<br />Converts
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 mb-12 max-w-2xl mx-auto font-light">
            We build content that positions you as the category leader.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-10 py-4 text-lg font-semibold hover:bg-cream transition-colors">
              Book a Call
            </button>
            <button className="border-2 border-white text-white px-10 py-4 text-lg font-semibold hover:bg-white hover:text-black transition-colors">
              View Work
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Services</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Premium content solutions that establish dominance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-neutral-900 border border-neutral-800 p-10 hover:border-cream/50 transition-all duration-300 group"
              >
                <div className="text-cream mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Trusted by Leaders</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Creators and brands who demand excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-black border border-neutral-800 p-8 hover:border-white/20 transition-all"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-cream text-cream" />
                  ))}
                </div>
                <p className="text-neutral-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="pt-4 border-t border-neutral-800">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-neutral-500 mt-1">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-cream text-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Ready to Lead?
          </h2>
          <p className="text-xl mb-12 text-neutral-700">
            Join the creators who refuse to blend in
          </p>
          <button className="bg-black text-white px-12 py-5 text-lg font-semibold hover:bg-neutral-800 transition-colors">
            Start Your Project
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-neutral-900 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold tracking-tight mb-6 md:mb-0">NEVOX</div>
            <div className="flex gap-8 text-sm text-neutral-400">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
          <div className="text-center md:text-left mt-12 text-sm text-neutral-500">
            © 2025 Nevox Media. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
