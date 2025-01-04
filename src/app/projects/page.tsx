import { Check } from 'lucide-react'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-grey-100 to-white py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-extrabold text-center mb-12">PROJECTS</h1>
        <div className="space-y-8">
          <ProjectCard
            title="Product Lead | Creatorize"
            points={[
              "Modeled a platform for medium-scale B2C companies in the women's lifestyle sector to connect with local micro-content creators, resulting in a 25% increase in conversion rates",
              "Improved influencer match accuracy by 40% by crafted user personas and analyzing the target market to generate specific tags for the LLM model, ensuring accurate identification of suitable influencers",
              "Achieved a 11% increase in sales by devising new pricing strategy using KPIs such as cost analysis, price elasticity of demand, and customer willingness to pay"
            ]}
          />
          <ProjectCard
            title="Project Manager | A College Metaverse Ecosystem"
            points={[
              "Created the Main building and Department building of my university in the metaverse using Blender and Unity, and hosted it on Ganache",
              "Aligned the product roadmap with the strategic vision by prioritizing features using the MoSCoW framework, based on insights from stakeholder interviews and user research, resulting in timely and efficient project delivery",
              "Created low-fidelity prototypes to validate key features and user flows, collecting insights through usability testing, task completion rates, and user feedback",
              "The project was technically sponsored by Mercedes Benz India"
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
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
        <ul className="space-y-2 mb-4">
          {points.map((point, index) => (
            <li key={index} className="flex items-start">
              <Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1" />
              <span className="text-gray-700 font-medium">{point}</span>
            </li>
          ))}
        </ul>
        {youtubeUrl && (
          <div className="w-full" style={{ height: '400px' }}> {/* Adjusted height */}
            <iframe
              src={youtubeUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  )
}