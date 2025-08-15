import React from 'react'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { contactService, ContactFormData } from '../services/contactService'
import GoogleMap from '../components/GoogleMap'

// Import contact icons
import phoneIcon from '../assets/images/contacts/section1-phone.svg'
import emailIcon from '../assets/images/contacts/section1-email.svg'
import markIcon from '../assets/images/contacts/section1-mark.svg'

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
}

const ContactPage = () => {
  const { t } = useTranslation()
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = t('contact.form.required')
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.form.required')
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t('contact.form.invalidEmail')
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t('contact.form.required')
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t('contact.form.required')
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      // Use mock service for development - replace with real service in production
      const response = await contactService.submitContactFormMock(formData)
      
      if (response.success) {
        setSubmitSuccess(true)
        setSubmitMessage(t('contact.form.success'))
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        setSubmitSuccess(false)
        setSubmitMessage(t('contact.form.error'))
      }
    } catch {
      setSubmitSuccess(false)
      setSubmitMessage(t('contact.form.error'))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Contact Form Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
            
            {/* Left Column - Contact Form */}
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
              <div className="text-center mb-8">
                <p className="text-[#7B43D6] font-medium mb-2">{t('contact.form.sendEmail')}</p>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {t('contact.form.feelFreeToWrite')}
                </h1>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.fields.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.placeholders.name')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#7B43D6] focus:border-transparent transition-colors ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.fields.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.placeholders.email')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#7B43D6] focus:border-transparent transition-colors ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Phone and Subject Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.fields.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.placeholders.phone')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#7B43D6] focus:border-transparent transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.fields.subject')}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.placeholders.subject')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#7B43D6] focus:border-transparent transition-colors ${
                        errors.subject ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.fields.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.placeholders.message')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B43D6] focus:border-transparent transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1F0951] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#2D1065] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : t('contact.form.button')}
                </button>

                {/* Submit Message */}
                {submitMessage && (
                  <div className={`p-4 rounded-lg text-center ${
                    submitSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>

            {/* Right Column - Contact Information */}
            <div className="lg:pl-8">
              <div className="mb-12">
                <p className="text-[#7B43D6] font-medium mb-2">{t('contact.form.getInTouch')}</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  {t('contact.form.getInTouch')}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t('contact.form.description')}
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#7B43D6]/10 rounded-lg flex items-center justify-center">
                    <img src={phoneIcon} alt="Phone" className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {t('contact.info.phone.label')}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      {t('contact.info.phone.number')}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#7B43D6]/10 rounded-lg flex items-center justify-center">
                    <img src={emailIcon} alt="Email" className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {t('contact.info.email.label')}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      {t('contact.info.email.address')}
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#7B43D6]/10 rounded-lg flex items-center justify-center">
                    <img src={markIcon} alt="Location" className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {t('contact.info.address.label')}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      {t('contact.info.address.location')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full">
        <GoogleMap 
          latitude={10.370511930922696} 
          longitude={-75.50354889736641}
          zoom={17}
          height="500px"
          className="w-full"
        />
      </section>
    </div>
  )
}

export default ContactPage