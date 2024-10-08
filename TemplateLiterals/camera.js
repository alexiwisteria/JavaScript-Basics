// Create a Camera class that takes in the following parameters:
export function Camera(brand, model, year, format, lens, filmType) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.format = format;
  this.lens = lens;
  this.filmType = filmType;
}

// Create a function that returns the current year
const getCurrentYear = () => {
  return new Date().getFullYear();
};

// Create a function that returns the age of the camera
const cameraAge = (year) => {
  return getCurrentYear() - year;
};

export const cameraHTML = (myCamera) => {
  // Use the cameraAge function to calculate the camera's age
  const age = cameraAge(myCamera.year);

  /*
    TODO: Your code goes between the backticks in `cameraStory` below.
    Goal output:
    My camera is a [brand] [model] made in [year] making it [age] years old.
    It's a [format] camera with a [lens] lens using [filmtype] film.`
  */
  const cameraStory = `My camera is a ${myCamera.brand} ${myCamera.model} made in ${myCamera.year} making it ${age} years old. It's a ${myCamera.format} format camera with a ${myCamera.lens} lens using ${myCamera.filmType} film.`;

  return cameraStory;
};
