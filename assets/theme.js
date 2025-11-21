(() => {
  const announcementBar = document.querySelector('.announcement');
  const announcementClose = document.querySelector('.announcement__close');
  if (announcementBar && announcementClose) {
    announcementClose.addEventListener('click', () => {
      announcementBar.setAttribute('hidden', '');
    });
  }

  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');
  if (hoursEl && minutesEl && secondsEl) {
    const target = new Date();
    target.setHours(target.getHours() + 12);
    target.setMinutes(target.getMinutes() + 34);
    target.setSeconds(target.getSeconds() + 56);

    const updateCountdown = () => {
      const now = new Date();
      const diff = Math.max(target - now, 0);
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      hoursEl.textContent = String(hours).padStart(2, '0');
      minutesEl.textContent = String(minutes).padStart(2, '0');
      secondsEl.textContent = String(seconds).padStart(2, '0');
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  const chips = document.querySelectorAll('[data-category-chip]');
  const cards = document.querySelectorAll('[data-category-card]');
  if (chips.length && cards.length) {
    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        chips.forEach((btn) => btn.classList.remove('is-active'));
        chip.classList.add('is-active');
        const value = chip.dataset.category;
        cards.forEach((card) => {
          if (!value || value === 'all' || card.dataset.category === value) {
            card.hidden = false;
          } else {
            card.hidden = true;
          }
        });
      });
    });
  }

  const newsletterForm = document.querySelector('.newsletter__form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = newsletterForm.querySelector('input');
      const button = newsletterForm.querySelector('button');
      if (!button) return;
      button.textContent = '✨ Subscribed!';
      button.disabled = true;
      setTimeout(() => {
        button.textContent = 'Subscribe';
        button.disabled = false;
        if (input) input.value = '';
      }, 2500);
    });
  }
})();
