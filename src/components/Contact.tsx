import { Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Let's Work Together */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Let's Work Together</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+919266537839</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>info@vriddhi.media</span>
              </div>
            </div>
          </div>

          {/* Get in the Know */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in the Know</h2>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your Email *"
                className="w-full p-2 rounded bg-transparent border border-white placeholder-white"
                required
              />
              <button className="border border-white px-8 py-2 rounded hover:bg-white hover:text-blue-600 transition">
                SUBSCRIBE
              </button>
            </form>
          </div>

          {/* Stay in Touch */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Stay in Touch</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-2 rounded bg-transparent border border-white placeholder-white"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-2 rounded bg-transparent border border-white placeholder-white"
                />
              </div>
              <input
                type="email"
                placeholder="Email *"
                className="w-full p-2 rounded bg-transparent border border-white placeholder-white"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-2 rounded bg-transparent border border-white placeholder-white"
              />
              <textarea
                placeholder="Leave us a message..."
                className="w-full p-2 rounded bg-transparent border border-white placeholder-white"
                rows={4}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}