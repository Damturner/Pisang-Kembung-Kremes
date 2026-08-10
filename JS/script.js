// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika menu diklik, tambahkan atau hapus kelas 'active' pada elemen menu.
document.querySelector("#pisang-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan menu
const pisangMenu = document.querySelector("#pisang-menu");
document.addEventListener("click", function (e) {
  if (!pisangMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
