const processArray = (deskArray) => {
  let newDeskArr = [...deskArray];

  /* TODO:
      - remove the last item
      - sort alphabetically
    */

  // Remove the last item from the array.
  newDeskArr.pop();
  // Sort the remaining array items alphabetically.
  newDeskArr.sort();
  // Move the last item in the array to the first position.
  const lastItem = newDeskArr.pop();
  newDeskArr.unshift(lastItem);
  // Find the "USB drive" item in the array and move it to the last position.
  const usbIndex = newDeskArr.findIndex((item) => item === 'USB drive');
  if (usbIndex !== -1) {
    const usbItem = newDeskArr.splice(usbIndex, 1)[0];
    newDeskArr.push(usbItem);
  }
  // Find the "laptop" item in the array and remove it.
  const laptopIndex = newDeskArr.findIndex((item) => item === 'laptop');
  if (laptopIndex !== -1) {
    newDeskArr.splice(laptopIndex, 1);
  }

  return newDeskArr;
};

export { processArray };
