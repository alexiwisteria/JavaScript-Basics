import { processArray } from './sort-items.js';
const deskArray = ['pen', 'camera', 'phone', 'notebook', 'headphones', 'laptop', 'light bulb', 'USB drive', 'elephant'];
document.getElementById('root').innerHTML = processArray(deskArray);
