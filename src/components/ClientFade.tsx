// components/ClientFade.tsx

"use client";

import useRouteChangeHandler from "../hooks/useRouteChangeHandler";

const ClientFade = () => {
  const runStaticScript = () => {
    const tabs = document.querySelectorAll(".tab-li");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active-label"));
        contents.forEach((c) => c.classList.remove("active-tab"));

        tab.classList.add("active-label");
        const dataTab = tab.getAttribute("data-tab");
        if (dataTab) {
          const element = document.getElementById(dataTab);
          if (element) {
            element.classList.add("active-tab");
          }
        }
      });
    });

    const header = document.querySelector(".site-header") as HTMLElement;
    const scrollHandler = () => {
      if (window.scrollY > 50) {
        header.classList.add("fix-menu-desktop");
      } else {
        header.classList.remove("fix-menu-desktop");
      }
    };

    window.addEventListener("scroll", scrollHandler);

    const fadeElements = document.querySelectorAll(
      ".fade-in, .fade-right, .fade-left"
    );

    const handleScroll = () => {
      fadeElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.classList.add("show");
        } else {
          element.classList.remove("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    homeslider();
  };

  useRouteChangeHandler(runStaticScript);

  return null;
};

function homeslider() {
  const slider = document.getElementById("slider") as HTMLElement;
  if (!slider) return;
  const slides = slider.children;
  const totalSlides = slides.length;
  let currentSlide = 0;

  document.getElementById("next")?.addEventListener("click", function () {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  });

  document.getElementById("prev")?.addEventListener("click", function () {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
  });

  const updateSlider = () => {
    const offset = -currentSlide * 100;
    slider.style.transform = `translateX(${offset}%)`;
  };
}

export default ClientFade;
