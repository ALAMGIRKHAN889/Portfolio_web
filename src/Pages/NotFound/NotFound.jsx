import SEO from '../../components/SEO'
import { Button } from '../../components/ui'

export default function NotFound() {
  return (
    <section className="py-24 text-center">
      <SEO title="Page not found" />
      <p className="grad-text font-display text-7xl font-extrabold">404</p>
      <p className="mt-4 text-lg text-slate-300">This page does not exist.</p>
      <Button to="/" className="mt-8">Back to Home</Button>
    </section>
  )
}
