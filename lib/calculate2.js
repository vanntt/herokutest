var add = function (digitArr) {
  if (digitArr && digitArr.length > 0) {
    var sum = 0;
    for (var i = 0; i < digitArr.length; i++) {
      if (!isNaN(digitArr[i])) {
        sum += parseInt(digitArr[i]);
      } else {
        return 'not a number';
      }
    }

    return sum;
  } else {
    return 'not an array';
  }
}

module.exports = {
  add: add
}
