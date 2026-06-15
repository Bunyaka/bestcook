/* nav.js — shared hamburger + search overlay logic */
(function () {
  function init() {
    const hamburgerBtn  = document.getElementById('hamburgerBtn');
    const searchBtn     = document.getElementById('searchBtn');
    const overlayMenu   = document.getElementById('overlayMenu');
    const overlayClose  = document.getElementById('overlayClose');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchClose   = document.getElementById('searchClose');
    const searchInput   = document.getElementById('searchInput');

    if (hamburgerBtn && overlayMenu && overlayClose) {
      hamburgerBtn.addEventListener('click', () => {
        overlayMenu.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
      overlayClose.addEventListener('click', closeMenu);
    }
    function closeMenu() {
      overlayMenu && overlayMenu.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (searchBtn && searchOverlay && searchClose) {
      searchBtn.addEventListener('click', () => {
        searchOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        setTimeout(() => searchInput && searchInput.focus(), 350);
      });
      searchClose.addEventListener('click', closeSearch);
    }
    function closeSearch() {
      searchOverlay && searchOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    // Ingredient checkboxes
    document.querySelectorAll('.ingredient-check').forEach((cb) => {
      cb.addEventListener('change', () => {
        const li = cb.closest('li');
        if (li) li.style.opacity = cb.checked ? '.4' : '1';
      });
    });

    // Search — Enter key navigates to results
    [document.getElementById('searchInput'), document.getElementById('mainSearchInput')].forEach(inp => {
      if (inp) inp.addEventListener('keydown', e => {
        if (e.key === 'Enter') window.location.href = 'search-results.html';
      });
    });

    // Highlight active nav link
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
      if (a.getAttribute('href') === path) a.classList.add('active');
    });
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', init)
    : init();
})();
