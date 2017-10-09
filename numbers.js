// Only Number prototype methods here. We should include comments about how they work.

Number.prototype.isPrime = function(n) {
	if (n <= 1) return false;
	else if (n <= 3) return true;
	else if (n%2 === 0 || n%3 === 0) return false;
	let i = 5;
	while (i * i <= n) {
		if (n%i === 0 || n%(i+2) === 0) return false;
		i = i + 6;
	} return true;}

// From Primality Test
// https://en.wikipedia.org/wiki/Primality_test
// 
// This method uses Trial Division which is the simplest primality test.
// If we use the Math.sqrt() of the number in question, we can efficiently
// check if the number in question has divisors in the range of 2 to Math.sqrt(number)
// You can eliminate a lot of computation just by checking if the number is divisible by two
// as all even numbers satisfy this test. 


