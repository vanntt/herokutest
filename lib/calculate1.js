var isAdult = function (age) {
  if (age >18 ) {
    return true;
  } else {
    if (age < 1) {
      return -1;
    } else {
      return false;
    }
  }

}

module.exports = {
  isAdult: isAdult
}
