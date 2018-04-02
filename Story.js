var inventory= [];

document.getElementById("everything").style.display="block";
document.getElementById("s1").style.display="block";
document.getElementById("inv").style.display="none";

document.getElementById('s1c1').addEventListener("click", function(){
document.getElementById("s2a").style.display="block";
document.getElementById("s1c2").style.display="none";
});

document.getElementById('s1c2').addEventListener("click", function(){
document.getElementById("s2b").style.display="block";
document.getElementById("s1c1").style.display="none";
});

document.getElementById('s2ac1').addEventListener("click", function(){
document.getElementById("s3a").style.display="block";
document.getElementById("s2ac2").style.display="none";
document.getElementById("inv").style.display="block";
inventory.push("Meat");
});

document.getElementById('s2ac2').addEventListener("click", function(){
document.getElementById("s3b").style.display="block";
document.getElementById("s2ac1").style.display="none";
document.getElementById("inv").style.display="block";
inventory.push("Knife");
});

document.getElementById('s2bc1').addEventListener("click", function(){
document.getElementById("s3c").style.display="block";
document.getElementById("s2bc2").style.display="none";
document.getElementById("inv").style.display="block";
inventory.push("Gas Mask");
});

document.getElementById('s2bc2').addEventListener("click", function(){
document.getElementById("s3d").style.display="block";
document.getElementById("s2bc1").style.display="none";
document.getElementById("inv").style.display="block";
inventory.push("Bullet Proof Vest");
});

document.getElementById('s3bc1').addEventListener("click", function(){
document.getElementById("die").style.display="block";
document.getElementById("s3bc2").style.display="none";
});

document.getElementById('s3ac1').addEventListener("click", function(){
document.getElementById("survive").style.display="block";
document.getElementById("s3ac2").style.display="none";
});

document.getElementById('s3ac2').addEventListener("click", function(){
document.getElementById("die").style.display="block";
document.getElementById("s3ac1").style.display="none";
});

document.getElementById('s3bc2').addEventListener("click", function(){
document.getElementById("survive").style.display="block";
document.getElementById("s3bc1").style.display="none";
});

document.getElementById('s3cc1').addEventListener("click", function(){
document.getElementById("die").style.display="block";
document.getElementById("s3cc2").style.display="none";
});

document.getElementById('s3cc2').addEventListener("click", function(){
document.getElementById("survive").style.display="block";
document.getElementById("s3cc1").style.display="none";
});

document.getElementById('s3dc1').addEventListener("click", function(){
document.getElementById("die").style.display="block";
document.getElementById("s3dc2").style.display="none";
});

document.getElementById('s3dc2').addEventListener("click", function(){
document.getElementById("survive").style.display="block";
document.getElementById("s3dc1").style.display="none";
});
document.getElementById('inv').addEventListener("click", function(){
document.getElementById("demo").innerHTML= inventory;
});

document.getElementById("egg").style.display="block";
document.getElementById('egg').addEventListener("click", function(){
document.getElementById("easteregg").style.display="block";
document.getElementById("everything").style.display="none";
});
