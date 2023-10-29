function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function changeColor() {
    var colorBox = document.getElementById('body');
    colorBox.style.backgroundColor = getRandomColor();
  }
  function changeColor1() {
    var colorBox = document.getElementById('txt');
    colorBox.style.color = getRandomColor();
  }
  
  setInterval(changeColor, 1);
  setInterval(changeColor1,  1);
  