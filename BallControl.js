#pragma strict

var BallSpeed: float = 100;

var enemy : Transform;

function Start () {
	enemy = GameObject.FindGameObjectWithTag("AI").transform;
	yield WaitForSeconds (2);
	GoBall();
}

function Update () {
	var xVel: float = GetComponent.<Rigidbody2D>().velocity.x;
	if (xVel < 18 && xVel > -18 && xVel != 0) {
		if (xVel > 0) {
			GetComponent.<Rigidbody2D>().velocity.x = 20;
		}
		else {
			GetComponent.<Rigidbody2D>().velocity.x = -20;
		}
	}
}

function OnCollisionEnter2D (colInfo : Collision2D) {
	if (colInfo.collider.tag == "Player" || colInfo.collider.tag == "AI") {
		GetComponent.<Rigidbody2D>().velocity.y = GetComponent.<Rigidbody2D>().velocity.y/2 + colInfo.collider.GetComponent.<Rigidbody2D>().velocity.y/3;
		//GetComponent.<Rigidbody2D>().velocity.x += GetComponent.<Rigidbody2D>().velocity.x/5;
		GetComponent.<AudioSource>().pitch = Random.Range(0.8f, 1.2f);
		GetComponent.<AudioSource>().Play();
		
		enemy.gameObject.SendMessage("newRandom");
	}
}

function ResetBall() {
	GetComponent.<Rigidbody2D>().velocity.x = 0;
	GetComponent.<Rigidbody2D>().velocity.y = 0;
	transform.position.x = 0;
	transform.position.y = 0;
	
	yield WaitForSeconds (0.7);
	GoBall();
}

function GoBall () {
	var randomNumber = Random.Range(0, 2);
	if (randomNumber <= 0.5) {
		GetComponent.<Rigidbody2D>().AddForce (new Vector2 (BallSpeed, 10));
	}
	else {
		GetComponent.<Rigidbody2D>().AddForce (new Vector2 (-1*BallSpeed, -10));
	}
}