import { Link } from "react-router-dom"
import {
  BarChart3,
  Battery,
  Compass,
  Cpu,
  DrillIcon as Drone,
  Globe,
  MapPin,
  Menu,
  RotateCw,
  Shield,
  Users,
  Wifi,
  ChevronRight,
} from "lucide-react"

export default function Hero() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Drone className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">DroneControl</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link to="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link to="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Pricing
            </Link>
            <Link to="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Documentation
            </Link>
            <Link to="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="hidden md:block text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              Sign In
            </Link>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Get Started
            </button>
            <button className="md:hidden border border-gray-300 p-2 rounded-md hover:bg-gray-100 transition-colors">
              <Menu className="h-5 w-5 text-gray-600" />
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Manage Your Drone Fleet with Precision
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Streamline operations, monitor performance, and optimize flight paths with our comprehensive drone
                    management system.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-sm font-medium transition-colors">
                    Get Started
                  </button>
                  <button className="border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-md text-sm font-medium transition-colors">
                    View Demo
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Drone Management Dashboard"
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-600 px-3 py-1 text-sm text-white">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need to manage your drone fleet
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl">
                  Our platform provides comprehensive tools for drone management, monitoring, and optimization.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature Card 1 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex flex-row items-center gap-4 mb-4">
                  <div className="rounded-full bg-blue-100 p-2">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg">Real-time Tracking</h3>
                </div>
                <p className="text-sm text-gray-500">
                  Monitor your drone fleet in real-time with precise GPS tracking and location history.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex flex-row items-center gap-4 mb-4">
                  <div className="rounded-full bg-blue-100 p-2">
                    <Battery className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg">Battery Management</h3>
                </div>
                <p className="text-sm text-gray-500">
                  Track battery health, usage patterns, and receive alerts for optimal charging cycles.
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex flex-row items-center gap-4 mb-4">
                  <div className="rounded-full bg-blue-100 p-2">
                    <RotateCw className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg">Automated Missions</h3>
                </div>
                <p className="text-sm text-gray-500">
                  Plan and schedule automated flight missions with custom waypoints and parameters.
                </p>
              </div>

              {/* Feature Card 4 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex flex-row items-center gap-4 mb-4">
                  <div className="rounded-full bg-blue-100 p-2">
                    <BarChart3 className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg">Performance Analytics</h3>
                </div>
                <p className="text-sm text-gray-500">
                  Gain insights into flight performance, efficiency metrics, and operational statistics.
                </p>
              </div>

              {/* Feature Card 5 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex flex-row items-center gap-4 mb-4">
                  <div className="rounded-full bg-blue-100 p-2">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg">Security & Compliance</h3>
                </div>
                <p className="text-sm text-gray-500">
                  Ensure regulatory compliance and secure your drone operations with advanced security features.
                </p>
              </div>

              {/* Feature Card 6 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex flex-row items-center gap-4 mb-4">
                  <div className="rounded-full bg-blue-100 p-2">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg">Team Collaboration</h3>
                </div>
                <p className="text-sm text-gray-500">
                  Collaborate with your team, assign roles, and share mission data securely.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Powerful Dashboard for Complete Control
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl">
                  Our intuitive dashboard gives you complete control over your drone fleet.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl py-12">
              {/* Custom Tabs */}
              <div className="w-full">
                <div className="flex border-b border-gray-200">
                  <button className="px-4 py-2 font-medium text-blue-600 border-b-2 border-blue-600">Overview</button>
                  <button className="px-4 py-2 font-medium text-gray-500 hover:text-gray-700">Fleet Management</button>
                  <button className="px-4 py-2 font-medium text-gray-500 hover:text-gray-700">Analytics</button>
                </div>
                <div className="mt-6">
                  <div className="flex flex-col items-center space-y-4">
                    <image
                      src="/placeholder.svg?height=400&width=800"
                      width={800}
                      height={400}
                      alt="Dashboard Overview"
                      className="rounded-lg border border-gray-200 object-cover shadow-md"
                    />
                    <p className="text-center text-gray-500">
                      Get a comprehensive view of your entire drone operations at a glance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Ready to transform your drone operations?
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Join thousands of drone operators who have optimized their fleet management with our platform.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-sm font-medium transition-colors">
                    Get Started Today
                  </button>
                  <button className="border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-md text-sm font-medium transition-colors">
                    Contact Sales
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
                {/* Tech Card 1 */}
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <h3 className="flex items-center text-lg font-semibold mb-2">
                    <Cpu className="mr-2 h-5 w-5 text-blue-600" />
                    <span>Advanced Technology</span>
                  </h3>
                  <p className="text-sm text-gray-500">Powered by cutting-edge AI and machine learning algorithms.</p>
                </div>

                {/* Tech Card 2 */}
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <h3 className="flex items-center text-lg font-semibold mb-2">
                    <Globe className="mr-2 h-5 w-5 text-blue-600" />
                    <span>Global Coverage</span>
                  </h3>
                  <p className="text-sm text-gray-500">
                    Operate your drones anywhere with worldwide mapping and support.
                  </p>
                </div>

                {/* Tech Card 3 */}
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <h3 className="flex items-center text-lg font-semibold mb-2">
                    <Wifi className="mr-2 h-5 w-5 text-blue-600" />
                    <span>Reliable Connectivity</span>
                  </h3>
                  <p className="text-sm text-gray-500">
                    Stay connected with your fleet through our robust communication network.
                  </p>
                </div>

                {/* Tech Card 4 */}
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <h3 className="flex items-center text-lg font-semibold mb-2">
                    <Compass className="mr-2 h-5 w-5 text-blue-600" />
                    <span>Precision Navigation</span>
                  </h3>
                  <p className="text-sm text-gray-500">
                    Navigate with centimeter-level precision for critical missions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-blue-600 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Start Managing Your Drone Fleet Today</h2>
            <p className="max-w-[600px] mx-auto mb-8 text-blue-100">
              Join industry leaders who trust our platform for their drone operations.
            </p>
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md text-sm font-medium transition-colors inline-flex items-center">
              Get Started Free
              <ChevronRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-white py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Drone className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-bold">DroneControl</span>
          </div>
          <p className="text-center text-sm text-gray-500 md:text-left">
            &copy; {new Date().getFullYear()} DroneControl. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="#" className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">
              Terms
            </Link>
            <Link to="#" className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">
              Privacy
            </Link>
            <Link to="#" className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

