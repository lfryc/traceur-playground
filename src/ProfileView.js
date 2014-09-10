// ProfileView.js
import {profile} from './Profile';

export function setHeader(element) {
  element.textContent = profile.firstName + ' ' + profile.lastName + ' (' + profile.year + ')';
}