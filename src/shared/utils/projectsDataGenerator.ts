import i18n from '../../i18n';

// Project IDs that exist in the translation files
const PROJECT_IDS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

// Image mapping for projects
const PROJECT_IMAGES = {
  '1': '/src/assets/images/projects/section1-imagen1.webp',
  '2': '/src/assets/images/projects/section1-imagen3.webp',
  '3': '/src/assets/images/projects/section1-imagen5.webp',
  '4': '/src/assets/images/projects/section1-imagen1.webp',
  '5': '/src/assets/images/projects/section1-imagen3.webp',
  '6': '/src/assets/images/projects/section1-imagen5.webp',
  '7': '/src/assets/images/projects/section1-imagen1.webp',
  '8': '/src/assets/images/projects/section1-imagen3.webp',
  '9': '/src/assets/images/projects/section1-imagen5.webp',
  '10': '/src/assets/images/projects/section1-imagen1.webp',
  '11': '/src/assets/images/projects/section1-imagen3.webp',
  '12': '/src/assets/images/projects/section1-imagen5.webp'
};

// Children images mapping
const CHILDREN_IMAGES = {
  '1': '/src/assets/images/projects/section1-imagen2.webp',
  '2': '/src/assets/images/projects/section1-imagen4.webp',
  '3': '/src/assets/images/projects/section1-imagen6.webp',
  '4': '/src/assets/images/projects/section1-imagen2.webp',
  '5': '/src/assets/images/projects/section1-imagen4.webp',
  '6': '/src/assets/images/projects/section1-imagen6.webp',
  '7': '/src/assets/images/projects/section1-imagen2.webp',
  '8': '/src/assets/images/projects/section1-imagen4.webp',
  '9': '/src/assets/images/projects/section1-imagen6.webp',
  '10': '/src/assets/images/projects/section1-imagen2.webp',
  '11': '/src/assets/images/projects/section1-imagen4.webp',
  '12': '/src/assets/images/projects/section1-imagen6.webp'
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
  client: string;
  services: string[];
  shortDescription: string;
  longDescription: string;
  results: string;
  image: string;
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
export const generateProjectsData = (t: any): ProjectData[] => {
  
  return PROJECT_IDS.map(id => {
    
    // Get services array directly from translation (it's already an array in the JSON)
    const services = t(`home.projectDetails.${id}.services`, []);
    
    const projectData = {
      id,
      title: t(`home.projectDetails.${id}.title`, `Project ${id}`),
      category: t(`home.projectDetails.${id}.category`, 'General'),
      client: t(`home.projectDetails.${id}.client`, 'Client'),
      services: Array.isArray(services) ? services : [],
      shortDescription: t(`home.projectDetails.${id}.shortDescription`, 'Short description'),
      longDescription: t(`home.projectDetails.${id}.longDescription`, 'Long description'),
      results: t(`home.projectDetails.${id}.results`, 'Results'),
      image: PROJECT_IMAGES[id as keyof typeof PROJECT_IMAGES] || '/default-image.jpg',
      similar: SIMILAR_PROJECTS[id as keyof typeof SIMILAR_PROJECTS] || [],
      children: {
        category: t(`home.projectDetails.${id}.category`, 'General'),
        title: t(`home.projectDetails.${id}.title`, `Project ${id}`),
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
export const getProjectById = (id: string, t: any): ProjectData | null => {
  
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
export const getSimilarProjects = (id: string, t: any): ProjectData[] => {
  
  const similarIds = SIMILAR_PROJECTS[id as keyof typeof SIMILAR_PROJECTS] || [];
  
  const allProjects = generateProjectsData(t);
  const similarProjects = allProjects.filter(project => similarIds.includes(project.id));
  
  return similarProjects;
};