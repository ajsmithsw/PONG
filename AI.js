#pragma strict
﻿
var theBall : Transform;
var balPosY : float;
var balVelX : float;
var random : float;

function Start(){
    theBall = GameObject.FindGameObjectWithTag("Ball").transform;
}
 
function Update () {
    balPosY = theBall.position.y + random;
    balVelX = theBall.GetComponent.<Rigidbody2D>().velocity.x;
   
    // if the ball is moving...
    if (balVelX != 0) {
        if(balPosY>GetComponent.<Rigidbody2D>().position.y + 0.2)
        {
            GetComponent.<Rigidbody2D>().velocity.y = 5;
        }
        else if(balPosY<GetComponent.<Rigidbody2D>().position.y - 0.2) {
            GetComponent.<Rigidbody2D>().velocity.y = -5;
        }
        else {
            GetComponent.<Rigidbody2D>().velocity.y = 0;
        }
    }
    // Get the AI to move back towards the centre when a new round begins
    else {
        if (GetComponent.<Rigidbody2D>().position.y > 0.1f &&
                GetComponent.<Rigidbody2D>().position.y < -0.1f) {
            GetComponent.<Rigidbody2D>().velocity.y = -5;
        } else if (GetComponent.<Rigidbody2D>().position.y < -0.1f &&
                GetComponent.<Rigidbody2D>().position.y < 0.1f) {
            GetComponent.<Rigidbody2D>().velocity.y = 5;
        }
   
    }
}
 
// this next function is called from the Ball script, each time the ball collides
// with a player (it was too much to call it 60 times per second in the Update()
// function above). This seems to work nicely:
 
function newRandom() {
    random = Random.Range(-1.5f, 1.5f);
}
