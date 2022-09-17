window.onload = function () {
    Particles.init({
      selector: ".background"
    });
  };
  
  var particles = Particles.init({
    selector: ".background",
    color: ["#FF0099", "#00ffff"],
    connectParticles: true,
    responsive: [
      {
        breakpoint: 900,
        options: {
          color: [ "#FF0099", "#00ffff"],
          maxParticles: 53,
          connectParticles: true
        }
      }
    ]
  });
  
  // START CLOCK SCRIPT
  
  Number.prototype.pad = function (n) {
    for (var r = this.toString(); r.length < n; r = 0 + r);
    return r;
  };
  
  function updateClock() {
    var now = new Date();
    var millisec = now.getMilliseconds(),
      sec = now.getSeconds(),
      min = now.getMinutes(),
      hour = now.getHours(),
      month = now.getMonth(),
      day = now.getDate(),
      year = now.getFullYear();
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const tags = ["month", "day", "year", "hour", "min", "s", "millisec"],
      corr = [
        months[month],
        day,
        year,
        hour.pad(2),
        min.pad(2),
        sec.pad(2),
        millisec
      ];
    for (var i = 0; i < tags.length; i++)
      document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
  }
  
  window.onload = function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
  };
  