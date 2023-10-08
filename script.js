//dropdown
let lists = document.querySelectorAll('.menu__list-item')
for (let item of lists) {
	if (item.querySelector('.arrow')) {
	item.addEventListener('click', () => {
		let arrow = item.querySelector('.arrow')
		arrow.classList.toggle('arrow_active');
		item.querySelector('.dropdown').classList.toggle('dropdown_active')
		console.log(1);
	})
}
}
//close the window
let close_btn = document.querySelector('.discount__icon-close');
let discount_window = document.querySelector('.discount');
close_btn.addEventListener('click',()=>{
discount_window.remove();
});
//callform 
let main = document.querySelector('.main');
function add_callform() {
	let callform = document.querySelector('.callform__outer');
	if (callform != null)
	{
		callform.remove();
		return;
	}
	main.insertAdjacentHTML('afterbegin', `
	<div class="callform__outer">    
	<div class="curtain"></div>
	<div class="callform">
	<svg class="icon-close" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0_1909_1188)">
						<path d="M6 7.23077L12.7692 14L14 12.7692L7.23077 6L14 -0.769231L12.7692 -2L6 4.76923L-0.76923 -2L-2 -0.76923L4.76923 6L-2 12.7692L-0.76923 14L6 7.23077Z" fill="#747E94"/>
						</g>
						<defs>
						<clipPath id="clip0_1909_1188">
						<rect width="12" height="12" fill="white"/>
						</clipPath>
						</defs>
						</svg>
	<div class="callform__preinfo">
	<p class="callform__title callform__text">Заказать звонок</p>
	<p class="callform__note callform__text">Все поля обязательны к заполнению</p>
	</div>
	<form action="">
		<div class="callform__elements">
		<input class="callform__input" type="text" placeholder="Ваше имя">
		<input class="callform__input" type="tel" placeholder="+7 (___) ___-__-__">
		</div>
		<input type="checkbox" checked> Я согласен на обрабоку персональных данных
		<button type="submit" class="btn callform__btn">Позвоните мне</button>
	</form>
</div>
</div>`);
//close the window2
let close_btn2 = document.querySelector('.icon-close');
let callform_window = document.querySelector('.callform__outer');
close_btn2.addEventListener('click',()=>{
callform_window.remove();});
}
let callbtn = document.querySelector('.call_btn');
callbtn.addEventListener('click', add_callform);
let ask_for_call = document.querySelector('.ask-for-call');
ask_for_call.addEventListener('click', add_callform);
//director form
function add_dirform() {
	let dirform = document.querySelector('.drirectorform__outer');
	if (dirform != null)
	{
		dirform.remove();
		return;
	}
	main.insertAdjacentHTML('afterbegin', `<div class="directorform__outer">
	<div class="curtain"></div>
    <div class="directorform">
	<svg class="icon-close" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
	<g clip-path="url(#clip0_1909_1188)">
	<path d="M6 7.23077L12.7692 14L14 12.7692L7.23077 6L14 -0.769231L12.7692 -2L6 4.76923L-0.76923 -2L-2 -0.76923L4.76923 6L-2 12.7692L-0.76923 14L6 7.23077Z" fill="#747E94"/>
	</g>
	<defs>
	<clipPath id="clip0_1909_1188">
	<rect width="12" height="12" fill="white"/>
	</clipPath>
	</defs>
	</svg>
        <div class="directorform__preinfo">
        <p class="directorform__title callform__text">Написать деректору</p>
        <p class="directorform__note callform__text">Можете нас похвалить или поругать, оставить пожелания или задать вопрос</p>
        </div>
        <form action="">
            <div class="directorform__elements">
            <input class="directorform__input" type="text" placeholder="Ваше имя">
            <input class="directorform__input" type="tel" placeholder="+7 (___) ___-__-__">
            </div>
            <input class="directorform__input directorform__appeal" type="text" placeholder="Ваше обращение">
            <input type="checkbox" checked> Я согласен на обрабоку персональных данных
        </form>
        <button class="btn directorform__btn">Позвоните мне</button>
    </div></div>`);
	//close the window3
let close_btn3 = document.querySelector('.icon-close');
let callform_window = document.querySelector('.directorform__outer');
close_btn3.addEventListener('click',()=>{
callform_window.remove();});
}
let dirbtn = document.querySelector('.footer__write');
dirbtn.addEventListener('click', add_dirform);

//date
let now = new Date();
let day = now.getDate();
let month;
now = now.getMonth();
switch(now) {
	case 0:
		month = " января";
		break;
	case 1:
		month = " февраля";
		break;
	case 2:
		month = " марта";
		break;
	case 3:
		month = " апреля";
		break;
	case 4:
		month = " мая";
		break;
	case 5:
		month = " июня";
		break;
	case 6:
		month = " июля";
		break;
	case 7:
		month = " августа";
		break;
	case 8:
		month = " сентября";
		break;
	case 9:
		month = " октября";
		break;
	case 10:
		month = " ноябоя";
		break;
	case 11:
		month = " декабря";
		break;
}
let discount_date = document.querySelector('.date');
discount_date.innerHTML = day+month;
//burger
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu__list");
function showMenu() {
  burger.classList.toggle("burger_active");
  menu.classList.toggle("menu__list");
  menu.classList.toggle("menu-burger");
}
burger.addEventListener('click', showMenu);

//city
let city = document.querySelector(".city");
let number = document.querySelector(".number");
city.addEventListener("change", ()=>{
	console.log(city.value);
	switch(city.value){
		case "MSK":
			number.innerHTML = "(495) 677-95-80";
			break;
		case "KRD":
			number.innerHTML = "(861) 202-57-59";
			break;
		case "NCK":
			number.innerHTML = "(383) 383-29-27";
			break;
		case "VLD":
			number.innerHTML = "(423) 202-91-97";
			break;
	}
});

//swiper

const swiper_pres = new Swiper('.presentation__swiper-container', {
	width: 1550,
	slidesPerView: 1,
	spaceBetween: 0,
	loop: false,
	navigation: {
        nextEl: '.presentation__next',
        prevEl: '.presentation__prev',
      },
	breakpoints: {
	  480: {
		slidesPerView: 1,
		spaceBetween: 0,
	  },}
});
//services
let moving = document.querySelector('.services__moving');
let oldmovinghtml = moving.innerHTML;
moving.addEventListener('mouseover',()=>{
moving.innerHTML = '';
if (document.querySelector('.services__moving-text') == null)
	moving.insertAdjacentHTML('afterbegin', `<div class="services__moving-text">Обеспечим сохранность имущества во время переезда. Промаркируем короба, чтобы вы легко нашли нужный предмет. Ничего не потеряется и не разобьется.</div>`)
})
moving.addEventListener('mouseout',()=>{
	moving.innerHTML = oldmovinghtml;
})
/////////////////////////////////////////
let rigging = document.querySelector('.services__rigging');
let oldrigginghtml = rigging.innerHTML;
rigging.addEventListener('mouseover',()=>{
rigging.innerHTML = '';
if (document.querySelector('.services__rigging-text') == null)
	rigging.insertAdjacentHTML('afterbegin', `<div class="services__rigging-text">Выполним все работы по перемещению крупногабаритных грузов. Предоставим специализированный транспорт, материалы, оборудование, и команду специалистов-такелажников.</div>`)
})
rigging.addEventListener('mouseout',()=>{
	rigging.innerHTML = oldrigginghtml;
})
/////////////////////////////////////////
let personal = document.querySelector('.services__personal');
let oldpersonalhtml = personal.innerHTML;
personal.addEventListener('mouseover',()=>{
personal.innerHTML = '';
if (document.querySelector('.services__personal-text') == null)
	personal.insertAdjacentHTML('afterbegin', `<div class="services__personal-text">Обеспечиваем персоналом склады, РЦ, супермаркеты (комплектовщик, работник склада, работник торгового зала, фасовщик, водитель погрузчика и т.д.)</div>`)
})
personal.addEventListener('mouseout',()=>{
	personal.innerHTML = oldpersonalhtml;
})
/////////////////////////////////////////
let cleaning = document.querySelector('.services__cleaning');
let oldcleaninghtml = cleaning.innerHTML;
cleaning.addEventListener('mouseover',()=>{
cleaning.innerHTML = '';
if (document.querySelector('.services__cleaning-text') == null)
	cleaning.insertAdjacentHTML('afterbegin', `<div class="services__cleaning-text">Уборка квартиры, загородного дома, офиса, мытье окон и чистка после ремонта. Выполним на высшем уровне, с использованием самых передовых технологий.</div>`)
})
cleaning.addEventListener('mouseout',()=>{
	cleaning.innerHTML = oldcleaninghtml;
})
/////////////////////////////////////////
let workers = document.querySelector('.services__workers');
let oldworkershtml = workers.innerHTML;
workers.addEventListener('mouseover',()=>{
workers.innerHTML = '';
if (document.querySelector('.services__workers-text') == null)
	workers.insertAdjacentHTML('afterbegin', `<div class="services__workers-text">Обеспечим выполнение подсобных и вспомогательных работ на производстве и строительных площадках. Осуществим очищение территории, дорог, подьездов. Качественно и своевременно.</div>`)
})
workers.addEventListener('mouseout',()=>{
	workers.innerHTML = oldworkershtml;
})
/////////////////////////////////////////
let transport = document.querySelector('.services__transport');
let oldtransporthtml = transport.innerHTML;
transport.addEventListener('mouseover',()=>{
transport.innerHTML = '';
if (document.querySelector('.services__transport-text') == null)
	transport.insertAdjacentHTML('afterbegin', `<div class="services__transport-text">Использование специализированных автомобилей делает грузоперевозку безопасной для вашего имущества. В нашем распоряжении специализированная техника на любой случай
	и для любых габаритов.</div>`)
})
transport.addEventListener('mouseout',()=>{
	transport.innerHTML = oldtransporthtml;
})
/////////////////////////////////////////