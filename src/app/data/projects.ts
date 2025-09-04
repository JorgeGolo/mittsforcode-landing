// src/data/projects.ts

export interface Project {
  id: string
  name: string
  logoUrl?: string
  description: string
  storeUrl: string
  privacyPolicyUrl: string
  textOnButton: string
  projectState?: string
  documentationLink?: string
}

export const PROJECTS: Project[] = [
  {
    id: 'mindrook',
    name: 'MindRook',
    logoUrl: '/assets/mindrook/logo.png',
    description:
      "Android app to sharpen user's chess skills with tactical chess puzzles",
    storeUrl:
      'https://play.google.com/store/apps/details?id=com.owldotask.chesspuzzles',
    privacyPolicyUrl: '/mindrook/privacy-policy',
    textOnButton: 'Get it on Google Play',
    projectState: 'Production',
    documentationLink: '/mindrook/info',
  },

  {
    id: 'megapost',
    name: 'megapost.es',
    logoUrl: '/assets/megapost/megapost-logo.png',
    description:
      'React website with a powerfull tool to publish on multiple social profiles',
    storeUrl: 'https://www.megapost.es',
    privacyPolicyUrl: 'https://www.megaspost.es/privacy-policy',
    textOnButton: 'Visit website',
    projectState: 'Developing',
    documentationLink: '/megapost/info',
  },
  // Para agregar otro proyecto, simplemente añade otro objeto aquí.
  // {
  //   id: 'new-project',
  //   name: 'New Project Name',
  //   logoUrl: '/assets/new-project/logo.png',
  //   description: 'A brief description of the new project.',
  //   storeUrl: 'https://example.com/new-project',
  //   privacyPolicyUrl: '/new-project/privacy',
  // },
]
