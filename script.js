// Global variables
let currentTheme = 'light';
let currentGalleryImages = [];
let currentLightboxIndex = 0;

// Students data
const studentsData = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Class President",
        category: "president",
        image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
        bio: "Leading with passion and dedication to create positive change in our academic community.",
        badges: ["president"]
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Vice President",
        category: "president",
        image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
        bio: "Supporting leadership initiatives and fostering collaborative relationships among students.",
        badges: ["president"]
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Secretary",
        category: "president",
        image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
        bio: "Maintaining detailed records and ensuring effective communication throughout our organization.",
        badges: ["president"]
    },
    {
        id: 4,
        name: "James Wilson",
        role: "Treasurer",
        category: "president",
        image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
        bio: "Managing financial resources responsibly and transparently for all class activities.",
        badges: ["president"]
    },
    {
        id: 5,
        name: "Lisa Thompson",
        role: "Events Coordinator",
        category: "committee",
        image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg",
        bio: "Planning memorable events that bring our class together and create lasting memories.",
        badges: ["committee"]
    },
    {
        id: 6,
        name: "David Park",
        role: "Communications Director",
        category: "committee",
        image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
        bio: "Managing our digital presence and keeping everyone informed about important updates.",
        badges: ["committee"]
    },
    {
        id: 7,
        name: "Rachel Green",
        role: "Academic Representative",
        category: "member",
        image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
        bio: "Advocating for student academic interests and facilitating communication with faculty.",
        badges: ["member"]
    },
    {
        id: 8,
        name: "Alex Martinez",
        role: "Social Media Manager",
        category: "committee",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg",
        bio: "Creating engaging content and managing our online community presence effectively.",
        badges: ["committee"]
    },
    {
        id: 9,
        name: "Jessica Wang",
        role: "Cultural Ambassador",
        category: "member",
        image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
        bio: "Promoting diversity and inclusion while celebrating our rich cultural heritage.",
        badges: ["member"]
    },
    {
        id: 10,
        name: "Thomas Brown",
        role: "Sports Coordinator",
        category: "committee",
        image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg",
        bio: "Organizing athletic activities and promoting healthy competition among classmates.",
        badges: ["committee"]
    },
    {
        id: 11,
        name: "Maria Garcia",
        role: "Volunteer Coordinator",
        category: "member",
        image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
        bio: "Organizing community service projects and encouraging civic engagement.",
        badges: ["member"]
    },
    {
        id: 12,
        name: "Ryan Lee",
        role: "Technology Officer",
        category: "committee",
        image: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
        bio: "Managing technical infrastructure and supporting digital initiatives for our class.",
        badges: ["committee"]
    }
];

const container = document.getElementById("studentsGrid");

studentsData.forEach(student => {
    const card = document.createElement("div");
    card.className = "student-card";
    card.innerHTML = `
    <h2 class="student-name">${student.name}</h2>
    <p class="student-role">${student.role}</p>
    <p class="student-bio">${student.bio}</p>
    `;
    container.appendChild(card);
});


// Gallery data
const galleryData = [
    {
        id: 1,
        src: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg",
        caption: "Annual Class Assembly",
        category: "events"
    },
    {
        id: 2,
        src: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg",
        caption: "Academic Excellence Awards",
        category: "academic"
    },
    {
        id: 3,
        src: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
        caption: "Study Group Session",
        category: "academic"
    },
    {
        id: 4,
        src: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg",
        caption: "Class Social Gathering",
        category: "social"
    },
    {
        id: 5,
        src: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg",
        caption: "Graduation Preparation",
        category: "events"
    },
    {
        id: 6,
        src: "https://images.pexels.com/photos/1552617/pexels-photo-1552617.jpeg",
        caption: "Library Study Sessions",
        category: "academic"
    },
    {
        id: 7,
        src: "https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg",
        caption: "Team Building Workshop",
        category: "social"
    },
    {
        id: 8,
        src: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg",
        caption: "Cultural Heritage Day",
        category: "events"
    },
    {
        id: 9,
        src: "https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg",
        caption: "Research Project Presentations",
        category: "academic"
    },
    {
        id: 10,
        src: "https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg",
        caption: "End of Year Celebration",
        category: "social"
    },
    {
        id: 11,
        src: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
        caption: "Awards Ceremony",
        category: "events"
    },
    {
        id: 12,
        src: "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg",
        caption: "Community Service Project",
        category: "social"
    }
];

// DOM elements
const navbar = document.getElementById('navbar');
const themeToggle = document.getElementById('themeToggle');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.querySelector('.nav-menu');
const studentsGrid = document.getElementById('studentsGrid');
const studentSearch = document.getElementById('studentSearch');
const galleryGrid = document.getElementById('galleryGrid');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    renderStudents();
    renderGallery();
    setupEventListeners();
    setupScrollAnimations();
    setupNavigation();
});

// Theme management
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    currentTheme = savedTheme;
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
    
    // Add transition effect
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 300);
}

function updateThemeIcon() {
    const themeIcon = document.querySelector('.theme-icon');
    themeIcon.textContent = currentTheme === 'light' ? '🌙' : '☀️';
}

// Students rendering and filtering
function renderStudents(filter = 'all', searchTerm = '') {
    let filteredStudents = studentsData;
    
    // Apply category filter
    if (filter !== 'all') {
        filteredStudents = filteredStudents.filter(student => 
            student.category === filter || student.badges.includes(filter)
        );
    }
    
    // Apply search filter
    if (searchTerm) {
        filteredStudents = filteredStudents.filter(student =>
            student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.bio.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    studentsGrid.innerHTML = filteredStudents.map(student => `
        <div class="student-card" data-category="${student.category}">
            <img src="${student.image}" alt="${student.name}" class="student-image" loading="lazy">
            <h3 class="student-name">${student.name}</h3>
            <p class="student-role">${student.role}</p>
            <div class="student-badges">
                ${student.badges.map(badge => `
                    <span class="student-badge ${badge}">${badge}</span>
                `).join('')}
            </div>
            <p class="student-bio">${student.bio}</p>
        </div>
    `).join('');
    
    // Animate cards
    const cards = document.querySelectorAll('.student-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in-up');
    });
}

// Gallery rendering and filtering
function renderGallery(filter = 'all') {
    let filteredGallery = galleryData;
    
    if (filter !== 'all') {
        filteredGallery = filteredGallery.filter(item => item.category === filter);
    }
    
    currentGalleryImages = filteredGallery;
    
    galleryGrid.innerHTML = filteredGallery.map((item, index) => `
        <div class="gallery-item" data-category="${item.category}" onclick="openLightbox(${index})">
            <img src="${item.src}" alt="${item.caption}" loading="lazy">
            <div class="gallery-overlay">
                <div class="gallery-caption">${item.caption}</div>
            </div>
        </div>
    `).join('');
    
    // Animate gallery items
    const items = document.querySelectorAll('.gallery-item');
    items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('fade-in-up');
    });
}

// Lightbox functionality
function openLightbox(index) {
    currentLightboxIndex = index;
    const image = currentGalleryImages[index];
    
    lightboxImage.src = image.src;
    lightboxImage.alt = image.caption;
    lightboxCaption.textContent = image.caption;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function navigateLightbox(direction) {
    if (direction === 'prev') {
        currentLightboxIndex = (currentLightboxIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
    } else {
        currentLightboxIndex = (currentLightboxIndex + 1) % currentGalleryImages.length;
    }
    
    const image = currentGalleryImages[currentLightboxIndex];
    lightboxImage.src = image.src;
    lightboxImage.alt = image.caption;
    lightboxCaption.textContent = image.caption;
}

// Event listeners setup
function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Student search
    studentSearch.addEventListener('input', function() {
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
        renderStudents(activeFilter, this.value);
    });
    
    // Student filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderStudents(this.dataset.filter, studentSearch.value);
        });
    });
    
    // Gallery filter buttons
    document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderGallery(this.dataset.category);
        });
    });
    
    // Lightbox controls
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', () => navigateLightbox('prev'));
    lightboxNext.addEventListener('click', () => navigateLightbox('next'));
    
    // Close lightbox on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === this) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation for lightbox
    document.addEventListener('keydown', function(e) {
        if (lightbox.classList.contains('active')) {
            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    navigateLightbox('prev');
                    break;
                case 'ArrowRight':
                    navigateLightbox('next');
                    break;
            }
        }
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Close mobile menu when clicking nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
}

// Navigation and scrolling
function setupNavigation() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update active nav link based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
}

// Scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.section-header, .student-card, .org-card, .gallery-item, .stat-item').forEach(el => {
        observer.observe(el);
    });
}

// Utility functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Add CSS classes for animations
const style = document.createElement('style');
style.textContent = `
    .fade-in-up {
        opacity: 0;
        transform: translateY(30px);
        animation: fadeInUp 0.6s ease forwards;
    }
    
    .animate {
        animation: fadeInUp 0.8s ease forwards;
    }
    
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Performance optimization: Lazy loading for images
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Error handling for images
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.style.display = 'none';
        console.warn('Image failed to load:', e.target.src);
    }
}, true);

// Preload critical images
function preloadImages() {
    const criticalImages = [
        'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg',
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
preloadImages();

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getDatabase,
  ref,
  increment,
  onValue,
  onDisconnect,
  set,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// GANTI DENGAN KONFIGURASI MILIKMU
const firebaseConfig = {
   apiKey: "AIzaSyBS0bIexB4gfIwKpcay7j9xGy8dOITgu1o",
  authDomain: "gevside-enviewmen.firebaseapp.com",
  databaseURL: "https://gevside-enviewmen-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gevside-enviewmen",
  storageBucket: "gevside-enviewmen.firebasestorage.app",
  messagingSenderId: "886466126644",
  appId: "1:886466126644:web:d9e66514b0543f0a407b61"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const fs = getFirestore(app);

// 1. DETEKSI USER ONLINE
const userId = crypto.randomUUID();  // ID unik pengunjung
const userRef = ref(db, "onlineUsers/" + userId);
set(userRef, true);
onDisconnect(userRef).remove();

// 2. INCREMENT TOTAL VISITOR (hanya 1x per user)
const totalRef = ref(db, "totalVisitors");
onValue(ref(db, "onlineUsers"), async (snapshot) => {
  const onlineCount = snapshot.size;
  document.querySelector("#onlineCount").textContent = onlineCount;

  // 3. Simpan ke Firestore setiap update (historis)
  await addDoc(collection(fs, "historyVisitors"), {
    timestamp: new Date(),
    online: onlineCount
  });
});
set(ref(db, "totalVisitors"), increment(1));

// 4. AMBIL HISTORY UNTUK GRAFIK
const chartRef = document.getElementById("realtimeChart").getContext("2d");
const chart = new Chart(chartRef, {
  type: "line",
  data: {
    labels: [],
    datasets: [{
      label: "Pengunjung Online",
      data: [],
      borderColor: "#00ffc8",
      backgroundColor: "rgba(0,255,200,0.1)",
      fill: true,
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    scales: {
      x: { ticks: { color: "white" } },
      y: { ticks: { color: "white" }, beginAtZero: true }
    },
    plugins: {
      legend: { labels: { color: "white" } }
    }
  }
});

// 5. LOAD HISTORI TERBARU (50 titik terakhir)
const q = query(collection(fs, "historyVisitors"), orderBy("timestamp", "desc"), limit(50));
const querySnapshot = await getDocs(q);
const temp = [];
querySnapshot.forEach(doc => {
  const data = doc.data();
  temp.push({
    label: new Date(data.timestamp.seconds * 1000).toLocaleTimeString(),
    value: data.online
  });
});
temp.reverse();
temp.forEach(t => {
  chart.data.labels.push(t.label);
  chart.data.datasets[0].data.push(t.value);
});
chart.update();

// 6. Tampilkan total visitor
onValue(totalRef, (snapshot) => {
  const total = snapshot.val() || 0;
  document.querySelector("#totalCount").textContent = total;
});
