// app/contact/page.tsx
export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Contact Me
      </h2>

      {/* Intro */}
      <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto text-lg">
        Have a project idea or want to collaborate? Reach out and let's create
        something amazing together!
      </p>

      {/* Contact Form */}
      <form className="mt-12 flex flex-col gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <textarea
          placeholder="Your Message"
          className="px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-black resize-none h-32"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>

      {/* Recommended Features / Contact Info */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-600">
        <div>
          <h3 className="font-semibold text-lg">📧 Email</h3>
          <p>abbasnafees682@gmail.com</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg">📍 Location</h3>
          <p>Pakistan</p>
        </div>
      </div>
    </main>
  );
}
