import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      <section className="max-w-7xl mx-auto px-6 py-28 text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Next.js & AI Automation Expert
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
          I build high-performance web applications and intelligent AI agents.
          Completed 145+ real-world projects on GitHub.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex justify-center gap-4">
          {/* Link to Projects page */}
          <Link href="/projects" className="px-6 py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition">
            View Projects
          </Link>

          {/* Link to Contact page */}
          <Link href="/contact" className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
            Contact Me
          </Link>
        </div>

        {/* Recommended Features */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
          <div className="p-6 rounded-xl bg-white shadow-sm">
            <h3 className="font-semibold text-lg">⚡ High Performance</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Optimized Next.js apps with fast load times and SEO-friendly
              architecture.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white shadow-sm">
            <h3 className="font-semibold text-lg">🤖 AI Automation</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Smart AI agents that automate workflows and save real business
              hours.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white shadow-sm">
            <h3 className="font-semibold text-lg">🧠 Real-World Experience</h3>
            <p className="mt-2 text-gray-600 text-sm">
              145+ practical projects with production-level problem solving.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
