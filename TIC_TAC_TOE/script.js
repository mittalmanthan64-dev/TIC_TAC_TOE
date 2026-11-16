let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetgame = () => {
  turnO = true;
  enableBoxes();
  msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    count=0
    if (turnO) {
      box.innerText = "O";
      turnO = false;
      count++
    } else {
      box.innerText = "X";
      turnO = true;
      count++
    }
    box.disabled = true;
    let iswinner=checkwinner();

    if (count==9 && ! checkwinner){
        draw();
    }
    
  });
});

const disablebtn = () => {
  for (i of boxes) {
    i.disabled = true;
  }
};

const enableBoxes = () => {
  for (i of boxes) {
    i.disabled = false;
    i.innerText = "";
  }
};

const draw=()=>{
    msg.innerText=`Game is drawn`
    msgcontainer.classList.remove('hide')
      disablebtn();
}

const showwinner = (winner) => {
  msg.innerText = `Congratulations ,Winner is ${winner}`;
  msgcontainer.classList.remove("hide");

};

const checkwinner = () => {
  for (let i of win) {
    let pos1 = boxes[i[0]].innerText;
    let pos2 = boxes[i[1]].innerText;
    let pos3 = boxes[i[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showwinner(pos1);
        return true
      } 
    }
  }
};

newgame.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);
