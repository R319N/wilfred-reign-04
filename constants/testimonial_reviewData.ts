interface Testimonials {
  author: string,
  testimonial: string,
  image: string,
  rating: number,
  position: string,
  company: string

}

const testimonialReviewData: Testimonials[] = [
  {
    author: 'kevin Smith',
    testimonial: 'I love the way the team works together to deliver high-quality results.',
    image: '/female-icon.png',
    company: 'office creators',
    position: 'founder',
    rating: 5
  },
  {
    author: 'mduduzi mabaso',
    company: 'interco logistics',
    position: 'founder',
    testimonial: 'great work , we are happy with the service.',
    image: '/female-icon.png',
    rating: 3
  },
  {
    author: 'dineo selopedi',
    company: 'shoe freaks',
    position: 'ceo',
    testimonial: 'we are happy with the work done.',
    image: '/male-icon.png',
    rating: 4
  },
  {
    author: 'mduduzi mabaso',
    company: 'interco logistics',
    position: 'founder',
    testimonial: 'thank you for meeting our expectations',
    image: '/female-icon.png',
    rating: 3
  },
  {
    author: 'andrew smith',
    company: 'shoe freaks',
    position: 'ceo',
    testimonial: 'we are happy with the work done.',
    image: '/male-icon.png',
    rating: 4
  },
]

export default testimonialReviewData
