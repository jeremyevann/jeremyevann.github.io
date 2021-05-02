const cards = document.querySelectorAll(".card-inner");

function flipCard() {
  this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard));

const scriptURL = "https://script.google.com/macros/s/AKfycbx4m8UwrIk8YTocAp37LGByR2mIw3uIsyYKtVc2ilTJzqBn5Z0F2JdPYFsZHUwPxSKOQw/exec";
const form = document.forms["contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ketika tombol submit diclick
  // tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // tampilkan alert
      myAlert.classList.toggle("d-none");
      // reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
