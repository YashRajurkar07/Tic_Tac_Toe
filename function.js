let boxes = document.querySelectorAll(".btn");
let restartGameBtn = document.querySelector("#restartbtn");

let turnO = true;

const wpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((btn) => {
  btn.addEventListener("click", () => {
    // console.log("Btn was clicked");

    if (turnO) {
      btn.innerText = "O";
      turnO = false;
      btn.classList.add("styleO");
    } else {
      btn.innerText = "X";
      btn.classList.add("styleX");
      turnO = true;
    }

    btn.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of wpatterns) {

  let pos1 = boxes[pattern[0]].innerText;
  let pos2 = boxes[pattern[1]].innerText;
  let pos3 = boxes[pattern[2]].innerText;

  if(pos1 != "" && pos2 != "" && pos3 != ""){
    if(pos1 === pos2 && pos2 === pos3){
      showWinner(pos1);
    }
  }
  }
};

const showWinner = (winner) => {
  alert(`Winner is ${winner}`);
  disableBoxes();
}

const disableBoxes = () => {
  for(let box of boxes)
  {
    box.disabled = true;
  }
}
const resetBoxes = () => {
  for(let box of boxes)
  {
    box.disabled = false;
    box.innerText = "";
    box.classList.remove("styleO");
    box.classList.remove("styleX");
  }
}

const restartGame = () => {
  turnO = true;
  resetBoxes();
}

restartGameBtn.addEventListener("click", restartGame);