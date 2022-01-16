console.log("welcome to Tic Tac Toe ");
let music = new Audio("images/music.mp3")
let audioturn = new Audio("images/ting.mp3")
let gameover = new Audio("images/gameover.mp3")
let turn = "X"
//function to change the turn
const changeTurn = ()=>{
  return turn === "X"?"0": "X"
}

//function to check for a  win
const checkwin = ()=>{

}
//Game logic
let boxes = document.getElementByClassName("box");
Array.from(boxes).forEach(element =>{
  let boxtext = element.querySelector('.boxtext');
  element.addEventListener('click',()=>{
    if(boxtext.innerText ===''){
      boxtext.innerText = turn;
      turn = changeTurn();
      audioturn.play();
      checkwin();
      document.getElementByClassName("info")[0].innerText = "turn for" + turn;

    }
  })

}
)
