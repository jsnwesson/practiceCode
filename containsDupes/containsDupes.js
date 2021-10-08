function containsDupes(array){
  var dupeChecker = {};
  for (var i = 0; i < array.length; i++) {
    if (dupeChecker[array[i]]) {
      return true;
    } else {
      dupeChecker[array[i]] = true;
    }
  }
  return false;
}

module.exports = containsDupes;