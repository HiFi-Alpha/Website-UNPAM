// Ganti Feather Icon jika digunakan
if (typeof feather !== "undefined") {
  feather.replace();
}

// Toggle class active untuk navbar
const navbarNav = document.querySelector(".navbar-nav");
const menu = document.querySelector("#menu-makanan");

document.querySelector("#menu-makanan").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar menutup navbar
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Fungsi kirim ke WhatsApp
function sendToWhatsApp() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  const whatsappURL = `https://wa.me/6285694814275?text=Halo,%20saya%20${name}%20(${email},%20${phone})%20ingin%20bertanya:%20${encodeURIComponent(
    message
  )}`;
  window.open(whatsappURL, "_blank");
}

// Modal tools peminatan
const toolsModal = document.getElementById("toolsModal");
const toolsInfoButton = document.getElementById("tools-info");
const closeModalButton = document.querySelector(".close-button");

function openToolsModal() {
  toolsModal.style.display = "block";
}

function closeToolsModal() {
  toolsModal.style.display = "none";
}

// Buka modal saat tombol diklik
if (toolsInfoButton) {
  toolsInfoButton.addEventListener("click", function (e) {
    e.preventDefault(); // mencegah default behavior link
    openToolsModal();
  });
}

// Tutup modal saat tombol close diklik
if (closeModalButton) {
  closeModalButton.addEventListener("click", closeToolsModal);
}

// Tutup modal jika klik di luar konten modal
window.onclick = function (event) {
  if (event.target == toolsModal) {
    closeToolsModal();
  }
};
