noseX="";
noseY="";

function preload(){
    clown_nose = loadImage('Moustache.png');
}
function setup(){
    canvas = createCanvas(440,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(440,400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 440, 400);
    image(clown_nose, noseX, noseY, 90, 50);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function modelLoaded(){
    console.log('PoseNet is initialized');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = "+ results[0].pose.nose.x);
        console.log("nose y = "+ results[0].pose.nose.y);
        noseX=results[0].pose.nose.x-42;
        noseY=results[0].pose.nose.y+5;
    }
}