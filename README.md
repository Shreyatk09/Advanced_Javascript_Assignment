# Advanced_Javascript_Assignment
#Think1:
Yes,the output of console.log statements are different for counterA and counterB as they maintain  independent counts because of closure.
When we try to access ‘count’ from outside the scope without using proper closure we get error called count is not defined.
And when i try to modify ‘count’ value outside the scope, there is no error because JS is in non-strict mode and it creates a global variable when a value is assigned to it , which was not declared(out of the scope).
#Think 2:
Method 1 : IIFE(Immediately Invoked Function Expression), a function written within for loop which creates a new scope for each i in a loop and remembers the ‘i’ value.
Method 2 : As var is function scope - var creates only one ‘i’ shared by everyone(callbacks),
while let is a block scope - creates its own ‘i’ for every iteration as it remembers its own ‘i’.
