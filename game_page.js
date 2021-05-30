function send(){
    var number1= document.getElementById("num1").value;
    var number2= document.getElementById("num2").value;
    actual_answer= parseInt(number1) * parseInt(number2);
    question_number="<h4>"+number1+" X "+number2+"</h4>";
    inputbox="<br> Answer: <input type='text' id='input_checkbox' >";
    checkbutton="<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_number+inputbox+checkbutton;
    document.getElementById("output").innerHTML= row;
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
}