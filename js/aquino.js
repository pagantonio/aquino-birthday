$(document).ready(function(){

  $('#pageBody').load('/static/aquino-html.html', makeMagic);

  function makeMagic() {
    $('#pageBody').append('<p id="message" style="color:#fff;font-size:40px;font-family:arial, sans-serif";></p>');

    var elements = document.querySelectorAll('font');

    elements.forEach(function(e, i){
      e.style.visibility = 'hidden';
    });

    elements = makeMatrix(elements, 70);
    Promise.all(drawAquino(elements)).then(function(){


      var message = document.getElementById('message');
      Typed.new('#message', {
        strings: ['PARABÉNS... ^1000 CRETINO!'],
        typeSpeed: 1
      });
    });
  }

  function makeMatrix(array, interval) {
    var matrix = [];
    var i;
    var k;

    for (i = 0, k = -1; i < array.length; i++) {
        if (i % interval === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(array[i]);
    }

    return matrix;
}

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function draw(items, initialSpeed, decreasingValue) {
      for (var j = 0; j < items.length; j++) {
        var font = items[j];
        var sleepTime = initialSpeed - (j * decreasingValue)/2;
        sleepTime = sleepTime <= decreasingValue ? decreasingValue : sleepTime;
        font.style.visibility = 'visible';
        await sleep(sleepTime);
      }
  }

  function drawAquino(elements) {
    var functions = [];
    for (var i = 0; i < elements.length; i++) {
      functions[i] = draw(elements[i], 200, 20);
    }

    return functions;
  }
});
