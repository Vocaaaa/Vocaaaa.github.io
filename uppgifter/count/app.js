let oneday = 1000 * 60 * 60 * 24
let present = new Date();
let endYear = new Date(present.getFullYear(), 11, 31);
let text = document.getElementById("text");

if (present.getMonth() == 11 && present.getDate() > 25) endYear.setFullYear(endYear.getFullYear() + 1);

let result = Math.round(endYear.getTime() - present.getTime()) / (oneday);

let final = result.toFixed(0);

text.innerHTML = "Number Of Days Until New Year: <br> <br> <br> <br> <br>"
+ present + "<br> and <br>"
+ endYear + " is: <br>"
+ final + " Days";
