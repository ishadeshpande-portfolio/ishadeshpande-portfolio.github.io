import Image from 'next/image'

export default function CareerJourney() {
  return (
    <div className="w-full">
      <div>
        <Image
          src="./experience.svg" // Replace with the correct path to your SVG file
          alt="Career Journey"
          width={1300} // Adjust width as per your requirement
          height={500} // Adjust height as per your requirement
          className="rounded-lg"
        />
      </div>
    </div>
  )
}
