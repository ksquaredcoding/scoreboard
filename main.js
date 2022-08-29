let teamOne = document.getElementById('team-one')
let teamTwo = document.getElementById('team-two')
let scoreOne = 0
let scoreTwo = 0

function clickStuff() {
  scoreOne++;
  teamOne.innerText = scoreOne.toString()
}

function clickStuffToo() {
  scoreTwo++;
  draw()
}

function resetScore() {
  scoreOne = 0;
  scoreTwo = 0;
  draw()
}

function clickStuffThree() {
  scoreOne += 3;
  draw()
}

function clickStuffTooThree() {
  scoreTwo += 3;
  draw()
}

function minusScore() {
  scoreOne--
  if (scoreOne < 0) {
    scoreOne = 0
  }
  draw()
}

function minusScoreThree() {
  scoreOne -= 3
  if (scoreOne < 0) {
    scoreOne = 0
  }
  draw()
}

function minusScoreToo() {
  scoreTwo--
  if (scoreTwo < 0) {
    scoreTwo = 0
  }
  draw()
}

function minusScoreTooThree() {
  scoreTwo -= 3
  if (scoreTwo < 0) {
    scoreTwo = 0
  }
  draw()
}

function draw() {
  teamOne.innerText = scoreOne.toString()
  teamTwo.innerText = scoreTwo.toString()
}

function resetOne() {
  scoreOne = 0
  draw()
}

function resetTwo() {
  scoreTwo = 0
  draw()
}