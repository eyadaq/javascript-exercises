const sumAll = function(num1, num2) {

	if (typeof(num1) !== 'number' || typeof(num2) !== 'number' 
		|| !Number.isInteger(num1) || !Number.isInteger(num2))
		return("ERROR");
	if (num1 < 0 || num2 < 0)
		return("ERROR");
	let sum = 0;
	let number = 0;
	if (num2 > num1)
	{
		number = num1;
		while (number <= num2)
		{
			sum += number;
			number++;
		}
		return (sum);
	}
	number = num2;
	while (number <= num1)
	{
		sum += number;
		number++;
	}
	return (sum);
};

// Do not edit below this line
module.exports = sumAll;
