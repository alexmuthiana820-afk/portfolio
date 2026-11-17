export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold">Alex Muthiana</h1>
      <p className="text-xl text-gray-600 mt-2">Senior Frontend & Software Developer</p>
      <p className="mt-4 text-lg">I build fast, accessible, beautiful web apps with React + TypeScript.</p>

      <div className="flex gap-4 mt-8">
        <a href="#projects" className="bg-blue-600 text-white px-5 py-2 rounded-lg">View Projects</a>
        <a href="https://github.com/alexmuthiana820-afk" className="border px-5 py-2 rounded-lg">【entity-GitHub¦canonical_name=GitHub】</a>
      </div>

      <h2 id="projects" className="text-3xl font-bold mt-16 mb-6">Projects</h2>

      <div className="grid gap-6">
        <div className="border rounded-xl p-6">
          <h3 className="text-xl font-bold">DesignSystemX</h3>
          <p className="text-gray-600 mt-1">Token-based design system with 45+ reusable React components.</p>
          <p className="text-sm mt-2">React • TypeScript • Tailwind • Storybook</p>
          <a href="https://github.com/alexmuthiana820-afk/designsystemx" className="text-blue-600 underline mt-2 inline-block">View on 【entity-GitHub¦canonical_name=GitHub】 →</a>
        </div>

        <div className="border rounded-xl p-6">
          <h3 className="text-xl font-bold">MyFit — Fitness Tracker</h3>
          <p className="text-gray-600 mt-1">Track workouts, build streaks, and see your progress.</p>
          <p className="text-sm mt-2">Next.js • Tailwind • TypeScript</p>
          <div className="flex gap-4 mt-2">
            <a href="https://myfit-lac.vercel.app/" className="text-blue-600 underline">Live Demo →</a>
            <a href="https://github.com/alexmuthiana820-afk/myfit" className="text-blue-600 underline">View on GitHub →</a>
          </div>
        </div>

        <div className="border rounded-xl p-6">
          <h3 className="text-xl font-bold">ShopNest — E-Commerce</h3>
          <p className="text-gray-600 mt-1">Headless storefront with cart, checkout, and Stripe. Coming soon.</p>
          <p className="text-sm mt-2">Next.js • Stripe • Sanity</p>
        </div>

        <div className="border rounded-xl p-6">
          <h3 className="text-xl font-bold">InsightDash — Analytics Dashboard</h3>
          <p className="text-gray-600 mt-1">SaaS dashboard with charts, KPIs, and dark mode. Coming soon.</p>
          <p className="text-sm mt-2">React • Recharts • Tailwind</p>
        </div>

        <div className="border rounded-xl p-6">
          <h3 className="text-xl font-bold">A11yAudit — Accessibility Checker</h3>
          <p className="text-gray-600 mt-1">Browser tool that audits any URL with axe-core. Coming soon.</p>
          <p className="text-sm mt-2">Vue 3 • axe-core</p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16">Contact</h2>
      <p className="mt-2">Email: muthianaalex@gmail.com</p>
      <p>LinkedIn: linkedin.com/in/alex-muthiana-399935415</p>
      <p>GitHub: github.com/alexmuthiana820-afk</p>
    </main>
  )
}