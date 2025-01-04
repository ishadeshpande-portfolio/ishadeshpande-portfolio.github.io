import { Check } from 'lucide-react'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-grey-100 to-white py-12 sm:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 sm:mb-12">PROJECTS</h1>
        <div className="space-y-6 sm:space-y-8">
          <ProjectCard
            title="Product Lead | Creatorize"
            points={[
              "Developed a comprehensive risk assessment framework",
              "Implemented machine learning algorithms for threat prediction",
              "Integrated real-time data feeds for up-to-date risk analysis",
              "Created an intuitive dashboard for easy interpretation of results"
            ]}
          />
          <ProjectCard
            title="Project Manager | A College Metaverse Ecosystem"
            points={[
              "Designed and implemented an AI chatbot using natural language processing",
              "Integrated with existing customer service platforms",
              "Reduced response time by 50% and improved customer satisfaction scores",
              "Implemented multi-language support for global accessibility"
            ]}
            youtubeUrl="https://www.youtube.com/embed/buBAxu20zhE?si=1Y2PF6yuRkuJeqOY"
          />
        </div>
      </div>
    </div>
  )
}

interface ProjectCardProps {
  title: string
  points: string[]
  youtubeUrl?: string
}

function ProjectCard({ title, points, youtubeUrl }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg border-2 border-gray-300 overflow-hidden w-full">
      <div className="p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">{title}</h2>
        <ul className="space-y-2 mb-4">
          {points.map((point, index) => (
            <li key={index} className="flex items-start">
              <Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
        {youtubeUrl && (
          <div className="w-full aspect-video">
            <iframe
              src={youtubeUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  )
}