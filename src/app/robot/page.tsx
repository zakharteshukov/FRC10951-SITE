export default function RobotPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">
          Our Robot
        </h1>
        <div className="max-w-3xl mx-auto">
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Current Season Robot
            </h2>
            <p className="text-text-light mb-6">
              Our robot is designed and built by our team members, incorporating
              mechanical engineering, electrical systems, and software
              development. Each season brings new challenges and opportunities
              for innovation.
            </p>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold mb-6 text-primary">Specifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-background p-4 rounded-lg border border-border">
                <strong className="text-primary block mb-2">Weight:</strong>
                <span className="text-text-light">Under 125 lbs</span>
              </div>
              <div className="bg-background p-4 rounded-lg border border-border">
                <strong className="text-primary block mb-2">Dimensions:</strong>
                <span className="text-text-light">Fits within FRC regulations</span>
              </div>
              <div className="bg-background p-4 rounded-lg border border-border">
                <strong className="text-primary block mb-2">Control System:</strong>
                <span className="text-text-light">FRC Control System</span>
              </div>
              <div className="bg-background p-4 rounded-lg border border-border">
                <strong className="text-primary block mb-2">Programming:</strong>
                <span className="text-text-light">Java/Python</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

