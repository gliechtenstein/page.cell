var page = function(options) {
  var stub = {
    class: "page hidden",
    $init: function() {
      if (options.$init) {
        options.$init();
      }
      this.class = "page";
    },
    _hide: function() { this.class = 'page hidden'; }
  }
  for(var key in options) { stub[key] = options[key]; }
  return stub;
}
var pages = function(options) {
  return {
    $components: [
      css({
        ".page": {
          "display": "block",
          "position": "absolute",
          "overflow": "auto",
          "top": "0",
          "left": "0",
          "width": "100%",
          "height": "100%",
          "padding": "0",
          "margin": "0",
          "-webkit-transition": "left 0.3s",
          "transition": "left 0.3s"
        },
        ".page.hidden": {
          "left": "100%"
        }
      }),
      {
        class: "pages",
        $init: function() {
          var self = this;
          this.addEventListener("transitionend", function(e) {
            if (e.target.class === 'page hidden') {
              self.$components.pop();
              self._index--;
            }
          })
        },
        _prev: function() {
          this.$components[this.$components.length-1]._hide()
        },
        _remove: function(index) {
          this.$components.splice(index, 1); 
        },
        _next: function(template) {
          this._index++;
          this.$components.push(page(template));
        },
        _index: 0,
        $components: [ options.default ? page(options.default): page(options) ]
      }
    ]
  }
}
