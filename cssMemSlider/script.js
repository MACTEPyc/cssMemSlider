const imageSlides = document.querySelectorAll('.image-slide'),
      infos = document.querySelectorAll('.info'),
      dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
  for (let imageSlide of imageSlides) {
    imageSlide.classList.remove('active');
  };
  imageSlides[n].classList.add('active');
}

const activeInfo = n => {
  for (let info of infos) {
    info.classList.remove('active');
  };
  infos[n].classList.add('active');
}

const activeDot = n => {
  for (let dot of dots) {
    dot.classList.remove('active');
  };
  dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
  activeSlide(ind);
  activeInfo(ind);
  activeDot(ind);
}

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    prepareCurrentSlide(index);
  })
})