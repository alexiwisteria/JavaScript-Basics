// Set up the Backpack class
class Backpack {
  constructor(id, name, volume, color, pocketNum, dateAcquired) {
    this.id = id;
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.dateAcquired = dateAcquired;
  }

  // Method to calculate the age of the backpack in days
  backpackAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired; // elapsed time in milliseconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }
}

// Create new Backpack objects
const everydayPack = new Backpack(
  "pack01",
  "Everyday Backpack",
  30,
  "grey",
  15,
  "December 5, 2018 15:00:00 PST"
);

const frogPack = new Backpack(
  "pack02",
  "Frog Backpack",
  8,
  "green",
  3,
  "October 16, 2019 15:00:00 PST"
);

// Add Backpack objects into an array
const backpackObjectArray = [everydayPack, frogPack];

// Function to generate HTML for each backpack
function createBackpackMarkup() {
  // Iterate through each backpack object and generate its HTML markup
  const content = backpackObjectArray.map(backpack => {
    // Create an article element
    const article = document.createElement('article');
    article.id = backpack.id;

    // Create the HTML content using template literals
    article.innerHTML = `
            <h1>${backpack.name}</h1>
            <ul>
                <li>Volume:<span> ${backpack.volume}L</span></li>
                <li>Color:<span> ${backpack.color}</span></li>
                <li>Age:<span> ${backpack.backpackAge()} days old</span></li>
                <li>Number of pockets:<span>${backpack.pocketNum}</span></li>
            </ul>
        `;

    // Return the serialized HTML of each article element
    return article.outerHTML;
  }).join('');

  return content;
}

export { createBackpackMarkup, backpackObjectArray, Backpack };
