// your code, here
const perimeter = (length, width) => {
  if (width === 0 && length === 0) {
    return 'Both values can\'t be 0!';
  }
  return 2 * (length + width);
};

perimeter(0, 1);

module.exports = perimeter;
