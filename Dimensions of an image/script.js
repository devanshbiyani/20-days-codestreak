function displayDimensions() {
  var input = document.getElementById("image-input");
  var image = new Image();
  image.src = URL.createObjectURL(input.files[0]);
  image.onload = function() {
    var dimensions = document.getElementById("dimensions");
    dimensions.innerHTML = "Width: " + image.width + "px, Height: " + image.height + "px";
  }
}
