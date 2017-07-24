var template = function(index) {
  return {
    $components: [{
      $type: "img",
      src: "",
      style: {
        width: "100%",
        height: "100%"
      },
      _set: function(url) {
        this.src= url;
      },
      $init: function() {
        var self = this;
        fetch("https://api.unsplash.com/photos/random?client_id=b87441fffba59e26c90ac9ff43dfef45e7da5ff323b78a401955e4fa13a63ccc").then(function(res){
          return res.json();
        }).then(function(res){
          self._set(res.urls.regular);
        })
      },
      onclick: function(e) {
        this._next(template());
      }
    }]
  }
};
