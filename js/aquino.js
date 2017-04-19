$(document).ready(function(){


  var body = $('body');

  body.load('/static/aquino-html.html', makeMagic);

  function makeMagic() {

    var elements = $('font');

    elements.each(function(i, e){
  	 $(e).hide();
    });

    elements = makeMatrix(elements, 70);
    Promise.all(drawAquino(elements)).then(function(){
      $('body').append('<p id="message" style="color:#fff;font-size:40px;font-family:arial, sans-serif";></p>');
      $('#message').typed({
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

  async function draw(items, interval) {
      for (var j = 0; j < items.length; j++) {
        var font = items[j];
        $(font).show();
        await sleep(interval);
      }
  }

  function drawAquino(elements) {
    var functions = [];
    for (var i = 0; i < elements.length; i++) {
      functions[i] = draw(elements[i], 40);
    }

    return functions;
  }

});
