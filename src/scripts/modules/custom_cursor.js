import { Cursor } from '../utils/Cursor.js';

if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  new Cursor(document.querySelectorAll('.cursor'), '.gsap-cursor-trigger, label, input, a, button');
} else {
  document.querySelector('.custom-cursor-container').classList.add('hidden');
}
