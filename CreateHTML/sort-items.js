// Function to process and sort the array as required
export function processArray(deskArray) {
  // Sort the array alphabetically
  const sortedArray = deskArray.sort();

  // Remove 'elephant' and 'laptop' from the array
  const filteredArray = sortedArray.filter(item => item !== 'elephant' && item !== 'laptop');

  // Move the last item to the front
  const lastItem = filteredArray.pop();
  filteredArray.unshift(lastItem);

  // Add 'USB drive' to the end if it's not already present
  if (!filteredArray.includes('USB drive')) {
    filteredArray.push('USB drive');
  } else {
    // Move 'USB drive' to the end to ensure it is the last element
    const usbIndex = filteredArray.indexOf('USB drive');
    filteredArray.push(...filteredArray.splice(usbIndex, 1));
  }

  return filteredArray;
}
