'use client'

import React, { useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import SEO from '@/components/SEO'
import { contactService, ContactFormData } from '@/services/contactService'
import Image from 'next/image'

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

  const validateEmail = useCallback((email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }, [])

  const validateForm = useCallback((): boolean => {
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
  }, [formData, t, validateEmail])

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
  }, [errors])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
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
  }, [formData, validateForm, t])
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={t('seo.contact.title', 'Contacto | Friendsoft')}
        description={t('seo.contact.description', 'Contáctanos para discutir tu proyecto de desarrollo de software. Estamos ubicados en Bogotá, Colombia y listos para ayudarte con soluciones tecnológicas.')}
        keywords={t('seo.contact.keywords', 'contacto, Friendsoft, desarrollo software, Bogotá Colombia, consultoría tecnológica, presupuesto proyecto')}
        type="website"
        url="/contact"
      />
      <div className="min-h-screen bg-gray-50">
        {/* Contact Form Section - Responsive */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-7xl mx-auto">

              {/* Left Column - Contact Form - Responsive */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg">
                <div className="text-center mb-6 sm:mb-8">
                  <p className="text-[#7B43D6] font-medium mb-2 text-sm sm:text-base">{t('contact.form.sendEmail')}</p>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {t('contact.form.feelFreeToWrite')}
                  </h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Name and Email Row - Responsive */}
                  <div className="grid sm:grid-cols-2 gap-4">
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
                        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg focus:ring-2 focus:ring-[#7B43D6] focus:border-transparent transition-colors text-sm sm:text-base ${errors.name ? 'border-red-500' : 'border-gray-300'
                          }`}
                        aria-invalid={errors.name ? 'true' : 'false'}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        aria-required="true"
                        autoComplete="name"
                        required
                      />
                      {errors.name && (
                        <p id="name-error" className="text-red-500 text-xs sm:text-sm mt-1" role="alert">{errors.name}</p>
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
                        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg focus:ring-2 focus:ring-[#7B43D6] focus:border-transparent transition-colors text-sm sm:text-base ${errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                        aria-invalid={errors.email ? 'true' : 'false'}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        aria-required="true"
                        autoComplete="email"
                        required
                      />
                      {errors.email && (
                        <p id="email-error" className="text-red-500 text-xs sm:text-sm mt-1" role="alert">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone and Subject Row - Responsive */}
                  <div className="grid sm:grid-cols-2 gap-4">
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
                        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg focus:ring-2 focus:ring-[#7B43D6] focus:border-transparent transition-colors text-sm sm:text-base ${errors.phone ? 'border-red-500' : 'border-gray-300'
                          }`}
                        aria-invalid={errors.phone ? 'true' : 'false'}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        aria-required="true"
                        autoComplete="tel"
                      />
                      {errors.phone && (
                        <p id="phone-error" className="text-red-500 text-xs sm:text-sm mt-1" role="alert">{errors.phone}</p>
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
                        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg focus:ring-2 focus:ring-[#7B43D6] focus:border-transparent transition-colors text-sm sm:text-base ${errors.subject ? 'border-red-500' : 'border-gray-300'
                          }`}
                        aria-invalid={errors.subject ? 'true' : 'false'}
                        aria-describedby={errors.subject ? 'subject-error' : undefined}
                        aria-required="true"
                        autoComplete="off"
                        required
                      />
                      {errors.subject && (
                        <p id="subject-error" className="text-red-500 text-xs sm:text-sm mt-1" role="alert">{errors.subject}</p>
                      )}
                    </div>
                  </div>

                  {/* Message Field - Responsive */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.fields.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.placeholders.message')}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B43D6] focus:border-transparent transition-colors resize-none text-sm sm:text-base"
                      aria-required="false"
                      autoComplete="off"
                      required
                    />
                  </div>

                  {/* Submit Button - Responsive */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1F0951] text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold hover:bg-[#2D1065] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#7B43D6]/50"
                  >
                    {isSubmitting ? 'Enviando...' : t('contact.form.button')}
                  </button>

                  {/* Submit Message */}
                  {submitMessage && (
                    <div
                      className={`p-4 rounded-lg text-center ${submitSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}
                      role="alert"
                      aria-live="polite"
                    >
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

                {/* Contact Information Cards - Responsive */}
                <div className="space-y-4 sm:space-y-6" role="list" aria-label={t('contact.info.contactMethods', 'Contact methods')}>
                  {/* Phone */}
                  <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow" role="listitem">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#7B43D6]/10 rounded-lg flex items-center justify-center" aria-hidden="true">
                      <Image src={'/images/contacts/section1-phone.svg'} alt="" className="w-5 h-5 sm:w-6 sm:h-6" width="24" height="24" loading="eager" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                        {t('contact.info.phone.label')}
                      </h3>
                      <a href={`tel:${t('contact.info.phone.number')}`} className="text-gray-600 font-medium text-sm sm:text-base truncate hover:text-[#7B43D6] transition-colors focus:outline-none focus:ring-2 focus:ring-[#7B43D6]/50 rounded" aria-label={`${t('contact.info.phone.label')}: ${t('contact.info.phone.number')}`}>
                        {t('contact.info.phone.number')}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow" role="listitem">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#7B43D6]/10 rounded-lg flex items-center justify-center" aria-hidden="true">
                      <Image src={'/images/contacts/section1-email.svg'} alt="" className="w-5 h-5 sm:w-6 sm:h-6" width="24" height="24" loading="eager" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                        {t('contact.info.email.label')}
                      </h3>
                      <a href={`mailto:${t('contact.info.email.address')}`} className="text-gray-600 font-medium text-sm sm:text-base truncate hover:text-[#7B43D6] transition-colors focus:outline-none focus:ring-2 focus:ring-[#7B43D6]/50 rounded" aria-label={`${t('contact.info.email.label')}: ${t('contact.info.email.address')}`}>
                        {t('contact.info.email.address')}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow" role="listitem">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#7B43D6]/10 rounded-lg flex items-center justify-center" aria-hidden="true">
                      <Image src={'/images/contacts/section1-mark.svg'} alt="" className="w-5 h-5 sm:w-6 sm:h-6" width="24" height="24" loading="eager" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                        {t('contact.info.address.label')}
                      </h3>
                      <p className="text-gray-600 font-medium text-sm sm:text-base">
                        {t('contact.info.address.location')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section - Responsive */}
        <section className="w-full">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <iframe
              title={t('contact.map.title', 'Location Map')}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8066925068!2d-74.0817!3d4.6097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="320"
              style={{ border: 0, aspectRatio: '16/9' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="sm:h-[350px] md:h-[400px]"
              aria-label={t('contact.map.description', 'Interactive map showing our location in Bogotá, Colombia')}
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default ContactPage