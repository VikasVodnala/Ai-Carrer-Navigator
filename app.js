// AI Career Navigator Application JavaScript

// Application data from provided JSON
const appData = {
  "career_paths": [
    {
      "id": "ai_engineer",
      "title": "AI/Machine Learning Engineer",
      "description": "Design and develop intelligent systems and algorithms that can learn and make decisions",
      "growth_rate": "+32%",
      "salary_range": "$95,000 - $180,000",
      "required_skills": ["Python", "TensorFlow", "Machine Learning", "Statistics", "Data Structures"],
      "industry": "Technology",
      "demand_level": "Very High",
      "future_outlook": "Excellent"
    },
    {
      "id": "data_scientist",
      "title": "Data Scientist",
      "description": "Extract insights from complex data to drive business decisions and strategy",
      "growth_rate": "+25%",
      "salary_range": "$85,000 - $165,000",
      "required_skills": ["Python", "R", "SQL", "Statistics", "Data Visualization"],
      "industry": "Technology/Business",
      "demand_level": "Very High",
      "future_outlook": "Excellent"
    },
    {
      "id": "cybersecurity_analyst",
      "title": "Cybersecurity Analyst",
      "description": "Protect organizations from cyber threats and security breaches",
      "growth_rate": "+28%",
      "salary_range": "$75,000 - $145,000",
      "required_skills": ["Network Security", "Ethical Hacking", "Risk Assessment", "Incident Response"],
      "industry": "Technology/Security",
      "demand_level": "High",
      "future_outlook": "Very Good"
    },
    {
      "id": "ux_designer",
      "title": "UX/UI Designer",
      "description": "Design user-centered digital experiences and interfaces",
      "growth_rate": "+18%",
      "salary_range": "$65,000 - $125,000",
      "required_skills": ["Figma", "User Research", "Prototyping", "Visual Design", "Usability Testing"],
      "industry": "Design/Technology",
      "demand_level": "High",
      "future_outlook": "Good"
    },
    {
      "id": "cloud_architect",
      "title": "Cloud Solutions Architect",
      "description": "Design and implement scalable cloud infrastructure solutions",
      "growth_rate": "+30%",
      "salary_range": "$110,000 - $200,000",
      "required_skills": ["AWS", "Azure", "Cloud Computing", "DevOps", "System Architecture"],
      "industry": "Technology/Infrastructure",
      "demand_level": "Very High",
      "future_outlook": "Excellent"
    },
    {
      "id": "product_manager",
      "title": "Product Manager",
      "description": "Guide product development from conception to market launch",
      "growth_rate": "+20%",
      "salary_range": "$85,000 - $165,000",
      "required_skills": ["Product Strategy", "Data Analysis", "User Research", "Project Management"],
      "industry": "Technology/Business",
      "demand_level": "High",
      "future_outlook": "Very Good"
    }
  ],
  "market_trends": [
    {
      "skill": "Artificial Intelligence",
      "growth": "+42%",
      "demand_level": "Critical",
      "category": "Technical"
    },
    {
      "skill": "Cloud Computing",
      "growth": "+35%",
      "demand_level": "Very High",
      "category": "Technical"
    },
    {
      "skill": "Data Science",
      "growth": "+28%",
      "demand_level": "Very High",
      "category": "Technical"
    },
    {
      "skill": "Cybersecurity",
      "growth": "+25%",
      "demand_level": "High",
      "category": "Technical"
    },
    {
      "skill": "Digital Marketing",
      "growth": "+22%",
      "demand_level": "High",
      "category": "Business"
    },
    {
      "skill": "Leadership",
      "growth": "+18%",
      "demand_level": "High",
      "category": "Soft Skills"
    },
    {
      "skill": "Critical Thinking",
      "growth": "+16%",
      "demand_level": "High",
      "category": "Soft Skills"
    },
    {
      "skill": "Emotional Intelligence",
      "growth": "+14%",
      "demand_level": "Medium",
      "category": "Soft Skills"
    }
  ],
  "skill_categories": [
    {
      "name": "Technical Skills",
      "skills": [
        "Programming Languages (Python, JavaScript, Java)",
        "Cloud Platforms (AWS, Azure, Google Cloud)",
        "Data Analysis & Visualization",
        "Machine Learning & AI",
        "Cybersecurity",
        "Web Development",
        "Database Management",
        "DevOps & Automation"
      ]
    },
    {
      "name": "Soft Skills",
      "skills": [
        "Communication",
        "Leadership",
        "Problem Solving",
        "Critical Thinking",
        "Teamwork",
        "Adaptability",
        "Time Management",
        "Emotional Intelligence"
      ]
    },
    {
      "name": "Business Skills",
      "skills": [
        "Project Management",
        "Strategic Planning",
        "Data-Driven Decision Making",
        "Customer Experience",
        "Digital Marketing",
        "Financial Analysis",
        "Process Improvement",
        "Change Management"
      ]
    }
  ],
  "industry_growth": [
    {
      "industry": "Artificial Intelligence",
      "growth_rate": "+32%",
      "job_openings": "2.3M",
      "avg_salary": "$125,000"
    },
    {
      "industry": "Renewable Energy",
      "growth_rate": "+28%",
      "job_openings": "1.8M",
      "avg_salary": "$85,000"
    },
    {
      "industry": "Healthcare Technology",
      "growth_rate": "+25%",
      "job_openings": "1.5M",
      "avg_salary": "$95,000"
    },
    {
      "industry": "Cybersecurity",
      "growth_rate": "+22%",
      "job_openings": "1.2M",
      "avg_salary": "$105,000"
    },
    {
      "industry": "E-commerce",
      "growth_rate": "+20%",
      "job_openings": "2.1M",
      "avg_salary": "$75,000"
    }
  ],
  "assessment_questions": [
    {
      "id": 1,
      "category": "Technical Skills",
      "question": "How would you rate your programming experience?",
      "type": "scale",
      "options": ["Beginner", "Intermediate", "Advanced", "Expert"]
    },
    {
      "id": 2,
      "category": "Technical Skills", 
      "question": "Which programming languages are you proficient in?",
      "type": "multiple_choice",
      "options": ["Python", "JavaScript", "Java", "C++", "R", "SQL", "None"]
    },
    {
      "id": 3,
      "category": "Technical Skills",
      "question": "How comfortable are you with cloud platforms?",
      "type": "scale",
      "options": ["No Experience", "Basic", "Intermediate", "Advanced"]
    },
    {
      "id": 4,
      "category": "Soft Skills",
      "question": "How comfortable are you with public speaking and presentations?",
      "type": "scale",
      "options": ["Very Uncomfortable", "Uncomfortable", "Comfortable", "Very Comfortable"]
    },
    {
      "id": 5,
      "category": "Soft Skills",
      "question": "How do you prefer to work on projects?",
      "type": "single_choice",
      "options": ["Independently", "In small teams", "In large teams", "Depends on the project"]
    },
    {
      "id": 6,
      "category": "Business Skills",
      "question": "Do you have experience in project management?",
      "type": "single_choice",
      "options": ["No experience", "Some experience", "Extensive experience", "Professional certification"]
    },
    {
      "id": 7,
      "category": "Business Skills",
      "question": "How comfortable are you with data analysis and decision making?",
      "type": "scale",
      "options": ["Not comfortable", "Somewhat comfortable", "Comfortable", "Very comfortable"]
    },
    {
      "id": 8,
      "category": "Technical Skills",
      "question": "Which areas of technology interest you most?",
      "type": "multiple_choice",
      "options": ["Artificial Intelligence", "Web Development", "Mobile Apps", "Data Science", "Cybersecurity", "Cloud Computing"]
    }
  ]
};

// Application state
let appState = {
  currentSection: 'dashboard',
  assessmentProgress: 0,
  currentQuestion: 0,
  assessmentAnswers: {},
  userProfile: {
    skills: {},
    interests: [],
    experience_level: 'beginner'
  },
  careerRecommendations: [],
  completedAssessment: false
};

// Chart instances
let skillsRadarChart = null;
let skillsDemandChart = null;
let industryGrowthChart = null;

// Initialize app when DOM loads
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing app...');
  initializeApp();
});

function initializeApp() {
  console.log('Initializing AI Career Navigator...');
  
  setupNavigation();
  loadDashboard();
  setupEventListeners();
  
  console.log('App initialized successfully');
}

// Navigation functionality
function setupNavigation() {
  console.log('Setting up navigation...');
  
  // Get all nav buttons
  const navButtons = document.querySelectorAll('.nav-btn[data-section]');
  console.log('Found nav buttons:', navButtons.length);
  
  navButtons.forEach(btn => {
    const section = btn.getAttribute('data-section');
    console.log('Setting up nav button for section:', section);
    
    // Remove any existing event listeners and add new ones
    btn.removeEventListener('click', handleNavClick);
    btn.addEventListener('click', handleNavClick);
  });
  
  // Setup CTA buttons
  setupCTAButtons();
}

function handleNavClick(event) {
  event.preventDefault();
  event.stopPropagation();
  
  const section = this.getAttribute('data-section');
  console.log('Navigation clicked:', section);
  
  if (section) {
    showSection(section);
  }
}

function setupCTAButtons() {
  // Setup "Take Skills Assessment" buttons
  const assessmentButtons = document.querySelectorAll('button');
  assessmentButtons.forEach(btn => {
    if (btn.textContent.includes('Take Skills Assessment') || btn.textContent.includes('Start Assessment')) {
      btn.onclick = function(e) {
        e.preventDefault();
        console.log('Assessment button clicked');
        showSection('assessment');
      };
    }
    
    if (btn.textContent.includes('Explore Job Market')) {
      btn.onclick = function(e) {
        e.preventDefault();
        console.log('Explore market button clicked');
        showSection('analytics');
      };
    }
    
    if (btn.textContent.includes('Begin Assessment')) {
      btn.onclick = function(e) {
        e.preventDefault();
        console.log('Begin assessment button clicked');
        beginAssessment();
      };
    }
  });
}

function showSection(sectionId) {
  console.log('Showing section:', sectionId);
  
  // Hide all sections first
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  
  // Show target section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
    appState.currentSection = sectionId;
    
    // Update nav buttons
    updateActiveNavButton(sectionId);
    
    // Load section-specific content
    loadSectionContent(sectionId);
    
    console.log('Successfully showed section:', sectionId);
  } else {
    console.error('Section not found:', sectionId);
  }
}

function updateActiveNavButton(activeSection) {
  const navButtons = document.querySelectorAll('.nav-btn[data-section]');
  navButtons.forEach(btn => {
    const section = btn.getAttribute('data-section');
    if (section === activeSection) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function loadSectionContent(sectionId) {
  console.log('Loading content for section:', sectionId);
  
  switch(sectionId) {
    case 'dashboard':
      // Dashboard content already loaded
      break;
    case 'assessment':
      loadAssessmentSection();
      break;
    case 'careers':
      loadCareerRecommendations();
      break;
    case 'analytics':
      setTimeout(() => loadMarketAnalytics(), 100);
      break;
    case 'learning':
      loadLearningSection();
      break;
    default:
      console.log('No special loading required for section:', sectionId);
  }
}

// Dashboard functionality
function loadDashboard() {
  console.log('Loading dashboard...');
  loadMarketInsights();
  loadUserAchievements();
  updateProgressBars();
}

function loadMarketInsights() {
  const container = document.getElementById('market-insights');
  if (!container) return;
  
  const insights = [
    {
      icon: '🚀',
      title: 'AI Jobs Surge',
      description: 'AI engineering roles increased by 42% this year'
    },
    {
      icon: '☁️',
      title: 'Cloud Demand',
      description: 'Cloud computing skills are in high demand across all industries'
    },
    {
      icon: '🔒',
      title: 'Security Focus',
      description: 'Cybersecurity professionals see 28% salary growth'
    }
  ];
  
  container.innerHTML = insights.map(insight => `
    <div class="insight-item">
      <div class="insight-icon">${insight.icon}</div>
      <div class="insight-text">
        <h4>${insight.title}</h4>
        <p>${insight.description}</p>
      </div>
    </div>
  `).join('');
}

function loadUserAchievements() {
  const container = document.getElementById('user-achievements');
  if (!container) return;
  
  const achievements = [
    {
      badge: '🎯',
      title: 'Assessment Started',
      description: 'Complete your skills assessment'
    },
    {
      badge: '💼',
      title: 'Career Explorer',
      description: 'Explore recommended career paths'
    },
    {
      badge: '📚',
      title: 'Learning Journey',
      description: 'Create your personalized learning plan'
    }
  ];
  
  container.innerHTML = achievements.map(achievement => `
    <div class="achievement-item">
      <div class="achievement-badge">${achievement.badge}</div>
      <div class="achievement-text">
        <h4>${achievement.title}</h4>
        <p>${achievement.description}</p>
      </div>
    </div>
  `).join('');
}

function updateProgressBars() {
  const assessmentProgress = appState.completedAssessment ? 100 : appState.assessmentProgress;
  const explorationProgress = appState.careerRecommendations.length > 0 ? 100 : 0;
  const learningProgress = appState.completedAssessment && appState.careerRecommendations.length > 0 ? 50 : 0;
  
  updateProgressBar('assessment-progress', assessmentProgress);
  updateProgressBar('exploration-progress', explorationProgress);
  updateProgressBar('learning-progress', learningProgress);
}

function updateProgressBar(elementId, progress) {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.width = `${progress}%`;
  }
}

// Assessment functionality
function loadAssessmentSection() {
  console.log('Loading assessment section...');
  
  const totalQuestionsElement = document.getElementById('total-questions');
  if (totalQuestionsElement) {
    totalQuestionsElement.textContent = appData.assessment_questions.length;
  }
  
  const currentQuestionElement = document.getElementById('current-question');
  if (currentQuestionElement) {
    currentQuestionElement.textContent = '0';
  }
}

function beginAssessment() {
  console.log('Beginning skills assessment...');
  
  appState.currentQuestion = 0;
  appState.assessmentAnswers = {};
  
  showQuestion();
}

function showQuestion() {
  const question = appData.assessment_questions[appState.currentQuestion];
  if (!question) {
    console.error('Question not found at index:', appState.currentQuestion);
    return;
  }
  
  console.log('Showing question:', appState.currentQuestion + 1, 'of', appData.assessment_questions.length);
  
  const container = document.getElementById('assessment-content');
  const currentQuestionSpan = document.getElementById('current-question');
  const progressBar = document.getElementById('assessment-progress-bar');
  
  // Update progress
  const progress = ((appState.currentQuestion + 1) / appData.assessment_questions.length) * 100;
  if (progressBar) {
    progressBar.style.width = `${progress}%`;
  }
  if (currentQuestionSpan) {
    currentQuestionSpan.textContent = appState.currentQuestion + 1;
  }
  
  // Create question HTML
  let optionsHTML = '';
  
  if (question.type === 'scale') {
    optionsHTML = `
      <div class="answer-options scale-options">
        ${question.options.map((option, index) => `
          <div class="answer-option" data-index="${index}" data-value="${option}">
            <strong>${index + 1}</strong><br>
            ${option}
          </div>
        `).join('')}
      </div>
    `;
  } else if (question.type === 'multiple_choice') {
    optionsHTML = `
      <div class="answer-options multiple-choice-options">
        ${question.options.map((option, index) => `
          <div class="answer-option" data-index="${index}" data-value="${option}">
            <input type="checkbox" id="option-${index}" style="margin-right: 8px;">
            <label for="option-${index}">${option}</label>
          </div>
        `).join('')}
      </div>
    `;
  } else {
    optionsHTML = `
      <div class="answer-options">
        ${question.options.map((option, index) => `
          <div class="answer-option" data-index="${index}" data-value="${option}">
            ${option}
          </div>
        `).join('')}
      </div>
    `;
  }
  
  container.innerHTML = `
    <div class="question-card fade-in-up">
      <div class="question-category">${question.category}</div>
      <h3 class="question-title">${question.question}</h3>
      ${optionsHTML}
      <div class="question-actions">
        ${appState.currentQuestion > 0 ? `<button class="btn btn--secondary" id="prev-btn">Previous</button>` : '<div></div>'}
        <button class="btn btn--primary" id="next-btn" disabled>
          ${appState.currentQuestion === appData.assessment_questions.length - 1 ? 'Complete Assessment' : 'Next Question'}
        </button>
      </div>
    </div>
  `;
  
  // Setup question event listeners
  setupQuestionEventListeners(question);
}

function setupQuestionEventListeners(question) {
  const options = document.querySelectorAll('.answer-option');
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');
  
  // Setup answer option clicks
  options.forEach(option => {
    option.addEventListener('click', function() {
      const index = parseInt(this.getAttribute('data-index'));
      const value = this.getAttribute('data-value');
      
      if (question.type === 'multiple_choice') {
        toggleMultipleChoice(index, value, this);
      } else {
        selectAnswer(index, value, this);
      }
    });
  });
  
  // Setup navigation buttons
  if (nextBtn) {
    nextBtn.addEventListener('click', nextQuestion);
  }
  
  if (prevBtn) {
    prevBtn.addEventListener('click', previousQuestion);
  }
}

function selectAnswer(index, value, element) {
  const question = appData.assessment_questions[appState.currentQuestion];
  appState.assessmentAnswers[question.id] = { index, value, type: 'single' };
  
  // Update UI
  const options = document.querySelectorAll('.answer-option');
  options.forEach(option => option.classList.remove('selected'));
  element.classList.add('selected');
  
  // Enable next button
  const nextBtn = document.getElementById('next-btn');
  if (nextBtn) {
    nextBtn.disabled = false;
  }
}

function toggleMultipleChoice(index, value, element) {
  const question = appData.assessment_questions[appState.currentQuestion];
  if (!appState.assessmentAnswers[question.id]) {
    appState.assessmentAnswers[question.id] = { values: [], type: 'multiple' };
  }
  
  const checkbox = element.querySelector('input[type="checkbox"]');
  const answer = appState.assessmentAnswers[question.id];
  
  if (checkbox.checked) {
    if (!answer.values.includes(value)) {
      answer.values.push(value);
    }
  } else {
    answer.values = answer.values.filter(v => v !== value);
  }
  
  // Enable next button if at least one option selected
  const nextBtn = document.getElementById('next-btn');
  if (nextBtn) {
    nextBtn.disabled = answer.values.length === 0;
  }
}

function nextQuestion() {
  console.log('Next question clicked');
  
  if (appState.currentQuestion < appData.assessment_questions.length - 1) {
    appState.currentQuestion++;
    appState.assessmentProgress = (appState.currentQuestion / appData.assessment_questions.length) * 100;
    showQuestion();
  } else {
    completeAssessment();
  }
}

function previousQuestion() {
  console.log('Previous question clicked');
  
  if (appState.currentQuestion > 0) {
    appState.currentQuestion--;
    showQuestion();
  }
}

function completeAssessment() {
  console.log('Assessment completed!', appState.assessmentAnswers);
  
  appState.completedAssessment = true;
  appState.assessmentProgress = 100;
  
  // Calculate skills profile
  calculateSkillsProfile();
  
  // Generate career recommendations
  generateCareerRecommendations();
  
  // Show results
  showAssessmentResults();
  
  // Update dashboard progress
  updateProgressBars();
}

function calculateSkillsProfile() {
  const profile = {
    'Technical Skills': 0,
    'Soft Skills': 0,
    'Business Skills': 0
  };
  
  let categoryCount = {
    'Technical Skills': 0,
    'Soft Skills': 0,
    'Business Skills': 0
  };
  
  // Calculate average scores per category
  appData.assessment_questions.forEach(question => {
    const answer = appState.assessmentAnswers[question.id];
    if (answer && answer.type === 'single') {
      const score = answer.index + 1; // Convert to 1-4 scale
      profile[question.category] += score;
      categoryCount[question.category]++;
    }
  });
  
  // Normalize scores
  Object.keys(profile).forEach(category => {
    if (categoryCount[category] > 0) {
      profile[category] = (profile[category] / categoryCount[category]) / 4 * 100; // Convert to percentage
    }
  });
  
  appState.userProfile.skills = profile;
  console.log('Skills profile calculated:', profile);
}

function generateCareerRecommendations() {
  // Simple AI recommendation algorithm based on skills assessment
  const userSkills = appState.userProfile.skills;
  const recommendations = [];
  
  appData.career_paths.forEach(career => {
    let matchScore = 0;
    
    // Calculate match based on user's skill categories
    if (career.industry.includes('Technology')) {
      matchScore += userSkills['Technical Skills'] * 0.4;
    }
    if (career.required_skills.some(skill => skill.includes('Management') || skill.includes('Strategy'))) {
      matchScore += userSkills['Business Skills'] * 0.3;
    }
    matchScore += userSkills['Soft Skills'] * 0.3;
    
    // Add some randomness and boost for high-demand careers
    if (career.demand_level === 'Very High') {
      matchScore += 10;
    } else if (career.demand_level === 'High') {
      matchScore += 5;
    }
    
    recommendations.push({
      ...career,
      matchScore: Math.min(matchScore, 100)
    });
  });
  
  // Sort by match score and take top recommendations
  recommendations.sort((a, b) => b.matchScore - a.matchScore);
  appState.careerRecommendations = recommendations.slice(0, 4);
  
  console.log('Career recommendations generated:', appState.careerRecommendations);
}

function showAssessmentResults() {
  const resultsSection = document.getElementById('assessment-results');
  if (resultsSection) {
    resultsSection.classList.remove('hidden');
    
    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth' });
    
    // Initialize skills radar chart
    setTimeout(() => initializeSkillsRadar(), 500);
    
    // Show skills breakdown
    showSkillsBreakdown();
  }
}

function initializeSkillsRadar() {
  const canvas = document.getElementById('skills-radar-chart');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  const skills = appState.userProfile.skills;
  
  if (skillsRadarChart) {
    skillsRadarChart.destroy();
  }
  
  skillsRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: Object.keys(skills),
      datasets: [{
        label: 'Your Skills Profile',
        data: Object.values(skills),
        backgroundColor: 'rgba(31, 184, 205, 0.2)',
        borderColor: '#1FB8CD',
        borderWidth: 2,
        pointBackgroundColor: '#1FB8CD',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#1FB8CD'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 20
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

function showSkillsBreakdown() {
  const container = document.getElementById('skills-breakdown');
  if (!container) return;
  
  const skillsData = appState.userProfile.skills;
  
  container.innerHTML = Object.entries(skillsData).map(([category, score]) => {
    const level = getSkillLevel(score);
    
    return `
      <div class="skill-category">
        <h4>${category}</h4>
        <div class="skill-list">
          <div class="skill-item">
            <span class="skill-name">Overall Level</span>
            <div class="skill-level">
              <span class="skill-score">${Math.round(score)}%</span>
              <div class="skill-bar">
                <div class="skill-bar-fill" style="width: ${score}%"></div>
              </div>
            </div>
          </div>
          <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-top: var(--space-12);">
            Level: <strong>${level}</strong>
          </p>
        </div>
      </div>
    `;
  }).join('');
}

function getSkillLevel(score) {
  if (score >= 80) return 'Expert';
  if (score >= 60) return 'Advanced';
  if (score >= 40) return 'Intermediate';
  return 'Beginner';
}

// Career recommendations functionality
function loadCareerRecommendations() {
  console.log('Loading career recommendations...');
  
  const container = document.getElementById('career-recommendations');
  if (!container) return;
  
  if (!appState.completedAssessment || appState.careerRecommendations.length === 0) {
    container.innerHTML = `
      <div class="recommendation-placeholder card">
        <div class="card__body">
          <h3>Complete Your Skills Assessment</h3>
          <p>Take our comprehensive skills assessment first to get personalized career recommendations powered by AI.</p>
          <button class="btn btn--primary" id="start-assessment-from-careers">Start Assessment</button>
        </div>
      </div>
    `;
    
    // Setup button event listener
    const startBtn = document.getElementById('start-assessment-from-careers');
    if (startBtn) {
      startBtn.onclick = function() {
        showSection('assessment');
      };
    }
    
    return;
  }
  
  container.innerHTML = appState.careerRecommendations.map(career => `
    <div class="career-card" data-career-id="${career.id}">
      <div class="career-match">${Math.round(career.matchScore)}% Match</div>
      <h3 class="career-title">${career.title}</h3>
      <p class="career-description">${career.description}</p>
      <div class="career-stats">
        <div class="career-stat">
          <span class="career-stat-value">${career.growth_rate}</span>
          <span class="career-stat-label">Growth Rate</span>
        </div>
        <div class="career-stat">
          <span class="career-stat-value">${career.salary_range.split(' - ')[0]}</span>
          <span class="career-stat-label">Starting Salary</span>
        </div>
      </div>
      <div class="career-tags">
        ${career.required_skills.slice(0, 3).map(skill => `<span class="career-tag">${skill}</span>`).join('')}
      </div>
    </div>
  `).join('');
  
  // Setup career card click handlers
  const careerCards = document.querySelectorAll('.career-card[data-career-id]');
  careerCards.forEach(card => {
    card.addEventListener('click', function() {
      const careerId = this.getAttribute('data-career-id');
      showCareerDetails(careerId);
    });
  });
}

function showCareerDetails(careerId) {
  const career = appData.career_paths.find(c => c.id === careerId);
  if (!career) return;
  
  const modal = document.getElementById('career-modal');
  const title = document.getElementById('career-modal-title');
  const body = document.getElementById('career-modal-body');
  
  title.textContent = career.title;
  
  const matchingCareer = appState.careerRecommendations.find(c => c.id === careerId);
  const matchScore = matchingCareer ? Math.round(matchingCareer.matchScore) : 'N/A';
  
  body.innerHTML = `
    <div class="career-details">
      <div class="match-score" style="text-align: center; margin-bottom: var(--space-20);">
        <span style="background: var(--color-success); color: var(--color-btn-primary-text); padding: var(--space-8) var(--space-16); border-radius: var(--radius-full); font-weight: var(--font-weight-bold);">
          ${matchScore}% Match for Your Profile
        </span>
      </div>
      
      <h4>Role Description</h4>
      <p>${career.description}</p>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-20); margin: var(--space-20) 0;">
        <div>
          <h4>Salary Range</h4>
          <p style="font-size: var(--font-size-lg); color: var(--color-primary); font-weight: var(--font-weight-bold);">${career.salary_range}</p>
        </div>
        <div>
          <h4>Growth Rate</h4>
          <p style="font-size: var(--font-size-lg); color: var(--color-success); font-weight: var(--font-weight-bold);">${career.growth_rate}</p>
        </div>
      </div>
      
      <div style="margin: var(--space-20) 0;">
        <h4>Industry</h4>
        <p>${career.industry}</p>
        
        <h4>Demand Level</h4>
        <p>${career.demand_level}</p>
        
        <h4>Future Outlook</h4>
        <p>${career.future_outlook}</p>
      </div>
      
      <h4>Required Skills</h4>
      <div style="display: flex; flex-wrap: wrap; gap: var(--space-8); margin-bottom: var(--space-20);">
        ${career.required_skills.map(skill => `<span class="career-tag">${skill}</span>`).join('')}
      </div>
      
      <div style="text-align: center; margin-top: var(--space-24);">
        <button class="btn btn--primary" id="create-learning-path" data-career-id="${career.id}">Create Learning Path</button>
      </div>
    </div>
  `;
  
  // Setup learning path button
  const learningPathBtn = document.getElementById('create-learning-path');
  if (learningPathBtn) {
    learningPathBtn.onclick = function() {
      const careerId = this.getAttribute('data-career-id');
      generateLearningPath(careerId);
    };
  }
  
  modal.classList.remove('hidden');
}

function closeCareerModal() {
  const modal = document.getElementById('career-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

function generateLearningPath(careerId) {
  console.log('Generating learning path for career:', careerId);
  
  // Close modal and show learning section
  closeCareerModal();
  showSection('learning');
  
  // Generate personalized learning content
  createLearningPlan(careerId);
}

// Learning section functionality
function loadLearningSection() {
  console.log('Loading learning section...');
  
  if (appState.completedAssessment && appState.careerRecommendations.length > 0) {
    // Auto-generate learning plan for first recommended career if not already done
    const learningPlan = document.getElementById('learning-plan');
    const learningContent = document.querySelector('.learning-content');
    
    if (learningContent && !learningContent.classList.contains('hidden') && learningPlan.classList.contains('hidden')) {
      createLearningPlan(appState.careerRecommendations[0].id);
    }
  }
}

function createLearningPlan(careerId) {
  const career = appData.career_paths.find(c => c.id === careerId);
  if (!career) return;
  
  const learningPlan = document.getElementById('learning-plan');
  const learningContent = document.querySelector('.learning-content');
  
  // Hide placeholder and show plan
  if (learningContent) {
    learningContent.classList.add('hidden');
  }
  if (learningPlan) {
    learningPlan.classList.remove('hidden');
  }
  
  const stages = [
    {
      number: 1,
      title: 'Foundation Building',
      duration: '2-3 months',
      courses: [
        { title: 'Programming Fundamentals', provider: 'Codecademy', duration: '4 weeks' },
        { title: 'Computer Science Basics', provider: 'edX', duration: '6 weeks' }
      ]
    },
    {
      number: 2,
      title: 'Specialized Skills',
      duration: '3-4 months',
      courses: career.required_skills.slice(0, 3).map(skill => ({
        title: `${skill} Mastery`,
        provider: 'Coursera',
        duration: '6-8 weeks'
      }))
    },
    {
      number: 3,
      title: 'Advanced Practice',
      duration: '2-3 months',
      courses: [
        { title: 'Real-world Projects', provider: 'GitHub', duration: 'Ongoing' },
        { title: 'Industry Certifications', provider: 'Various', duration: '4-6 weeks' }
      ]
    }
  ];
  
  const roadmapContainer = document.getElementById('learning-roadmap');
  if (roadmapContainer) {
    roadmapContainer.innerHTML = `
      <div class="learning-header" style="text-align: center; margin-bottom: var(--space-32);">
        <h3>Your Personalized Learning Path</h3>
        <p>Customized roadmap to become a <strong>${career.title}</strong></p>
      </div>
      
      ${stages.map(stage => `
        <div class="learning-stage">
          <div class="stage-header">
            <div class="stage-number">${stage.number}</div>
            <h3 class="stage-title">${stage.title}</h3>
            <span class="stage-duration">${stage.duration}</span>
          </div>
          <div class="course-list">
            ${stage.courses.map(course => `
              <div class="course-item">
                <div class="course-title">${course.title}</div>
                <div class="course-provider">${course.provider}</div>
                <div class="course-duration">${course.duration}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    `;
  }
  
  // Update progress
  updateProgressBars();
}

// Market analytics functionality
function loadMarketAnalytics() {
  console.log('Loading market analytics...');
  
  initializeSkillsDemandChart();
  initializeIndustryGrowthChart();
  loadSalaryTrends();
  loadMarketStats();
}

function initializeSkillsDemandChart() {
  const canvas = document.getElementById('skills-demand-chart');
  if (!canvas) {
    console.error('Skills demand chart canvas not found');
    return;
  }
  
  // Destroy existing chart
  if (skillsDemandChart) {
    skillsDemandChart.destroy();
  }
  
  const ctx = canvas.getContext('2d');
  const skillsData = appData.market_trends.slice(0, 6);
  
  skillsDemandChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: skillsData.map(skill => skill.skill),
      datasets: [{
        label: 'Growth Rate',
        data: skillsData.map(skill => parseInt(skill.growth.replace('+', '').replace('%', ''))),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545'],
        borderColor: '#fff',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return value + '%';
            }
          }
        }
      }
    }
  });
  
  console.log('Skills demand chart initialized');
}

function initializeIndustryGrowthChart() {
  const canvas = document.getElementById('industry-growth-chart');
  if (!canvas) {
    console.error('Industry growth chart canvas not found');
    return;
  }
  
  // Destroy existing chart
  if (industryGrowthChart) {
    industryGrowthChart.destroy();
  }
  
  const ctx = canvas.getContext('2d');
  const industryData = appData.industry_growth;
  
  industryGrowthChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: industryData.map(industry => industry.industry),
      datasets: [{
        data: industryData.map(industry => parseFloat(industry.job_openings.replace('M', ''))),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'],
        borderWidth: 2,
        borderColor: '#fff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
  
  console.log('Industry growth chart initialized');
}

function loadSalaryTrends() {
  const container = document.getElementById('salary-trends');
  if (!container) return;
  
  container.innerHTML = appData.industry_growth.map(industry => `
    <div class="trend-item">
      <span class="trend-label">${industry.industry}</span>
      <span class="trend-value">${industry.avg_salary}</span>
    </div>
  `).join('');
}

function loadMarketStats() {
  const container = document.getElementById('market-stats');
  if (!container) return;
  
  const stats = [
    { label: 'Total Job Openings', value: '9.9M+' },
    { label: 'Average Growth Rate', value: '+25%' },
    { label: 'Remote Opportunities', value: '67%' },
    { label: 'Skills in High Demand', value: '15+' }
  ];
  
  container.innerHTML = stats.map(stat => `
    <div class="stat-row">
      <span class="stat-label">${stat.label}</span>
      <span class="stat-value">${stat.value}</span>
    </div>
  `).join('');
}

// Event listeners
function setupEventListeners() {
  // Close modals on backdrop click
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
      e.target.classList.add('hidden');
    }
  });
  
  // Handle escape key for modals
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const modals = document.querySelectorAll('.modal');
      modals.forEach(modal => modal.classList.add('hidden'));
    }
  });
  
  // Close button handlers
  const closeBtns = document.querySelectorAll('.close-btn');
  closeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const modal = this.closest('.modal');
      if (modal) {
        modal.classList.add('hidden');
      }
    });
  });
}

console.log('AI Career Navigator JavaScript loaded successfully');