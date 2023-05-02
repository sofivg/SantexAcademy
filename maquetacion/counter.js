var count1 = 0;
var count2 = 0;
var count3 = 0;

var countElem1 = document.getElementById('count-1');
var countElem2 = document.getElementById('count-2');
var countElem3 = document.getElementById('count-3');

function incrementCount1() {
  countElem1.innerHTML = count1;
  count1++;
  
  if (count1 > 58) {
    clearInterval(intervalId1);
  }
}

function incrementCount2() {
  countElem2.innerHTML = count2;
  count2++;
  
  if (count2 > 50) {
    clearInterval(intervalId2);
  }
}

function incrementCount3() {
  countElem3.innerHTML = count3;
  count3++;
  
  if (count3 > 301) {
    clearInterval(intervalId3);
  }
}

var intervalId1 = setInterval(incrementCount1, 50);
var intervalId2 = setInterval(incrementCount2, 50);
var intervalId3 = setInterval(incrementCount3, 10);