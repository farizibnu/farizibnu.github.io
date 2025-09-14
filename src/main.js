import './style.css';

///////////////////////////////////////////////////// SCROLL SMOOTH
// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});
// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

////////////////////////////////////////////////////// SCROLL NAVBAR
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

//////////////////////////////////////////////////////// CHANGE WORD
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

//////////////////////////////////////////////////////// TIMELINE
const tl = gsap.timeline({});

//////////////////////////////////////////////////////// ANIMATION
document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap
    .from('#animate-box', {
      x: 200,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out',
    })
    .then(() => {
      gsap.to('#hero-btn', {
        y: -50,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
      });
    });
  ////////////////////////////////////////////////// ABOUT ANIMATION
  gsap.to('#about-header', {
    scrollTrigger: {
      trigger: '#about-content',
      start: 'top 80%',
    },
    y: -80,
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
  });
  gsap.to('#about-content', {
    scrollTrigger: {
      trigger: '#about-header',
      start: 'top 80%',
    },
    x: 320,
    opacity: 1,
    duration: 2,
    ease: 'power2.out',
  });
  ////////////////////////////////////////////////// ABOUT ANIMATION
  gsap.to('#technology-header', {
    scrollTrigger: {
      trigger: '#technology-header',
      start: 'top 80%',
    },
    y: -80,
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
  });
  ////////////////////////////////////////////////// EXPERIENCE ANIMATION
  gsap.to('#experience-header', {
    scrollTrigger: {
      trigger: '#experience',
      start: 'top 80%',
    },
    y: -80,
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
  });
  gsap.to('#experience-content', {
    scrollTrigger: {
      trigger: '#experience-content',
      start: 'top 80%',
    },
    x: 320,
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
  });
  ////////////////////////////////////////////////// PROJECTS ANIMATION
  gsap.to('#project-header', {
    scrollTrigger: {
      trigger: '#projects',
      start: 'top 80%',
    },
    y: -80,
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
  });
  gsap.to('#project-1', {
    scrollTrigger: {
      trigger: '#project-1',
      start: 'top 80%',
    },
    x: 320,
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
  });
  gsap.to('#project-2', {
    scrollTrigger: {
      trigger: '#project-2',
      start: 'top 80%',
    },
    x: -320,
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
  });
  gsap.to('#project-3', {
    scrollTrigger: {
      trigger: '#project-3',
      start: 'top 80%',
    },
    x: 320,
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
  });
  gsap.to('#project-4', {
    scrollTrigger: {
      trigger: '#project-4',
      start: 'top 80%',
    },
    x: -320,
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
  });
});
