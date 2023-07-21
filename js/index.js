
  function countDown() {
    let deadline = new Date("2023-12-23T00:00:00");
    let seconds = (deadline.getTime() - Date.now()) / 1000;
    let gepDays = Math.floor(((deadline.getTime() - Date.now()) / 1000)/60/60/24)
    document.querySelector(
      "#countdown"
    ).innerHTML = `${gepDays}`;
    document.querySelector(
      "#pCountdown"
    ).innerHTML = `${gepDays}`;
  }
  countDown();
  setInterval(countDown, 1000*60*60);//每个小时更新一次


  setInterval(function () {
    var date = new Date();
    var format = [
      ("0" + date.getHours()).substr(-2)
      , ("0" + date.getMinutes()).substr(-2)
      , ("0" + date.getSeconds()).substr(-2)
    ].join(":");

    document.getElementById("output").innerHTML = format;
  }, 500);


(function() {
// Main
initHeader();
function initHeader() {
    width = window.innerWidth;
    height = window.innerHeight;
    target = {x: width/2, y: height/2};

    largeHeader = document.getElementById('large-header');
    largeHeader.style.height = height+'px';


    // create points
    points = [];
    for(var x = 0; x < width; x = x + width/20) {
        for(var y = 0; y < height; y = y + height/20) {
            var px = x + Math.random()*width/20;
            var py = y + Math.random()*height/20;
            var p = {x: px, originX: px, y: py, originY: py };
            points.push(p);
        }
    }

    // for each point find the 5 closest points
    for(var i = 0; i < points.length; i++) {
        var closest = [];
        var p1 = points[i];
        for(var j = 0; j < points.length; j++) {
            var p2 = points[j]
            if(!(p1 == p2)) {
                var placed = false;
                for(var k = 0; k < 5; k++) {
                    if(!placed) {
                        if(closest[k] == undefined) {
                            closest[k] = p2;
                            placed = true;
                        }
                    }
                }

                for(var k = 0; k < 5; k++) {
                    if(!placed) {
                        if(getDistance(p1, p2) < getDistance(p1, closest[k])) {
                            closest[k] = p2;
                            placed = true;
                        }
                    }
                }
            }
        }
        p1.closest = closest;
    }

    // assign a circle to each point
    for(var i in points) {
        var c = new Circle(points[i], 2+Math.random()*2, 'rgba(255,255,255,0.3)');
        points[i].circle = c;
    }
}


})()
