'use client'

import { FormEvent } from 'react'

export default function ContactPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = {
      name: (e.currentTarget.elements.namedItem('name') as HTMLInputElement).value,
      email: (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value,
      message: (e.currentTarget.elements.namedItem('message') as HTMLTextAreaElement).value,
    }
    
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    e.currentTarget.reset()
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">
          Contact Us
        </h1>
        <div className="max-w-2xl mx-auto">
          <div className="card mb-8">
            <p className="text-lg text-text-light mb-6">
              Interested in joining our team, sponsoring us, or learning more?
              Get in touch!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="card">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-text"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg text-text focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-text"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg text-text focus:outline-none focus:border-primary transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-text"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg text-text focus:outline-none focus:border-primary transition-colors resize-vertical"
                  placeholder="Your Message"
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

