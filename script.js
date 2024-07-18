// window.onscroll = function() {
//     toggleElementsOnScroll();
//   };
  
//   function toggleElementsOnScroll() {
//     const categories = document.querySelector('.category-flex');
//     const searchBar = document.querySelector('.search-bar-hidden');
//     const navBar = document.querySelector('.nav-bar-743px');
//     const staysInsideNav = document.getElementById('stays-inside-nav');
//     // const spacer = document.querySelector('.flex-spacer-nav-bar-743px');
  
//     if (categories && searchBar && navBar && staysInsideNav) {
//       if (window.scrollY >= navBar.offsetTop) {
//         navBar.classList.add('fixed');
//         if (window.scrollY >= categories.offsetTop - navBar.offsetHeight) {
//           searchBar.style.display = 'flex';
//           staysInsideNav.style.display = 'none';
//           // spacer.style.display = 'none';
//           categories.style.position = 'fixed';
//           categories.style.top = '50px';
         
//         } else {
//           searchBar.style.display = 'none';
//           // staysInsideNav.style.display = 'flex';
          
//         }
//       } 
//       else {
//         navBar.classList.remove('fixed');
//         categories.style.position = 'none';
//         searchBar.style.display = 'none';
//         staysInsideNav.style.display = 'block';
//       }
//     }
//   }
//   window.addEventListener('scroll', function() {
//     var stickyDiv = document.querySelector('.category-flex');
//     var stickyDivRect = stickyDiv.getBoundingClientRect(); // Get position info
//     var scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Get scroll position

//     if (scrollTop > stickyDivRect.top) {
//         stickyDiv.style.position = 'fixed';
//         stickyDiv.style.top = '0';
//     } else {
//         stickyDiv.style.position = 'relative';
//     }
// });
window.onscroll = function() {
  toggleElementsOnScroll();
};

function toggleElementsOnScroll() {
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
              // staysInsideNav.style.display = 'block';
              categories.style.position = 'static';
              categories.forEach(category => {
                category.style.borderBottom = '2px solid rgba(0, 0, 0, 0.08)';
            });
          }
      } else {
          navBar.classList.remove('fixed');
          categories.style.position = 'static';
          searchBar.style.display = 'none';
          staysInsideNav.style.display = 'flex';
      }
  }
}
