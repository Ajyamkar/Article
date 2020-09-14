function shareFunction1(){
  document.getElementById("share").innerHTML="";
  var paraContainer=document.querySelector(".para-container");
  paraContainer.style.paddingBottom="0";

  var div = document.createElement("DIV");
  div.style.width="22rem";
  div.style.height="4rem";
  div.style.borderRadius="0 0 15px 15px";
  div.style.margin="0 1rem 0 1rem";
  div.style.backgroundColor="black";

  var para=document.createElement("P");
  // var t=document.createTextNode("Share");
  para.innerHTML="S H A R E";
  para.style.color="white";
  para.style.display="inline-block";
  para.style.paddingLeft="1rem";

  var aImg1=document.createElement("A");
  aImg1.href="https://www.twitter.com";
  var img1=document.createElement("IMG");
  img1.src="images/icon-twitter.svg";
  img1.style.width="1.5rem";
  img1.style.margin="1rem 1rem";

  var aImg2=document.createElement("A");
  aImg2.href="https://www.facebook.com";
  var img2=document.createElement("IMG");
  img2.src="images/icon-facebook.svg";
  img2.style.width="1.5rem";
  img2.style.margin="1rem 1rem";

  var aImg3=document.createElement("A");
  aImg3.href="https://www.pinterest.com";
  var img3=document.createElement("IMG");
  img3.src="images/icon-pinterest.svg";
  img3.style.width="1.5rem";
  img3.style.margin="1rem 1rem";

  document.getElementById("share").appendChild(div).appendChild(para);
  document.getElementById("share").appendChild(div).appendChild(aImg1).appendChild(img1);
  document.getElementById("share").appendChild(div).appendChild(aImg2).appendChild(img2);
  document.getElementById("share").appendChild(div).appendChild(aImg3).appendChild(img3);

}
