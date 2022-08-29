let teamOne = document.getElementById('team-one')
let teamTwo = document.getElementById('team-two')
let scoreOne = 0
let scoreTwo = 0

function getButton() {
  scoreOne++
  teamOne = 'word'

}

function clickStuff() {
  scoreOne++;
  teamOne.innerText = scoreOne.toString()
}

function clickStuffToo() {
  scoreTwo++;
  teamTwo.innerText = scoreTwo.toString()
}

function resetScore() {
  scoreOne = 0;
  scoreTwo = 0;
  teamOne.innerText = scoreOne.toString()
  teamTwo.innerText = scoreTwo.toString()
}

function clickStuffThree() {
  scoreOne += 3;
  teamOne.innerText = scoreOne.toString()
}

function clickStuffTooThree() {
  scoreTwo += 3;
  teamTwo.innerText = scoreTwo.toString()
}