function toggleElementsOnScroll() {
  if (window.innerWidth >= 744) {
    const categories = document.querySelector('.category-flex');
    const searchBar = document.querySelector('.search-bar-hidden');
    const navBar = document.querySelector('.nav-bar-743px');
    const staysInsideNav = document.getElementById('stays-inside-nav');

    if (categories && searchBar && navBar && staysInsideNav) {
        if (window.scrollY > navBar.offsetTop) {
            navBar.classList.add('fixed');
            if (window.scrollY >= categories.offsetTop - navBar.offsetHeight) {
                searchBar.style.display = 'flex';
                staysInsideNav.style.display = 'none';
                categories.style.position = 'fixed';
                categories.style.top = '48px';
                categories.style.right = '0';
                categories.style.left = '0';
                categories.style.borderTop = 'none';
            } else {
                searchBar.style.display = 'none';
                staysInsideNav.style.display = 'none';
                categories.style.position = 'static';
                categories.style.borderBottom = '2px solid rgba(0, 0, 0, 0.08)';
                
            }
        } else {
            navBar.classList.remove('fixed');
            categories.style.position = 'static';
            searchBar.style.display = 'none';
            staysInsideNav.style.display = 'none';
            categories.style.borderTop =  '1px solid rgba(0, 0, 0, 0.08)';
            categories.style.borderBottom = 'none';
        }
    }
}
    if (window.innerWidth >= 950) {
        const categories = document.querySelector('.category-flex');
        const searchBar = document.querySelector('.search-bar-hidden');
        const navBar = document.querySelector('.nav-bar-743px');
        const staysInsideNav = document.getElementById('stays-inside-nav');

        if (categories && searchBar && navBar && staysInsideNav) {
            if (window.scrollY > navBar.offsetTop) {
                navBar.classList.add('fixed');
                if (window.scrollY >= categories.offsetTop - navBar.offsetHeight) {
                    searchBar.style.display = 'flex';
                    staysInsideNav.style.display = 'none';
                    categories.style.position = 'fixed';
                    categories.style.top = '48px';
                    categories.style.right = '0';
                    categories.style.left = '0';
                } else {
                    searchBar.style.display = 'none';
                    staysInsideNav.style.display = 'flex';
                    categories.style.position = 'static';
                    categories.style.borderBottom = '2px solid rgba(0, 0, 0, 0.08)';
                }
            } else {
                navBar.classList.remove('fixed');
                categories.style.position = 'static';
                searchBar.style.display = 'none';
                staysInsideNav.style.display = 'flex';
            }
        }
    }
    
}

window.addEventListener('scroll', toggleElementsOnScroll);
