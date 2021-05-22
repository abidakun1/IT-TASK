
var imgArray=["psimg/1.jpg","psimg/2.jpg","psimg/3.jpg","psimg/4.jpg","psimg/5.jpg",
              "psimg/6.jpg","psimg/7.jpg","psimg/8.jpg","psimg/9.jpg"];

function change() {
  var random=Math.floor(Math.random()*imgArray.length);
  document.getElementById('image').src=imgArray[random];
}

height.onchange = function(){
            image.style.height = this.value + "px";
            }
width.onchange = function()
{
    image.style.width = this.value + "px";
}

border.onchange = function(){
    document.getElementById("image").border=border.value;
    document.getElementById("image").style.borderColor="red";

}