document.addEventListener('DOMContentLoaded', function () {
	'use strict';
	const cross = document.querySelector('[data-prop="close-popup"]');
	const popup = document.querySelector('[data-prop="popup"]');
	const burger = document.querySelector('[data-prop="open-popup"]');
	const scroller = document.querySelector('body');
	function closeMobileMenu() {
		popup.style.transform = 'scale(0)';
		setTimeout(function () {
			popup.style.display = 'none';
		}, 300);
	}
	function openMobileMenu() {
		popup.style.display = 'block';
		setTimeout(function () {
			popup.style.transform = 'scale(1)';
		}, 10);
	}
	cross.addEventListener('click', closeMobileMenu);
	burger.addEventListener('click', openMobileMenu);

	const links = document.querySelectorAll('.smooth a');
	const m_links = document.querySelectorAll('.smooth_mobile a');

	for (const link of links) {
		link.addEventListener('click', clickHandler);
	}
	for (const link of m_links) {
		link.addEventListener('click', m_clickHandler);
	}

	function clickHandler(e) {
		e.preventDefault();
		const href = this.getAttribute('href');
		const offsetTop = document.querySelector(href).offsetTop;

		scroll({
			top: offsetTop,
			behavior: 'smooth',
		});
	}
	function m_clickHandler(e) {
		e.preventDefault();
		const href = this.getAttribute('href');
		const offsetTop = document.querySelector(href).offsetTop;
		closeMobileMenu();
		scroll({
			top: offsetTop,
			behavior: 'smooth',
		});
	}

	if (screen.width > 1920) {
		const box = document.querySelectorAll('.box');
		for (const boxes of box) {
			boxes.style.padding = '0 25%';
		}
	}
});
