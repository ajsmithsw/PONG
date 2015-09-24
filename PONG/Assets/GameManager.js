#pragma strict

static var playerScore01 = 0;
static var playerScore02 = 0;

var theSkin: GUISkin;
var theBall: Transform;

var player: Transform;
var computer: Transform;

function Start () {
	theBall = GameObject.FindGameObjectWithTag("Ball").transform;
	player = GameObject.FindGameObjectWithTag("Player").transform;
	computer = GameObject.FindGameObjectWithTag("AI").transform;
}

static function Score (wallName: String) {
	if (wallName == "rightWall") {
		playerScore01 += 1;
	}
	if (wallName == "leftWall") {
		playerScore02 += 1;
	}
	Debug.Log("Player score 1 is: " + playerScore01);
	Debug.Log("Player score 2 is: " + playerScore02);

}

function OnGUI () {
	GUI.skin = theSkin;
	GUI.Label(new Rect(Screen.width/2-150-18, 20, 100, 100), ""+ playerScore01);
	GUI.Label(new Rect(Screen.width/2+150-18, 20, 100, 100), ""+ playerScore02);
	
	if (GUI.Button(new Rect(Screen.width/2-(121/2), 20, 121, 53), "Reset")) {
		playerScore01 = 0;
		playerScore02 = 0;
		
		theBall.gameObject.SendMessage("ResetBall");
		player.position.y = 0;
		computer.position.y = 0;
	}
}
