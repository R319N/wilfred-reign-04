interface Testimonials {
  author: string,
  testimonial: string,
  rating: number,
  relationship: string,
}

const testimonialReviewData: Testimonials[] = [
  {
    author: 'thandi m.',
    testimonial: "Smart Me Academy has been a game-changer for my son. The flexible schedule allowed him to balance his studies and extracurriculars without stress, and the personalised tutoring in Maths has boosted his confidence so much. The tutors are incredibly supportive, and I feel like they truly care about each learner’s progress.",
    relationship: 'parent',
    rating: 5
  },
  {
    author: 'Sipho L.',
    relationship: 'student',
    testimonial: "The high school program at Smart Me Academy has given me the freedom to learn at my own pace. I used to struggle with Maths, but the extra sessions before exams and one-on-one Saturday support have made a huge difference. I feel more prepared than ever for my exams!",
    rating: 3
  },
  {
    author: 'Nomvula K.',
    relationship: 'parent',
    testimonial: "I was so impressed with the foundation phase program for my daughter! The activities are engaging, and she’s already reading and counting confidently. Smart Me Academy has given her the best start possible, and I love how much care and effort the tutors put into making learning fun.",
    rating: 4
  },
]

export default testimonialReviewData
