// ProfileView.js
import {firstName, lastName, year} from './Profile';

export function setHeader(element) {
  element.textContent = firstName + ' ' + lastName + ' (' + year + ')';
}