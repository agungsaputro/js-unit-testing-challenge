function repeatStringNumTimes(string, times) {
    if (times > 0)
      return string.repeat(times);
    else
      return "";
  }
  
  module.exports = repeatStringNumTimes
  //console.log(repeatStringNumTimes("abc", 3));