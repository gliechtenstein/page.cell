var template = function(index) {
  return {
    $text: index,
    style: {
      zIndex: index,
      fontSize: "200px",
      lineHeight: "100vh",
      textAlign: "center",
      cursor: "pointer",
      //background: "white",
      color: "white",
      //background: '#'+Math.floor(Math.random()*16777215).toString(16)
      background: '#'+Math.floor(Math.random()*8000000).toString(16)
    },
    onclick: function(e) {
      this._next(template(index+1));
    }
  }
}
