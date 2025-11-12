export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">
          About Our Team
        </h1>
        <div className="max-w-3xl mx-auto">
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
            <p className="text-text-light mb-4">
              FRC Team 10951 is dedicated to promoting STEM education and
              robotics. We compete in the FIRST Robotics Competition, where we
              design, build, and program robots to compete in challenging games.
            </p>
            <p className="text-text-light">
              Our team brings together students passionate about science,
              technology, engineering, and mathematics to work collaboratively
              on real-world engineering challenges.
            </p>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">What We Do</h2>
            <ul className="list-disc list-inside space-y-2 text-text-light">
              <li>Design and build competitive robots for FRC competitions</li>
              <li>Program autonomous and teleoperated robot functions</li>
              <li>Participate in community outreach and STEM education</li>
              <li>Develop technical and leadership skills</li>
              <li>Collaborate with mentors and industry professionals</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4 text-primary">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Innovation</h3>
                <p className="text-text-light">
                  Pushing the boundaries of robotics and engineering
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Teamwork</h3>
                <p className="text-text-light">
                  Collaborating to achieve common goals
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Excellence</h3>
                <p className="text-text-light">
                  Striving for excellence in everything we do
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

