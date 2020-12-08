const date = new Date();
let month= date.getMonth();

const months = [
	"Januari",
	"Februari",
	"Mars",
	"April",
	"Maj",
	"Juni",
	"Juli",
	"Augusti",
	"September",
	"Oktober",
	"November",
	"December"
];

console.log(document.querySelector(".month").innerHTML);

document.querySelector(".month").innerHTML
= months[month];

let days = "";

for(let i = 1;i <= 31; i++){
/* 
	days +=´<div>${i}</div<´;
	*/
}

function left(){
	month=month-1;
if(month<0){
	month=11;
}	
	document.querySelector(".month").innerHTML
= months[month];
}

function right(){
	month=month+1;
if(month>11){
	month=0;
}
	document.querySelector(".month").innerHTML
= months[month];
}
