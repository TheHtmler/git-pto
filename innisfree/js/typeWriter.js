(function(a) {
  a.fn.typewriter = function(speed) {
  this.each(function() {
    var d = a(this),
    c = d.html(),
    b = 0;
    d.html("");
    var e = setInterval(function() {
      var f = c.substr(b, 1);
      if (f == "<") {
        b = c.indexOf(">", b) + 1
      } else {
        b++
      }
      d.html(c.substring(0, b) + (b & 1 ? "_": ""));
      if (b >= c.length) {
        clearInterval(e)
      }
    },
    speed)
  });
  return this;
  }
})(jQuery);