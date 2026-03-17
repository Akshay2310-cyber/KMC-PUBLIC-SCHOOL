export const schoolInfo = {
  name: 'KMC Public School',
  tagline: 'CBSE Curriculum',
  fullName: 'KMC Public Senior Secondary School',
  established: 2008,
  address: {
    street: 'Perumanallur',
    city: 'Tirupur',
    pincode: '641666',
    state: 'Tamil Nadu',
    country: 'India',
  },
  contact: {
    phone: ['+91 421 222 0393', '+91 98422 22393'],
    email: 'info@kmcpublicschool.org',
    admissionsEmail: 'admissions@kmcpublicschool.org',
  },
  social: {
    facebook: '#',
    instagram: '#',
    youtube: '#',
    twitter: '#',
    linkedin: '#',
  },
  officeHours: {
    weekdays: '8:00 AM - 4:00 PM',
    saturday: '8:00 AM - 1:00 PM',
    sunday: 'Closed',
  },
}

export const navigation = {
  main: [
    {
      name: 'About',
      href: '/about',
      dropdown: [
        { name: 'About KMC', href: '/about' },
        { name: 'Our Vision', href: '/about#vision' },
        { name: 'Our Mission', href: '/about#mission' },
        { name: 'Leadership', href: '/about#leadership' },
        { name: 'Managing Committee', href: '/about#committee' },
        { name: 'Campus Tour', href: '/about#campus' },
      ],
    },
    {
      name: 'Admissions',
      href: '/admissions',
      dropdown: [
        { name: 'Admission Process', href: '/admissions' },
        { name: 'Fee Structure', href: '/admissions#fees' },
        { name: 'Download Application', href: '/admissions#apply' },
        { name: 'FAQs', href: '/admissions#faq' },
      ],
    },
    {
      name: 'Academics',
      href: '/#programs',
      dropdown: [
        { name: 'Pre-Primary (Pre-KG to UKG)', href: '/#programs' },
        { name: 'Primary School (I-V)', href: '/#programs' },
        { name: 'Middle School (VI-VIII)', href: '/#programs' },
        { name: 'Secondary School (IX-X)', href: '/#programs' },
        { name: 'Senior Secondary (XI-XII)', href: '/#programs' },
        { name: 'NIOS', href: '/#programs' },
      ],
    },
    {
      name: 'Activities',
      href: '/#activities',
      dropdown: [
        { name: 'KMC Parliament', href: '/#activities' },
        { name: 'KMC Clubs', href: '/#activities' },
        { name: 'Sports', href: '/#activities' },
        { name: 'Cultural Activities', href: '/#activities' },
      ],
    },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  quickLinks: [
    { name: 'Calendar', href: '#' },
    { name: 'Parent Portal', href: '#' },
    { name: 'Student Login', href: '#' },
  ],
}

export const stats = [
  { number: '15+', label: 'Years of Excellence', icon: 'calendar' },
  { number: '30', label: 'Max Students Per Class', icon: 'users' },
  { number: '100+', label: 'Qualified Teachers', icon: 'graduation-cap' },
  { number: '50+', label: 'Awards & Recognitions', icon: 'trophy' },
  { number: '10+', label: 'Modern Labs', icon: 'flask' },
  { number: '20+', label: 'Sports & Activities', icon: 'running' },
  { number: '15+', label: 'Transport Routes', icon: 'bus' },
  { number: '100%', label: 'Pass Rate', icon: 'certificate' },
]

export const awards = [
  {
    year: '2019',
    title: 'International School Award',
    description: "British Council's International School Award (ISA) 2019-22 for outstanding development of international dimensions in school curriculum.",
    icon: 'globe',
  },
  {
    year: '2019',
    title: 'BrainFeed Excellence Award',
    description: 'BrainFeed School Excellence Awards 2019 recognizing our commitment to educational innovation and excellence.',
    icon: 'award',
  },
  {
    year: '2019',
    title: 'Best School - Raj TV',
    description: '"BEST SCHOOL in the District of Tirupur" by Raj TV under the banner "Agada Vigadam".',
    icon: 'tv',
  },
  {
    year: '2018',
    title: 'India STEM Award',
    description: "India's First and Most Prestigious STEM Award 2018 for Outstanding Performance in School Education and Technological Adoption.",
    icon: 'robot',
  },
  {
    year: '2016',
    title: 'ISA Award 2016-19',
    description: 'International School Award 2016-19 from British Council, UK towards outstanding development of international dimensions.',
    icon: 'globe',
  },
  {
    year: '2012',
    title: 'Educational Excellence Award',
    description: "Educational Excellence Award 2012 at IIT Campus, New Delhi for innovative approach in developing students' core competitiveness.",
    icon: 'medal',
  },
]

export const programs = [
  {
    id: 'preprimary',
    name: 'Pre-Primary',
    grades: 'Pre-KG | LKG | UKG',
    description: 'Our pre-primary program focuses on building a strong foundation through play-based learning, creative activities, and early literacy.',
    features: [
      'Activity-based learning approach',
      'Safe and child-friendly environment',
      'Focus on motor skills development',
      'Introduction to basic concepts',
      'Music, art, and physical activities',
    ],
    image: 'http://www.kmcpublicschool.org/gallery_pics/KG%27S%20-%20Birds%20day%202018/1.jpg',
  },
  {
    id: 'primary',
    name: 'Primary School',
    grades: 'Grade I to Grade V',
    description: 'Our primary school curriculum builds essential academic skills while encouraging curiosity and creativity.',
    features: [
      'CBSE aligned curriculum',
      'English medium instruction',
      'Smart classroom teaching',
      'Computer education',
      'Co-curricular activities',
    ],
    image: 'http://www.kmcpublicschool.org/gallery_pics/premises/premises%20(21).jpg',
  },
  {
    id: 'middle',
    name: 'Middle School',
    grades: 'Grade VI to Grade VIII',
    description: 'Middle school prepares students for higher academic challenges with a comprehensive curriculum.',
    features: [
      'Subject specialization begins',
      'Science and computer labs',
      'STEM education integration',
      'Leadership development',
      'Sports and cultural activities',
    ],
    image: 'http://www.kmcpublicschool.org/gallery_pics/sportsday2019/SPD_9490.JPG',
  },
  {
    id: 'secondary',
    name: 'Secondary School',
    grades: 'Grade IX to Grade X',
    description: 'Our secondary program prepares students for CBSE board examinations with rigorous academics.',
    features: [
      'CBSE board preparation',
      'Advanced laboratory facilities',
      'Career counseling',
      'Competitive exam preparation',
      'Personality development',
    ],
    image: 'http://www.kmcpublicschool.org/gallery_pics/independence2019/1.jpg',
  },
  {
    id: 'senior',
    name: 'Senior Secondary',
    grades: 'Grade XI to Grade XII',
    description: 'Our senior secondary program offers specialized streams preparing students for higher education.',
    features: [
      'Multiple stream options',
      'Science with Physics, Chemistry, Biology/Maths',
      'Commerce with Accountancy',
      'Humanities with Psychology, Economics',
      'College admission guidance',
    ],
    image: 'http://www.kmcpublicschool.org/gallery_pics/parliament2019/5.jpg',
  },
]

export const focusAreas = [
  {
    title: 'Academic Excellence',
    description: 'We focus on quality academic programming with emphasis on STEM education, ensuring appropriate challenge for all learners. Our innovative curriculum and experienced faculty ensure every student achieves their potential in core subjects.',
    image: 'http://www.kmcpublicschool.org/gallery_pics/premises/premises%20(21).jpg',
  },
  {
    title: 'Character Development',
    description: 'We empower students with purpose and compassion. Beyond academics, we ensure our students develop integrity, strength of character, and are healthy socially and emotionally through our comprehensive co-curricular programs.',
    image: 'http://www.kmcpublicschool.org/gallery_pics/sportsday2019/SPD_9280.JPG',
  },
  {
    title: 'Community & Relationships',
    description: 'Our inclusive community fosters strong, lifelong peer relationships. Through KMC Parliament, clubs, and various activities, students learn collaboration and develop leadership skills.',
    image: 'http://www.kmcpublicschool.org/gallery_pics/parliament2019/1.jpg',
  },
]

export const activities = [
  {
    title: 'KMC Parliament',
    description: 'Student governance and leadership development',
    image: 'http://www.kmcpublicschool.org/gallery_pics/parliament2019/1.jpg',
    large: true,
  },
  {
    title: 'Sports',
    description: 'Football, Volleyball, Badminton, Chess & more',
    image: 'http://www.kmcpublicschool.org/gallery_pics/sportsday2019/SPD_9280.JPG',
    large: false,
  },
  {
    title: 'Cultural Activities',
    description: 'Music, Dance, Drama & Art',
    image: 'http://www.kmcpublicschool.org/gallery_pics/independence2019/42.jpg',
    large: false,
  },
  {
    title: 'Robotics Club',
    description: 'Innovation and technology exploration',
    image: 'http://www.kmcpublicschool.org/stemback.jpg',
    large: false,
  },
  {
    title: 'Yoga & Fitness',
    description: 'Yoga, Karate, Skating & Aerobics',
    image: 'http://www.kmcpublicschool.org/gallery_pics/Yoga%20day%202019/1.jpg',
    large: false,
  },
  {
    title: 'KMC Clubs',
    description: 'Hindi Club, Robotics Club, Air Rifle Shooting & more',
    image: 'http://www.kmcpublicschool.org/imageshome/polic.jpg',
    large: true,
  },
]

export const testimonials = [
  {
    content: "KMC Public School has been instrumental in shaping my child's future. The personalized attention with small class sizes and the focus on both academics and character development is truly commendable.",
    author: 'Mr. Rajesh Kumar',
    role: 'Parent of Grade X Student',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
  },
  {
    content: 'The STEM education and international exposure through the British Council programs have given my daughter confidence and skills that prepare her for the global stage.',
    author: 'Mrs. Priya Sundaram',
    role: 'Parent of Grade VIII Student',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
  },
  {
    content: 'The co-curricular activities, especially the KMC Parliament and various clubs, have helped my son develop leadership qualities and a sense of responsibility.',
    author: 'Mr. Venkatesh Pillai',
    role: 'Parent of Grade XII Student',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
  },
]

export const galleryImages = [
  { src: 'http://www.kmcpublicschool.org/gallery_pics/premises/premises%20(21).jpg', alt: 'Campus', label: 'Campus' },
  { src: 'http://www.kmcpublicschool.org/gallery_pics/premises/infra1.jpg', alt: 'Classroom', label: 'Classrooms' },
  { src: 'http://www.kmcpublicschool.org/gallery_pics/sportsday2019/SPD_9280.JPG', alt: 'Sports', label: 'Sports' },
  { src: 'http://www.kmcpublicschool.org/gallery_pics/parliament2019/10.jpg', alt: 'Parliament', label: 'Parliament' },
  { src: 'http://www.kmcpublicschool.org/gallery_pics/independence2019/1.jpg', alt: 'Events', label: 'Events' },
  { src: 'http://www.kmcpublicschool.org/gallery_pics/Yoga%20day%202019/5.jpg', alt: 'Activities', label: 'Activities' },
]

export const news = [
  {
    title: 'Annual Day Celebrations 2024',
    excerpt: 'Grand celebration showcasing student talents in music, dance, and drama performances.',
    date: 'March 2024',
    category: 'Events',
    image: 'http://www.kmcpublicschool.org/gallery_pics/independence2019/42.jpg',
  },
  {
    title: 'Sports Day Championship',
    excerpt: 'Inter-house sports competition featuring athletics, team sports, and individual events.',
    date: 'February 2024',
    category: 'Sports',
    image: 'http://www.kmcpublicschool.org/gallery_pics/sportsday2019/SPD_9490.JPG',
  },
  {
    title: 'KMC Parliament Swearing-In',
    excerpt: 'New student council takes oath in a grand ceremony, ready to lead and serve.',
    date: 'January 2024',
    category: 'Student Life',
    image: 'http://www.kmcpublicschool.org/gallery_pics/parliament2019/1.jpg',
  },
]
