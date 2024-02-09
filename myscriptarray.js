var roster = []

function addNew() {
    var newName = prompt("What name would you like to add?")
    roster.push(addNew)
    
}

function remove() {
    var remName = prompt("What name would you like to remove?")
    var index = roster.indexOf(remName);
    roster.splice(index,1);
    
}

function display(){
    console.log(roster);
}

var start = prompt("start y/n ?")
var request = "empty";

if (start === 'y'){
    while(request !== "quit"){
        request = prompt("Select add, display, remove or quit")
        if(request === 'add'){
            addNew();
        }
        else if (request === 'display'){
            display();

        }
        else if (request === 'remove'){
            remove();
        }
        else{
            alert("Not recognized")
            request = "quit"
        }

    }
   

}
alert("Thanks for using.")