'use strict';

function initPasswordGate() {
  const gate = document.getElementById('password-gate');
  if (!gate) return;

  if (sessionStorage.getItem('mg_auth') === 'ok') {
    gate.classList.add('hidden');
    return;
  }

  const form = gate.querySelector('.gate-form');
  const input = gate.querySelector('input[type="password"]');
  const error = gate.querySelector('.gate-error');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value === '120122') {
      sessionStorage.setItem('mg_auth', 'ok');
      gate.classList.add('fade-out');
      setTimeout(function () {
        gate.classList.add('hidden');
      }, 650);
    } else {
      error.textContent = 'Mot de passe incorrect';
      input.value = '';
      input.focus();
      setTimeout(function () {
        error.textContent = '';
      }, 3000);
    }
  });
}

function initCountdown() {
  const target = new Date('2027-09-18T14:00:00');

  const daysEl = document.getElementById('countdown-days');
  const hoursEl = document.getElementById('countdown-hours');
  const minutesEl = document.getElementById('countdown-minutes');
  const secondsEl = document.getElementById('countdown-seconds');
  const countdownEl = document.querySelector('.countdown');

  if (!daysEl) return;

  function update() {
    const now = new Date();
    const diff = target - now;

    if (diff <= 0) {
      if (countdownEl) {
        countdownEl.innerHTML = '<span class="countdown-today">C\'est aujourd\'hui !</span>';
      }
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(function (el) {
    observer.observe(el);
  });
}

function initNav() {
  const nav = document.querySelector('nav');
  if (!nav) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  const hamburger = document.querySelector('.hamburger');
  const navMobile = document.querySelector('.nav-mobile');
  if (!hamburger || !navMobile) return;

  hamburger.addEventListener('click', function () {
    document.body.classList.toggle('nav-open');
  });

  navMobile.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      document.body.classList.remove('nav-open');
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  initPasswordGate();
  initCountdown();
  initScrollReveal();
  initNav();
});
