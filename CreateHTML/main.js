import { createBackpackMarkup, backpackObjectArray } from './backpack.js'; // Import createBackpackMarkup function

// Generate the HTML string for all backpacks in the array
const articleElementObjects = createBackpackMarkup(backpackObjectArray);

// Reduce collects output from each iteration and builds on
// Here we are taking the array of articles and appending them to each other
// to make an HTML string
let htmlString = "";
if (Array.isArray(articleElementObjects)) {
  htmlString = articleElementObjects.reduce((combinedHTML, backpackMarkup) => {
    return combinedHTML + backpackMarkup; // Concatenate each HTML string
  }, ''); // '' is the initial value of combinedHTML
} else {
  htmlString = articleElementObjects;
}

// Update the page with the generated HTML
document.getElementById('root').innerHTML = htmlString;
