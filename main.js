noseX=0;
noseY=0;
EyesXR=0;
EyesYR=0;
function preload(){
    clown_nose=loadImage("https://i.postimg.cc/cLkzQ7Vg/Clown-Nose.png");
    glasses=loadImage("https://i.postimg.cc/CKBf1YGB/Glasses.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Initialized');
}
function gotPoses(results){
    if(results.length>0){
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y-15;
        EyesXR=results[0].pose.leftEye.x-37;
        EyesYR=results[0].pose.leftEye.y-18;
        console.log(results);
        console.log("nose x ="+results[0].pose.nose.x);
        console.log("nose y ="+results[0].pose.nose.y);
    }
}
function draw(){
    push();
    translate(width,0);
    scale(-1, 1);
    pop();
    image(video,0,0,300,300);
    image(clown_nose,noseX,noseY,30,30);
    image(glasses,EyesXR,EyesYR,50,30);
}
function take_snapshot(){
    save('FilterImage.png');
}