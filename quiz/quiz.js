var user = {}
var responses = []

function question1() {
	
    var name = prompt("Greetings, what's your name?");
    user.name = name;
    alert("Nice to meet you "+ name +"! Do you want to play some Iron Maiden quiz?");
}

 question1 (); 


function question2 () {
	
	var userResponse = prompt('Is the Number of the Beast an Iron Maiden record? (Yes or No)');

    if(userResponse.toLowerCase() === 'yes'){
        userResponse = true;
    }
    else if(userResponse.toLowerCase() === 'no'){
        userResponse = false;
    }
    else{
        alert("please respond Yes or No");
        return firstQuestion();
    }
    responses.push(userResponse);
 }
question2();

function question3 () {
	var userResponse = prompt("What's the name of the current vocalist of Iron Maiden? (Options: Eminem, Camaron, Bruce Dickinson, Zaz");

    switch(userResponse.toLowerCase()){
        case "bruce dickinson":
            userResponse = true;
            break;
        case "camaron":
        case "eminem":
        case "zaz":
            userResponse = false;
            break;
        default:
            alert("You know you didn't choose an acceptable option,"+ user.name +".Please,  Try again!");
            return secondQuestion();
            break;
    }

    responses.push(userResponse);
}
question3();

function question4 () {
 var userResponse = prompt("What's an Iron Maiden song? (Options: Powerslave, Bamba, Orgasmatron, Tequila");

    switch(userResponse.toLowerCase()){
        case "powerslave":
            userResponse = true;
            break;
        case "bamba":
        case "orgasmatron":
        case "tequila":
            userResponse = false;
            break;
        default:
            alert("You know you didn't choose an acceptable option,"+ user.name +". Try again!");
            return thirdQuestion();
            break;
    }

    responses.push(userResponse);

}

question4();

function question5 (){
 var userResponse = prompt('Are Iron Maiden from UK? (Yes or No)');

    if(userResponse.toLowerCase() === 'yes'){
        userResponse = true;
    }
    else if(userResponse.toLowerCase() === 'no'){
        userResponse = false;
    }
    else{
        alert("Please respond Yes or No");
        return firstQuestion();
    }
    responses.push(userResponse);
}
question5();

function evaluate(responsesArray){
    var correctAnswers = 0, incorrectAnswers = 0;
    for(var i = 0; i < responsesArray.length; i++){
        if(responsesArray[i]){
            correctAnswers++;
        }
        else{
            incorrectAnswers++;
        }
    }
    user.correctAnswers = correctAnswers;
    user.incorrectAnswers = incorrectAnswers;

    showResults();
}


function showResults(){
    console.log(user);
    alert(JSON.stringify(user));
}

evaluate(responses);