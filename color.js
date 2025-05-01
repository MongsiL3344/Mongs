var Links = {
  setColor: function (color) {
    var alist = document.querySelectorAll("a");
    for (var i = 0; i < alist.length; i++) {
      alist[i].style.color = color;
    }
  },
};
var Body = {
  setColor: function (color) {
    document.querySelector("body").style.color = color;
  },
  setBackgroundColor: function (color) {
    document.querySelector("body").style.backgroundColor = color;
  },
};

function nightDayHandler(self) {
  if (self.value === "night") {
    Body.setBackgroundColor("black");
    Body.setColor("white");
    self.value = "day";
    Links.setColor("yellow");
  } else {
    Body.setBackgroundColor("white");
    Body.setColor("black");
    self.value = "night";
    Links.setColor("yellow");
  }
}
