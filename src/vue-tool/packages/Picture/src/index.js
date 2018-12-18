var Picture = {
  // 图片转换base64
  getBase64Image(img) {
    return new Promise((resolve, reject) => {
      var image = new Image();
      image.setAttribute("crossOrigin", 'Anonymous')
      image.crossOrigin = "Anonymous"; //注意存放顺序
      image.src = img;
      image.onload = function () {
        var canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, image.width, image.height);
        var ext = image.src.substring(image.src.lastIndexOf(".") + 1).toLowerCase();
        console.log(ext)
        var dataURL = canvas.toDataURL("image/" + ext);
        resolve(dataURL)
      };
    })
  }
}
export default Picture
