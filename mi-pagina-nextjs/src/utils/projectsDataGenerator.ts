import { TFunction } from "i18next";

// Helper function to extract numeric ID from project ID
const getNumericId = (projectId: string): string => {
  return projectId.replace("proyecto-", "");
};

// Helper function to convert numeric ID to project ID
const getProjectId = (numericId: string): string => {
  return `proyecto-${numericId}`;
};

// Project IDs that exist in the translation files
export const PROJECT_IDS = [
  "proyecto-1",
  "proyecto-2",
  "proyecto-3",
  "proyecto-4",
  "proyecto-5",
  "proyecto-6",
  "proyecto-7",
  "proyecto-8",
  "proyecto-9",
  "proyecto-10",
  "proyecto-11",
  "proyecto-12",
];

// Image mapping for projects
const PROJECT_IMAGES = {
  "1": "/images/projects/section1-imagen1.webp",
  "2": "/images/projects/section1-imagen3.webp",
  "3": "/images/projects/section1-imagen5.webp",
  "4": "/images/projects/section1-imagen1.webp",
  "5": "/images/projects/section1-imagen3.webp",
  "6": "/images/projects/section1-imagen5.webp",
  "7": "/images/projects/section1-imagen1.webp",
  "8": "/images/projects/section1-imagen3.webp",
  "9": "/images/projects/section1-imagen5.webp",
  "10": "/images/projects/section1-imagen1.webp",
  "11": "/images/projects/section1-imagen3.webp",
  "12": "/images/projects/section1-imagen5.webp",
};

const COVER_IMAGES = {
  "1": "/images/projects/covers/project1-cover.jpg",
  "2": "/images/projects/covers/project1-cover.jpg",
  "3": "/images/projects/covers/project1-cover.jpg",
  "4": "/images/projects/covers/project1-cover.jpg",
  "5": "/images/projects/covers/project1-cover.jpg",
  "6": "/images/projects/covers/project1-cover.jpg",
  "7": "/images/projects/covers/project1-cover.jpg",
  "8": "/images/projects/covers/project1-cover.jpg",
  "9": "/images/projects/covers/project1-cover.jpg",
  "10": "/images/projects/covers/project1-cover.jpg",
  "11": "/images/projects/covers/project1-cover.jpg",
  "12": "/images/projects/covers/project1-cover.jpg",
};

// Children images mapping
const CHILDREN_IMAGES = {
  "1": "/images/projects/section1-imagen2.webp",
  "2": "/images/projects/section1-imagen4.webp",
  "3": "/images/projects/section1-imagen6.webp",
  "4": "/images/projects/section1-imagen2.webp",
  "5": "/images/projects/section1-imagen4.webp",
  "6": "/images/projects/section1-imagen6.webp",
  "7": "/images/projects/section1-imagen2.webp",
  "8": "/images/projects/section1-imagen4.webp",
  "9": "/images/projects/section1-imagen6.webp",
  "10": "/images/projects/section1-imagen2.webp",
  "11": "/images/projects/section1-imagen4.webp",
  "12": "/images/projects/section1-imagen6.webp",
};

// Similar projects mapping
const SIMILAR_PROJECTS = {
  "1": ["12"],
  "2": ["1", "4", "6"],
  "3": ["1", "2", "7"],
  "4": ["8", "9"],
  "5": ["1", "3"],
  "6": ["2", "9"],
  "7": ["3", "6"],
  "8": ["4", "9"],
  "9": ["6", "8"],
  "10": ["11", "12"],
  "11": ["10", "12"],
  "12": ["7", "11"],
};

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  color?: string;
  client: string;
  services: string[];
  scopes: string[];
  web: string;
  shortDescription: string;
  longDescription: string;
  results: string;
  coverImage: string;
  image: string;
  previous?: ProjectNavigation;
  next?: ProjectNavigation;
  fallback: string;
  similar: string[];
  children: {
    category: string;
    title: string;
    image: string;
  };
}

export interface ProjectNavigation {
  previous: {
    id: string;
    title: string;
  };
  next: {
    id: string;
    title: string;
  };
}

/**
 * Generates project data from translation files
 * @param t - Translation function from react-i18next
 * @returns Array of project data
 */
export const generateProjectsData = (t: TFunction): ProjectData[] => {
  return PROJECT_IDS.map((id) => {
    const numericId = getNumericId(id);
    // Get services array directly from translation (it's already an array in the JSON)
    const servicesData = t(`projects.projectDetails.${numericId}.services`, {
      returnObjects: true,
      defaultValue: [],
    });
    const services = Array.isArray(servicesData) ? servicesData : [];

    const scopesData = t(`projects.projectDetails.${numericId}.scopes`, {
      returnObjects: true,
      defaultValue: [],
    });
    const scopes = Array.isArray(scopesData) ? scopesData : [];

    const projectData = {
      id: id,
      title: t(
        `projects.projectDetails.${numericId}.title`,
        `Project ${numericId}`
      ),
      category: t(`projects.projectDetails.${numericId}.category`, "General"),
      color: t(
        `projects.projectDetails.${numericId}.color`,
        "bg-blue-100 text-blue-600"
      ),
      client: t(`projects.projectDetails.${numericId}.client`, "Client"),
      services,
      scopes,
      web: t(`projects.projectDetails.${numericId}.web`, "Web"),
      shortDescription: t(
        `projects.projectDetails.${numericId}.shortDescription`,
        "Short description"
      ),
      longDescription: t(
        `projects.projectDetails.${numericId}.longDescription`,
        "Long description"
      ),
      results: t(`projects.projectDetails.${numericId}.results`, "Results"),
      coverImage:
        COVER_IMAGES[numericId as keyof typeof COVER_IMAGES] ||
        "/default-image.jpg",
      image:
        PROJECT_IMAGES[numericId as keyof typeof PROJECT_IMAGES] ||
        "/default-image.jpg",
      fallback:
        PROJECT_IMAGES[numericId as keyof typeof PROJECT_IMAGES] ||
        "/default-image.jpg",
      similar:
        SIMILAR_PROJECTS[numericId as keyof typeof SIMILAR_PROJECTS] || [],
      children: {
        category: t(`projects.projectDetails.${numericId}.category`, "General"),
        title: t(
          `projects.projectDetails.${numericId}.title`,
          `Project ${numericId}`
        ),
        image:
          CHILDREN_IMAGES[numericId as keyof typeof CHILDREN_IMAGES] ||
          "/default-image.jpg",
      },
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
export const getProjectById = (
  id: string,
  t: TFunction
): ProjectData | null => {
  if (!PROJECT_IDS.includes(id)) {
    return null;
  }

  const projects = generateProjectsData(t);
  const project = projects.find((project) => project.id === id) || null;

  return project;
};

/**
 * Gets similar projects for a given project ID
 * @param id - Project ID
 * @param t - Translation function from react-i18next
 * @returns Array of similar projects
 */
export const getSimilarProjects = (id: string, t: TFunction): ProjectData[] => {
  const numericId = getNumericId(id);
  const similarNumericIds =
    SIMILAR_PROJECTS[numericId as keyof typeof SIMILAR_PROJECTS] || [];

  // Convert numeric IDs to full project IDs
  const similarProjectIds = similarNumericIds.map((numId) =>
    getProjectId(numId)
  );

  const allProjects = generateProjectsData(t);
  const similarProjects = allProjects.filter((project) =>
    similarProjectIds.includes(project.id)
  );

  return similarProjects;
};

export const getProjectNavigation = (
  id: string,
  t: TFunction
): ProjectNavigation => {
  const numericId = +getNumericId(id);
  const previousNumericId = (numericId - 1) as unknown as number;

  const nextNumericId = numericId + 1;
  const previousProject = getProjectById(
    getProjectId(previousNumericId?.toString()),
    t
  );
  const nextProject = getProjectById(
    getProjectId(nextNumericId?.toString()),
    t
  );

  return {
    previous: {
      id: previousProject?.id || "",
      title: previousProject?.title || "",
    },
    next: {
      id: nextProject?.id || "",
      title: nextProject?.title || "",
    },
  };
};
