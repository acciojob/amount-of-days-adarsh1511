//your JS code here. If required.
function daysOfYear(){
	if(year%4===0){
		if(year%100===0){
			return year%400===0 ? 366 : 365;
		}
		return 366;
	}
	return 365;
}