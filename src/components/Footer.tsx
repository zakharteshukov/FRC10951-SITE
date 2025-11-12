import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-border py-8">
      <div className="container text-center">
        <p className="text-text-light mb-2">
          &copy; {new Date().getFullYear()} FRC Team 10951. All rights reserved.
        </p>
        <p className="text-text-light">
          Visit us at{' '}
          <Link
            href="https://10951.team"
            className="text-primary hover:underline"
          >
            10951.team
          </Link>
        </p>
      </div>
    </footer>
  )
}

