import Image from 'next/image';
import Link from 'next/link';

export default function BlogsPage() {
  const placeholderPosts = [
    {
      title: '12 things on my startup journey 2021',
      description: 'Sharing 12 valuable lessons from my startup journey, including the importance of understanding users, building the right team, and embracing resilience. A candid reflection on the highs, lows, and learning curves of entrepreneurship.',
      date: 'March 10, 2021',
      readTime: '3 min read',
      thumbnail: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*TPnYKfaAglSk8NQx.jpeg', // Add your placeholder image to the public folder
      mediumUrl: 'https://deshpandeishau.medium.com/12-things-on-my-startup-journey-f82a5dde9db3',
    },
    {
      title: 'How colours affect you subconsciously',
      description: 'Today as I was working on some of my courses, I felt the need for a pen and paper.',
      date: 'September 22, 2021',
      readTime: '2 min read',
      thumbnail: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*bcY0bcZqaPaV8bgDx7UMDA.jpeg',
      mediumUrl: 'https://deshpandeishau.medium.com/how-colours-affect-you-subconsciously-860ceb3797e3',
    },
    {
      title: 'The Art of Duplication',
      description: 'The first-ever design software I started using was Blender. I wouldn’t just call it software; it’s a whole environment on its own.',
      date: 'September 20, 2021',
      readTime: '2 min read',
      thumbnail: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*WGyl2LSSN-816uZ_j3_Hgw.png',
      mediumUrl: 'https://deshpandeishau.medium.com/the-art-of-copying-85ee45589774',
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-grey-100 to-white py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-extrabold text-center mb-12">BLOGS</h1>
        <div className="space-y-8">
          {placeholderPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              description={post.description}
              date={post.date}
              readTime={post.readTime}
              mediumUrl={post.mediumUrl}
              thumbnail={post.thumbnail}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  readTime: string;
  mediumUrl: string;
  thumbnail: string;
}

function BlogCard({ title, description, date, readTime, mediumUrl, thumbnail }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg border-2 border-gray-300 overflow-hidden w-full">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 p-4">
          <div className="relative h-48 md:h-full">
            <Image
              src={thumbnail}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="md:w-2/3 p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>{date}</span>
            <span>{readTime}</span>
          </div>
          <Link
            href={mediumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors"
          >
            Read on Medium
          </Link>
        </div>
      </div>
    </div>
  );
}
