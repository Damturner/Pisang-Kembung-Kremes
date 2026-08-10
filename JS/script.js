// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const pisangMenu = document.querySelector("#pisang-menu");

// Ketika menu diklik
pisangMenu.onclick = (e) => {
  e.preventDefault();
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan menu
document.addEventListener("click", function (e) {
  if (!pisangMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Menampilkan Feather Icons
feather.replace();

const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.querySelector("#nama").value;
  const email = document.querySelector("#email").value;
  const nohp = document.querySelector("#nohp").value;

  const nomorWhatsApp = "6285231162322";

  const pesan =
    `Halo, saya ingin memesan Pisang Kembung Maknyus.%0A%0A` +
    `Nama: ${nama}%0A` +
    `Email: ${email}%0A` +
    `No HP: ${nohp}`;

  window.open(
    `https://wa.me/${nomorWhatsApp}?text=${pesan}`,
    "_blank"
  );
});