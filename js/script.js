const header__burger = document.querySelector('.header__burger');
const header__menu = document.querySelector('.header__menu');
const body = document.querySelector('body');


header__burger.addEventListener('click' , function(){
	header__burger.classList.toggle('active');
	header__menu.classList.toggle('active');
	body.classList.toggle('lock');
});

const header__link = document.querySelectorAll('.header__link');


//CORDINATES OF BLOCKs

const a__us = document.querySelector('.a__us');
const our__projects = document.querySelector('.our__projects');
const catalog = document.querySelector('.catalog');
const contacts = document.querySelector('.contacts');

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return box.top + pageYOffset;
}

header__link[0].addEventListener('click' , function() {
	scrollTo({
		top:0,
		behavior: 'smooth',
	});
});

header__link[1].addEventListener('click' , function() {
	scrollTo({
		top:getCoords(a__us) - 65,
		behavior: 'smooth',
	});
});

header__link[2].addEventListener('click' , function() {
	scrollTo({
		top:getCoords(our__projects) - 65,
		behavior: 'smooth',
	});
});

header__link[3].addEventListener('click' , function() {
	scrollTo({
		top:getCoords(catalog) - 65,
		behavior: 'smooth',
	});
});

header__link[4].addEventListener('click' , function() {
	scrollTo({
		top:getCoords(contacts) - 65,
		behavior: 'smooth',
	});
});

for(let i = 0; i < header__link.length; i++)
{
	header__link[i].addEventListener('click' , function() {
		header__burger.classList.toggle('active');
		header__menu.classList.toggle('active');
		body.classList.toggle('lock');
	});
};

//SLIDER 

const carouselSlider = document.querySelector('.carousel__slider');
const carouselImages = document.querySelectorAll('.carousel__slider img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;

const size = carouselImages[0].clientWidth;

carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

//BTN LISTENERS

nextBtn.addEventListener('click' , function() {
	if(counter >= carouselImages.length - 1)return;
	carouselSlider.style.transition = "transform .7s ease-in-out";
	counter++;
	carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click' , function() {
	if(counter <= 0)return;	
	carouselSlider.style.transition = "transform .7s ease-in-out";
	counter--;
	carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlider.addEventListener('transitionend' , function() {
	if(carouselImages[counter].id === 'lastClone') {
		carouselSlider.style.transition = "none";
		counter = carouselImages.length - 2;
		carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
	if(carouselImages[counter].id === 'firstClone') {
		carouselSlider.style.transition = "none";
		counter = carouselImages.length - counter;
		carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
});

window.addEventListener('click' , function(){
	document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      	document.body.classList.add('loaded');
      	document.body.classList.remove('loaded_hiding');
      	preloader__item.classList.remove('goRight');
		preloader__item2.classList.remove('goLeft');
    }, 2500);
});

const preloader__item = document.querySelector('.preloader__item');
const preloader__item2 = document.querySelector('.preloader__item2');
const middle__line = document.querySelector('.middle__line');

document.addEventListener('DOMContentLoaded' , function(){
	preloader__item.classList.add('goRight');
	preloader__item2.classList.add('goLeft');
	middle__line.classList.add('oppa');

});

window.addEventListener('keydown' , function(){
	document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      	document.body.classList.add('loaded');
      	document.body.classList.remove('loaded_hiding');
      	preloader__item.classList.remove('goRight');
		preloader__item2.classList.remove('goLeft');
    }, 2500);
});

const tovar = document.querySelectorAll('.tovar');
const sh__or = document.querySelector('.sh__or');
const crstc = document.querySelector('.crstc');
const sh_or__title = document.querySelector('.sh-or__title');

const tovar__name = document.querySelector('#tovar__name');

for(let i = 0; i < tovar.length ; i++)
{
	tovar[i].addEventListener('click' , function(){
		if(i == 0)
		{
			tovar__name.value = "карнизы";
		}else if(i == 1)
		{
			tovar__name.value = "колонны";
		}else if(i == 2)
		{
			tovar__name.value = "пилястры";
		}else if(i == 3)
		{
			tovar__name.value = "арки";
		}else if(i == 4)
		{
			tovar__name.value = "балясины";
		}else if(i == 5)
		{
			tovar__name.value = "орнаменты";
		}
		sh__or.classList.toggle('active');
		sh_or__title.classList.toggle('active');

	});
}

crstc.addEventListener('click' , function(){
	sh__or.classList.toggle('active');
	sh_or__title.classList.toggle('active');
});


//ORDER


function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "andamanskie.ostrova@gmail.com",
	Password : "qwerty__andaman",
	To : 'nalrymetych@gmail.com',
	From : "andamanskie.ostrova@gmail.com",
	Subject : "НОВЫЙ ЗАКАААААААААААЗ!!!!!!!!",
	Body : [document.querySelector('#order__name').value ,document.querySelector('#order__email').value ,document.querySelector('#order__tel').value],
	
	}).then(
		message => alert("mail sent successfully")
	);
}

const order__btn = document.querySelector('#order__btn');

order__btn.addEventListener('click' , function(){

	if(document.querySelector('#order__name').value === '')
	{
		alert('заполните Имя!');
	}
	if(document.querySelector('#order__email').value === '')
	{
		alert('заполните адрес почты!');
	}
	if(document.querySelector('#order__tel').value === '')
	{
		alert('заполните номер телефона');
	}
	else
	{
		sendEmail();

		document.querySelector('#order__name').value = '';
		document.querySelector('#order__email').value = '';
		document.querySelector('#order__tel').value = '';
	}

});

