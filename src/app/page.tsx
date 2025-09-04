// src/app/page.tsx

import {
  FaTwitter,
  FaMastodon,
  FaFacebook,
  FaInstagram,
  FaReddit,
} from 'react-icons/fa'
import { ProjectCard } from './components/ProjectCard'
import { PROJECTS } from './data/projects'
import Image from 'next/image'
import { SiBluesky } from 'react-icons/si'

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-900 text-white">
      <div className="text-center max-w-4xl w-full">
        <Image
          src="/assets/logo.svg"
          alt="Mitts For Code Logo"
          width={160}
          height={160}
          className="mx-auto mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">Mitts For Code</h1>
        <p className="text-xl text-gray-300 mb-8">
          Projects coded with mitts and ♥
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          <a
            href="https://x.com/mittsforcode"
            className="text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={42} />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61559275910660"
            className="text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={42} />
          </a>
          <a
            href="https://mastodon.social/@mittsforcode"
            className="text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMastodon size={42} />
          </a>
          <a
            href="https://bsky.app/profile/mittsforcode.bsky.social"
            className="text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiBluesky size={42} />
          </a>
          <a
            href="https://www.reddit.com/user/Owldotask/"
            className="text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaReddit size={42} />
          </a>
          <a
            href="https://www.instagram.com/mittsforcode/"
            className="text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={42} />
          </a>
        </div>

        {/* Sección de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <footer className="mt-12 text-center text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Mitts For Code. All Rights Reserved.
        </p>
        <p className="mt-2">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
        </p>
      </footer>
    </main>
  )
}
