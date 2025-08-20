const palindromes = function (s) {
	s = s.replace(/[^a-z0-9]/gi , "").toLowerCase();
	let l = Math.floor(s.length / 2);
	for (let i = 0; i < l; i++) {
	  if (s[i] !== s[s.length - i - 1]) {
		return false;
	  }
	}
	return true;
  };
  
  // Do not edit below this line
  module.exports = palindromes;
  