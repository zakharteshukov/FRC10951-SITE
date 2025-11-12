export default function SponsorsPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">
          Our Sponsors
        </h1>
        <div className="max-w-3xl mx-auto">
          <div className="card mb-8">
            <p className="text-lg text-text-light mb-6">
              We are grateful to our sponsors who make our participation in
              FIRST Robotics Competition possible. Their support enables us to
              purchase parts, tools, and resources needed to build competitive
              robots.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Become a Sponsor
            </h2>
            <p className="text-text-light mb-4">
              Your sponsorship helps support STEM education and provides
              students with hands-on engineering experience. Sponsors receive
              recognition on our website, at competitions, and in team materials.
            </p>
            <p className="text-text-light">
              Interested in sponsoring our team?{' '}
              <a href="/contact" className="text-primary hover:underline">
                Contact us
              </a>{' '}
              to learn more about sponsorship opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

