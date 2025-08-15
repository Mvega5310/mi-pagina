import { useTranslation } from 'react-i18next'

const ProjectsPage = () => {
  const { t } = useTranslation()

  const projects = [
    {
      id: 1,
      image: '/src/assets/images/projects/section1-imagen1.jpg',
      category: t('projects.categories.technology'),
      title: t('projects.items.project1.title'),
      description: t('projects.items.project1.description')
    },
    {
      id: 2,
      image: '/src/assets/images/projects/section1-imagen2.jpg',
      category: t('projects.categories.development'),
      title: t('projects.items.project2.title'),
      description: t('projects.items.project2.description')
    },
    {
      id: 3,
      image: '/src/assets/images/projects/section1-imagen3.jpg',
      category: t('projects.categories.solution'),
      title: t('projects.items.project3.title'),
      description: t('projects.items.project3.description')
    },
    {
      id: 4,
      image: '/src/assets/images/projects/section1-imagen4.jpg',
      category: t('projects.categories.design'),
      title: t('projects.items.project4.title'),
      description: t('projects.items.project4.description')
    },
    {
      id: 5,
      image: '/src/assets/images/projects/section1-imagen5.jpg',
      category: t('projects.categories.technology'),
      title: t('projects.items.project5.title'),
      description: t('projects.items.project5.description')
    },
    {
      id: 6,
      image: '/src/assets/images/projects/section1-imagen6.jpg',
      category: t('projects.categories.ideas'),
      title: t('projects.items.project6.title'),
      description: t('projects.items.project6.description')
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Overlay with #9782A2 color */}
              <div className="absolute inset-0 bg-[#9782A2] opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm mb-4 opacity-90">{project.description}</p>
                  <button className="bg-white text-[#9782A2] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
                    {t('projects.viewProject')}
                  </button>
                </div>
              </div>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {project.category}
                </span>
              </div>
            </div>
            
            {/* Project Info */}
            <div className="p-6">
              <div className="mb-2">
                <span className="text-blue-600 text-sm font-semibold">{project.category}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
              
              <div className="mt-4">
                <button className="text-[#9782A2] font-semibold hover:text-[#7a6b8a] transition-colors duration-200">
                  {t('projects.viewProject')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage