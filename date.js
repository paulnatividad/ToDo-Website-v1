//jshint esversion: 6
//Module Object& Export
exports.getDate = function () {
  const today = new Date();
  //   var dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //   day = dayOfWeek[today.getDay()];

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  return today.toLocaleDateString("en-US", options);
};

//We turn it to anonymous function
//Can be anything -> ejsDay
exports.ejsDay = function () {
  const today = new Date();

  const options = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-US", options);
};
