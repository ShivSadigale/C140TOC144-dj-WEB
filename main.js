song = "crazy_girl.mp3";
song = "ozzy_osbourne.mp3";

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

scoreRightWrist = 0;
scoreLeftWrist = 0;

song_status = ;

preload() { 
    song = loadSound("crazy_girl.mp3")
    song = loadSound("ozzy_osbourne.mp3")
}


function setup() {

    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on(pose, gotPoses)
}

function modelLoaded() {
    console.log('Posenet Is Initialized')
}

function gotPoses() {
    if(results.length > 0) {

        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        scoreRightWrist = results[0].pose.keypoints[10].score;
        console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist );

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWrist = " + rightWristX + "rightWristY = " + rightWristY);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY= results[0].pose.leftWrist.y;
        console.log("leftWrist = " + leftWristX + "leftWristY = " + leftWristY);
    }
}

function draw() {       
    canvas = createCanvas(600, 500);
    canvas.center();


}

function play() {
    song.play();

}