// Mock data for Sriyaa's Portfolio

export const personalInfo = {
  name: "Sriyaa S",
  title: "AI/ML Engineer & Full-Stack Developer",
  subtitle: "BTech CSE (AI & Robotics) | VIT Chennai",
  bio: "Dedicated final-year BTech student passionate about scalable systems, backend development, and data-driven solutions. Strong foundation in AI/ML, cloud technologies, and full-stack development.",
  email: "sriyaa2004@gmail.com",
  phone: "+91 7200185203",
  location: "Chennai, India",
  linkedin: "https://linkedin.com/in/sriyaa",
  github: "https://github.com/sriyaa",
  resumeUrl: "/resume.pdf"
};

export const skills = {
  programming: ["Python", "Java", "C++", "JavaScript", "PHP"],
  aiml: ["TensorFlow", "Keras", "LSTM", "NLP", "Reinforcement Learning", "OpenAI GPT-4", "Computer Vision"],
  web: ["React", "Angular", "Node.js", "FastAPI", ".NET", "REST APIs"],
  databases: ["MongoDB", "MySQL", "PostgreSQL", "BigQuery"],
  cloud: ["Google Cloud Platform", "Apache Beam", "Dataflow", "Pub/Sub", "Docker", "CI/CD"],
  tools: ["Git", "Swagger", "Streamlit", "Tableau", "Power BI", "Trello API"]
};

export const experience = [
  {
    id: 1,
    company: "Ford Business Solutions India",
    role: "Data Ingestion Intern",
    duration: "April - June 2025",
    type: "Internship",
    description: "Designed scalable cloud pipelines for real-time analytics using GCP technologies.",
    achievements: [
      "Designed scalable cloud pipelines (GCP, BigQuery, Dataflow, Pub/Sub) for real-time analytics",
      "Built dynamic data validation and ingestion logic in Python, improving acceptance accuracy",
      "Produced comprehensive system documentation for long-term maintainability"
    ],
    technologies: ["GCP", "BigQuery", "Apache Beam", "Python", "Dataflow", "Pub/Sub"]
  },
  {
    id: 2,
    company: "Nicola Foundation",
    role: "Software Development Engineer Intern",
    duration: "December 2024 - March 2025",
    type: "Internship",
    description: "Developed frontend modules and integrated backend services for ERP systems.",
    achievements: [
      "Developed frontend modules in React + Angular and integrated REST APIs with backend services",
      "Designed MySQL-based database models and supported ERP development",
      "Maintained backend modules with MySQL + Swagger APIs ensuring continuous improvements"
    ],
    technologies: ["React", "Angular", "Java", ".NET", "MySQL", "REST APIs", "Swagger"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Stock Price Predictor",
    description: "AI-powered stock prediction web application using LSTM neural networks with real-time data processing and interactive visualizations.",
    longDescription: "Built a comprehensive stock prediction platform featuring LSTM-based time series forecasting, real-time market data integration, and interactive React frontend. The system processes historical stock data to predict future prices with high accuracy.",
    technologies: ["LSTM", "TensorFlow", "FastAPI", "React", "MongoDB", "REST APIs", "Chart.js"],
    category: "AI/ML",
    featured: true,
    githubUrl: "https://github.com/sriyaa/stock-predictor",
    liveUrl: "https://stock-predictor-demo.com",
    imageUrl: "/images/stock-predictor.jpg",
    highlights: [
      "LSTM neural network for time series forecasting",
      "Real-time stock data integration",
      "Interactive React dashboard with visualizations",
      "RESTful API backend with FastAPI",
      "MongoDB for efficient data storage"
    ]
  },
  {
    id: 2,
    title: "EV Route Optimization",
    description: "AI-powered route optimization system for electric vehicles using memetic algorithms and graph network analysis.",
    longDescription: "Developed an intelligent EV route optimization system that uses memetic algorithms to find optimal charging station routes. The system represents EV routes as graph networks and uses custom fitness functions for evaluation.",
    technologies: ["Python", "Memetic Algorithm", "Graph Networks", "NetworkX", "Matplotlib", "AI Optimization"],
    category: "AI/ML",
    featured: true,
    githubUrl: "https://github.com/sriyaa/ev-route-optimization",
    imageUrl: "/images/ev-route.jpg",
    date: "April 2025",
    highlights: [
      "Memetic algorithm implementation for route optimization",
      "Graph network representation of EV routes",
      "Custom fitness function for route evaluation",
      "Iterative refinement and convergence optimization",
      "Visualization of optimal routes and charging stations"
    ]
  },
  {
    id: 3,
    title: "AI Meeting Assistant",
    description: "Intelligent meeting transcription and summarization tool using OpenAI Whisper and GPT-4 with automated task management.",
    longDescription: "Built a comprehensive meeting assistant that transcribes audio, generates summaries, extracts action items, and automatically creates Trello cards. Supports multiple audio formats and generates downloadable PDF reports.",
    technologies: ["Streamlit", "OpenAI Whisper", "GPT-4", "Trello API", "Python", "PDF Generation"],
    category: "AI/ML",
    featured: true,
    githubUrl: "https://github.com/sriyaa/ai-meeting-assistant",
    liveUrl: "https://ai-meeting-assistant-demo.com",
    imageUrl: "/images/meeting-assistant.jpg",
    date: "March 2025",
    highlights: [
      "Audio transcription with OpenAI Whisper",
      "AI-powered meeting summarization using GPT-4",
      "Automated action item extraction",
      "Trello integration for task management",
      "Multi-format audio support and PDF export"
    ]
  },
  {
    id: 4,
    title: "Movie Recommendation System",
    description: "Advanced content-based movie recommendation system combining TF-IDF cosine similarity with Sentence-Transformers semantic embeddings for highly accurate recommendations.",
    longDescription: "Built a comprehensive movie recommendation platform that intelligently combines TF-IDF and semantic similarities with configurable weights. Features interactive analytics, smart search capabilities, and real-time recommendations with similarity scores.",
    technologies: ["Python", "Streamlit", "TF-IDF", "Sentence-Transformers", "scikit-learn", "Plotly", "pandas", "numpy"],
    category: "AI/ML",
    featured: false,
    githubUrl: "https://github.com/sriyaa/movie-recommendation-system",
    liveUrl: "https://movie-recommender-demo.streamlit.app",
    imageUrl: "/images/movie-recommender.jpg",
    date: "March 2025",
    highlights: [
      "TF-IDF based fast keyword similarity matching",
      "Semantic embeddings using Sentence-Transformers (all-MiniLM-L6-v2)",
      "Hybrid approach with configurable similarity weights",
      "Interactive analytics and recommendation performance comparison",
      "Real-time movie search by themes, genres, or keywords"
    ]
  },
  {
    id: 5,
    title: "Fake News Detection System",
    description: "NLP + Machine Learning pipeline to detect fake news articles with text preprocessing, model training, and REST API for real-time predictions.",
    longDescription: "Developed a comprehensive fake news detection system using multiple ML algorithms including Logistic Regression, Random Forest, and SVM. Features advanced text preprocessing and FastAPI integration for real-time predictions.",
    technologies: ["Python", "FastAPI", "scikit-learn", "NLTK", "Logistic Regression", "Random Forest", "SVM", "joblib"],
    category: "AI/ML",
    featured: false,
    githubUrl: "https://github.com/sriyaa/fake-news-detection",
    liveUrl: "https://fake-news-detector-api.herokuapp.com",
    imageUrl: "/images/fake-news-detector.jpg",
    date: "February 2025",
    highlights: [
      "Advanced text preprocessing (tokenization, stopword removal, stemming)",
      "Multiple ML models: Logistic Regression, Random Forest, SVM",
      "REST API using FastAPI with /predict endpoint",
      "Model persistence with joblib for efficient deployment",
      "Trained on Kaggle Fake News Dataset for high accuracy"
    ]
  },
  {
    id: 6,
    title: "AI Travel Agent using CrewAI & Gemini",
    description: "LLM-powered multi-agent travel planning assistant built with CrewAI and Google Gemini API for personalized travel itineraries.",
    longDescription: "Created an intelligent travel planning system that simulates a real-world AI concierge. Multiple specialized AI agents collaborate to create personalized travel itineraries with local cultural insights and hidden gems.",
    technologies: ["Python", "CrewAI", "Google Gemini API", "LLM", "Multi-Agent Systems", "Natural Language Processing"],
    category: "AI/ML",
    featured: false,
    githubUrl: "https://github.com/sriyaa/ai-travel-agent",
    liveUrl: "https://ai-travel-agent-demo.streamlit.app",
    imageUrl: "/images/ai-travel-agent.jpg",
    date: "January 2025",
    highlights: [
      "Multi-agent architecture using CrewAI framework",
      "Integration with Google Gemini API for intelligent responses",
      "Personalized travel itinerary generation",
      "Local cultural insights and hidden gem recommendations",
      "Real-world AI concierge simulation with natural language interaction"
    ]
  },
  {
    id: 7,
    title: "AI Customer Support System",
    description: "LLM-powered multi-agent customer support system with CrewAI, Google Gemini API, and web tools for intelligent query handling.",
    longDescription: "Developed an advanced customer support system where multiple specialized AI agents collaborate to classify, research, and respond to customer queries. Simulates real-world AI-driven customer support workflows with web integration.",
    technologies: ["Python", "CrewAI", "Google Gemini API", "Web Scraping", "Multi-Agent Systems", "Customer Support AI"],
    category: "AI/ML",
    featured: false,
    githubUrl: "https://github.com/sriyaa/ai-customer-support",
    liveUrl: "https://ai-customer-support-demo.streamlit.app",
    imageUrl: "/images/ai-customer-support.jpg",
    date: "January 2025",
    highlights: [
      "Multi-agent customer support workflow using CrewAI",
      "Advanced query classification and intelligent routing",
      "Integrated web tools for real-time information gathering",
      "Collaborative AI agents for comprehensive response generation",
      "Automated customer query research and resolution"
    ]
  }
];

export const education = [
  {
    id: 1,
    degree: "B.Tech in Computer Science (AI & Robotics)",
    institution: "VIT Chennai",
    duration: "2022 - 2026",
    grade: "CPI: 8.67/10",
    status: "Expected Graduation: 2026",
    description: "Specialized in Artificial Intelligence and Robotics with focus on machine learning, deep learning, and autonomous systems."
  },
  {
    id: 2,
    degree: "AISSCE (Class XII)",
    institution: "KV AFS No.1, Chennai",
    duration: "2022",
    grade: "94%",
    status: "Completed"
  },
  {
    id: 3,
    degree: "AISSE (Class X)",
    institution: "KV AFS No.1, Chennai",
    duration: "2020",
    grade: "96%",
    status: "Completed"
  }
];

export const leadership = [
  {
    id: 1,
    role: "Design Head",
    organization: "VITeach NGO",
    description: "Led design of campaigns, posters, and club merchandise while teaching in government schools.",
    responsibilities: [
      "Led creative design initiatives for social campaigns",
      "Designed promotional materials and merchandise",
      "Taught programming and technology skills in government schools",
      "Coordinated with team members on educational outreach programs"
    ],
    impact: "Improved visual communication and educational outreach"
  },
  {
    id: 2,
    role: "Social Media Head",
    organization: "Culinary Club",
    description: "Organized events and managed engagement campaigns to build community.",
    responsibilities: [
      "Organized culinary events and competitions",
      "Managed social media engagement campaigns",
      "Coordinated with club members and external partners",
      "Developed content strategy for online presence"
    ],
    impact: "Increased club membership and engagement by 150%"
  },
  {
    id: 3,
    role: "Design Team Member",
    organization: "Google Developer Student Club (GDSC)",
    description: "Contributing to design initiatives and developer community building.",
    responsibilities: [
      "Designed promotional materials for tech events",
      "Contributed to UI/UX design discussions",
      "Supported community building initiatives",
      "Participated in hackathons and coding competitions"
    ],
    impact: "Enhanced visual identity and community engagement"
  },
  {
    id: 4,
    role: "Team Member",
    organization: "University Women's Badminton Team",
    description: "Represented university in inter-collegiate badminton competitions.",
    responsibilities: [
      "Competed in inter-university tournaments",
      "Maintained physical fitness and training discipline",
      "Collaborated with team members for strategic gameplay",
      "Balanced academics with sports commitments"
    ],
    impact: "Demonstrated teamwork and time management skills"
  }
];

export const achievements = [
  {
    id: 1,
    title: "Academic Excellence",
    description: "Maintained consistent high academic performance with 8.67 CPI",
    category: "Academic"
  },
  {
    id: 2,
    title: "Industry Recognition",
    description: "Selected for competitive internships at Ford and Nicola Foundation",
    category: "Professional"
  },
  {
    id: 3,
    title: "Leadership Impact",
    description: "Led multiple organizations and increased engagement across communities",
    category: "Leadership"
  },
  {
    id: 4,
    title: "Technical Innovation",
    description: "Developed AI/ML projects with real-world applications and impact",
    category: "Technical"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    role: "Senior Data Engineer",
    company: "Ford Business Solutions",
    content: "Sriyaa demonstrated exceptional skills in cloud architecture and data pipeline development. Her Python expertise and attention to documentation made her an invaluable team member.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Technical Lead",
    company: "Nicola Foundation",
    content: "Outstanding full-stack development capabilities. Sriyaa's ability to work with React, Angular, and backend technologies while maintaining high code quality is impressive.",
    rating: 5
  },
  {
    id: 3,
    name: "Prof. Anita Menon",
    role: "Faculty Advisor",
    company: "VIT Chennai",
    content: "Sriyaa's dedication to AI/ML research and her leadership in various clubs showcase her well-rounded personality and technical expertise.",
    rating: 5
  }
];