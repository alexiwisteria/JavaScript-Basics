const processArray = (deskArray) => {
  let newDeskArr = [...deskArray];

  newDeskArr.pop();
  newDeskArr.sort();
  newDeskArr.unshift(newDeskArr.pop());
  const usbIndex = newDeskArr.indexOf('USB drive');
  newDeskArr.push(newDeskArr.splice(usbIndex, 1)[0]);
  const laptopIndex = newDeskArr.indexOf('laptop');
  newDeskArr.splice(laptopIndex, 1);

  return newDeskArr;
};

export { processArray };
