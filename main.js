var player1name = localStorage.getItem("player1_name");
var player2name = localStorage.getItem("player2_name");

document.getElementById('player1_name').innerHTML = player1name + " : ";
document.getElementById('player2_name').innerHTML = player2name+ " : ";
var player1score = 0;
var player2score = 0;
document.getElementById('player1_score').innerHTML =  player1score;
document.getElementById('player2_score').innerHTML = player2score;

var question_turn = "Player1";
var answer_turn = "Player2";


document.getElementById('player_question').innerHTML = 'Question Turn : ' + player1name;
document.getElementById('player_answer').innerHTML = 'Answer Turn : ' + player2name;
function send()
{
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    actual_answer = parseInt(number1) * parseInt(number2);

     question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
     answer = "<br>Answer <input id='inputcheckbox' type = 'text'>";
     button = "<br><br><button type = 'btn btn-info' onclick = 'check()'>Check</button>";
 
     document.getElementById("output").innerHTML = question_number + answer + button;

     document.getElementById("number1").value = "";
     document.getElementById("number2").value = "";
}
function check()
{
    get_answer = document.getElementById("inputcheckbox").value;
    if(get_answer == "player1")
    {
        if(question_turn == "Player1")
        {
            update_player1_score = player1score + 1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }
        else
        {
            update_player2_score = player2score + 1;
            document.getElementById("player2_score").innerHTML = update_player2_score;
        }
        if(question_turn == "Player1")
        {
            question_turn = "Player2";
            document.getElementById("player_question").innerHTML = "question Turn - " + player2name;
        }
        else
        {
            question_turn = "Player1";
            document.getElementById("player_question").innerHTML = "question Turn - " + player1name;
        }
    }
}