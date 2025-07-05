function checkAnswer() {
let correctAnswer = "4";
const selectedRadio = document.querySelector('input[name="quiz"]:checked');
if (selectedRadio) { 
    let userAnswer = selectedRadio.value

const feedback = document.getElementById("feedback");
const submit = document.getElementById("submit-answer");
if (userAnswer === correctAnswer) {
  feedback.textContent =  "Correct! Well done."
}else{
    feedback.textContent = "That's incorrect. Try again!"
}
}
}
document.getElementById('submit-answer').addEventListener("click",checkAnswer)
