// Exercise #1
// Write your solution below
for (var trianglep = "#"; trianglep.length <= 8; trianglep += "#")
console.log(trianglep);

/* 
To create a loop that logs the triangle to the console, I used a for loop. 
I initialized the loop by defining the variable "trianglep" as the value "#".
In the second part of the expression I set the boundary for the variable. 
Once the length of the "trianglep" value reaches 8, the loop stops.
In the last part of the expression I specified what happens to the variable after each iteration of the loop.
For each iteration of this loop, an additional "#"" is added.
When I call the console.log function, each iteration of the for loop is printed out. Since an additional hash character is added
on each line, the resulting shape of the printed out hash characters is a triangle.
*/


// Exercise #2
// Write your solution below
function isEven(number) {
  if (number % 2 == 0)
  console.log('the number is even!')
  else 
    console.log('the number is odd!')
}

/* 
To create a function that checks whether a number is odd or even, I used a conditional statement to evaluate whether a number is
divisible by 2 using the modulo operator. If the remainder of a number divided by 2 is 0, this means that the number is even. 
If this condition is met, the first "if" state is executed. 
If this condition is not met,this means that the number is odd, and therefore the "else" statement is executed. 
*/
