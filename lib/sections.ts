import type { ContactLink, ProjectItem, SkillGroup, TechCloudItem } from '@/types';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    description: 'Building secure REST APIs and backend applications.',
     badges: [
      { name: 'Python', icon: 'Python' },
      { name: 'FastAPI', icon: 'FastAPI' },
      { name: 'PostgreSQL', icon: 'Database' },
      { name: 'SQLite', icon: 'Database' },
      { name: 'SQL', icon: 'Database' },
      { name: 'SQLAlchemy', icon: 'Layers' },
      { name: 'JWT', icon: 'Shield' },
      { name: 'REST APIs', icon: 'Api' },
      { name: 'Docker', icon: 'Package' }
    ]
  },
  {
    title: 'Data Analysis and Machine Learning',
    description: 'Analyzing data and building machine learning models.',
    badges: [
      { name: 'Pandas', icon: 'Code2' },
      { name: 'NumPy', icon: 'Hash' },
      { name: 'Scikit-Learn', icon: 'Activity' },
      { name: 'Matplotlib', icon: 'ChartLine' },
      { name: 'Seaborn', icon: 'BarChart3' },
      { name: 'Streamlit', icon: 'Monitor' }
    ]
  },
  {
    title: 'Frontend',
    description: 'Creating responsive and interactive user interfaces.',
    badges: [
      { name: 'React', icon: 'Atom' },
      { name: 'Next.js', icon: 'Layers' },
      { name: 'JavaScript', icon: 'Zap' },
      { name: 'Tailwind CSS', icon: 'Sparkles' },
      { name: 'Vercel', icon: 'Monitor' }
    ]
  },
  {
    title: 'Tools',
    description: 'Technologies I use throughout development.',
    badges: [
      { name: 'Git', icon: 'GitBranch' },
      { name: 'GitHub', icon: 'Github' },
      { name: 'Linux', icon: 'Terminal' },
      { name: 'VS Code', icon: 'Monitor' },
      { name: 'Jupyter Notebook', icon: 'Notebook' }
    ]
  }
];

export const projects: ProjectItem[] = [
  {
    title: 'Mental Health Prediction',
    description: 'Developed a Random Forest-based ML model for predicting mental health outcomes with proper preprocessing and validation.',
    tech: ['Python', 'Scikit-learn', 'Random Forest', 'Pandas'],
    githubUrl: 'https://github.com/sirUttam/mental-health-ml-project',
    demoUrl: 'https://check-your-mental-health.streamlit.app/'
  },
  {
    title: 'Fuel Type Prediction',
    description: 'Built a machine learning model using Random Forest to predict fuel type based on vehicle and engine parameters with proper preprocessing and validation.',
    tech: ['Python', 'Classification', 'Scikit-Learn', 'Pandas'],
    githubUrl: 'https://github.com/sirUttam/fuel-type-prediction',
    demoUrl: 'https://predict-fuel-type.streamlit.app/'
  },
  {
    title: 'FMCG Sales Insights Report',
    description: 'Analyzed FMCG sales data to uncover revenue trends, regional performance, product insights, and key business metrics through interactive visualizations.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Jupyter Notebook', 'Seaborn', 'Numpy'],
    githubUrl: 'https://github.com/sirUttam/FMCG-Sales-Analysis',
    demoUrl: 'https://github.com/sirUttam/FMCG-Sales-Analysis'
  },
  {
    title: 'NYC real-estate Price Prediction',
    description: 'Developed a machine learning model to predict New York City property prices using regression techniques and feature engineering.',
    tech: ['Python', 'Supervised Learning', 'Pandas', 'Regression'],
    githubUrl: 'https://github.com/sirUttam/NYC-Property-Price-Prediction',
    demoUrl: 'https://your-house-price.streamlit.app/'
  },
  {
    title: 'Heart Disease Risk Prediction App',
    description: "A machine learning web application that predicts an individual's risk of heart disease based on clinical parameters, featuring a user-friendly interface with input validation and real-time predictions.",
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'Numpy', 'Streamlit', 'Joblib'],
    githubUrl: 'https://github.com/sirUttam/heart-disease-predict-project',
    demoUrl: 'cardiovascular-risk-predictor.streamlit.app'
  },
  {
    title: 'Food Website UI',
    description: 'Built a responsive food website with a modern UI to showcase menu items and provide a smooth browsing experience.',
    tech: ['React', 'Javascript', 'Tailwind', 'Responsive'],
    githubUrl: 'https://github.com/sirUttam/Food-Site',
    demoUrl: 'https://food-site-beige.vercel.app/'
  }
];

export const contactLinks: ContactLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/sirUttam',
    icon: 'Github'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/uttam-aryal-78a6bb324/',
    icon: 'Linkedin'
  },
  {
    label: 'Email',
    href: 'mailto:uttam.info006@gmail.com',
    icon: 'Mail'
  }
];

export const techCloud: TechCloudItem[] = [
  { label: 'Python', glowDelay: 0.5, glowDuration: 3 },
  { label: 'FastAPI', glowDelay: 0.35, glowDuration: 2.8 },
  { label: 'PostgreSQL', glowDelay: 0.7, glowDuration: 2.4 },
  { label: 'SQLite', glowDelay: 5.95, glowDuration: 2.5 },
  { label: 'SQLAlchemy', glowDelay: 1.05, glowDuration: 2.7 },
  { label: 'JWT', glowDelay: 1.4, glowDuration: 2.5 },
  { label: 'REST APIs', glowDelay: 1.75, glowDuration: 2.9 },
  { label: 'Docker', glowDelay: 2.1, glowDuration: 2.6 },
  { label: 'SQL', glowDelay: 2.45, glowDuration: 2.8 },
  { label: 'Pandas', glowDelay: 2.8, glowDuration: 2.4 },
  { label: 'NumPy', glowDelay: 3.15, glowDuration: 2.7 },
  { label: 'Scikit-Learn', glowDelay: 3.5, glowDuration: 2.9 },
  { label: 'Matplotlib', glowDelay: 3.85, glowDuration: 2.5 },
  { label: 'Seaborn', glowDelay: 2.45, glowDuration: 2.8 },
  { label: 'Jupyter Notebook', glowDelay: 5.6, glowDuration: 2.9 },
  { label: 'Streamlit', glowDelay: 6.65, glowDuration: 2.8 },
  { label: 'Git', glowDelay: 4.2, glowDuration: 2.6 },
  { label: 'GitHub', glowDelay: 4.55, glowDuration: 2.8 },
  { label: 'React', glowDelay: 4.9, glowDuration: 2.4 },
  { label: 'JavaScript', glowDelay: 5.25, glowDuration: 2.7 },
  { label: 'Tailwind', glowDelay: 5.6, glowDuration: 2.9 },
  { label: 'Machine Learning', glowDelay: 5.95, glowDuration: 2.5 },
  { label: 'VS Code', glowDelay: 6.65, glowDuration: 2.8 }
];
