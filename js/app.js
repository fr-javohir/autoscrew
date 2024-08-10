// Mobile menu script code -------------------------->

let menuBtn = document.querySelector('.menuButton');
let navBar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
	navBar.classList.toggle('open');
	menuBtn.classList.toggle('active');
});

// Slider script code ----------------------------->

var swiper = new Swiper('.mySwiper', {
	direction: 'horizontal',
	loop: true,
	autoHeight: true,
	mousewheel: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	autoplay: {
		delay: 4500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

AOS.init();
