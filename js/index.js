// JS goes here

let hamburger = document.querySelector('.hamburger');
let hamburgerClose = document.querySelector('.close-hamburger');
let navBar = document.querySelector('.nav-bar');
let navA = document.querySelector('.nav-bar a');
let navCon = document.querySelector('.nav-container');
let logo = document.querySelector('.logo');




hamburger.addEventListener('click', () => {
    if (!navBar.classList.contains('nav-toggle')) {
        navBar.classList.add('nav-toggle');
        TweenMax.to(navBar, .75, {className: '+=active'});
        navCon.style.display = 'unset';
        hamburger.style.display = 'none';
        hamburgerClose.style.display = 'unset';
        
    } 
});

hamburgerClose.addEventListener('click', () => {
    if (navBar.classList.contains('nav-toggle')) {
        navBar.classList.remove('nav-toggle');
        TweenMax.to(navBar, .75, {className: '-=active'});
        navCon.style.display = 'none';
        hamburger.style.display = 'unset';
        hamburgerClose.style.display = 'none';
    } 
});

class TabLink {
    constructor(tabElement){
      this.tabElement = tabElement;

      this.tabData = this.tabElement.dataset.tab;
      
      this.itemElement = document.querySelector(`.tab-item-title[data-tab = "${this.tabData}"]`);

      this.itemImg = document.querySelector(`.tab-item-img[data-tab = "${this.tabData}"]`);

      this.tabTitle = new TabTitle(this.itemElement);
      this.tabImg = new TabImg(this.itemImg);
    
      this.tabElement.addEventListener('click', () => {
        this.selectTab();
      });
    }

    selectTab(){
        const tabs = document.querySelectorAll('.tab');
     
        tabs.forEach(tab => tab.classList.remove('link-selected'));
        
        this.tabElement.classList.add('link-selected');

        this.tabTitle.select();
        this.tabImg.selectImg();
      }
    }

    class TabTitle {
        constructor(element) {
          this.element = element;
        }
      
        select() {
          const items = document.querySelectorAll('.tab-item-title');
      
          Array.from(items).forEach(item => item.classList.remove('title-selected'));

          this.element.classList.add('title-selected');
        }
      }

      class TabImg {
        constructor(element) {
          this.element = element;
        }
      
        selectImg() {
          const imgItem = document.querySelectorAll('.tab-item-img');
      
          Array.from(imgItem).forEach(img => img.classList.remove('img-selected'));

          this.element.classList.add('img-selected');
        }
      }

let tabs = document.querySelectorAll(".tab")
                   .forEach(tab => new TabLink(tab));
