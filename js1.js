function showhands() {
    if(debug)
    {
        console.log("hand4: ");
        console.log(hand4);
        console.log("hand3: ");
        console.log(hand3);
        console.log("hand2: ");
        console.log(hand2);
        console.log("hand1: ");
        console.log(hand1);
    }
}
function clear() {
    document.querySelector("#q1").style.color = "black";
    document.querySelector("#q2").style.color = "black";
    document.querySelector("#q3").style.color = "black";
    document.querySelector("#q4").style.color = "black";
    document.querySelector("#q1").innerHTML = "2";
    document.querySelector("#q2").innerHTML = "1";
    document.querySelector("#q3").innerHTML = "3";
    document.querySelector("#q4").innerHTML = "4";
}

function findsuit(value) {
    if (value.includes("♣")) {return "♣";}
    else if (value.includes("♥")) {return "♥";}
    else if (value.includes("♦")) {return "♦";}
    else if (value.includes("♠")) {return "♠";}
    else {return 0;}
}

function findvalue(whichhand, i) {
    if (whichhand[i].includes("J")) {return 11;}
    else if (whichhand[i].includes("Q")) {return 12;}
    else if (whichhand[i].includes("K")) {return 13;}
    else if (whichhand[i].includes("A")) {return 14;}
    else {return parseInt(whichhand[i]);}
}

function whatoplayplayer(value, value2) {
            if(whichtrick != 1 || firstPlayed != 0) {
            if(firstPlayed != 0) {
                mom = findsuit(leadCardplayed);
                if (hand4[value2].includes(mom)) {
                     playsomecards(4, hand4, value2);
                }
             
                else {
                    huhg = hascard(hand4, mom);

                        if(huhg === true) {
                            playsomecards(4, hand4, value2);            
                         }
                    }
                }


                else if (firstPlayed == 0) {
                    playsomecards(4, hand4, value2);
                }
            }
            else if (whichtrick == 1 && firstPlayed == 0) {
                if (hand4[value2] == "2♣") {
                    playsomecards(4, hand4, 0);
                }
                else {
                    MyConsole.Error("You have to play the 2♣, not the " + hand4[value2]);
                }
            }
}

function hascard(whichhand, wwcc) {
   let bool = true; 
   for (let i = whichhand.length - 1; i >= 0; i--) {
       if(whichhand[i].includes(wwcc)) {
          bool = false;
       }
   }    
   if(bool === true) {
        return true;         
    }
    else {
        return false;
    }
}

function DisplayHand(player, hand, id = -1)
{
    if(id != -1)
    {
        MyConsole.Replace(id, "Hand" + player + ": " + hand);
    }
    else {
        return MyConsole.Log("Hand" + player + ": " + hand);
    }
}