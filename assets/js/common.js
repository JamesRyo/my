var button = document.getElementById('submit');
var count = document.getElementById('count');
var valuex = document.getElementById('trueCount');

button.onclick = function () {

  var countInt = parseInt(count.innerText);


  count.innerText = countInt + 1;
  valuex.innerText= countInt + 1;
  
       if( countInt === 0 ){
    valuex.innerText = " ";
  }
  
  if( countInt > 14 ){
    valuex.innerText = " ";
    count.innerText = 1;
  }

}

document.getElementById("myText").onchange = function() {resetNum();colorize();};



function resetNum() {
   count.innerText = 0;
  valuex.innerText = 0;
}

