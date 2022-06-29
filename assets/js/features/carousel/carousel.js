// EVENT-PRODUCTS SLIDER
const eventProducts = new Swiper(".event-products", {
	loop: true,
	autoplay: {
		delay: 5000,
	},
	spaceBetween: 24,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		'0': {
			slidesPerView: 1
		},
		'360': {
			slidesPerView: 2,
			spaceBetween: 16
		},
		'500': {
			slidesPerView: 2
		},
		'768': {
			slidesPerView: 3
		},
		'1200': {
			slidesPerView: 5
		}
	}
});