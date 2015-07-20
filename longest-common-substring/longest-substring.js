function longestCommonSubstring(str1, str2) {
	return str1.split("").reduce(function(prev, next){
		for (var i = 0; i < str2.length; i++){
			if (str2[i] === next) {
				return prev + next;
			}
		}
		return prev = ''
	}, '');
};
