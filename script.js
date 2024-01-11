const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes_btn');
const noBtn = document.querySelector('.no_btn');
const anim = document.querySelector('.anima');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', click);




function click() {
    anim.innerHTML = " "
    question.innerHTML = "Lets Go!!!!";
}




noBtn.addEventListener('mouseover', mouseHover);

function mouseHover(){
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) * 2;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) * 1.5;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
};

