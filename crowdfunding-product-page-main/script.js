const modal = document.querySelector(".modal");
const modalBox = document.querySelectorAll(".modal-box");
const btnModal = document.querySelector(".btn--modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close");
const link = document.querySelectorAll(".selected");
const enter = document.querySelectorAll(".enter");
const btnContinue = document.querySelectorAll(".btn-continue");
const bookmark = document.querySelector(".bookmark");
const bookmarkLink = document.querySelector(".bookmark__link");
const btnCompleted = document.querySelector(".btn--completed");
const successModal = document.querySelector(".success-modal");

bookmark.addEventListener("click", function () {
  bookmarkLink.textContent = "Bookmarked";
});

[...enter].forEach((e) => {
  e.classList.add("hidden");
});

btnModal.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnClose.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});

link.forEach((e) =>
  e.addEventListener("click", function () {
    [...modalBox].forEach((e) => {
      e.classList.remove("enter-active");
    });
    [...enter].forEach((e) => {
      e.classList.add("hidden");
    });
    link.forEach((e) => e.classList.remove("clicked"));
    e.classList.add("clicked");
    let selected = e.dataset.select;
    if (selected !== "1") {
      document.querySelector(`.enter--${selected}`).classList.remove("hidden");
      e.closest(".modal-box").classList.add("enter-active");
    }
  })
);

const modalCount = document.querySelectorAll(".modal-count");
[...modalCount].forEach((mod) => {
  let left = Number(mod.firstElementChild.textContent);
  if (left === 0) {
    [...mod.closest(".x").children].forEach((el) => {
      el.style.opacity = "0.2rem";
    });
  }
});

[...btnContinue].forEach((btn) => {
  btn.addEventListener("click", function () {
    let num = Number(
      document.querySelector(`.left[data-num="${btn.dataset.num}"]`).textContent
    );
    num--;
    document.querySelector(`.left[data-num="${btn.dataset.num}"]`).textContent =
      num;
    successModal.style.display = "grid";
    overlay.style.zIndex = "100000";
    modal.style.zIndex = "100";
  });
});

btnCompleted.addEventListener("click", function () {
  successModal.style.display = "none";
  overlay.style.zIndex = "100";
  modal.style.zIndex = "100000";
});
