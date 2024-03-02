/*const play=document.querySelector('.play');
const restart=document.querySelector(".restart");
const blocks=document.querySelectorAll(".game-block");
const levlno=document.querySelector('#levelno');
const result=document.querySelector('#result');
const leaderboard=document.querySelector('.leaderboard');
const blocksArr=Array.from(blocks);

let order=[];
let canPlayerPlay = true;  // Flag to allow player interaction
let level = 1;  // Current game level
let score = 0;  // Player's score
let pastscores = [];  // Array to store past scores


// Mapping levels to the number of blocks
const levels = {
    1: 2,
    2: 3,
    3: 4,
    4: 5,
    5: 6,
    6: 7,
    7: 8,
    8: 9,
    9: 10,
    10: 11,
  };



// Function to make a block flash

const flash = (block) => {
    canPlayerPlay = false;
    return new Promise((resolve, _) => {
      blocksArr[block].classList.add("selected");
      setTimeout(() => {
        blocksArr[block].classList.remove("selected");
        setTimeout(() => {
          resolve();
        }, 200);   // it will change the blink time of color
      }, 600);  // it will blick for more time each block
    });
  };

  blocksArr.forEach((block,idx)=>{
    block.addEventListener("click",()=>{
      const scoreEL = document.createElement("li");
      if(canPlayerPlay){
        block.classList.add("selected");
        setTimeout(()=>{
          block.classList.remove("selected");
        },100);
        const expectedBlock =order.shift();

        if(expectedBlock === idx){
          if(order.length === 0){
            score =score + 1;
            setTimeout(()=> {
              result.innerText  =`You Won This Round! click on play to play the next level`;
              canPlayerPlay=false;
              ++level;
              levlno.innerText =`Level ${level}`;
            },200);
          }else{
            result.innerText =`You lost this round! click on play to start again`;
          canPlayerPlay =false;
          level =1;
          order.length =0;
          levlno.innerText =`Level 1`;
          scoreEL.innerText =`Your score is ${score}`;
          leaderboard.appendChild(scoreEL);
          pastscores.push(score);
          score = 0;
          }
        }
      }
    });
  });


  // Event listener for the "Play" button

  play.addEventListener("click",async  ()=>{
    order.length =0;
    result.innerText ="";

    // generatig a sequance of flashing bloacks
    for (let i=0;i<2; i++){
      order.push(Math.floor(Math.random()* blocksArr.length));
    }
    //displaying the sequance of flashing blocks
    for (const block of order){
      await flash(block)
    }
    canPlayerPlay=true;  //allowing player interaction
  });


  //

  restart.addEventListener("click",()=>{
    order.length=0;
    level =1;
    levlno.innerText=`Level 1`
    result.innerText=""
  })*/


  const play = document.querySelector(".play");
const restart = document.querySelector(".restart");
const blocks = document.querySelectorAll(".game-block");

const levleno = document.querySelector("#levelno");
const result = document.querySelector("#result");
const leaderboard = document.querySelector(".leaderboard");
const blocksArr = Array.from(blocks);


// Initializing variables
let order = [];  // Array to store the sequence of blocks
let canPlayerPlay = true;  // Flag to allow player interaction
let level = 1;  // Current game level
let score = 0;  // Player's score
let pastscores = [];  // Array to store past scores


// Mapping levels to the number of blocks
const levels = {
  1: 2,
  2: 3,
  3: 4,
  4: 5,
  5: 6,
  6: 7,
  7: 8,
  8: 9,
  9: 10,
  10: 11,
};

// Function to make a block flash

const flash = (block) => {
  canPlayerPlay = false;
  return new Promise((resolve, _) => {
    blocksArr[block].classList.add("selected");
    setTimeout(() => {
      blocksArr[block].classList.remove("selected");
      setTimeout(() => {
        resolve();
      }, 200);   // it will change the blink time of color
    }, 600);  // it will blick for more time each block
  });
};


// Adding click event listeners to each block

blocksArr.forEach((block, idx) => {
  block.addEventListener("click", () => {
    const scoreEL = document.createElement("li"); 

    if (canPlayerPlay) {
      block.classList.add("selected");
      setTimeout(() => {
        block.classList.remove("selected");
      }, 100);
      const expectedBlock = order.shift(); 

      if (expectedBlock === idx) {
        if (order.length === 0) {
          score = score + 1;
          setTimeout(() => {
            result.innerText = `You won this round! Click on play to play the next level`;
            canPlayerPlay = false;
            ++level;
            levleno.innerText = `Level ${level}`;
          }, 200);
        }
      } else {
        result.innerText = `You lost this round! Click on play to start again`;
        canPlayerPlay = false;
        level = 1;
        order.length = 0;
        levleno.innerText = `Level 1`;
        scoreEL.innerText = `Your score is ${score}`;
        leaderboard.appendChild(scoreEL);
        pastscores.push(score);
        score = 0;
      }
    }
  });
});


// Event listener for the "Play" button

play.addEventListener("click", async () => {
  order.length = 0;
  result.innerText = "";

    // Generating a sequence of blocks for the current level
  for (let i = 0; i < 2; i++) {    
  order.push(Math.floor(Math.random() * blocksArr.length));    
  }

    // Displaying the sequence of flashing blocks
  for (const block of order) {
    await flash(block);
  }

  canPlayerPlay = true;  // Allowing player interaction
});


// Event listener for the "Restart" button
restart.addEventListener("click", () => {
  order.length = 0;   // Resetting the sequence
  level = 1;  // Resetting the level
  levleno.innerText = `Level 1`;  // Updating the level display
  result.innerText = "";  // Clearing the result message
});



