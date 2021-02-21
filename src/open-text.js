(() => {
  const showTextBtnRef = document.querySelector("[data-show-text-button]");
  const textRef = document.querySelector("[data-text]");
    
  showTextBtnRef.addEventListener("click", () => {
    const expanded =
    showTextBtnRef.getAttribute("aria-expanded") === "true" || false;
    showTextBtnRef.classList.toggle("is-shown");
    showTextBtnRef.setAttribute("aria-expanded", !expanded);

    textRef.classList.toggle("is-shown");
  })
})();

