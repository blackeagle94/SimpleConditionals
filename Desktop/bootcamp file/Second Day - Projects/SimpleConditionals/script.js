

//grade students
let score = prompt(`Please enter your score between 0 and 100.`);


if (score <= 49) {
    alert(`Your grade is F`)
} else if (score <= 59) {
    alert(`Your grade is D`)
} else if (score <= 69) {
    alert(`Your grade is C`)
} else if (score <= 89) {
    alert(`Your grade is B`)
} else if (90 <= score) {
    alert(`Your grade is A`)
}



//check season
let month = prompt("Please enter the month.")

month = month.toLowerCase();

switch (month) {
    case `september` : 
    alert(`Autumn`)
    break;
    case `october` : 
    alert(`Autumn`)
    break;
    case `november` : 
    alert(`Autumn`)
    break;
    case `march` : 
    alert(`Spring`)
    break;
    case `april` : 
    alert(`Spring`)
    break;
    case `may` : 
    alert(`Spring`)
    break;
    case `june` : 
    alert(`Summer`)
    break;
    case `july` : 
    alert(`Summer`)
    break;
    case `august` : 
    alert(`Summer`)
    break;
    case `december` : 
    alert(`Winter`)
    break;
    case `january` : 
    alert(`Winter`)
    break;
    case `february` : 
    alert(`Winter`)
    break;
}


//month days

let monthDays = prompt("Enter a month name ande I will tell you how many days it.")

monthDays = monthDays.toLowerCase();

switch (monthDays) {
    case `september` : 
    alert(`30`)
    break;
    case `october` : 
    alert(`31`)
    break;
    case `november` : 
    alert(`30`)
    break;
    case `march` : 
    alert(`31`)
    break;
    case `april` : 
    alert(`30`)
    break;
    case `may` : 
    alert(`31`)
    break;
    case `june` : 
    alert(`30`)
    break;
    case `july` : 
    alert(`31`)
    break;
    case `august` : 
    alert(`31`)
    break;
    case `december` : 
    alert(`31`)
    break;
    case `january` : 
    alert(`31`)
    break;
    case `february` : 
    alert(`28`)
    break;
}
