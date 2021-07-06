import nav from "./nav";
import css from "./footer.css";
import { top, bottom, footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import buttonstyles from './button.css'
import imageUrl from "./webpack_logo.jpeg"
import makeImage from './image';
import Foo from './foo.ts';

const button = makeButton('Howdy button');
const image = makeImage(imageUrl);

button.style = makeColorStyle('cyan');
document.body.appendChild(button);
document.body.appendChild(footer);
document.body.appendChild(image);

