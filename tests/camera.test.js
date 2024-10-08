import { expect, test } from 'vitest';
import { Camera, cameraHTML } from '../src/camera.js';


test('Hasselbad camera description should be correct', () => {
  const currentYear =  new Date().getFullYear();
  const myCamera = new Camera('Hasselblad', '500C/M', 1963, 'medium', 'Carl Zeiss 80mm f/2.8 Planar T', '120');
  const result = cameraHTML(myCamera);
  
  expect(result).toBe(
    `My camera is a Hasselblad 500C/M made in 1963 making it ${currentYear-1963} years old. It's a medium format camera with a Carl Zeiss 80mm f/2.8 Planar T lens using 120 film.`
  );
});

test('Fuji disposable camera description should be correct', () => {
  const currentYear =  new Date().getFullYear();
  const yourCamera = new Camera('Fuji', 'Disposable', 2000, 'regular', 'standard', '35');
  const result2 = cameraHTML(yourCamera);
  expect(result2).toBe(
    `My camera is a Fuji Disposable made in 2000 making it ${currentYear-2000} years old. It's a regular format camera with a standard lens using 35 film.`
  );
});
