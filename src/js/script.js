/* eslint-disable linebreak-style */
const links = document.querySelectorAll('.sidebar__row');
const articles = document.querySelectorAll('.content-container');
const sidebarClassList = document.querySelectorAll('.section-sidebar');
const hamburger = document.querySelector('.topbar-hamburger-wrapper');
console.log('start!');


for(let link of links) {
  link.classList.remove('row-active');
  link.addEventListener('click', function() {
    const clickedElement = this;
    
    const linkId = link.getAttribute('name');
    
    for(let article of articles) {
      const articleId = article.getAttribute('id');
      
      if(linkId == articleId) {
        article.classList.add('content-container--active');
      } else {
        article.classList.remove('content-container--active');
      }
      
    }
    
    console.log(clickedElement);
    
    if(sidebarClassList[0].classList.contains('sidebar-active') == true) {
      sidebarClassList[0].classList.toggle('sidebar-active');
    }
    for(let link of links) {
      if (link == clickedElement) {
        clickedElement.classList.add('row-active');
      } else {link.classList.remove('row-active');
      }
    }
  });  
}

hamburger.addEventListener('click', function() {
  document.querySelector('.section-sidebar').classList.toggle('sidebar-active');
});