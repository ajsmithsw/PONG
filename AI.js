#pragma strict

var theBall : Transform;
var balPosY : float;
var balVelX : float;
var random : float;
 
function Start(){
    //InvokeRepeating("UpdatePos", 1, 0.2);
    theBall = GameObject.FindGameObjectWithTag("Ball").transform;
}



function Update () {
    balPosY = theBall.position.y + random;
    balVelX = theBall.GetComponent.<Rigidbody2D>().velocity.x;
    
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

function newRandom() {
	random = Random.Range(-1.5f, 1.5f);
}