var point = 0;
function pop(){
    point = point + 1;
    document.getElementById("point").innerHTML = point
    var img = document.getElementById("my-image")
    console.log(img.getAttribute("src"))
    if (img.getAttribute("src") == './src/1.jpg') {
        document.getElementById('my-image').src ='./src/2.jpg'
    } else {
        document.getElementById('my-image').src = './src/1.jpg'
    }
}