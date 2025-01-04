'use client'

import { motion } from "framer-motion"

const experiences = [
  {
    title: "Associate",
    company: "Price Waterhouse Coopers (PwC)",
    date: "August 2023 - August 2024",
    description: [
      "Devised data privacy and business continuity policies for Advanced Metering Infrastructure (AMI) projects, resulting in enhanced cyber compliance aligned with ISO 27001 and ISO 22301",
      "Assessed clients' preliminary cyber infrastructure against the Privacy by Design framework and NIST standards, identifying and addressing 3 critical vulnerabilities, thereby improving baseline compliance by 12%",
      "Led comprehensive project assessment initiatives, including Data Protection Impact Assessments (DPIA) and Records of Processing Activities (RoPA), to ensure GDPR compliance, achieving a 5% reduction in compliance deviations"
    ]
  },
  {
    title: "Project Intern",
    company: "Mercedes Benz",
    date: "June 2022 - August 2022",
    description: [
      "Developed brand identities, including logos, typography, and color schemes, for over 30 clients",
      "Produced marketing materials, digital ads, and promotional content, resulting in a 25% increase in client engagement for key accounts"
    ]
  },
  {
    title: "Acquisition Intern",
    company: "Graphy",
    date: "April 2021- November 2021",
    description: [
      "An all-in-one, scalable platform, to Monetize Your Expertise. Transform your knowledge into income by creating and selling online courses, eBooks, exclusive content, hosting webinars, building communities",
      "Improved conversion rates by 14% by analysing user acquisition data and optimizing marketing campaigns to target key demographics effectively",
      "Optimized user onboarding process by collaborating with business development team and documenting user",
      "Utilized analytics dashboards to analysed sales trends and identify bottlenecks and created weekly customer acquisition process plans based on insights"
    ]
  }
]

export default function ExperienceRoadmap() {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 dark:bg-gray-700" />
      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className={`relative flex items-center mb-8 ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          }`}
        >
          <div
            className={`w-6 h-6 absolute left-1/2 transform -translate-x-1/2 bg-primary rounded-full z-10`}
          />
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`w-5/12 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg ${
              index % 2 === 0 ? "mr-auto" : "ml-auto"
            }`}
          >
            <h3 className="text-lg font-bold">{experience.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{experience.company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">{experience.date}</p>
            <ul className="list-disc list-inside text-sm">
              {experience.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}