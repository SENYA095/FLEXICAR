const dropdowns = document.querySelectorAll('.dropdown');


dropdowns.forEach(dropdown => {
	const select = dropdown.querySelector('.select');
	const arrow = dropdown.querySelector('.arrow');
	const menu = dropdown.querySelector('.menu');
	const options = dropdown.querySelectorAll('.menu li');
	const selected = dropdown.querySelector('.selected');

	select.addEventListener('click', () => {
		select.classList.toggle('select-clicked');
		arrow.classList.toggle('arrow-rotate');
		menu.classList.toggle('menu-open');
	});

	options.forEach(option => {
		option.addEventListener('click', () => {

			const langCode = option.getAttribute('data-lang');
			selected.innerText = langCode;

			select.classList.remove('select-clicked');
			arrow.classList.remove('arrow-rotate');
			menu.classList.remove('menu-open');

			options.forEach(li => {
				li.classList.remove('active');
				// приховуємо всі галочки
				const checkIcon = li.querySelector('.check');
				if (checkIcon) checkIcon.style.display = 'none';
			});

			option.classList.add('active');
			const checkIcon = option.querySelector('.check');
			if (checkIcon) checkIcon.style.display = 'inline-block';
		});
	});
});


