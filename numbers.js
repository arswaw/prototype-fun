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

Number.prototype.isPrimeRedux = function(n) {
	if (n <= 1) return false;
	const sqrtLimit = Math.floor(Math.sqrt(n));
	for (var i = 2; i < sqrtLimit; i++) {
		
		if (n%i === 0) return false; 
	}
	return true;
}

// This is a simpler test using Math.floor() and Math.sqrt() which should be slightly easier to read.
// It seems to work pretty consistently based on limited testing. TODO Start writing Unit Tests for these.
// 


