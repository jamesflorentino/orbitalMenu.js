var OrbitalMenu = (function() {

  function App(e) {

    var el, toggleButton, items, logs, item, centerX, centerY, i, left, top, angle, elevation, radius, radian, _this;

    _this = this;

    /** menu elements **/
    container = document.getElementById(e.id);
    el = container.getElementsByClassName('orbitalMenu')[0];
    toggleButton = el.getElementsByClassName('switch')[0];
    items = el.getElementsByTagName("a");

    this.items = [];
    this.el = el;

    /** basic trig **/
    centerX = el.clientWidth * 0.5;
    centerY = el.clientWidth * 0.5;
    elevation = 360 / items.length;
    angle = 30;
    radius = el.clientWidth * 0.5;

    /** events **/
    toggleButton.addEventListener('click', function() {
      return _this.visible ? _this.hide() : _this.show();
    });

    /** loop da whoop **/
    i = 0;
    while ((item = items.item(i++))) {

      radian = elevation * i * (Math.PI / 180);
      left = Math.sin(radian) * radius + centerX;
      top = Math.cos(radian) * radius + centerY;
      item.style.webkitTransitionDelay =
      item.style.MozTransitionDelay =
      item.style.oTransitionDelay =
      item.style.msTransitionDelay =
      item.style.transitionDelay = i * 0.03 + 's';

      item.data = {
        left: left,
        top: top,
        centerLeft: centerX,
        centerTop: centerY
      };

      this.items.push(item);
      this.hide();
    }
  }

  App.prototype.show = function() {
    this.visible = true;
    this.el.className = 'orbitalMenu visible';
    this.items.forEach(function(item) {
      item.style.left = item.data.left + 'px';
      item.style.top = item.data.top + 'px';
    });
  };

  App.prototype.hide = function() {
    this.visible = false;
    this.el.className = 'orbitalMenu hidden';
    this.items.forEach(function(item) {
      item.style.left = item.data.centerLeft + 'px';
      item.style.top = item.data.centerTop + 'px';
    });
  };

  return App;

}());
