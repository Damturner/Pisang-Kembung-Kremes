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