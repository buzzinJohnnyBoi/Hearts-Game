function PytonaromTheorem(A, B, C) {
	var answer;
	if (isNaN(A)) {
		answer = (C * C) - (B * B);
		answer = Math.sqrt(answer);
		return answer;
	}
	else if(isNaN(B)) {
		answer = (C * C) - (A * A);
		answer = Math.sqrt(answer);
		return answer;
	}
	else if(isNaN(C)) {
		answer = (A * A) + (B * B);
		answer = Math.sqrt(answer);
		return answer;
	}
	else {
		
	}
}


function radiansToDegrees(Rad) {
	var Deg = 180 / Math.PI * Rad;
	return Deg;
}

function DegreesToradians(Deg) {
	var Rad = Deg * Math.PI / 180;
	return Rad;
}

function sinInverse(Opposite, Hypotenuse) {
	var answer = radiansToDegrees(Math.asin(Opposite / Hypotenuse));
	return answer;
}

function cosInverse(Adjacent, Hypotenuse) {
	var answer = radiansToDegrees(Math.acos(Adjacent / Hypotenuse));
	return answer;
}

function tanInverse(Opposite, Adjacent) {
	var answer = radiansToDegrees(Math.atan(Opposite / Adjacent));
	return answer;
}

function Sin(Deg, Opposite) {
	var answer = Opposite / Math.sin(DegreesToradians(Deg));
	return answer;
}
	

function Cos(Deg, Hypotenuse) {
	var answer = Hypotenuse * Math.cos(DegreesToradians(Deg));
	return answer;
}

function Tan(Deg, Adjacent) {
	var answer = Adjacent * Math.tan(DegreesToradians(Deg));
	return answer;
}