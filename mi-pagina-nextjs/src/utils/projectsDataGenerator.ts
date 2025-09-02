import { TFunction } from "i18next";

// Project IDs that exist in the translation files
const PROJECT_IDS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

// Image mapping for projects
const PROJECT_IMAGES = {
  '1': '/images/projects/section1-imagen1.webp',
  '2': '/images/projects/section1-imagen3.webp',
  '3': '/images/projects/section1-imagen5.webp',
  '4': '/images/projects/section1-imagen1.webp',
  '5': '/images/projects/section1-imagen3.webp',
  '6': '/images/projects/section1-imagen5.webp',
  '7': '/images/projects/section1-imagen1.webp',
  '8': '/images/projects/section1-imagen3.webp',
  '9': '/images/projects/section1-imagen5.webp',
  '10': '/images/projects/section1-imagen1.webp',
  '11': '/images/projects/section1-imagen3.webp',
  '12': '/images/projects/section1-imagen5.webp'
};

// Children images mapping
const CHILDREN_IMAGES = {
  '1': '/images/projects/section1-imagen2.webp',
  '2': '/images/projects/section1-imagen4.webp',
  '3': '/images/projects/section1-imagen6.webp',
  '4': '/images/projects/section1-imagen2.webp',
  '5': '/images/projects/section1-imagen4.webp',
  '6': '/images/projects/section1-imagen6.webp',
  '7': '/images/projects/section1-imagen2.webp',
  '8': '/images/projects/section1-imagen4.webp',
  '9': '/images/projects/section1-imagen6.webp',
  '10': '/images/projects/section1-imagen2.webp',
  '11': '/images/projects/section1-imagen4.webp',
  '12': '/images/projects/section1-imagen6.webp'
};

// Similar projects mapping
const SIMILAR_PROJECTS = {
  '1': ['12'],
  '2': ['1', '4', '6'],
  '3': ['1', '2', '7'],
  '4': ['8', '9'],
  '5': ['1', '3'],
  '6': ['2', '9'],
  '7': ['3', '6'],
  '8': ['4', '9'],
  '9': ['6', '8'],
  '10': ['11', '12'],
  '11': ['10', '12'],
  '12': ['7', '11']
};

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  color?: string;
  client: string;
  services: string[];
  shortDescription: string;
  longDescription: string;
  results: string;
  image: string;
  fallback: string;
  similar: string[];
  children: {
    category: string;
    title: string;
    image: string;
  };
}

/**
 * Generates project data from translation files
 * @param t - Translation function from react-i18next
 * @returns Array of project data
 */
export const generateProjectsData = (t: TFunction): ProjectData[] => {
  
  return PROJECT_IDS.map(id => {
    
    // Get services array directly from translation (it's already an array in the JSON)
    const services = t(`projects.projectDetails.${id}.services`, '') as string;
    
    const projectData = {
      id,
      title: t(`projects.projectDetails.${id}.title`, `Project ${id}`),
      category: t(`projects.projectDetails.${id}.category`, 'General'),
      color: t(`projects.projectDetails.${id}.color`, 'bg-blue-100 text-blue-600'),
      client: t(`projects.projectDetails.${id}.client`, 'Client'),
      services: Array.isArray(services) ? services : [],
      shortDescription: t(`projects.projectDetails.${id}.shortDescription`, 'Short description'),
      longDescription: t(`projects.projectDetails.${id}.longDescription`, 'Long description'),
      results: t(`projects.projectDetails.${id}.results`, 'Results'),
      image: PROJECT_IMAGES[id as keyof typeof PROJECT_IMAGES] || '/default-image.jpg',
      fallback: PROJECT_IMAGES[id as keyof typeof PROJECT_IMAGES] || '/default-image.jpg',
      similar: SIMILAR_PROJECTS[id as keyof typeof SIMILAR_PROJECTS] || [],
      children: {
        category: t(`projects.projectDetails.${id}.category`, 'General'),
        title: t(`projects.projectDetails.${id}.title`, `Project ${id}`),
        image: CHILDREN_IMAGES[id as keyof typeof CHILDREN_IMAGES] || '/default-image.jpg'
      }
    };
    
    return projectData;
  });
};

/**
 * Gets a single project by ID from translation files
 * @param id - Project ID
 * @param t - Translation function from react-i18next
 * @returns Single project data or null if not found
 */
export const getProjectById = (id: string, t: TFunction): ProjectData | null => {
  
  if (!PROJECT_IDS.includes(id)) {
    return null;
  }

  const projects = generateProjectsData(t);
  const project = projects.find(project => project.id === id) || null;
  
  return project;
};

/**
 * Gets similar projects for a given project ID
 * @param id - Project ID
 * @param t - Translation function from react-i18next
 * @returns Array of similar projects
 */
export const getSimilarProjects = (id: string, t: TFunction): ProjectData[] => {
  
  const similarIds = SIMILAR_PROJECTS[id as keyof typeof SIMILAR_PROJECTS] || [];
  
  const allProjects = generateProjectsData(t);
  const similarProjects = allProjects.filter(project => similarIds.includes(project.id));
  
  return similarProjects;
};

// Static versions for build-time generation (without i18next dependency)
type SimpleTFunction = (key: string, fallback?: string) => string;

const generateProjectsDataStatic = (t: SimpleTFunction): ProjectData[] => {
  return PROJECT_IDS.map(id => {
    const services = t(`home.projectDetails.${id}.services`);
    const projectData = {
      id,
      title: t(`projects.projectDetails.${id}.title`, `Proyecto ${id}`),
      category: t(`projects.projectDetails.${id}.category`, 'General'),
      color: t(`projects.projectDetails.${id}.color`, 'bg-blue-100 text-blue-600'),
      client: t(`projects.projectDetails.${id}.client`, 'Cliente'),
      services: Array.isArray(services) ? services : [], // Static fallback
      shortDescription: t(`projects.projectDetails.${id}.shortDescription`, 'Descripción corta del proyecto'),
      longDescription: t(`projects.projectDetails.${id}.longDescription`, 'Descripción detallada del proyecto'),
      results: t(`projects.projectDetails.${id}.results`, 'Resultados del proyecto'),
      image: PROJECT_IMAGES[id as keyof typeof PROJECT_IMAGES] || '/default-image.jpg',
      fallback: PROJECT_IMAGES[id as keyof typeof PROJECT_IMAGES] || '/default-image.jpg',
      similar: SIMILAR_PROJECTS[id as keyof typeof SIMILAR_PROJECTS] || [],
      children: {
        category: t(`projects.projectDetails.${id}.category`, 'General'),
        title: t(`projects.projectDetails.${id}.children.title`, `Proyecto Relacionado ${id}`),
        image: CHILDREN_IMAGES[id as keyof typeof CHILDREN_IMAGES] || '/default-image.jpg'
      }
    };
    
    return projectData;
  });
};

export const getProjectByIdStatic = (id: string, t: SimpleTFunction): ProjectData | null => {
  if (!PROJECT_IDS.includes(id)) {
    return null;
  }

  const projects = generateProjectsDataStatic(t);
  const project = projects.find(project => project.id === id) || null;
  
  return project;
};

export const getSimilarProjectsStatic = (id: string, t: SimpleTFunction): ProjectData[] => {
  const similarIds = SIMILAR_PROJECTS[id as keyof typeof SIMILAR_PROJECTS] || [];
  
  const allProjects = generateProjectsDataStatic(t);
  const similarProjects = allProjects.filter(project => similarIds.includes(project.id));
  
  return similarProjects;
};

// Export PROJECT_IDS for use in generateStaticParams
export { PROJECT_IDS };