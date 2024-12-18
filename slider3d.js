var flg = 0;
//

if (flg===0) {
  
  const galleryContainer = document.querySelector('.gallery-container');
  const galleryControlsContainer = document.querySelector('.gallery-controls');
  const galleryControls = ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<a class="gallery-controls-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></a>'];
  const galleryItems = document.querySelectorAll('.gallery-item');


  class Carousel {
    constructor(container, items, controls) {
      
      this.carouselContainer = container;
      this.carouselControls = controls;
      this.carouselArray = [...items];
    }

    setInitialState() {
      this.carouselArray[0]?.classList.add('gallery-item-first');
      this.carouselArray[1]?.classList.add('gallery-item-previous');
      this.carouselArray[2]?.classList.add('gallery-item-selected');
      this.carouselArray[3]?.classList.add('gallery-item-next');
      this.carouselArray[4]?.classList.add('gallery-item-last');

      document.querySelector('.gallery-nav').childNodes[0].className = 'gallery-nav-item gallery-item-first';
      document.querySelector('.gallery-nav').childNodes[1].className = 'gallery-nav-item gallery-item-previous';
      document.querySelector('.gallery-nav').childNodes[2].className = 'gallery-nav-item gallery-item-selected';
      document.querySelector('.gallery-nav').childNodes[3].className = 'gallery-nav-item gallery-item-next';
      document.querySelector('.gallery-nav').childNodes[4].className = 'gallery-nav-item gallery-item-last';
    }
    setCurrentState(target, selected, previous, next, first, last) {

      selected.forEach(el => {
        el.classList.remove('gallery-item-selected');

        if (target.className == 'gallery-controls-previous') {
          el.classList.add('gallery-item-next');
        } else {
          el.classList.add('gallery-item-previous');
        }
      });

      previous.forEach(el => {
        el.classList.remove('gallery-item-previous');

        if (target.className == 'gallery-controls-previous') {
          el.classList.add('gallery-item-selected');
        } else {
          el.classList.add('gallery-item-first');
        }
      });

      next.forEach(el => {
        el.classList.remove('gallery-item-next');

        if (target.className == 'gallery-controls-previous') {
          el.classList.add('gallery-item-last');
        } else {
          el.classList.add('gallery-item-selected');
        }
      });

      first.forEach(el => {
        el.classList.remove('gallery-item-first');

        if (target.className == 'gallery-controls-previous') {
          el.classList.add('gallery-item-previous');
        } else {
          el.classList.add('gallery-item-last');
        }
      });

      last.forEach(el => {
        el.classList.remove('gallery-item-last');

        if (target.className == 'gallery-controls-previous') {
          el.classList.add('gallery-item-first');
        } else {
          el.classList.add('gallery-item-next');
        }
      });
    }

    setNav() {
      galleryContainer.appendChild(document.createElement('ul')).className = 'gallery-nav';

      this.carouselArray.forEach(item => {
        const nav = galleryContainer.lastElementChild;
        nav.appendChild(document.createElement('li'));
      });
    }

    setControls() {
      this.carouselControls.forEach(control => {
        galleryControlsContainer.appendChild(document.createElement('A')).className = `gallery-controls-${control}`;
      });

      !!galleryControlsContainer.childNodes[0] ? galleryControlsContainer.childNodes[0].innerHTML = this.carouselControls[0] : null;
      !!galleryControlsContainer.childNodes[1] ? galleryControlsContainer.childNodes[1].innerHTML = this.carouselControls[1] : null;
    }

    useControls() {
      const triggers = [...galleryControlsContainer.childNodes];

      triggers.forEach(control => {
        control.addEventListener('click', () => {
          const target = control;
          const selectedItem = document.querySelectorAll('.gallery-item-selected');
          const previousSelectedItem = document.querySelectorAll('.gallery-item-previous');
          const nextSelectedItem = document.querySelectorAll('.gallery-item-next');
          const firstCarouselItem = document.querySelectorAll('.gallery-item-first');
          const lastCarouselItem = document.querySelectorAll('.gallery-item-last');

          this.setCurrentState(target, selectedItem, previousSelectedItem, nextSelectedItem, firstCarouselItem, lastCarouselItem);
        });
      });
    }
  }

  var intervl = setTimeout(function () {
    const galleryContainer = document.querySelector('.gallery-container');
    const galleryControlsContainer = document.querySelector('.gallery-controls');
    const galleryControls = ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<a class="gallery-controls-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></a>'];
    const galleryItems = document.querySelectorAll('.gallery-item');
    const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);
    exampleCarousel.setInitialState();
      exampleCarousel.setControls();
      exampleCarousel.setNav();
      exampleCarousel.useControls();
  },500);

 
  flg = 1;
}

setInterval(function () {
  if (document.querySelector('.gallery-controls-next') != null) { document.querySelector('.gallery-controls-next').click(); }
}, 2500);
