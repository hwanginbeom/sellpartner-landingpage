const header = document.querySelector('[data-header]');
const toggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

toggle?.addEventListener('click', () => {
  const isOpen = header.classList.toggle('nav-open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('nav-open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const featureItems = document.querySelectorAll('[data-feature-item]');
const featureTriggers = document.querySelectorAll('[data-feature-trigger]');

const syncFeatureVideos = () => {
  featureItems.forEach((item) => {
    const video = item.querySelector('video');
    if (!video) return;

    if (item.classList.contains('active')) {
      video.currentTime = 0;
      video.play().catch(() => {});
      return;
    }

    video.pause();
  });
};

featureTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const selectedItem = trigger.closest('[data-feature-item]');

    featureItems.forEach((item) => {
      const isSelected = item === selectedItem;
      item.classList.toggle('active', isSelected);
      item.querySelector('[data-feature-trigger]')?.setAttribute('aria-expanded', String(isSelected));
    });

    syncFeatureVideos();
  });
});

syncFeatureVideos();
