import './path/to/filename.scss'
import '../scss/style.scss'
// 2. Подключаем библиотеки
import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

// 3. ДЕЛАЕМ SWIPER ГЛОБАЛЬНЫМ (чтобы он был виден в script.js)
window.Swiper = Swiper

// <script>
const button = document.getElementById('toggleBrands')
const block = document.getElementById('brandsList')
button.addEventListener('click', function () {
  if (block.style.height === '160px') {
    block.style.height = 'auto'
    button.innerHTML =
      ' <img class="expand-icon icon-rotate" src="img/icon/expand.png" alt="" /> <span class="expand-text ">Скрыть</span>'
  } else {
    block.style.height = '160px'
    button.innerHTML =
      ' <img class="expand-icon" src="img/icon/expand.png" alt="" /><span class ="expand-text">Показать все </span>'
  }
})
// swiper
var swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})
