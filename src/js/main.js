// header
const navEl = document.querySelector('.nav');
const subMenu = navEl.querySelectorAll('.sub-menu');
const subItemEls = navEl.querySelectorAll('.sub-item');
subMenu.forEach(menuItem => {
  menuItem.addEventListener('mouseenter', () => {
    navEl.style.backgroundColor = 'rgba(239, 242, 249, 0.05)';
    subItemEls.forEach(subItem => {
      subItem.classList.remove('hide');
    });
  });
});
navEl.addEventListener('mouseleave', () => {
  navEl.style.backgroundColor = 'transparent';
  subItemEls.forEach(subItem => {
    subItem.classList.add('hide');
  });
});

// FAQ
const boxes = document.querySelectorAll('.faq .box');
boxes.forEach(box => {
  const nextBtn = box.querySelector('.next__btn');
  const question = box.querySelector('.box__question');
  const answer = box.querySelector('.box__answer');
  nextBtn.addEventListener('click', () => {
    question.classList.toggle('hide');
    answer.classList.toggle('hide');
  });
});

// projects
const projectImgs = document.querySelectorAll('.project__img');
projectImgs.forEach(projectImg => {
  projectImg.addEventListener('click', () => {
    projectImg.classList.toggle('flip');
  });
});

const leftBtn = document.querySelector('.to-left-btn');
const rightBtn = document.querySelector('.to-right-btn');
const projectWrapper = document.querySelector('.projects .wrapper');
leftBtn.addEventListener('click', () => {
  const projects = document.querySelectorAll('.projects .box');
  const rightProject = projectWrapper.removeChild(projects[2]);
  projects[0].insertAdjacentElement('beforebegin', rightProject);
  projects[1].classList.remove('center');
  projects[0].classList.add('center');
});
rightBtn.addEventListener('click', () => {
  const projects = document.querySelectorAll('.projects .box');
  const leftProject = projectWrapper.removeChild(projects[0]);
  projects[2].insertAdjacentElement('afterend', leftProject);
  projects[1].classList.remove('center');
  projects[2].classList.add('center');
});
