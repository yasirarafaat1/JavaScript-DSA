// tutorial link:- https://youtu.be/h86FQ7vrnds?si=pvd0pdlDpa4WYqRH

// 1. sum of two integers
// let a = 10;
// let b = 3;

// console.log(a+b)



// 2. typeOf

// let a = 10;
// let b = '3';

// console.log(typeof(a+b))



// 3. sum with message

// let a = 10;
// let b = 3;

// console.log('sum of a and b '+ a+b) //Answer is:- sum of a and b 103

// let a = 10;
// let b = 3;

// console.log('sum of a and b '+ (a+b)) //Answer is:- sum of a and b 13

// let a = 10;
// let b = 3;

// console.log(a+b + ' sum of a and b ')  // Answer is :- 13 sum of a and b



// 4. type coercion

// let a = 10;
// let b = 3;

// console.log('a' + b) //Answer is a3
// console.log('a' - b) //Answer is NaN;
// console.log('a' * b) //Answer is NaN;
// console.log('a' / b) //Answer is NaN;
// console.log('a' % b) //Answer is NaN;




// 5. Type Casting

// let age  = prompt('Enter your age'); // one this way
// age  = Number(age);

// let age  = Number(prompt('Enter your age'));  // one this way

// console.log(age); //check answer
// console.log(typeof(age));  //check type




// 6. Swap

//method 1
// let a = 10;
// let b = 30;
// let c;

// c = a  // c = 10, a = 10
// a = b  // a = 20, b = 20
// b = c  // b = 10, c = 10

// console.log(a, b);

// method 2
// let a = 10;
// let b = 30;

// a = a + b  // a = 40
// b = a - b  // b = 10
// a = a - b  // b = 10

// console.log(a, b);

// method 3
// let a = 10;
// let b = 30;

// [a, b] = [b, a]; // destructuring assignment

// console.log(a, b);




// 6. Arithemetic Operators
// + - * / %

// let a = 10
// let b = 20

// console.log(a + b); // Answer is 30
// console.log(a - b); // Answer is -10
// console.log(a * b); // Answer is 200
// console.log(a % b) // Answer is 10;
// console.log(b % a) // Answer is 0;
// console.log(a / b) // Answer is 0.5;
// console.log(b / a) // Answer is 2;
// console.log(Math.floor(a / b)) // Answer is 0 (removes decimal part);

// let a = 3458

// console.log(a%10); // Answer is last one digit
// console.log(a%100); // Answer is last two digit
// console.log(a%1000); // Answer is last three digit and many more...

// let a = 3458

// console.log(Math.floor(a/10)); // Answer is start three digit
// console.log(Math.floor(a/100)); // Answer is start two digit
// console.log(Math.floor(a/1000)); // Answer is start one digit and many more...




// 7. Relational Operators
// < > <= >= == === != !==  

// let a = 10
// let b = 20

// console.log(a > b);  // False
// console.log(a < b);  // True
// console.log(a <= b); // True
// console.log(a >= b); // False
// console.log(a != b); // True
// console.log(a !== b); // True
// console.log(a == b);  // False
// console.log(10 == 10);  // True
// console.log(10 == '10');  // False
// console.log(a === b); // False




// 8. Logical Operators
// &&, ||

// let a = 10
// let b = 20
// let c = 10
// let d = 20

// console.log(a>b && c<d);  // All have need to be true to get true and other one is false so false
// console.log(a<b && c>d);  // All have need to be true to get true and other one is false so false
// console.log(a<b || c>d);  // One have need to be true to get true and other is false
// console.log(a<b || c>d);  // One have need to be true to get true and other is false




// 9. Unary Operator
// ++ increament
// -- decreament

//pre (Firstly use then increase and decrease)
// let a = 10
// let b = a++

// console.log(a, b);

// let a = 10
// let b = a--

// console.log(a, b);

//post (Firstly increase and decrease then use)
// let a = 10
// let b = ++a

// console.log(a, b);

// let a = 10
// let b = --a

// console.log(a, b);



// Q.1
// let i = 11
// i = i++ + ++i
// console.log(i); //Answer is 24

// Q.2
// let a = 11
// let b = 22
// let c = a + b + a++ + b++ + ++a + ++b
// console.log('a=' + a);
// console.log('b=' + b);
// console.log('c=' + c);
// Answer is a=13 b=24 c=103

// Q.3
// let b = true // true = 1
// b++
// console.log(b);  // Answer is 2

// let b = false // false = 0
// b++
// console.log(b);  // Answer is 1

// Q.4
// let a = 11++
// console.log(a);

// Q.5
// let i = 11
// let j = --(i++)

// console.log(j);


// 9. Math Function

// console.log(Math.round(10.8)); // If the value in decimal is five and greater than five so the next number then previous
// console.log(Math.ceil(10.2));  // If the value is in decimal so the number is next in answer
// console.log(Math.floor(13.45));  // If the value is in decimal so the number is previous in answer
// console.log(Math.trunc(172.87));  // It removes the decimal part
// console.log(Math.pow(2,5));  // It do 2 the power 5
// console.log(Math.sqrt(69));  // To find the square root of the number
// console.log(Math.cbrt(34));  // To find the cube root of the number
// console.log(Math.abs(-65));  // It converts the negative values in positive
// console.log(Math.max(23, 54, 23));  // It returns the maximum value
// console.log(Math.min(56, 23,87));   // It returns the minimum value
// console.log((Math.floor(Math.random()*9000)+1000));  // It returns a random value in between 0 and 1 and otp generator
// console.log((234.543).toFixed(0));  // It removes the last digits according to function value


// Q. 1
// let a = 5
// let b = 3
// console.log(a*b);

// Q.2 
// console.log((Math.floor(Math.random()*9000)+1000));  // It returns a random value in between 0 and 1 and otp generator

// Q. 3
// let a = 23
// let b = 54
// let c = 43

// let s = (a+b+c)/2

// console.log((Math.sqrt(s*(s-a) * (s-b) * (s-c))).toFixed(2));

// Q. 4
// let r = 4
// console.log((2*Math.PI*r).toFixed(2));