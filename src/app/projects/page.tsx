export default function ProjectsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold">
        Projects
      </h2>

      {/* Intro */}
      <p className="mt-4 text-gray-600 max-w-3xl text-lg">
        145+ completed projects on GitHub, including AI agents, automation
        workflows, SaaS dashboards, and high-performance web applications.
      </p>

      {/* Recommended Features */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl bg-white border border-gray-200">
          <h3 className="font-semibold text-lg">🤖 AI Agents</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Autonomous AI agents for data processing, decision-making, and
            real-time task execution.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white border border-gray-200">
          <h3 className="font-semibold text-lg">⚡ Automation Workflows</h3>
          <p className="mt-2 text-gray-600 text-sm">
            End-to-end automation pipelines that replace manual operations
            and scale business processes.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white border border-gray-200">
          <h3 className="font-semibold text-lg">📈 SaaS Dashboards</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Production-ready dashboards with analytics, role-based access,
            and clean UI/UX.
          </p>
        </div>
      </div>

      {/* Optional Stats (Experience removed) */}
      <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
        <div>
          <p className="text-3xl font-bold">145+</p>
          <p className="text-sm text-gray-600">Projects</p>
        </div>
        <div>
          <p className="text-3xl font-bold">50+</p>
          <p className="text-sm text-gray-600">AI Automations</p>
        </div>
        <div>
          <p className="text-3xl font-bold">30+</p>
          <p className="text-sm text-gray-600">Dashboards</p>
        </div>
      </div>
    </main>
  );
}
