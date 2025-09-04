import type { Project } from '../data/projects'
import Image from 'next/image'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md flex flex-col">
      <div className="flex-shrink-0 h-20 flex items-center justify-center">
        {project.logoUrl && (
          <Image
            src={project.logoUrl}
            alt={`${project.name} Logo`}
            width={project.logoWidth}
            height={project.logoHeight}
          />
        )}
      </div>
      <p className="text-xl text-gray-300 mb-6 text-center mt-6">
        {project.description}
      </p>
      <a
        href={project.storeUrl}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors mb-4 block text-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        {project.textOnButton}
      </a>
      <div
        className={`
          font-bold italic py-2
          ${
            project.projectState
              ? project.projectState === 'Production'
                ? 'text-green-500'
                : project.projectState === 'Developing'
                ? 'text-orange-500'
                : ''
              : ''
          }
        `}
      >
        {project.projectState}
      </div>
      <div className="flex justify-center space-x-4">
        {project.documentationLink && (
          <a
            href={project.documentationLink}
            className="text-gray-400 hover:text-white underline"
          >
            Documentation
          </a>
        )}
        <a
          href={project.privacyPolicyUrl}
          className="text-gray-400 hover:text-white underline"
        >
          Privacy Policy
        </a>
      </div>
    </div>
  )
}
