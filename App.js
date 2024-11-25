let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;  //PlayerX, Player0

//win pattern boxes//
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
//to reset the game
const resetGame = () => {
    turn0 = true;
    boxEnabled();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        //to check winner
        checkWinner();
    });
});
//function to display the winner
const displayWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    boxDisabled();
}
//disable all boxes after winner disclosed
const boxDisabled = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
//to enable all boxes to restart the game
const boxEnabled = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

//function to check the winner
const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        //check wheather the boxes are filled with same value or not
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 == pos3) {
                console.log("winner");
                displayWinner(pos1);//calling the function to display the winner

            }
        }
    }
};
//add eventlistner to newGame and reset game button
resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
