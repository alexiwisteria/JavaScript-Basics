import { Camera, cameraHTML } from './camera';

console.log('Hello from main.js!');
const myCamera = new Camera('Canon', 'AE-1', 1976, '35mm', '50mm', 'color negative');
console.log(myCamera);

// Output the cameraHTML function to the DOM
document.getElementById('root').innerHTML = cameraHTML(myCamera);
