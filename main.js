function adduser(){
    var player1= document.getElementById("player1username").value;
    var player2= document.getElementById("player2username").value;
    localStorage.setItem= "Player1",player1;
    localStorage.setItem= "Player2",player2;
    window.location.replace("game_page.html");
}