function loadComponent(elementId, filePath) {
  return fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load ${filePath}`);
      }

      return response.text();
    })
    .then(data => {
      const element = document.getElementById(elementId);

      if (element) {
        element.innerHTML = data;
      }
    })
    .catch(error => console.error(error));
}


document.addEventListener("click", (event) => {

  const menuBtn = event.target.closest("#menu-btn");

  if (menuBtn) {

    const mobileMenu = document.getElementById("mobile-menu");

    if (mobileMenu) {
      mobileMenu.classList.toggle("hidden");
    }

  }

});


document.addEventListener("DOMContentLoaded", () => {

  Promise.all([
    loadComponent("header-placeholder", "components/header.html"),
    loadComponent("hero-placeholder", "components/hero.html"),
    loadComponent("client-placeholder", "components/client.html"),
    loadComponent("community-placeholder", "components/community.html"),
    loadComponent("experience-placeholder", "components/experience.html"),
    loadComponent("stats-placeholder", "components/stats.html"),
    loadComponent("footer-design-placeholder", "components/footer-design.html"),
    loadComponent("testimonial-placeholder", "components/testimonial.html"),
    loadComponent("blog-placeholder", "components/blog.html"),
    loadComponent("cta-placeholder", "components/cta.html"),
    loadComponent("footer-placeholder", "components/footer.html")
  ]);

});