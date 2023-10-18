const slider = document.querySelector('.slider');
const indicatorParents = document.querySelector('.disk');
let sectionIndex = 0;
const slideWidth = 100 / 3;

function moveToSlide(index) {
    sectionIndex = index;
    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorParents.children[sectionIndex].classList.add('selected');
    const translateValue = -sectionIndex * slideWidth;
    slider.style.transform = `translateX(${translateValue}%)`;
}

function nextSlide() {
    sectionIndex = (sectionIndex < 2) ? sectionIndex + 1 : 0;
    moveToSlide(sectionIndex);
}

function prevSlide() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 2;
    moveToSlide(sectionIndex);
}

document.querySelectorAll('.controls li').forEach(function (indicator, ind) {
    indicator.addEventListener("click", function () {
        moveToSlide(ind);
    });
});

setInterval(nextSlide, 3000);

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

leftArrow.addEventListener('click', function () {
    prevSlide();
});

rightArrow.addEventListener('click', function () {
    nextSlide();
});