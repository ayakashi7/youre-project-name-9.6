import '../scss/style.scss'

// <script>
const button1 = document.getElementById('toggleBrands')
const block1 = document.getElementById('brandsList')
button1.addEventListener('click', function () {
  if (block1.style.height === '160px') {
    block1.style.height = 'auto'
    button1.innerHTML =
      ' <img class="expand-icon icon-rotate" src="img/icon/expand.png" alt="" /> <span class="expand-text ">Скрыть</span>'
  } else {
    block1.style.height = '160px'
    button1.innerHTML =
      ' <img class="expand-icon" src="img/icon/expand.png" alt="" /><span class ="expand-text">Показать все </span>'
  }
})
// script tecnologia
const button2 = document.getElementById('toggleBran')
const block2 = document.getElementById('brandList')
button2.addEventListener('click', function () {
  if (block2.style.height === '160px') {
    block2.style.height = 'auto'
    button2.innerHTML =
      ' <img class="expand-icon icon-rotate" src="img/icon/expand.png" alt="" /> <span class="expand-text ">Скрыть</span>'
  } else {
    block2.style.height = '160px'
    button2.innerHTML =
      ' <img class="expand-icon" src="img/icon/expand.png" alt="" /><span class ="expand-text">Показать все </span>'
  }
})

// navbar
const btn = document.querySelector('.btn_burger')
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')
const icon = document.querySelector('.bar')

btn.addEventListener('click', () => {
  sidebar.classList.add('active')

  // if (sidebar.classList.contains('active')) {
  //   icon.src = 'img/icon/back.svg'
  // } else {
  //   icon.src = 'img/icon/burger.svg'
  // }
})
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active')
})
document.addEventListener('click', (e) => {
  if (
    !sidebar.contains(e.target) &&
    !btn.contains(e.target) &&
    sidebar.classList.contains('active')
  ) {
    sidebar.classList.remove('active')
  }
})
// swiper first
var swiper1 = new Swiper('.swiper1', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.swiper1 .swiper-pagination',
    clickable: true
  }
})
var swiper2 = new Swiper('.swiper2', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.swiper2 .swiper-pagination',
    clickable: true
  }
})
var swiper3 = new Swiper('.swiper3', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.swiper3 .swiper-pagination',
    clickable: true
  }
})
