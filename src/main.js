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

const words = ['engineer', 'coder', 'programmer', 'developer'];
const widths = ['w-[4.8rem]', 'w-[3rem]', 'w-[7rem]', 'w-[5rem]']; // cocokkan sesuai panjang kata
const wordEl = document.getElementById('changingWord');

let index = 0;

setInterval(() => {
  // Ganti teks
  wordEl.textContent = words[index];

  // Hapus semua kelas w-[...]
  wordEl.classList.remove(...widths);

  // Tambahkan kelas w-[..] sesuai kata
  wordEl.classList.add(widths[index]);

  // Naikkan index
  index = (index + 1) % words.length;
}, 2000);
