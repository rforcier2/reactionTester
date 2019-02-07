let blockShape = document.getElementById("shape"),
    lastTime = 0,
    bestTime;


getRandomColor = () => {
  let letters = '0123456789ABCDEF',
      color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



generateShape = () => {
  let size = Math.floor(120 * (Math.random() + 1)),
      parentWidth = document.getElementById("gameZoom").offsetWidth,
      left = Math.floor(Math.random() * (parentWidth - size)),
      top = Math.floor(Math.random() * (500 - size)),
      isCircle = Math.floor(Math.random() * 2),
      nowTime = new Date().getTime(),
      duration = nowTime - lastTime;
  
  // Size 
  blockShape.style.width = size + "px";
  blockShape.style.height = size + "px";
 
  // Coordinates 
  blockShape.style.left = left + "px";
  blockShape.style.top = top + "px";
 
  // Shape
  blockShape.style.borderRadius = isCircle ? "50%" : "0";
  blockShape.style.backgroundColor = getRandomColor();

  // Duration
  getTime = () => {
    if (lastTime === 0) {
      lastTime = new Date().getTime();
      return;
    }
  }
  
  getTime
  // divided by 1000 to make seconds
  duration = duration / 1000;
  lastTime = nowTime;
  
  document.getElementById("timeTaken").innerHTML = duration + "s";
  duration > bestTime ? bestTime : bestTime = duration;
  document.getElementById("bestTime").innerHTML = "Best Time: " + bestTime +"s";
}

blockShape.onclick = generateShape;
