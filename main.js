song1="barney.mp3";
song2="bob.mp3";
rightX="";
rightY="";
leftX="";
leftY="";



function setup () {
    canvas = createCanvas(600, 500);
    canvas.center();


    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}




function preload()
{
song = loadSound(" bob.mp3");
song = loadSound("barney.mp3");
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
  }


