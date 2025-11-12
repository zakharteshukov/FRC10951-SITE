import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-24 text-center">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to FRC Team 10951
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Inspiring the next generation of innovators
            </p>
            <Link href="/about" className="btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            About Our Team
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-text-light mb-12">
              FRC Team 10951 is dedicated to promoting STEM education and
              robotics. We compete in the FIRST Robotics Competition, where we
              design, build, and program robots to compete in challenging games.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="card">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Innovation
                </h3>
                <p className="text-text-light">
                  Pushing the boundaries of robotics and engineering
                </p>
              </div>
              <div className="card">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Teamwork
                </h3>
                <p className="text-text-light">
                  Collaborating to achieve common goals
                </p>
              </div>
              <div className="card">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Excellence
                </h3>
                <p className="text-text-light">
                  Striving for excellence in everything we do
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href="/robot" className="card block hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Robot</h3>
              <p className="text-text-light">
                Learn about our current season robot, specifications, and build process.
              </p>
            </Link>
            <Link href="/sponsors" className="card block hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Sponsors</h3>
              <p className="text-text-light">
                Meet the organizations that make our participation possible.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

