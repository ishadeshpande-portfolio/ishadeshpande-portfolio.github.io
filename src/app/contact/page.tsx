import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from "next/link"

export default function ContactPage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Get In Touch</h1>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Feel free to reach out to me through any of the following channels:
            </p>
            <div className="flex items-center space-x-4">
              <Button asChild variant="outline" size="icon">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon">
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon">
                <Link href="mailto:your.email@example.com">
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name">Name</label>
              <Input id="name" placeholder="Your name" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="email">Email</label>
              <Input id="email" placeholder="Your email" type="email" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="message">Message</label>
              <Textarea id="message" placeholder="Your message" required />
            </div>
            <Button type="submit" className="bg-black text-white hover:bg-gray-800">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  )
}