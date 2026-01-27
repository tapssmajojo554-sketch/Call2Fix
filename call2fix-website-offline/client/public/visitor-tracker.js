// Simple Visitor Tracker for Call2Fix Website
// This script tracks page visits and stores data locally

(function() {
  const STORAGE_KEY = 'call2fix_visitor_data';
  
  // Initialize or get existing data
  function getVisitorData() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {
      totalVisits: 0,
      visits: [],
      pageViews: {}
    };
  }
  
  // Save visitor data
  function saveVisitorData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }
  
  // Track visit
  function trackVisit() {
    const data = getVisitorData();
    const now = new Date();
    const page = window.location.pathname || '/';
    
    // Increment total visits
    data.totalVisits++;
    
    // Track page views
    if (!data.pageViews[page]) {
      data.pageViews[page] = 0;
    }
    data.pageViews[page]++;
    
    // Add visit record
    data.visits.push({
      timestamp: now.toISOString(),
      page: page,
      userAgent: navigator.userAgent,
      referrer: document.referrer || 'direct'
    });
    
    // Keep only last 1000 visits
    if (data.visits.length > 1000) {
      data.visits = data.visits.slice(-1000);
    }
    
    saveVisitorData(data);
    
    // Log to console for debugging
    console.log('📊 Visit tracked:', {
      totalVisits: data.totalVisits,
      currentPage: page,
      timestamp: now.toLocaleString()
    });
  }
  
  // Export data function (for admin use)
  window.exportVisitorData = function() {
    const data = getVisitorData();
    const csv = generateCSV(data);
    downloadCSV(csv, 'call2fix-visitor-data.csv');
  };
  
  // Generate CSV from visitor data
  function generateCSV(data) {
    let csv = 'Timestamp,Page,Referrer\n';
    data.visits.forEach(visit => {
      csv += `"${visit.timestamp}","${visit.page}","${visit.referrer}"\n`;
    });
    return csv;
  }
  
  // Download CSV file
  function downloadCSV(csv, filename) {
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  }
  
  // Get statistics
  window.getVisitorStats = function() {
    const data = getVisitorData();
    return {
      totalVisits: data.totalVisits,
      uniquePages: Object.keys(data.pageViews).length,
      pageViews: data.pageViews,
      recentVisits: data.visits.slice(-10)
    };
  };
  
  // Clear all data
  window.clearVisitorData = function() {
    if (confirm('Are you sure you want to clear all visitor data?')) {
      localStorage.removeItem(STORAGE_KEY);
      console.log('✅ Visitor data cleared');
    }
  };
  
  // Track the visit when page loads
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', trackVisit);
  } else {
    trackVisit();
  }
})();

// Console commands for admin:
// getVisitorStats()     - View visitor statistics
// exportVisitorData()   - Download visitor data as CSV
// clearVisitorData()    - Clear all visitor data
