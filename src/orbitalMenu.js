var OrbitalMenu = (function() {

  function App(e) {

    _this = this;

    /** menu elements **/
    this.container    = document.getElementById(e.id);
    this.el           = this.container.getElementsByTagName('nav')[0];
    this.toggleButton = this.container.getElementsByClassName('switch')[0];


    /** events **/
    this.toggleButton.addEventListener('click', function() {
      return _this.visible ? _this.hide() : _this.show();
    });

    this.refresh();
    
  }

  App.prototype.refresh = function() {

    var items, centerX, centerY, elevation, radius, radian, item, i, left, top;
    
    items     = this.el.getElementsByTagName("a");
    centerX   = this.el.clientWidth * 0.5;
    centerY   = this.el.clientHeight * 0.5;
    elevation = 360 / items.length;
    radius    = this.el.clientWidth * 0.5;

    i = 0;
    this.items = [];
    while ((item = items.item(i++))) {

      radian = elevation * i * (Math.PI / 180);
      left   = Math.sin(radian) * centerX + centerX;
      top    = Math.cos(radian) * centerY + centerY;
      item.style.webkitTransitionDelay =
      item.style.MozTransitionDelay =
      item.style.oTransitionDelay =
      item.style.msTransitionDelay =
      item.style.transitionDelay = i * 0.03 + 's';

      item.data = {
        left: left + 'px',
        top: top + 'px',
        centerLeft: centerX + 'px',
        centerTop: centerY + 'px'
      }
      this.items.push(item);
    }
    this.hide();
  };

  App.prototype.show = function() {
    this.container.className = "orbitalMenu visible";
    this.items.forEach(function(item) {
      item.style.left = item.data.left;
      item.style.top = item.data.top;
    });
    this.visible = true;
  };

  App.prototype.hide = function() {
    this.container.className = "orbitalMenu hidden";
    this.items.forEach(function(item) {
      item.style.left = item.data.centerLeft;
      item.style.top = item.data.centerTop;
    });
    this.visible = false;
  };

  function removeClassReference(className, string) {
    return className.replace(string, '');
  }

  return App;

}());
