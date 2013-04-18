(function(){
	function interpret() {};
	interpret.prototype.eval = function() {
		
	};
	
	// Parse Part
	interpret.prototype.parse = read;
	
	function read(s) {
		return readFrom(tokenize(s));
	}

	function readFrom(tokens) {
		var token = "",
		exp = [];
		if (tokens.length === 0) {
			throw('no tokens while reading!');
		}
		token = tokens.splice(0,1);
		if (token === '(') {
			while (tokens[0] !== ')') {
				exp = exp.concat(readFrom(tokens.slice(1)));
			}
			tokens.splice(0,1); // pop )
			return exp;
		} else if (token ===  ')') {
			throw('unexpected ) !');
		} else {
			return atom(token)
		}
	}
	
	function tokenize = function(s) {
		var s1 = [];
		s = s.replace(/\(/g,' \( ').replace(/\)/g,' \) ').replace(/\s{2,}/g, ' ');.split(' ');
		return s;
	};

	interpret.prototype.atom = function(atom) {
		atom = Number(atom);
		if (n===+n && n===(n|0)) { // integer
			return atom
		} else if (n===+n && n!==(n|0)) { // float
			return atom
		} else {
			throw('type error');
		}
	};

	window.scheme = interpret;
})();
