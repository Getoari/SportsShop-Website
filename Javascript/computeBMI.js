function computeBMI(height, weight, age) {
				
	var bmi = weight/Math.pow(height,2);
	var bmiValue = bmi.toPrecision(3);			
	
	var resultArray = ["Severely underweight","Underweight","Normal","Overweight","Obese"];
	var result;
	
	if( age >= 20 && age < 80 )
		if( bmi > 0 && bmi < 16 )
			result = resultArray[0];
		else if( bmi >= 16 && bmi < 18.5 )
			result = resultArray[1];
		else if( bmi >=18.5 && bmi < 25 )
			result = resultArray[2];
		else if( bmi >= 25 && bmi < 30 )
			result = resultArray[3];
		else if( bmi >= 30 && bmi < 40 )
			result = resultArray[4];
		else
			alert("Please enter valid information!");
	else if ( age > 2 && age < 20)
		if( bmi > 0 && bmi < 18.5 )
			result = resultArray[1];
		else if( bmi >= 18.5 && bmi < 23 )
			result = resultArray[2];
		else if( bmi >=23 && bmi < 25 )
			result = resultArray[3];
		else
			alert("Please enter valid information!");
	else return;
	
	document.getElementById('bmi_result').innerText= "You BMI: "+ bmiValue + ", you are " + result + "!";
}

