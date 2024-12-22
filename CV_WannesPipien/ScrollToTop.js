const scrollableContent = document.querySelector(".content");
const scrollToTopButton = document.querySelector(".ScrollToTop");

scrollToTopButton.addEventListener("click", (event) => {
    event.preventDefault();
    scrollableContent.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});