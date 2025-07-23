import { useTranslation } from 'react-i18next'

const HomePage = () => {
  const { t } = useTranslation()

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('home.title')}</h1>
        <p className="text-xl text-gray-600">{t('home.subtitle')}</p>
      </section>
      
      {/* Aquí irían las secciones según el diseño SVG */}
    </div>
  )
}

export default HomePage