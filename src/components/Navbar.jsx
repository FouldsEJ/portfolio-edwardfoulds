import React from 'react';

function Navbar() {
  // Smooth scroll with dynamic offset equal to navbar height
  const onNavClick = React.useCallback((e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    const hash = anchor.getAttribute('href');
    const id = hash.slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();

    // Compute a precise offset: navbar height (CSS var) minus the target's top padding,
    // plus a small extra to push any previous divider fully out of view.
    const root = document.documentElement;
    const varVal = getComputedStyle(root).getPropertyValue('--nav-offset').trim();
    const navOffset = parseInt(varVal || '72', 10);
    const styles = getComputedStyle(target);
    const padTop = parseInt(styles.paddingTop || '0', 10);
    const extra = 12; // push a bit more so previous divider isn't visible
    const top = target.getBoundingClientRect().top + window.scrollY - (navOffset - padTop) - extra;

    window.scrollTo({ top, behavior: 'smooth' });
    // update URL without instant jump
    window.history.pushState(null, '', hash);
  }, []);

  React.useEffect(() => {
    // Keep a CSS var with navbar height + small gap so CSS and JS use the same value
    const updateOffsetVar = () => {
      const navbar = document.querySelector('.navbar-section');
      const height = navbar?.offsetHeight || 64;
      const gap = 8; // tighter breathing room to align headings
      document.documentElement.style.setProperty('--nav-offset', `${height + gap}px`);
    };
    updateOffsetVar();
    window.addEventListener('resize', updateOffsetVar);

    const sectionIds = ['about', 'skills', 'projects', 'experience', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const links = Array.from(
      document.querySelectorAll('.navbar-section .navbar-titles a')
    );

    const map = new Map();
    sections.forEach((sec) => {
      const href = `#${sec.id}`;
      const link = links.find((a) => a.getAttribute('href') === href);
      if (link) map.set(sec, link);
    });

    if (map.size === 0) return;

    const clearAndActivate = (link) => {
      if (!link) return;
      links.forEach((l) => {
        l.classList.remove('active');
        l.removeAttribute('aria-current');
      });
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    };

    // Initial active state from hash (do not default to first section)
    const setInitialActiveFromHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const initialLink = links.find((a) => a.getAttribute('href') === hash);
      if (initialLink) clearAndActivate(initialLink);
    };
    setInitialActiveFromHash();
    // If landing with a hash, adjust scroll to account for sticky navbar
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        const root = document.documentElement;
        const varVal = getComputedStyle(root).getPropertyValue('--nav-offset').trim();
        const offset = parseInt(varVal || '72', 10);
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top });
      }
    }

    const onHashChange = () => {
      setInitialActiveFromHash();
      if (window.location.hash) {
        const id = window.location.hash.slice(1);
        const el = document.getElementById(id);
        if (el) {
          const root = document.documentElement;
          const varVal = getComputedStyle(root)
            .getPropertyValue('--nav-offset')
            .trim();
          const offset = parseInt(varVal || '72', 10);
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    };
    window.addEventListener('hashchange', onHashChange);
    window.addEventListener('popstate', onHashChange);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = map.get(entry.target);
          if (!link) return;
          if (entry.isIntersecting) {
            clearAndActivate(link);
          }
        });
      },
      {
        root: null,
        // Trigger when section is well within the viewport (avoid top edge)
        rootMargin: '-40% 0px -55% 0px',
        threshold: [0.35, 0.6],
      }
    );

    map.forEach((_, sec) => observer.observe(sec));

    // Clear active when above the first section
    const getOffset = () => {
      const varVal = getComputedStyle(document.documentElement)
        .getPropertyValue('--nav-offset')
        .trim();
      return parseInt(varVal || '72', 10);
    };
    const firstSection = sections[0];
    const onScrollTopCheck = () => {
      if (!firstSection) return;
      const cutoff = firstSection.offsetTop - getOffset() * 0.6;
      if (window.scrollY < cutoff) {
        links.forEach((l) => {
          l.classList.remove('active');
          l.removeAttribute('aria-current');
        });
      }
    };
    window.addEventListener('scroll', onScrollTopCheck, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', onHashChange);
      window.removeEventListener('popstate', onHashChange);
      window.removeEventListener('scroll', onScrollTopCheck);
      window.removeEventListener('resize', updateOffsetVar);
    };
  }, []);
  return (
    <header>
      
      <nav className='navbar-section'>
        <div className='navbar-titles' onClick={onNavClick}>
          <a href='#about'>About</a>

          <a href='#skills'>Skills</a>
          <a href='#projects'>Projects</a>
          <a href='#experience'>Experience</a>

          <a href='#contact'>Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
