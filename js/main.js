// Theme toggle
(function () {
  const toggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Load saved theme or use system preference
  const saved = localStorage.getItem('theme');
  if (saved) {
    html.setAttribute('data-theme', saved);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    html.setAttribute('data-theme', 'dark');
  }

  toggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();

// Mobile nav toggle
(function () {
  const btn = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');

  btn.addEventListener('click', () => {
    links.classList.toggle('open');
    btn.classList.toggle('open');
  });

  // Close on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      btn.classList.remove('open');
    });
  });
})();

// Scroll reveal animation
(function () {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
})();

// Navbar background on scroll + scroll-to-top visibility
(function () {
  const nav = document.getElementById('nav');
  const scrollTop = document.getElementById('scroll-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // Show scroll-to-top after scrolling past the hero
    if (scrollTop) {
      if (window.scrollY > window.innerHeight * 0.5) {
        scrollTop.classList.add('visible');
      } else {
        scrollTop.classList.remove('visible');
      }
    }
  });

  // Scroll to top on click
  if (scrollTop) {
    scrollTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();

// Publication filters (by year / by venue)
(function () {
  const filterContainer = document.getElementById('pub-filters');
  if (!filterContainer) return;

  const cards = Array.from(document.querySelectorAll('#publications .pub-card'));
  const yearHeaders = Array.from(document.querySelectorAll('#publications .pub-year'));

  // Preferred display order
  const VENUE_ORDER = ['SIGMOD', 'VLDB', 'ACL', 'Preprint'];

  // Tally counts
  const yearCounts = {};
  const venueCounts = {};
  cards.forEach(card => {
    const y = card.dataset.year;
    const v = card.dataset.venue;
    if (y) yearCounts[y] = (yearCounts[y] || 0) + 1;
    if (v) venueCounts[v] = (venueCounts[v] || 0) + 1;
  });

  const yearKeys = Object.keys(yearCounts).sort((a, b) => Number(b) - Number(a));
  const venueKeys = Object.keys(venueCounts).sort((a, b) => {
    const ia = VENUE_ORDER.indexOf(a);
    const ib = VENUE_ORDER.indexOf(b);
    if (ia === -1 && ib === -1) return a.localeCompare(b);
    if (ia === -1) return 1;
    if (ib === -1) return -1;
    return ia - ib;
  });

  const total = cards.length;

  function makeChip(label, count, type, value, isAll) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'pub-chip';
    if (isAll) btn.classList.add('active');
    btn.dataset.filterType = type;
    btn.dataset.filterValue = value;
    btn.innerHTML = `${label} <span class="pub-chip-count">${count}</span>`;
    return btn;
  }

  const groups = filterContainer.querySelectorAll('.pub-filter-chips');
  groups.forEach(group => {
    const type = group.dataset.filterType;
    group.appendChild(makeChip('All', total, type, '__all__', true));
    if (type === 'year') {
      yearKeys.forEach(y => group.appendChild(makeChip(y, yearCounts[y], 'year', y, false)));
    } else if (type === 'venue') {
      venueKeys.forEach(v => group.appendChild(makeChip(v, venueCounts[v], 'venue', v, false)));
    }
  });

  function applyFilter(type, value) {
    const isAll = value === '__all__';
    cards.forEach(card => {
      const match = isAll || card.dataset[type] === value;
      card.classList.toggle('pub-hidden', !match);
    });
    // Show year headers only when no filter is active
    yearHeaders.forEach(h => {
      h.classList.toggle('pub-hidden', !isAll);
    });
  }

  filterContainer.addEventListener('click', (e) => {
    const chip = e.target.closest('.pub-chip');
    if (!chip) return;
    // Deactivate all chips across both groups (single-selection model)
    filterContainer.querySelectorAll('.pub-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    // If user picks "All" in one group, also mark "All" in the other for visual consistency
    if (chip.dataset.filterValue === '__all__') {
      filterContainer.querySelectorAll('.pub-chip[data-filter-value="__all__"]').forEach(c => c.classList.add('active'));
    }
    applyFilter(chip.dataset.filterType, chip.dataset.filterValue);
  });
})();

// Active nav link on scroll
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
})();
