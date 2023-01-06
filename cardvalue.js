var cardNames = [
	"2♥", "3♥", "4♥", "5♥", "6♥", "7♥", "8♥", "9♥", "10♥", "J♥", "Q♥", "K♥", "A♥", 
	"2♠", "3♠", "4♠", "5♠", "6♠", "7♠", "8♠", "9♠", "10♠", "J♠", "Q♠", "K♠", "A♠", 
	"2♦", "3♦", "4♦", "5♦", "6♦", "7♦", "8♦", "9♦", "10♦", "J♦", "Q♦", "K♦", "A♦", 
	"2♣", "3♣", "4♣", "5♣", "6♣", "7♣", "8♣", "9♣", "10♣", "J♣", "Q♣", "K♣", "A♣" 

];
var cardVals = [
	1800, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300,
	50, 50, 50, 50, 50, 50, 50, 50, 70, 80, 0, 1600, 1600,
	90, 90, 100, 120, 130, 140, 170, 200, 250, 500, 600, 700, 800,
	100, 100, 150, 300, 600, 650, 700, 750, 800, 850, 900, 950, 1000
]

function findValue(card) {
	var index = cardNames.indexOf(card);
	return cardVals[(index >= 0)? index : 0];
}

function findPass(hand)
{
	var values = [];
	for(var i in hand)
	{
		values.push(findValue(hand[i]));
	}

	if(debug)
		console.log(values);

	var index = findTopIndex(values);

	if(debug) {
		console.log(index);
		console.log(hand[index[0]] + hand[index[1]] + hand[index[2]]);
	}

	return index;
}
function findTopIndex(values) {
	var max = -1;
	var max2 = -1;
	var max3 = -1;
	var maxIndex = -1;
	var maxIndex2 = -1;
	var maxIndex3 = -1;
	for(var j in values)
	{
		if(values[j] > max && j != maxIndex2 && j != maxIndex3)
		{
			max = values[j];
			maxIndex = j;
		}
	}
	for(var j in values)
	{
		if(values[j] > max2 && j != maxIndex && j != maxIndex3)
		{
			max2 = values[j];
			maxIndex2 = j;
		}
	}
	for(var j in values)
	{
		if(values[j] > max3 && j != maxIndex && j != maxIndex2)
		{
			max3 = values[j];
			maxIndex3 = j;
		}
	}
	
	return [maxIndex, maxIndex2, maxIndex3];
}


function findDiscard(hand)
{
  var whichScorer;
  var whichScorerOpp1;
  var whichScorerOpp2;
  var whichScorerPlayer = p4scorer;
  var trytotake = false;
  if (hand == hand1) {whichScorer = p1scorer; whichScorerOpp1 = p2scorer; whichScorerOpp2 = p3scorer;}
  if (hand == hand2) {whichScorer = p2scorer; whichScorerOpp1 = p3scorer; whichScorerOpp2 = p1scorer;}
  if (hand == hand3) {whichScorer = p3scorer; whichScorerOpp1 = p1scorer; whichScorerOpp2 = p2scorer;}

  		if (whichScorer == 0) {
  			trytotake = true;
	      	if (whichScorerOpp1 > 0) {
	      		if (whichScorerOpp2 > 0) {
	      			trytotake = false;
	      		}
	      	}
	      	if (whichScorerOpp2 > 0) {
	      		if (whichScorerPlayer > 0) {
	      			trytotake = false;
	      		}
	      	}
	      	if (whichScorerPlayer > 0) {
	      		if (whichScorerOpp1 > 0) {
	      			trytotake = false;
	      		}
	      	}
	      	if (whichScorerPlayer == 0 || whichScorerOpp2 == 0 || whichScorerOpp1 == 0) {
	      		trytotake = false;
	      	}
	    }




	var values = [];
	for(var i in hand)
	{

		if (trytotake === false) {
			values.push(findValues(hand[i]));
		}

		else {		
			values.push(findValuesSTM(hand[i]));
		}
	}

	var index = findTopIndex2(values, hand);

	return index;
}

function findLeadCardToPlay(hand)
{
	var values = [];
	for(var i in hand)
	{
		values.push(findValuesLead(hand[i]));
	}
	var index = findTopIndex1(values, hand);

	return index;
}

 
function whatToPlayInSuit(hand) {
  var whichScorer;
  var whichScorerOpp1;
  var whichScorerOpp2;
  var whichScorerPlayer = p4scorer;
  if (hand == hand1) {whichScorer = p1scorer; whichScorerOpp1 = p2scorer; whichScorerOpp2 = p3scorer;}
  if (hand == hand2) {whichScorer = p2scorer; whichScorerOpp1 = p3scorer; whichScorerOpp2 = p1scorer;}
  if (hand == hand3) {whichScorer = p3scorer; whichScorerOpp1 = p1scorer; whichScorerOpp2 = p2scorer;}
  if (firstPlayed == 3) {
    let n = [document.querySelector("#q1").innerHTML,document.querySelector("#q2").innerHTML,document.querySelector("#q3").innerHTML, document.querySelector("#q4").innerHTML]
    if(n[0].includes("♥") || n[1].includes("♥") || n[2].includes("♥") || n[3].includes("♥")) {
      if (whichScorer == 0) {
      	if (whichScorerOpp1 > 0) {
      		if (whichScorerOpp2 > 0) {}
      		MyConsole.Log("Try not to take");
      	}
      	if (whichScorerOpp2 > 0) {
      		if (whichScorer > 0) {}
      		MyConsole.Log("Try not to take");
      	}
      	if (whichScorerPlayer > 0) {
      		if (whichScorerOpp2 > 0) {}
      		MyConsole.Log("Try not to take");
      	}
      }
    }
    if(n[0] == "Q♠" || n[1] == "Q♠" || n[2] == "Q♠" || n[3] == "Q♠") {
  //   	  for (let i = 0; i <= hand.length - 1; i++) {
		//     if(hand[i].includes(DIA)) {DIA = i; break;}
		// }
		  MyConsole.Log("try to not take");
    }




  	var values = [];
	for(var i in hand)
	{
		values.push(findValuesPlay(hand[i]));
	}
	var index = "sadf";
	index = findTopIndex3(values, hand);
	if (index == -1) {
		index = "sadf";
	}
	console.log(hand);
	console.log(hand[index]);
	return index;
  }

  else {
  	  let DIA = findsuit(leadCardplayed);
	  for (let i = 0; i <= hand.length - 1; i++) {
		    if(hand[i].includes(DIA)) {DIA = i; break;}
		}
		return DIA;
	}
}



function findTopIndex1(value, hand) {
	var max = -1;
	var maxIndex = -1;
	for(var j in value)
	{
		if(value[j] > max)
		{
			if (findsuit(hand[j]) == "♥") {
				if (whichtrick == 1 || playedhearts === false) {
					if (hascard(hand, "♣") == true && hascard(hand, "♠") == true && hascard(hand, "♦") == true) {
			   			max = value[j];
						maxIndex = j;
			   		}
				}
				else {
					max = value[j];
					maxIndex = j;
				}
			}

			else if (hand[j] == "Q♠") {
				if (whichtrick == 1) {

				}
				else {
					max = value[j];
					maxIndex = j;
				}
			}

			else if(findsuit(hand[j]) != "♥" || hand[j] != "Q♠") {
				max = value[j];
				maxIndex = j;
			}
		}
	}
	
	return maxIndex;
}

function findTopIndex2(value, hand) {
	var max = -1;
	var maxIndex = -1;
	for(var j in value)
	{
		if(value[j] > max)
		{
			if (findsuit(hand[j]) == "♥") {
				if (whichtrick == 1) {
					if (hascard(hand, "♣") == true && hascard(hand, "♠") == true && hascard(hand, "♦") == true) {
			   			max = value[j];
						maxIndex = j;
			   		}
				}
				else {
					max = value[j];
					maxIndex = j;
				}
			}

			else if (hand[j] == "Q♠") {
				if (whichtrick == 1) {

				}
				else {
					max = value[j];
					maxIndex = j;
				}
			}

			else if(findsuit(hand[j]) != "♥" || hand[j] != "Q♠") {
				max = value[j];
				maxIndex = j;
			}
		}
	}
	return maxIndex;
}

function findTopIndex3(value, hand) {
	var max = -1;
	var maxIndex = -1;
	for(var j in value)
	{
		if (findsuit(hand[j]) == findsuit(leadCardplayed)) {
			max = value[j];
			maxIndex = j;		
		}
	}	
	return maxIndex;
}

function findValues(card) {
	var index = cardNames.indexOf(card);
	return cardValsDiscard[(index >= 0)? index : 0];
}

function findValuesSTM(card) {
	var index = cardNames.indexOf(card);
	return cardValsDiscardSTM[(index >= 0)? index : 0];
}

function findValuesLead(card) {
	var index = cardNames.indexOf(card);
	return cardValsLead[(index >= 0)? index : 0];
}

function findValuesPlay(card) {
	var index = cardNames.indexOf(card);
	return cardsValsPlayInSuit[(index >= 0)? index : 0];
}

