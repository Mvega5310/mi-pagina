import HomePage from '../pages/HomePage'
import ProjectsPage from '../pages/ProjectsPage'
import ServicesPage from '../pages/ServicesPage'
import ContactPage from '../pages/ContactPage'

// Route definitions for static analysis and prerendering
export const routes = [
  { path: '/', component: HomePage },
  { path: '/projects', component: ProjectsPage },
  { path: '/services', component: ServicesPage },
  { path: '/contact', component: ContactPage },
] as const