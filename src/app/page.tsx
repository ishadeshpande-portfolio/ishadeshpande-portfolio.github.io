import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Linkedin, Mail, DribbbleIcon as Behance, Twitter } from 'lucide-react'
import CareerJourney from '@/components/CareerJourney'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-grey-100 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        {/* Placeholder for hero image */}
        <div className="relative w-full h-64 mb-8">
          <Image
            src="/uiuc.jpg" // Replace with the correct path to your image
            alt="Hero Image"
            layout="fill"
            objectFit="cover" // Ensures the image covers the entire area
            className="rounded-t-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
            <h1 className="text-4xl font-bold text-white mb-4">Isha Deshpande</h1>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Instagram"><Instagram className="text-white hover:text-gray-300" /></Link>
              <Link href="#" aria-label="LinkedIn"><Linkedin className="text-white hover:text-gray-300" /></Link>
              <Link href="#" aria-label="Email"><Mail className="text-white hover:text-gray-300" /></Link>
              <Link href="#" aria-label="Behance"><Behance className="text-white hover:text-gray-300" /></Link>
              <Link href="#" aria-label="Twitter"><Twitter className="text-white hover:text-gray-300" /></Link>
            </div>
          </div>
        </div>


        {/* Profile Section */}
        <div className="flex items-center space-x-8">
          <div className="flex-shrink-0">
            <Image
              src="/profile.svg"
              alt="Isha Deshpande Image"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
          <div>
            <p className="text-lg text-gray-600 leading-relaxed">
            Hello! I am Isha, a product manager with a background in cybersecurity and entrepreneurship. Currently pursuing graduate studies at the University of Illinois Urbana-Champaign, I focus on creating innovative, consumer-centric solutions while prioritizing privacy right from the design process.
            </p>
          </div>
        </div>

        {/* Career Journey Section */}
        <div className="mt-24">
          <CareerJourney />
        </div>

      </div>
    </div>
  )
}