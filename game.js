//RESTART GAME

var restart = document.querySelector("#b");


//GRAB ALL THE SQUARES
var square = document.querySelectorAll('td');



//CLEAR ALL SQUARES
function clearBoard(){
    for (var i = 0; i < square.length; i++) {
        square[i].textContent = '';
        
    }
}

restart.addEventListener('click',clearBoard)


//CHECK THE SQUARE MARKER

function changeMarker() 
{
   if(this.textContent === ''){
    this.textContent = 'X';
   }
   else if(this.textContent === 'X'){
    this.textContent = 'O';
   }
   else{
    this.textContent = '';
   }
}
for (let i = 0; i < square.length; i++) {
    square[i].addEventListener('click', changeMarker);
    
}


// var cellOne = document.querySelector('#one')
// cellOne.addEventListener('click',function(){

//     if (cellOne.textContent === ''){
//         cellOne.textContent = 'X';
//     }
//     else if (cellOne.textContent === 'X'){
//         cellOne.textContent = 'O';
//     }
//     else{
//         cellOne.textContent = '';
//     }

// })
    
    


//FOR LOOPS