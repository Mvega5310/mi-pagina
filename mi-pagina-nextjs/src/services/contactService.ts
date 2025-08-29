export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

class ContactService {
  private baseUrl = 'https://api.friendsoft.co'; // Replace with your actual API endpoint

  async submitContactForm(data: ContactFormData): Promise<ContactResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return {
        success: true,
        message: result.message || 'Message sent successfully!',
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to send message. Please try again later.',
      };
    }
  }

  // For development/testing purposes - simulates API call
  async submitContactFormMock(data: ContactFormData): Promise<ContactResponse> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Contact form data:', JSON.stringify(data, null, 2));
        resolve({
          success: true,
          message: 'Message sent successfully! We will get back to you soon.',
        });
      }, 1000);
    });
  }
}

export const contactService = new ContactService();