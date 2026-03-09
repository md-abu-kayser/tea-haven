// js start
// ------------------------------------------------>
      // Preloader
      window.addEventListener("load", () => {
        const preloader = document.getElementById("preloader");
        preloader.style.opacity = "0";
        setTimeout(() => preloader.remove(), 500);
      });

      // Theme Setting
      function setTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
      }
      const currentTheme = localStorage.getItem("theme") || "light";
      setTheme(currentTheme);

      // Scroll Animation
      function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        );
      }
      function handleScrollAnimation() {
        document.querySelectorAll(".stagger-animation").forEach((el) => {
          if (isElementInViewport(el)) {
            el.classList.add("animate-fadeIn");
            Array.from(el.children).forEach((child, index) => {
              child.style.animationDelay = `${index * 0.1}s`;
            });
          }
        });
      }
      window.addEventListener("load", handleScrollAnimation);
      window.addEventListener("scroll", handleScrollAnimation);

      // Product Filter
      function filterProducts(type) {
        document.querySelectorAll(".product-grid > div").forEach((product) => {
          if (type === "all" || product.dataset.type === type) {
            product.style.display = "block";
          } else {
            product.style.display = "none";
          }
        });
      }

      // Event Filter
      function filterEvents(type) {
        document.querySelectorAll(".event-grid > div").forEach((event) => {
          if (type === "all" || event.dataset.type === type) {
            event.style.display = "block";
          } else {
            event.style.display = "none";
          }
        });
      }

      // Add to Cart
      function addToCart(productName) {
        alert(`Added ${productName} to cart!`);
      }

      // Subscribe Form--->demo
      function handleSubscribe(event) {
        event.preventDefault();
        alert("Subscribed successfully!");
      }

      // Contact Form--->domo
      function handleContactSubmit(event) {
        event.preventDefault();
        alert("Message sent successfully!");
      }

      // Smooth Scroll For Links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
        });
      });

      // Lazy Load Polyfill
      if ("loading" in HTMLImageElement.prototype === false) {
        const images = document.querySelectorAll("img.lazyload");
        images.forEach((img) => {
          img.src = img.dataset.src;
        });
      }
    
//    js end