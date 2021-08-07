const openGallery = a => {
  let imgArry = [...a.parentElement.children];
  let galleryCon = a.parentElement;
  galleryCon.classList.add('openGallery');

  const createButtons = a => {
    let controls = document.createElement('DIV');
    controls.classList.add('galleryControls');

    let next = document.createElement('DIV');
    next.classList.add('nextImg');
    next.innerHTML = "<i class='caret right icon'></i>";
    next.setAttribute('onClick', 'nextImg(this)');

    let last = document.createElement('DIV');
    last.classList.add('lastImg');
    last.innerHTML = "<i class='caret left icon'></i>";
    last.setAttribute('onClick', 'lastImg(this)');

    let close = document.createElement('DIV');
    close.classList.add('closeGallery');
    close.innerHTML = "<i class='window close outline icon'></i>";
    close.setAttribute('onClick', 'closeGallery(this)');

    controls.appendChild(close);
    controls.appendChild(last);
    controls.appendChild(next);
    galleryCon.appendChild(controls);
  };

  if (a.classList.contains('open')) {
    // imgArry.forEach((element) => {
    //   element.classList.remove('display-none');
    //   element.classList.remove('open');
    // });
    return;
  } else {
    imgArry.forEach(element => {
      element.classList.add('display-none');
    });
    imgArry[imgArry.length - 1].classList.contains('galleryControls')
      ? imgArry[imgArry.length - 1].classList.remove('display-none')
      : createButtons(a);
    a.classList.remove('display-none');
    a.classList.add('open');
  }
};

const nextImg = a => {
  let imgs = [...a.parentElement.parentElement.children];
  let newImg = false;
  imgs.forEach((element, index) => {
    if (element.classList.contains('open')) {
      element.classList.remove('open');
      element.classList.add('display-none');
      if (index < imgs.length - 2) {
        newImg = imgs[index + 1];
      } else {
        newImg = imgs[0];
      }
    }
  });
  newImg.classList.remove('display-none');
  newImg.classList.add('open');
};

const lastImg = a => {
  let imgs = [...a.parentElement.parentElement.children];
  let newImg = false;
  imgs.forEach((element, index) => {
    if (element.classList.contains('open')) {
      element.classList.remove('open');
      element.classList.add('display-none');
      if (index > 1 || index == imgs.length - 2) {
        newImg = imgs[index - 1];
      } else {
        newImg = imgs[imgs.length - 2];
      }
    }
  });
  newImg.classList.remove('display-none');
  newImg.classList.add('open');
};

const closeGallery = a => {
  let imgs = [...a.parentElement.parentElement.children];

  imgs.forEach((element, index) => {
    element.classList.remove('open');
    element.classList.remove('display-none');
  });

  document
    .querySelector('.openGallery')
    .lastChild.classList.add('display-none');
  document.querySelector('.openGallery').classList.remove('openGallery');
};

// document.addEventListener('DOMContentLoaded', function (event) {
//   console.log('trigger');
//   document.getElementById('__next') &&
//     document
//       .getElementById('__next')
//       .setAttribute('class', window.location.pathname.split('/')[0]);
// });
