var point = 0;
function pop(){
    point = point + 1;
    document.getElementById("point").innerHTML = point
    // var body_bg = document.getElementById("my-image-bg"), style = body_bg.currentStyle || window.getComputedStyle(body_bg, false), bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    // console.log('Image URL: ' + bi)
//     if (bi == './src/1.jpg') {
//         document.getElementById("my-image-bg").style.backgroundImage = 'url(./src/2.jpg)'
//     } else {
//         document.getElementById("my-image-bg").style.backgroundImage = 'url(./src/2.jpg)'
//     }
}