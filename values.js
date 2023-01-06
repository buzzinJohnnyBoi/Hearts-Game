var debug = false;

var bestHand = [
	"Q♥", "K♥", "A♥",
	"Q♠", "K♠", "A♠",
	"Q♦", "K♦", "A♦",
	"Q♣", "K♣", "A♣",
	"3♣" 
]
var worstHand1 = [
	"8♥", "9♥", "10♥", "J♥",
	"9♠", "10♠", "J♠",
	"9♦", "10♦", "J♦",
	"9♣", "10♣", "J♣"
]

var worstHand3 = [
	"6♥", "7♥",
	"6♠", "7♠","8♠",
	"5♦", "6♦", "7♦","8♦",
	"5♣", "6♣", "7♣","8♣"
	
	
]

var worstHand2 = [
	"2♥","3♥","4♥","5♥",
	"2♠","3♠","4♠","5♠",
	"2♦","3♦","4♦",
	"2♣","4♣"
]



var trashTalk = [
	"You Suck!",
	"Did your Grandma teach you how to play?",
	"You are not supposed to get points in this game.",
	"This isn't Uno",
	"I hate playing with humans",
	"AI Rocks",
	"I hate playing with humans"
]


var cardValsDiscard = [
	0, 1, 2, 3, 5, 7, 9, 11, 13, 15, 15.5, 16, 16.5,
	0, 1, 2, 3, 4, 4, 4, 5, 5, 5, 20, 18, 19,
	0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
	0, 0, 1, 2, 4, 7, 9, 10, 11, 12, 13, 14, 15
]

var cardValsDiscardSTM = [
	16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4,
	14, 13, 11, 10, 9, 8, 7, 6, 6, 5, 1, 2, 2,
	14, 13, 11, 10, 9, 8, 7, 6, 6, 5, 4, 3.5, 3,
	0, 15, 13, 11, 10, 9, 8, 7, 5.5, 5, 4.5, 4, 3
]

var cardValsLead = [
	16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4,
	14, 14.1, 14.2, 14.3, 14.4, 14.5, 14.6, 14.7, 14.8, 14.9, 1, 2, 2,
	14, 13, 11, 10, 9, 8, 7, 6, 6, 5, 4, 3.5, 3,
	0, 15, 13, 11, 10, 9, 8, 7, 5.5, 5, 4.5, 4, 3
]

var cardsValsPlayInSuit = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
]