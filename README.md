# orbitalMenu.js

A basic animated menu that (sorta) mimics Path's navigation UI. Please __do not use as is__ to avoid similarities with the original. Style the CSS a bit. __Note: Not thoroughly tested in old browsers. Be wary.__

## Technical details

It utilizes css3 transforms and transitions to facilitate the animation. It is currently not tested in IE8- so be wary of using it for actual production.

## HTML Markup

This is the basic HTML template. You only need to append the `<nav class="orbitalMenu">` element with the HTML `<a>` tag. It doesn't matter how many they are as long as you set the width and height of `#controls`

```html
<div id="controls">
  <nav class="orbitalMenu">
    <a class="photos">Ph</a>
    <a class="places">Pl</a>
    <a class="thought">Th</a>
    <a class="music">Mu</a>
    <a class="sleep">Sl</a>
    <a class="people">Pe</a>

    <div class="switch">+</div>
  </nav>
</div>
```

## JavaScript

```javascript
 var orbitalMenu = new OrbitalMenu({id:'controls')};
```

## Methods

show the menu

```javascript
orbitalMenu.show();
```

hide the menu

```javascript
orbitalMenu.hide();
```

### Credits

- Initially written by [James Florentino](http://jamesflorentino.com)
- Released under [GNU General Public License](http://www.gnu.org/licenses/).
- Feel free to modify, enhance and use the code to your liking.
