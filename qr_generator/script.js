var qr_img=document.getElementById("qr_img");
var qr_image=document.getElementById("qr_image");

var input=document.getElementById("input");
var generate=document.getElementById("generate");


generate.addEventListener('click',()=>{

var txt=input.value;
    if (txt=="") {
        alert("enter a text");
        qr_img.style.display='none';
        qr_image.style.display='none';


    } else {
        // https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example
        var url="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data="+txt;
        qr_image.src=url;
        console.log(url);
        qr_img.style.display='block';
        qr_image.style.display='block';


    }
});