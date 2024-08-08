document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('#tabs a');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            event.preventDefault();

            // Remove active class from all tabs and hide all content
            // tabs.forEach(t => t.classList.remove('border-l', 'border-t', 'border-r', 'rounded-t', 'text-blue-700'));
            contents.forEach(content => content.classList.add('hidden'));

            // Add active class to the clicked tab and show corresponding content
            // tab.classList.add('border-l', 'border-t', 'border-r', 'rounded-t', 'text-blue-700');
            const target = document.querySelector(tab.getAttribute('href'));
            target.classList.remove('hidden');
        });
    });

});

document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab-li");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove active classes from all tabs and contents
            tabs.forEach(t => t.classList.remove("active-label"));
            contents.forEach(c => c.classList.remove("active-tab"));

            // Add active classes to the clicked tab and corresponding content
            tab.classList.add("active-label");
            document.getElementById(tab.getAttribute("data-tab")).classList.add("active-tab");
        });
    });

    const header = document.querySelector(".site-header");
    const scrollHandler = () => {
        if (window.scrollY > 50) {
            header.classList.add("fix-menu-desktop");
        } else {
            header.classList.remove("fix-menu-desktop");
        }
    };

    window.addEventListener("scroll", scrollHandler);

    const searchButton = document.getElementById("searchButton");
    const searchModal = document.getElementById("searchModal");
    const closeButton = document.getElementById("closeButton");
    const modalContent = searchModal.querySelector('.relative');

    searchButton.addEventListener("click", () => {
        searchModal.classList.remove("hidden");
        modalContent.classList.remove("fade-out-top");
        modalContent.classList.add("fade-in-top");
    });

    closeButton.addEventListener("click", () => {
        modalContent.classList.remove("fade-in-top");
        modalContent.classList.add("fade-out-top");
        setTimeout(() => {
            searchModal.classList.add("hidden");
        }, 300);
    });

    document.addEventListener("click", (event) => {
        if (!modalContent.contains(event.target) && !searchButton.contains(event.target)) {
            modalContent.classList.remove("fade-in-top");
            modalContent.classList.add("fade-out-top");
            setTimeout(() => {
                searchModal.classList.add("hidden");
            }, 300);
        }
    });

    const fadeElements = document.querySelectorAll('.fade-in, .fade-right, .fade-left');

    const handleScroll = () => {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add('show');
            } else {
                element.classList.remove('show');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

});