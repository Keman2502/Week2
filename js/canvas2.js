const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const reader =  new FileReader();
var img = new Image();

const uploadImage = (e) => 
{
  reader.onload = () => 
  {  
    img.onload = () => 
    {
    var x = document.getElementById('head').value;
    var y = document.getElementById('foot').value;

    ctx.drawImage(img,0,0,300,150);
    ctx.font = "20px Georgia";
    ctx.fillStyle = "rgb(0, 0, 0,0.6)";
    ctx.fillText(x, 90, 20);
    ctx.fillText(y, 90, 150);
    }
  img.src= reader.result;
  }
reader.readAsDataURL(e.target.files[0]);
}
const imageLoader = document.getElementById("uploader");
imageLoader.addEventListener("change", uploadImage);


function download() 
{
  const image= canvas.toDataURL();
  const link = document.createElement('a');
 link.href = image;
 link.download= "image.png";
  link.click();
}
document.querySelector("button").addEventListener("click",download);
