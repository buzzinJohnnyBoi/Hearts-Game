function getTextArray(text)
{
	if(text[0] == "#")
	{
		var str = [];
		var word = "";
		for(var i = 1; i < text.length; i++)
		{
			if(text[i] == " ")
			{
				str.push(word.toLowerCase());
				word = "";
			}
			else
			{
				word += text[i];
			}
		}
		if(word != "")
		{
			str.push(word.toLowerCase());
		}
		return str;
	}
}

function Command(text)
{
	var commands = text;//getTextArray(text);

	if(commands)
	{
		if(commands[0] == "set_speed")
		{
			speed = parseInt(commands[1]);
		}
		// ------------------ Change Color ------------------
		if(commands[0] == "set_color")
		{
			colorHD = commands[1]
			colorCS = commands[2]
			display(hand4, 39, gameStage);
		}

		// ------------------ Invert Color ------------------
		if(commands[0] == "invert")
		{
			var color = colorHD;
			colorHD = colorCS;
			colorCS = color;
			display(hand4, 39, gameStage);
		}

		// ------------------ Debug ------------------
		if(commands[0] == "debug")
		{
			if(commands.length > 1)
			{
				if(commands[1] == "true")
				{
					debug = true;
				}
				else if(commands[1] == "false")
				{
					debug = false;
				}
			}
			else
			{
				debug = true;
			}
		}

		// ------------------ Switch ------------------
		if(commands[0] == "switch_points")
		{
			var one = p1score;
			var two = p2score;
			var three = p3score;
			var four = p4score;

			p1score = four;
			p2score = three;
			p3score = two;
			p4score = one;

			updatescore();
		}

		// ------------------ Players ------------------
		if(commands[0] == "player")
		{
			// ------------------ Give Points ------------------
			if(commands[2] == "give_points")
			{
				MyConsole.Log("Giving " + commands[3] + " points to " + commands[0] + " " + commands[1]);
				if(commands[1] == "1")
				{
					p1score += parseInt(commands[3]);
				}
				if(commands[1] == "2")
				{
					p2score += parseInt(commands[3]);
				}
				if(commands[1] == "3")
				{
					p3score += parseInt(commands[3]);
				}
				if(commands[1] == "4")
				{
					p4score += parseInt(commands[3]);
				}
				updatescore();
			}

			// ------------------ Give Cards ------------------
			if(commands[2] == "give_card")
			{
				MyConsole.Log("Giving the " + commands[3] + " card to " + commands[0] + " " + commands[1]);
				if(commands[1] == "1")
				{
					hand1[parseInt(commands[4])] = commands[3].toUpperCase();
					sort(hand1);
				}
				if(commands[1] == "2")
				{
					hand2[parseInt(commands[4])] = commands[3].toUpperCase();
					sort(hand2);
				}
				if(commands[1] == "3")
				{
					hand3[parseInt(commands[4])] = commands[3].toUpperCase();
					sort(hand3);
				}
				if(commands[1] == "4")
				{
					hand4[parseInt(commands[4])] = commands[3].toUpperCase();
					sort(hand4);
				}

				display(hand4, 39, gameStage);
	            display(hand3, 26, gameStage);
	            display(hand1, 0, gameStage);
	            display(hand2, 13, gameStage);
			}
			if(commands[2] == "fill_hand")
			{
				for(var i = 0; i < 13; i++)
				{
					if(commands[1] == "1")
					{
						hand1[i] = commands[3].toUpperCase();
					}
					if(commands[1] == "2")
					{
						hand2[i] = commands[3].toUpperCase();
					}
					if(commands[1] == "3")
					{
						hand3[i] = commands[3].toUpperCase();
					}
					if(commands[1] == "4")
					{
						hand4[i] = commands[3].toUpperCase();
					}
				}
				sort(hand1);
				sort(hand2);
				sort(hand3);
				sort(hand4);
				display(hand4, 39, gameStage);
	            display(hand3, 26, gameStage);
	            display(hand1, 0, gameStage);
	            display(hand2, 13, gameStage);
			}

			// ------------------ Give Cards ------------------
			if(commands[2] == "win")
			{
				MyConsole.Log("Thats Cheating");
				if(commands[1] == "1")
				{
					hand1 = bestHand;
					hand2 = worstHand3;
					hand3 = worstHand2;
					hand4 = worstHand1;
					sort(hand1);
				}
				if(commands[1] == "2")
				{
					hand1 = worstHand2;
					hand2 = bestHand;
					hand3 = worstHand1;
					hand4 = worstHand3;
					sort(hand2);
				}
				if(commands[1] == "3")
				{
					hand1 = worstHand1;
					hand2 = worstHand3;
					hand3 = bestHand;
					hand4 = worstHand2;
					sort(hand3);
				}
				if(commands[1] == "4")
				{
					hand1 = worstHand3;
					hand2 = worstHand1;
					hand3 = worstHand2;
					hand4 = bestHand;
					sort(hand4);
				}

				display(hand4, 39, gameStage);
	            display(hand3, 26, gameStage);
	            display(hand1, 0, gameStage);
	            display(hand2, 13, gameStage);
	            gameStage = 1;
			}
			if(commands[2] == "name")
			{
				document.querySelector("#h" + commands[1] + "p").innerHTML = commands[3];
				updatescore();
			}
		}
	}
}