// Function to load external HTML components
function loadComponent(elementId, filePath) {
  fetch(filePath)
    .then(response => {
      if (!response.ok) throw new Error(`Failed to load ${filePath}`);
      return response.text();
    })
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => console.error(error));
}

// Global Event Delegation for Mobile Menu Toggle
document.addEventListener("click", (event) => {
  // Check if clicked element or its parent is the menu button
  const menuBtn = event.target.closest("#menu-btn");
  
  if (menuBtn) {
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu) {
      mobileMenu.classList.toggle("hidden");
    }
  }
});

// Load Header Component on page load
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header-placeholder", "components/header.html");
  loadComponent("hero-placeholder", "components/hero.html");
  loadComponent("client-placeholder", "components/client.html");
  loadComponent("community-placeholder", "components/community.html");
  loadComponent("experience-placeholder", "components/experience.html");
  loadComponent("stats-placeholder", "components/stats.html");
  loadComponent("footer-design-placeholder", "components/footer-design.html");
  loadComponent("testimonial-placeholder", "components/testimonial.html");
  loadComponent("blog-placeholder", "components/blog.html");
});