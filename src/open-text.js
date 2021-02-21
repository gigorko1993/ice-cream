(() => {
  const showTextBtnRef = document.querySelector("[data-show-text-button]");
  const textRef = document.querySelector("[data-text]");
    
  showTextBtnRef.addEventListener("click", () => {
    showTextBtnRef.classList.toggle("is-shown");

    textRef.classList.toggle("is-shown");
  })
})();

