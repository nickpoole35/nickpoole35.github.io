function setup() {
  createCanvas(800, 600);
  background(50,50,200)
  }

  function draw() {
    //road
    fill(50)
    rect(0,300,700,100);
    //exhasut
    fill(50)
    rect(340,250,30,10);
    ellipse(380,245,15);
    ellipse(400,215,15);
    ellipse(390,230,15);
    //car body
    fill(300,100,100)
    rect(185,190,125,50);
    fill(300,100,100)
    rect(150,225,200,50);
    //Wheels
    fill(0,0,0)
    ellipse(200,275,50,50);
    fill(0,0,0)
    ellipse(300,275,50,50);
    //sun
    fill(500,200,50)
    ellipse(75,75,100,100);
    //windows
    fill(500)
    rect(200,200,40,20);
    fill(500)
    rect(260,200,40,20);
  }