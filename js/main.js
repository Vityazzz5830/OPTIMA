$('.catalogsec_mainpage_content_slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  dots: false,
  infinite: true,
  variableWidth: true,
  autoplay: false,
  autoplaySpeed: 3000
});

$('.spheresec_mainpage_content_slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  dots: false,
  infinite: false,
  variableWidth: true,
  prevArrow: $('.spheresec_mainpage_content_slider_prev'),
  nextArrow: $('.spheresec_mainpage_content_slider_next'),
});

$('.modal_info_container_title_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  dots: false,
  infinite: true,
  variableWidth: true,
  autoplay: false,
  autoplaySpeed: 3000,
  prevArrow: $('.modal_info_container_title_slider_buttons_prev'),
  nextArrow: $('.modal_info_container_title_slider_buttons_next')
});

$('.mobile-prev').on('click', function() {
    $('.modal_info_container_title_slider').slick('slickPrev');
});

$('.mobile-next').on('click', function() {
    $('.modal_info_container_title_slider').slick('slickNext');
});


$('.usesec_mainpage_content_list').slick({
  slidesToShow: 1.5,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  dots: false,
  infinite: false,
  variableWidth: true,
  responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1.5,
                variableWidth: true
            }
        },
        {
            breakpoint: 9999, // всё что выше 768
            settings: "unslick"
        }
    ]
  
});

window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('input[data-tel-input]'), function(input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = new_value;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});






if (document.querySelector('.mapsec_contactspage_map')) {

function init() {
    const coords = [55.695961, 37.335681];

    const map = new ymaps.Map('map', {
        center: coords,
        zoom: 17,
        controls: [
          'zoomControl',
    'geolocationControl',
    'fullscreenControl',
    'typeSelector'
        ] // отключаем стандартные контролы
    }, {
        suppressMapOpenBlock: true
    });

    var svgIcon = `
        <svg width="55" height="69" viewBox="0 0 55 69" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1671 27.315C16.1671 30.3931 17.4132 33.1822 19.4327 35.1978C21.4483 37.2134 24.2374 38.4634 27.3155 38.4634C30.3936 38.4634 33.1788 37.2173 35.1983 35.1978C37.2139 33.1822 38.4639 30.3931 38.4639 27.315C38.4639 24.2369 37.2178 21.4517 35.1983 19.4322C33.1827 17.4166 30.3936 16.1666 27.3155 16.1666C24.2374 16.1666 21.4483 17.4127 19.4327 19.4322C17.4171 21.4478 16.1671 24.2369 16.1671 27.315ZM45.8974 49.925C51.0029 42.9562 54.624 35.292 54.624 27.312C54.624 19.7729 51.5654 12.945 46.624 8C41.6826 3.0586 34.854 0 27.312 0C19.7729 0 12.945 3.0586 8 8C3.0547 12.9414 0 19.77 0 27.312C0 35.2925 3.6211 42.957 8.7266 49.925C13.6836 56.6867 20.0466 62.8 25.7886 67.866C26.6402 68.6277 27.9448 68.6472 28.8238 67.8738C34.5621 62.8074 40.9328 56.6938 45.8898 49.9288L45.8974 49.925ZM38.4404 38.437C35.5927 41.2847 31.6592 43.0464 27.3154 43.0464C22.9716 43.0464 19.0381 41.2847 16.1904 38.437C13.3427 35.5893 11.581 31.6558 11.581 27.312C11.581 22.9682 13.3427 19.0347 16.1904 16.187C19.0381 13.3393 22.9716 11.5776 27.3154 11.5776C31.6592 11.5776 35.5927 13.3393 38.4404 16.187C41.2881 19.0347 43.0498 22.9682 43.0498 27.312C43.0498 31.6558 41.2881 35.5893 38.4404 38.437Z" fill="#CB3D35"/>
</svg>
    `;

    var placemark = new ymaps.Placemark(
        coords,
        {
            
        },
        {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svgIcon),
            iconImageSize: [54, 68],
            iconImageOffset: [-17.5, -45],
            iconContentOffset: [135, 5],
            iconContentLayout: ymaps.templateLayoutFactory.createClass(
                '<div style="\
                    display:inline-block;\
                    background:#ffffff;\
                    padding:6px 10px;\
                    border-radius:6px;\
                    font-size:13px;\
                    font-weight:500;\
                    white-space:nowrap;\
                    box-shadow:0 2px 6px rgba(0,0,0,0.2);\
                    border:1px solid rgba(0,0,0,0.1);\
                    transform:translateX(-50%);\
                ">\
                    $[properties.iconContent]\
                </div>'
            )
        }
    );

    map.geoObjects.add(placemark);

    
}

ymaps.ready(init);


/*
let resizeTimeout;

window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        if (window.map) {
            map.container.fitToViewport();
        }
    }, 200);
});
*/

}


/*=====================КОРЗИНА=======================*/


/*=================КОЛ-ВО===================*/
const buttonMinuses = document.querySelectorAll('.basketsec__item-minus');
const buttonPluses = document.querySelectorAll('.basketsec__item-plus');

function updateMinus(e) {
    const input = e.target.nextElementSibling.firstElementChild; // Получаем следующий элемент (input)
    if (input) {
        input.stepDown();
    }
}

function updatePlus(e) {
    const input = e.target.previousElementSibling.firstElementChild; // Получаем предыдущий элемент (input)
    if (input) {
        input.stepUp();
    }
}

buttonMinuses.forEach(button => {
    button.addEventListener('click', updateMinus);
});

buttonPluses.forEach(button => {
    button.addEventListener('click', updatePlus);
});


function resizeInput(input) {
  const value = input.value || input.placeholder || '';
  const len = value.length || 1;
  input.style.width = len + 'ch';
}

document.addEventListener('input', (e) => {
  if (e.target.matches('input[type="number"]')) {
    resizeInput(e.target);
  }
});

document.querySelectorAll('input[type="number"]').forEach(resizeInput);




/*=================УДАЛЕНИЕ===================*//*
const container = document.querySelector('.firstsec_basketpage_content_table');
const emptyBlock = document.querySelector('.firstsec_basketpage_content_table_empty');

function checkEmpty() {
  const items = container.querySelectorAll('.firstsec_basketpage_content_table_item');
  emptyBlock.style.display = items.length ? 'none' : 'flex';
}

// делегирование клика
container.addEventListener('click', (e) => {
  const deleteBtn = e.target.closest('.firstsec_basketpage_content_table_item_delete');
  if (!deleteBtn) return;

  const item = e.target.closest('.firstsec_basketpage_content_table_item');
  if (!item) return;

  // добавляем анимацию
  item.classList.add('fade-out');

  // ждём окончания transition перед удалением
  item.addEventListener(
    'transitionend',
    () => {
      item.remove();
      checkEmpty();
    },
    { once: true }
  );
});

checkEmpty();

*/
if (document.querySelector('.firstsec_basketpage_content_table')) {

const container = document.querySelector('.firstsec_basketpage_content_table');
const emptyBlock = document.querySelector('.firstsec_basketpage_content_table_empty');
const counterBlock = document.querySelector('.header_content_uppart_rightpart_basket_count');

function updateCounter() {
  const items = container.querySelectorAll('.firstsec_basketpage_content_table_item');
  const count = items.length;
  counterBlock.textContent = count; // обновляем количество
  emptyBlock.style.display = count ? 'none' : 'flex'; // проверка пустоты
}

// делегирование клика для удаления
container.addEventListener('click', (e) => {
  const deleteBtn = e.target.closest('.firstsec_basketpage_content_table_item_delete');
  if (!deleteBtn) return;

  const item = e.target.closest('.firstsec_basketpage_content_table_item');
  if (!item) return;

  // добавляем анимацию удаления
  item.classList.add('fade-out');

  // ждём окончания transition перед удалением
  item.addEventListener(
    'transitionend',
    () => {
      item.remove();
      updateCounter(); // обновляем счетчик после удаления
    },
    { once: true }
  );
});

// первичная проверка
updateCounter();

}








document.querySelectorAll('[data-gallery]').forEach(gallery => {

  const mainImage = gallery.querySelector('.gallery-main-image');
  const thumbs = Array.from(gallery.querySelectorAll('.thumb'));

  let isAnimating = false;

  function getCurrentIndex() {
    return thumbs.findIndex(t => t.classList.contains('active'));
  }

  function updateGallery(index) {
    if (isAnimating) return;
    isAnimating = true;

    thumbs.forEach(t => t.classList.remove('active'));
    thumbs[index].classList.add('active');

    mainImage.classList.add('is-animating');

    setTimeout(() => {
      mainImage.src = thumbs[index].src;

      requestAnimationFrame(() => {
        mainImage.classList.remove('is-animating');
      });

      setTimeout(() => {
        isAnimating = false;
      }, 250);

    }, 150);
  }

  // init
  if (getCurrentIndex() === -1 && thumbs.length) {
    thumbs[0].classList.add('active');
    mainImage.src = thumbs[0].src;
  }

  thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => updateGallery(index));
  });

  

});



const buttons = document.querySelectorAll('.tabs__btn');
const contents = document.querySelectorAll('.tabs__content');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;

    // убираем активные
    buttons.forEach(b => b.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    // добавляем активный
    btn.classList.add('active');
    document.getElementById(tab).classList.add('active');
  });
});





if (document.querySelector('.modal-overlay2')) {

const btnsl = document.querySelectorAll('.usesec_mainpage_content_list_item');
const modalOverlayl = document.getElementById('modalOverlay2');
const modal_info = document.getElementById('modal_info');
const closeBtnl = document.getElementById('closeBtn_modal2');


// Функция открытия модального окна
function openModall() {
  modalOverlayl.style.pointerEvents = 'auto';
  modalOverlayl.classList.add('show');
  modal_info.classList.add('show');
  document.body.classList.add('noscroll');
}

// Функция закрытия модального окна
function closeModall() {
  modal_info.classList.remove('show');
  modalOverlayl.classList.remove('show');
  document.body.classList.remove('noscroll');

  setTimeout(() => {
    modalOverlayl.style.pointerEvents = 'none';
  }, 300);
}

// Открытие по любой кнопке .modal_order_btn
btnsl.forEach(buttonl => {
  buttonl.addEventListener('click', openModall);
});

// Закрытие по крестику
closeBtnl.addEventListener('click', closeModall);


// Закрытие по клику на оверлей
modalOverlayl.addEventListener('click', (event) => {
  if (event.target === modalOverlayl) {
    closeModall();
  }
});


}



if (document.querySelector('.modal-overlay')) {

const btns = document.querySelectorAll('.order_btn');
const modalOverlay = document.getElementById('modalOverlay');
const modal_order = document.getElementById('modal_order');
const closeBtn = document.getElementById('closeBtn_modal');
const formModalOrderBtn = document.querySelector('.form_modal_order_btn');



// Функция открытия модального окна
function openModal() {
  modalOverlay.style.pointerEvents = 'auto';
  modalOverlay.classList.add('show');
  modal_order.classList.add('show');
  document.body.classList.add('noscroll');
  if (modalOverlay.classList.contains('show')) {
    modal_order.classList.add('modal_order_animate');
  }
}

// Функция закрытия модального окна
function closeModal() {
  modal_order.classList.remove('show');
  modalOverlay.classList.remove('show');
  document.body.classList.remove('noscroll');
  setTimeout(() => {
    modalOverlay.style.pointerEvents = 'none';
  }, 300);
  if (modalOverlay.classList.contains('show')) {
    modal_order.classList.remove('modal_order_animate');
  }
}

// Открытие по любой кнопке .modal_order_btn
btns.forEach(button => {
  button.addEventListener('click', openModal);
});

// Закрытие по крестику
closeBtn.addEventListener('click', closeModal);


// Закрытие по клику на оверлей
modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});


}


if (document.querySelector('.playBtn')) {

const videov = document.getElementById('mainVideo');
const btnv = document.getElementById('playBtn');

// клик по кнопке — запуск
btnv.addEventListener('click', () => {
  videov.play();
  btnv.style.display = 'none';
});

// клик по видео — toggle play/pause
videov.addEventListener('click', () => {
  if (videov.paused) {
    videov.play();
    btnv.style.display = 'none';
  } else {
    videov.pause();
    btnv.style.display = 'flex';
  }
});

// если видео закончилось — вернуть кнопку
videov.addEventListener('ended', () => {
  btnv.style.display = 'flex';
});

}


/*--------------BURGER MENU-----------------------*/

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const close_popup = document.querySelector("#close_popup");
const sec = document.getElementsByTagName("section");

const body = document.body;
let listitembtn = document.getElementsByClassName('header_content-wrap-navmenu-list-item');



if (document.querySelector('#hamb')) {
  hamb.addEventListener("click", hambHandler);
  close_popup.addEventListener("click", hambHandler);


  function hambHandler(e) {
    e.preventDefault();
    // Переключаем стили элементов при клике
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    document.addEventListener("click", () => {
      if (hamb.classList.contains("active")) {
          body.classList.add("noscroll");
          
      }
    });
  }

  for (let n = 0; n < listitembtn.length; n++) {
    listitembtn[n].addEventListener('click', function() {
       popup.classList.toggle("open");
       body.classList.toggle("noscroll");
    });
  }

}