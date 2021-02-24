(() => {
  const showTextBtnRef = document.querySelector("[data-show-text-button]");
  const showTextSecondBtnRef = document.querySelector("[data-show-text-second-button]");
  const textRef = document.querySelector("[data-text]");
    
  showTextBtnRef.addEventListener("click", () => {
    showTextBtnRef.classList.toggle("is-shown");

    textRef.classList.toggle("is-shown");
  })
  showTextSecondBtnRef.addEventListener("click", () => {
    showTextSecondBtnRef.classList.toggle("is-shown");

    textRef.classList.toggle("is-shown");
  })
})();

