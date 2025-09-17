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
  logoWidth?: number
  logoHeight?: number
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
    logoWidth: 150,
    logoHeight: 150,
  },

  {
    id: 'megapost',
    name: 'megapost.es',
    logoUrl: '/assets/megapost/megapost-logo.png',
    description:
      'React website with a powerfull tool to publish on multiple social profiles',
    storeUrl: 'https://www.megapost.es',
    privacyPolicyUrl: 'https://www.megapost.es/privacy',
    textOnButton: 'Visit website',
    projectState: 'Developing',
    documentationLink:
      'https://docs.google.com/document/d/1TtV_RO7SZSJiN8_c-q7gQoEcdqtRuL6lQ2r_dmEEX8k/edit?usp=sharing',
    logoWidth: 150,
    logoHeight: 150,
  },

  {
    id: 'owldotask',
    name: 'owldotask.es',
    logoUrl: '/assets/owldotask/owldotask-logo.png',
    description:
      'React website deployed in AWS with a Laravel backend focused in gamification and rewards',
    storeUrl: 'https://owldotask.com',
    privacyPolicyUrl: 'https://owldotask.com/privacypolicy',
    textOnButton: 'Visit website',
    projectState: 'Developing',
    documentationLink:
      'https://docs.google.com/document/d/1zg5Dw3jjZZj0TLfnhMIGlS9Themo0GZw--I4scQoUkQ/edit?usp=sharing',
    logoWidth: 150,
    logoHeight: 150,
  },

  {
    id: 'smartmetadesc',
    name: 'Smart Meta Desc',
    logoUrl: '/assets/smd/smd-logo.png',
    description:
      'Smart Meta Desc: Wordpress plugin to manages posts meta descriptions and generate them with AI',
    storeUrl: 'https://es.wordpress.org/plugins/smartmetadesc/',
    privacyPolicyUrl: 'https://owldotask.com/privacypolicy',
    textOnButton: 'Get the plugin at Wordpress.org',
    projectState: 'Production',
    documentationLink:
      'https://es.wordpress.org/plugins/smartmetadesc/#description',
    logoWidth: 80,
    logoHeight: 80,
  },

  // https://docs.google.com/document/d/1zg5Dw3jjZZj0TLfnhMIGlS9Themo0GZw--I4scQoUkQ/edit?usp=sharing

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
