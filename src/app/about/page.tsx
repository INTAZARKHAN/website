export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold">
        About Me
      </h2>

      {/* Intro */}
      <p className="mt-6 text-gray-600 max-w-3xl text-lg">
        I am a Next.js UI Developer and AI Automation Expert, focused on building
        scalable web systems, intelligent agents, and modern dashboards that
        solve real business problems.
      </p>

      {/* Recommended Features */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl border border-gray-200">
          <h3 className="font-semibold text-lg">🧩 Scalable Architecture</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Clean, maintainable, and future-ready code structures using
            Next.js best practices.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-gray-200">
          <h3 className="font-semibold text-lg">⚙️ Automation Mindset</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Designing AI workflows that reduce manual effort and increase
            operational efficiency.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-gray-200">
          <h3 className="font-semibold text-lg">📊 Dashboard Expertise</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Data-driven dashboards with clean UI, UX clarity, and actionable
            insights.
          </p>
        </div>
      </div>
    </main>
  );
}
