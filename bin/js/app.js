(function(){

  var init;

  init = function () {
    var orbitalMenu = new OrbitalMenu({
      id: 'controls' 
    });
  }

  if (window.addEventListener){
    window.addEventListener('load', init);
    return
  }

  window.onload = init; 

}());
