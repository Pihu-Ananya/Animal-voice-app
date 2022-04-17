
function start(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/FwmMIvmMi/", modelready);

}
function modelready(){
    classifier.classify(gotresult)
}function gotresult(error,result){
   console.log("gotresult");
   if (error){
       console.log("error");
       
   }
  else {
      console.log(result);
      random_r=Math.floor(Math.random()*255)
      random_g=Math.floor(Math.random()*255)
      random_b=Math.floor(Math.random()*255)
      document.getElementById("result_label").innerHTML="I can hear:"+result[0].label
      document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")"
       img1=document.getElementById("cat");
       img2=document.getElementById("dog");
       img3=document.getElementById("lion");
       img4=document.getElementById("cow");
if(result[0].label=="Barking"){
    img1.src="";
    img2.src="dog";
    img3.src="aliens-03.png";
    img4.src="aliens-04.png";
    
}
else if(result[0].label=="Snap"){
    img1.src="aliens-01.png";
    img2.src="aliens-02.gif";
    img3.src="aliens-03.png";
    img4.src="aliens-04.png";
    
}
else if(result[0].label=="Bell"){
    img1.src="aliens-01.png";
    img2.src="aliens-02.png";
    img3.src="aliens-03.gif";
    img4.src="aliens-04.png";
    
}
  else {
    img1.src="aliens-01.png";
    img2.src="aliens-02.png";
    img3.src="aliens-03.png";
    img4.src="aliens-04.gif";
    
}
}

} 