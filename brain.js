    var cpass = [3];

function max(a, b)
{
	return (a > b)? a : b
}
function min(a, b)
{
	return (a < b)? a : b
}




function botwhatopass(whichhand) {

	cardVals = [
	100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300,
	50, 50, 50, 50, 50, 50, 50, 50, 70, 80, 0, 1600, 1600,
	90, 90, 100, 120, 130, 140, 170, 200, 250, 500, 600, 700, 800,
	100, 100, 100, 120, 130, 140, 170, 200, 250, 500, 600, 700, 800
	]
	var howmanyc = 0;
	var howmanyh = 0;
	var howmanys = 0;
	var howmanyd = 0;
	var valuec = 0;
	var valueh = 0;
	var values = 0;
	var valued = 0;
	var avgc = 0;
	var avgh = 0;
	var avgs = 0;
	var avgd = 0;
	cpass = [-1, -1, -1];

	for (var i = 0; i < whichhand.length; i++) {
	 	 if(findsuit(whichhand[i]) == "♣") {howmanyc++; valuec += findvalue(whichhand, i);}
	 	 if(findsuit(whichhand[i]) == "♥") {howmanyh++; valueh += findvalue(whichhand, i);}
	 	 if(findsuit(whichhand[i]) == "♦") {howmanyd++; valued += findvalue(whichhand, i);}
	 	 if(findsuit(whichhand[i]) == "♠") {howmanys++; values += findvalue(whichhand, i);}
	 }  
	 	if(howmanyc > 0) { avgc = Math.floor(valuec / howmanyc); }
		if(howmanyh > 0) { avgh = Math.floor(valueh / howmanyh); }
		if(howmanys > 0) { avgs = Math.floor(values / howmanys); }
		if(howmanyd > 0) { avgd = Math.floor(valued / howmanyd); }


		var cPercentage = howmanyc / 13 * 100;
		var hPercentage = howmanyh / 13 * 100;
		var sPercentage = howmanys / 13 * 100;
		var dPercentage = howmanyd / 13 * 100;

	if(goForThemAll(whichhand)) {

	}

	else {

		var hasQ = whichhand.indexOf("Q♠");
		var hasK = whichhand.indexOf("K♠");
		var hasA = whichhand.indexOf("A♠");
		var passingQ = false;
		if (hasQ != -1) {
			if (howmanys < 4) {
				cardVals[23] = 1700;
				cpass[whichcpassopen()] = 1;
				passingQ = true;
			}
		}

		if (hasK != -1) {
			if (howmanys < 7) {
				if (passingQ == true || hasQ == -1) {cpass[whichcpassopen()] = 1;}
				else {
					cardVals[24] = 0;
				}
			}
		}

		if (hasA != -1) {
			if (howmanys < 7) {
				if (passingQ == true || hasQ == -1) {cpass[whichcpassopen()] = 1;}
				else {
					cardVals[25] = 0;
				}
			}
		}



		if (howmanyc > 0 && howmanyc <= whichcpassopen(1)) {
			for (var i = 0; i < whichhand.length; i++) {
				if(findsuit(whichhand[i]) == "♣") {
					cardVals[findwhichvalue(whichhand[i])] += 1200;
				}
			}
		}
		if (howmanyd > 0 && howmanyd <= whichcpassopen(1)) {
			for (var i = 0; i < whichhand.length; i++) {
				if(findsuit(whichhand[i]) == "♦") {
					cardVals[findwhichvalue(whichhand[i])] += 1200;
				}
			}
		}
		if (howmanyh > 0 && howmanyh <= whichcpassopen(1)) {
			for (var i = 0; i < whichhand.length; i++) {
				if(findsuit(whichhand[i]) == "♥") {
					cardVals[findwhichvalue(whichhand[i])] += 1200;
				}
			}
		}

	}

	cpass = findPass(whichhand);
    return cpass;
}

function whichcpassopen(value) {
	if (value == 1) {
		if (cpass[0] == -1) {return 3;}
		else if (cpass[1] == -1) {return 2;}
		else if (cpass[2] == -1) {return 1;}
		else {return 0;}
	}
	else {
		if (cpass[0] == -1) {return 0;}
		else if (cpass[1] == -1) {return 1;}
		else if (cpass[2] == -1) {return 2;}
		else {return 3;}
	}
}

function findwhichvalue(value) {
	for (var i = 0; i < cardNames.length; i++) {
		if(cardNames[i] == value) {return i;}
	}
}

function goForThemAll(whichhand) {
	return false;
}


function whatoplaybot(whichhand, j) {
              if(whichhand == hand1) {whichhand = hand4;}
         else if(whichhand == hand4) {whichhand = hand3;}
         else if(whichhand == hand3) {whichhand = hand2;}
         else if(whichhand == hand2) {whichhand = hand1;}        

    	 let DIA = "♦";
    	 var highest = FindHighestCard(whichhand);
    	 // playing in suit (not done)

         if (firstPlayed != 0) {

         	DIA = findsuit(leadCardplayed);
         	if (whichtrick == 1) {
         		let num123456 = "sadf";
	         	for (let i = 0; i <= whichhand.length - 1; i++) {
	    			if(whichhand[i].includes(DIA)) {num123456 = i;}
				}
				DIA = num123456;
         	}

         	else {
				DIA = highest.i;
			}

    	 // discarding (done)

			if (!highest.found) {
		    	DIA = findDiscard(whichhand);
			}
		}

    	 // leading (done)

		else if (firstPlayed == 0) {
			var hasQ = whichhand.indexOf("Q♠");
			if (hasQ != -1) {
				cardValsLead = [
		            16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4,
		            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2,
		            14, 13, 11, 10, 9, 8, 7, 6, 6, 5, 4, 3.5, 3,
		            0, 15, 13, 11, 10, 9, 8, 7, 5.5, 5, 4.5, 4, 3
		        ]

				DIA = findLeadCardToPlay(whichhand);

				cardValsLead = [
		            16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4,
		            14, 14.1, 14.2, 14.3, 14.4, 14.5, 14.6, 14.7, 14.8, 14.9, 1, 2, 2,
		            14, 13, 11, 10, 9, 8, 7, 6, 6, 5, 4, 3.5, 3,
		            0, 15, 13, 11, 10, 9, 8, 7, 5.5, 5, 4.5, 4, 3
		        ]
    		}
    		
    		else {
				DIA = findLeadCardToPlay(whichhand);
    		}
		}

		var chance = 10;
		var rng = Math.random() * 100;

		if(rng < chance)
		{
			MyConsole.Log(trashTalk[Math.round(Math.random() * (trashTalk.length - 1))]);
		}
        setTimeout(function() { 
          	if (wptp == 1) {playsomecards(1, whichhand, DIA);}
			else if (wptp == 2) {playsomecards(2, whichhand, DIA);}
			else if (wptp == 3) {playsomecards(3, whichhand, DIA);}
			else if (wptp == 4) {playsomecards(4, whichhand, DIA);}
		}, speed);

}


function FindHighestCard(hand)
{
	if (firstPlayed != 3) {
		var highestPlayedCard = GetHighestPlayedCard();
		var info = FindSuit(highestPlayedCard);

		var returnCardIndex = 0;
		var returnCardNum = 0;
		var Found = false;

		for(var i = 0; i < hand.length; i++)
		{
			var handsCard = FindSuit(hand[i]);
			if(handsCard.suit == info.suit)
			{
				if(handsCard.num < info.num && handsCard.num > returnCardNum)
				{
					Found = true;
					returnCardIndex = i;
					returnCardNum = handsCard.num;
				}
			}
		}

		if(!Found)
		{
			var suits = Sort(hand);
			var num = SuitToNum(leadCardplayed);


			if (suits[num][0] == undefined) {
				return {i: 0, num: num, found: false}
			}
			else {
				return {i: suits[num][0].i, num: num, found: true}
			}
			MyConsole.Log("You Should Play: " + suits[num][0]);
		}


		return {i: returnCardIndex, num: returnCardNum, found: Found}
	}
	else {
	// you have to change this for 0 players to work
	var whichScorer;
	var whichScorerOpp1;
	var whichScorerOpp2;
	var whichScorerPlayer = p4scorer;
	var tryToGet;
	if (hand == hand1) {whichScorer = p1scorer; whichScorerOpp1 = p2scorer; whichScorerOpp2 = p3scorer;}
	if (hand == hand2) {whichScorer = p2scorer; whichScorerOpp1 = p3scorer; whichScorerOpp2 = p1scorer;}
	if (hand == hand3) {whichScorer = p3scorer; whichScorerOpp1 = p1scorer; whichScorerOpp2 = p2scorer;}
	var n = GetHighestPlayedCard(1);
	//if someone else has a heart
	if(n[0].includes("♥") || n[1].includes("♥") || n[2].includes("♥")) {
		if (n[0] != "Q♠" || n[1] != "Q♠" || n[2] != "Q♠") {
		    if (whichScorer == 0) {
		    	tryToGet = true;

		      	if (whichScorerOpp1 > 0) {
		      		if (whichScorerOpp2 > 0) {
		      			tryToGet = false;
		      		}
		      		if (whichScorerPlayer > 0) {
		      			tryToGet = false;	      			
		      		}
		      	}

		      	else if (whichScorerPlayer > 0) {
		      		if (whichScorerOpp2 > 0) {
		      			tryToGet = false;
		      		}
		      		if (whichScorerOpp1 > 0) {
		      			tryToGet = false;
		      		}
		      	}

		      	else if (whichScorerOpp2 > 0) {
		      		if (whichScorerPlayer > 0) {
		      			tryToGet = false;
		      		}
		      		if (whichScorerOpp1 > 0) {
		      			tryToGet = false;
		      		}
		      	}
	      	}
	    }
	    if (tryToGet == true) {
	    	console.log("hello");
			let num123456 = "asdf";
         		let DIA = findsuit(leadCardplayed);
	         	for (let i = 0; i <= hand.length - 1; i++) {
	    			if(hand[i].includes(DIA)) {
	    				if (num123456 != "asdf") {
	    					if (hand[i] == "Q♠") {

	    					}
	    				}
	    				else {
	    	console.log("hello");
	    					num123456 = i;
	    				}
	    			}
				}
	    			console.log(hand[i]);
			if (num123456 != "asdf") {
				return {i: num123456, num: 0, found: true}
			}
			if (num123456 == "asdf") {
				return {i: num123456, num: 0, found: false}
			}
	    }
	}

	else {
	    if(n[0] != "Q♠" || n[1] != "Q♠" || n[2] != "Q♠") {
         		let num123456 = "asdf";
         		let DIA = findsuit(leadCardplayed);
	         	for (let i = 0; i <= hand.length - 1; i++) {
	    			if(hand[i].includes(DIA)) {
	    				if (num123456 != "asdf") {
	    					if (hand[i] == "Q♠") {

	    					}
	    				}
	    				else {
	    					num123456 = i;
	    				}
	    			}
				}
			if (num123456 != "asdf") {
				return {i: num123456, num: 0, found: true}
			}
			if (num123456 == "asdf") {
				return {i: num123456, num: 0, found: false}
			}
	    }
	}

	    

//else
	    var highestPlayedCard = GetHighestPlayedCard();
		var info = FindSuit(highestPlayedCard);

		var returnCardIndex = 0;
		var returnCardNum = 0;
		var Found = false;

		for(var i = 0; i < hand.length; i++)
		{
			var handsCard = FindSuit(hand[i]);
			if(handsCard.suit == info.suit)
			{
				if(handsCard.num < info.num && handsCard.num > returnCardNum)
				{
					Found = true;
					returnCardIndex = i;
					returnCardNum = handsCard.num;
				}
			}
		}

		if(!Found)
		{
			var suits = Sort(hand);
			var num = SuitToNum(leadCardplayed);


			if (suits[num][0] == undefined) {
				return {i: 0, num: num, found: false}
			}
			else {
				return {i: suits[num][0].i, num: num, found: true}
			}
		}


		return {i: returnCardIndex, num: returnCardNum, found: Found}
	}
	//fsdf
}

function FindSuit(card)
{
	var num;
	var suit;

	suit = card[card.length - 1];
	num = card.substr(0, card.length - 1);

	if(num == "K") num = "13";
	else if(num == "Q") num = "12";
	else if(num == "J") num = "11";
	else if(num == "A") num = "14";

	num = parseInt(num); 

	return {num: num, suit: suit}
}

function HasSuit(card)
{
	if(card.includes("♥") || card.includes("♠") || card.includes("♣") || card.includes("♦")) return true;
	return false;
}

function GetHighestPlayedCard(value = 0)
{
	var card = leadCardplayed;
	let cards = [document.querySelector("#q1").innerHTML,document.querySelector("#q2").innerHTML,document.querySelector("#q3").innerHTML, document.querySelector("#q4").innerHTML];
	for(var i = cards.length - 1; i >= 0; i--)
	{
		if(!HasSuit(cards[i]))
		{
			cards.splice(i, 1);
		}
	}
	if(value == 1) {
		return cards;
	}
	for(var i = cards.length - 1; i >= 0; i--)
	{
		var a = FindSuit(cards[i]);
		var b = FindSuit(leadCardplayed);
		if(a.suit == b.suit)
		{
			if(a.num > b.num)
			{
				card = cards[i];
			}
		}
	}

	return card;
}

function Sort(hand)
{
	var suits = [[], [],[], []];

	for (var i = 0; i < hand.length; i++) {
		var info = FindSuit(hand[i]);

		if(info.suit == "♥") suits[0].push({card: hand[i], i: i});
		else if(info.suit == "♠") suits[1].push({card: hand[i], i: i});
		else if(info.suit == "♣") suits[2].push({card: hand[i], i: i});
		else if(info.suit == "♦") suits[3].push({card: hand[i], i: i});
	}

	return suits;
}

function SuitToNum(card)
{
	card = FindSuit(card).suit;
	if(card == "♥") return 0;
	else if(card == "♠") return 1;
	else if(card == "♣") return 2;
	else if(card == "♦") return 3;
	else return -1;
}