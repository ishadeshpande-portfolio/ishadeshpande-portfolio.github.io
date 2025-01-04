import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'

export async function generateStaticParams() {
  const projectsDirectory = path.join(process.cwd(), 'app/projects/data')
  const fileNames = fs.readdirSync(projectsDirectory)
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ''),
  }))
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const fullPath = path.join(process.cwd(), 'app/projects/data', `${params.slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { content, data } = matter(fileContents)

  return (
    <article className="prose lg:prose-xl mx-auto px-4 py-12">
      <h1>{data.title}</h1>
      <p className="text-gray-500">Completed on {new Date(data.date).toLocaleDateString()}</p>
      <Image
        src={data.image || `/placeholder.svg?height=400&width=800`}
        alt={data.title}
        width={800}
        height={400}
        className="w-full rounded-lg object-cover my-8"
      />
      <MDXRemote source={content} />
    </article>
  )
}