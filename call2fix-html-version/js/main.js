// Call2Fix Plumbing & Electrical - Main JavaScript

// ============================================
// NAVIGATION & PAGE ROUTING
// ============================================

const pages = {
  home: 'pages/home.html',
  services: 'pages/services.html',
  emergency: 'pages/emergency.html',
  areas: 'pages/areas.html',
  about: 'pages/about.html',
  contact: 'pages/contact.html'
};

function loadPage(pageName) {
  const pageFile = pages[pageName] || pages.home;
  
  fetch(pageFile)
    .then(response => response.text())
    .then(html => {
      document.getElementById('page-content').innerHTML = html;
      updateActiveNav(pageName);
      window.scrollTo(0, 0);
      
      // Re-initialize page-specific scripts
      initPageScripts(pageName);
    })
    .catch(error => console.error('Error loading page:', error));
}

function updateActiveNav(pageName) {
  document.querySelectorAll('nav a').forEach(link => {
    link.classList.remove('active');
  });
  
  const activeLink = document.querySelector(`nav a[data-page="${pageName}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

function initPageScripts(pageName) {
  switch(pageName) {
    case 'services':
      initServicePage();
      break;
    case 'contact':
      initContactForm();
      break;
    case 'emergency':
      initEmergencyPage();
      break;
  }
}

// ============================================
// MOBILE MENU
// ============================================

function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('nav');
  
  if (toggle) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }
  
  // Close menu when link is clicked
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });
}

// ============================================
// NAVIGATION LINKS
// ============================================

function initNavigation() {
  document.querySelectorAll('nav a[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      loadPage(page);
      history.pushState({ page }, '', `#${page}`);
    });
  });
}

// ============================================
// WHATSAPP INTEGRATION
// ============================================

const WHATSAPP_NUMBERS = {
  sales: '+27740642297',
  emergency: '+27676095679'
};

function openWhatsApp(number = WHATSAPP_NUMBERS.sales, message = '') {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${number}?text=${encodedMessage}`;
  window.open(url, '_blank');
}

function initWhatsAppButtons() {
  document.querySelectorAll('[data-whatsapp]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const number = btn.getAttribute('data-whatsapp-number') || WHATSAPP_NUMBERS.sales;
      const message = btn.getAttribute('data-whatsapp-message') || '';
      openWhatsApp(number, message);
    });
  });
}

// ============================================
// FLOATING BUTTONS
// ============================================

function initFloatingButtons() {
  const emergencyBtn = document.getElementById('float-emergency');
  const chatBtn = document.getElementById('float-chat');
  const chatWidget = document.getElementById('chat-widget');
  
  if (emergencyBtn) {
    emergencyBtn.addEventListener('click', () => {
      openWhatsApp(WHATSAPP_NUMBERS.emergency, 'EMERGENCY PLUMBING NEEDED URGENTLY!');
    });
  }
  
  if (chatBtn) {
    chatBtn.addEventListener('click', () => {
      chatWidget.classList.toggle('open');
      if (chatWidget.classList.contains('open')) {
        document.getElementById('chat-input').focus();
      }
    });
  }
}

// ============================================
// LIVE CHAT WIDGET
// ============================================

function initLiveChat() {
  const chatWidget = document.getElementById('chat-widget');
  const closeBtn = document.querySelector('.chat-close');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const chatMessages = document.getElementById('chat-messages');
  
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      chatWidget.classList.remove('open');
    });
  }
  
  if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const message = chatInput.value.trim();
      if (!message) return;
      
      // Add user message
      addChatMessage(message, 'user');
      chatInput.value = '';
      
      // Simulate bot response
      setTimeout(() => {
        addChatMessage('Thanks for your message! Connecting you to our team on WhatsApp...', 'bot');
        
        // Redirect to WhatsApp after 1 second
        setTimeout(() => {
          openWhatsApp(WHATSAPP_NUMBERS.sales, message);
        }, 1000);
      }, 500);
    });
  }
}

function addChatMessage(text, sender) {
  const chatMessages = document.getElementById('chat-messages');
  const messageEl = document.createElement('div');
  messageEl.className = `chat-message ${sender}`;
  messageEl.innerHTML = `
    <div class="chat-message-content">${text}</div>
  `;
  chatMessages.appendChild(messageEl);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// ============================================
// VISITOR TRACKING
// ============================================

const STORAGE_KEY = 'call2fix_visitor_data';

function getVisitorData() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : {
    totalVisits: 0,
    visits: [],
    pageViews: {}
  };
}

function saveVisitorData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function trackVisit() {
  const data = getVisitorData();
  const now = new Date();
  const page = window.location.pathname || '/';
  
  data.totalVisits++;
  
  if (!data.pageViews[page]) {
    data.pageViews[page] = 0;
  }
  data.pageViews[page]++;
  
  data.visits.push({
    timestamp: now.toISOString(),
    page: page,
    userAgent: navigator.userAgent,
    referrer: document.referrer || 'direct'
  });
  
  if (data.visits.length > 1000) {
    data.visits = data.visits.slice(-1000);
  }
  
  saveVisitorData(data);
  console.log('📊 Visit tracked:', {
    totalVisits: data.totalVisits,
    currentPage: page,
    timestamp: now.toLocaleString()
  });
}

// Export functions for console use
window.getVisitorStats = function() {
  const data = getVisitorData();
  return {
    totalVisits: data.totalVisits,
    uniquePages: Object.keys(data.pageViews).length,
    pageViews: data.pageViews,
    recentVisits: data.visits.slice(-10)
  };
};

window.exportVisitorData = function() {
  const data = getVisitorData();
  let csv = 'Timestamp,Page,Referrer\n';
  data.visits.forEach(visit => {
    csv += `"${visit.timestamp}","${visit.page}","${visit.referrer}"\n`;
  });
  
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'call2fix-visitor-data.csv';
  a.click();
  window.URL.revokeObjectURL(url);
};

window.clearVisitorData = function() {
  if (confirm('Are you sure you want to clear all visitor data?')) {
    localStorage.removeItem(STORAGE_KEY);
    console.log('✅ Visitor data cleared');
  }
};

// ============================================
// SERVICE PAGE SPECIFIC
// ============================================

function initServicePage() {
  document.querySelectorAll('.service-card .btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceName = btn.closest('.service-card').querySelector('h3').textContent;
      openWhatsApp(WHATSAPP_NUMBERS.sales, `Hi Call2Fix! I am interested in ${serviceName}`);
    });
  });
}

// ============================================
// CONTACT FORM
// ============================================

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;
      
      // Send via WhatsApp
      const fullMessage = `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
      `.trim();
      
      openWhatsApp(WHATSAPP_NUMBERS.sales, fullMessage);
      
      // Show success message
      alert('Thank you! Your message has been sent to WhatsApp. We will respond shortly.');
      form.reset();
    });
  }
}

// ============================================
// EMERGENCY PAGE SPECIFIC
// ============================================

function initEmergencyPage() {
  document.querySelectorAll('.emergency-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openWhatsApp(WHATSAPP_NUMBERS.emergency, 'EMERGENCY PLUMBING NEEDED URGENTLY!');
    });
  });
}

// ============================================
// SERVICE AREA CHECKER
// ============================================

function initServiceChecker() {
  const checkerBtn = document.getElementById('check-availability');
  if (checkerBtn) {
    checkerBtn.addEventListener('click', () => {
      const postalCode = document.getElementById('postal-code').value;
      if (postalCode) {
        alert(`We service your area! Response time: 30-45 minutes. Let's connect on WhatsApp to confirm details.`);
        openWhatsApp(WHATSAPP_NUMBERS.sales, `Hi! I'm in postal code ${postalCode}. Can you service my area?`);
      } else {
        alert('Please enter a postal code');
      }
    });
  }
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  initMobileMenu();
  initNavigation();
  initWhatsAppButtons();
  initFloatingButtons();
  initLiveChat();
  initServiceChecker();
  
  // Track visit
  trackVisit();
  
  // Load initial page from URL hash or home
  const hash = window.location.hash.slice(1) || 'home';
  if (pages[hash]) {
    loadPage(hash);
  } else {
    loadPage('home');
  }
});

// Handle browser back/forward buttons
window.addEventListener('popstate', (e) => {
  if (e.state && e.state.page) {
    loadPage(e.state.page);
  }
});
