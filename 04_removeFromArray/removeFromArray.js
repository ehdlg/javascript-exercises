const removeFromArray = function (array, ...args) {
  args.forEach((argument) => {
    let index = array.indexOf(argument);
    if (index !== -1) {
      array.splice(array.indexOf(argument), 1);
    }
  });

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
