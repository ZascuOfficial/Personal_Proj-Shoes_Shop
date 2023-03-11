const root = document.documentElement;

const leftBracket = document.getElementById('left-bracket');
const rightBracket = document.getElementById('right-bracket');
const heroImage = document.getElementById('hero-image');

import THEMES from './data/themes.js';

let currentTheme = 0;

const updateElements = () => {
  root.style.setProperty('--clr-accent', THEMES[currentTheme].accentColor);
  root.style.setProperty('--clr-accent-dark', THEMES[currentTheme].accentDarkColor);
  heroImage.style.backgroundImage = THEMES[currentTheme].image;
}

rightBracket.addEventListener('click', () => {
  currentTheme++;

  if (currentTheme > THEMES.length - 1)
    currentTheme = 0;

  updateElements();
});

leftBracket.addEventListener('click', () => {
  currentTheme--;

  if (currentTheme < 0)
    currentTheme = THEMES.length - 1;

  updateElements();
});