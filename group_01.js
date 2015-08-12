var arrayAtticus = ["Atticus", "2405", "47000", 3]; //Name, employee number, annual salary, rating
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var employeeArray = [];  

//1
//var newAtticus = []; 
//var newJem = []; 
//var newBoo = []; 
//var newScout = []; 

var employeeArray = [];

function calculate (array){
	newArray = [];

	var name = array[0];
	var employeeNum = array[1]; 
	var salary = parseInt(array[2]); 
	var rating = array[3];
	newArray.push(name); 

//2a. populate name 


//% STI
var stiPercent; 
switch(rating){
	case 3: 
	stiPercent = 4;
	break; 
	case 4: 
	stiPercent = 6;
	break; 
	case 5: 
	stiPercent = 10; 
	break; 
	default:
	case 2: 
	stiPercent = 0
	break; 
}
if (employeeNum.length == 4){
	stiPercent += 5; 
}

if (salary > 65000) {
	stiPercent--;
}

if (stiPercent > 13) {
	stiPercent = 13; 
}



newArray.push(stiPercent);
var totalBonus = Math.round(salary * stiPercent/100);
var totalCompensation = totalBonus + salary;
newArray.push(totalCompensation); 
newArray.push(totalBonus);

employeeArray.push(newArray);

}

calculate(arrayAtticus);
calculate(arrayScout); 
calculate(arrayBoo);
calculate(arrayScout); 


console.log(employeeArray);