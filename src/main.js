import './style.css';

let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  // Ganti background jika scroll lebih dari 50px
  if (currentScroll > 50) {
    navbar.classList.remove('text-white');
    navbar.classList.add('bg-white', 'shadow', 'text-gray-900');
  } else {
    navbar.classList.remove('bg-white', 'shadow', 'text-gray-900');
    navbar.classList.add('text-white');
  }

  // Sembunyikan saat scroll ke bawah, tampilkan saat scroll ke atas
  if (currentScroll > lastScrollTop) {
    // Scroll down
    navbar.style.transform = 'translateY(-100%)';
  } else {
    // Scroll up
    navbar.style.transform = 'translateY(0)';
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
