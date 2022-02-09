img = "";
status = "";

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function setup()
{
    canvas = createCanvas(680,480);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw()
{
    image(img, 0 ,0 , 680, 480);
    fill("#a000fc");
    text("dog",45,75);
    noFill();
    stroke(255,0,0);
    rect(30,60,450,350);

    fill("#a000fc");
    text("cat",320,120);
    noFill();
    stroke("#a000fc");
    rect(300,90,270,320);

}

function modelLoaded()
{
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error,results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}