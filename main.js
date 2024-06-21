class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header">
        <div class="header__content">
          <a href="index.html" class="logo">
            <img class="logo__img" src="images/logo.png" alt="logo">
          </a>
          <nav class="nav">
            <ul class="nav__list">
              <li class="nav__item">
                <a href="index.html" class="nav__link">Home</a>
              </li>
                            <li class="nav__item">
                <a href="services.html" class="nav__link">Services</a>
              </li>
              <li class="nav__item">
                <a href="portfolio.html" class="nav__link">Portfolio</a>
              </li>
              <li class="nav__item">
                <a href="about.html" class="nav__link">About</a>
              </li>
              <li class="nav__item">
                <a href="contact.html" class="nav__link">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    `;
  }
}

class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <div class="footerBottom">
          <p>Final Touch Finishing &copy 2024 </p>
          <p> All rights reserved </p>
        </div>
      </footer>
    `;
  }
}

customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);

// Portfolio image enlargement
document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.photo-container .image img');
  
  images.forEach(image => {
    image.addEventListener('click', function() {
      this.classList.toggle('enlarged');
    });
  });

  
  // Ensure clicking outside the image closes the enlarged view
  // document.querySelector('.popup').addEventListener('click', function(event) {
  //   if (event.target === event.currentTarget) {
  //     this.style.display = 'none';
  //   }
  // });
  const popupElement = document.querySelector('.popup');
if (popupElement) {
    popupElement.addEventListener('click', function(event) {
        if (event.target === event.currentTarget) {
            this.style.display = 'none';
        }
    });
}
});