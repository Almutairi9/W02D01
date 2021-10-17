

const greet = function(){
    console.log("Hello");
};

greet(); /* return  or call fun */

const greet_2 = function(){
    return "Hello";
};


let x = greet()
let y = greet_2()

console.log("x", x);
console.log("y", y);

const fun_1 = function (n1,n2){
    let sum = n1 +n2 ;
    return sum;
};

// write a function call string lenght tha take arggument //


const stringLength = function(str) {
   if(str.length >= 7 )
   {
       return"Long word";
   }  
   else if (str.length <= 6 && str.length >= 3)
   {
       return "med word";
   }
   else 
   {
       return "short word";
   }
};

let getFirstUpperLitter = function(str){
    for( let i =0; i<str.length ; i++){
       
if(str[i].toUpperCase()=== str[i]){

return str[i];
/* i = str.lenght no need for it we have retun*/
}

    }
    return "no match";
};

const s = function(a ,b ){
  let sum = a+b;
  return sum ;
};
  /* sum(5, 10); // => 15
  sum(15, 10); // => 25 */ 

  const ave = function (a, b) {
    let average = a / b ;
    return average; 
  };
  
  /* average(20, 5); // => 12.5
  average(10, 20); // => 15 */

  /*  
   5! = 5 * 4 * 3 * 2 * 1
 */

const findFactorial = function(num)
{
   let fact = 1;  
   if (num === 0) {
    console.log(`The factorial of ${num} is 1.`);
   }
   else {
    for (i = 1; i <= num; i++) {
        fact *= i;
    }
    
    console.log(`The factorial of ${num} is ${fact}.`);
       } 
    }

    const round = function (number) 
    {
        let round = Math.round(number);
        /* console.log(Math.round(number)); */
        return round ;
    }
      
      /* round(5); // => 5
      round(2.4); // => 2
      round(0.8); // => 1
      round(1.7); // => 2  */ 
      
      const toThePowerOf = function (base, exponent) 
      {
        let pow = Math.pow(base, exponent);
        /* console.log(Math.pow(base , exponent )); */
        return pow ;
      }

/* 
toThePowerOf(2, 2); // => 4
toThePowerOf(2, 3); // => 8
toThePowerOf(9, 2); // => 81 */

const randomNumber = function () {
    let random = Math.random();
    /* console.log(Math.random()); */
    return random; 
  };
  
 /*  randomNumber(); // => 0.5052417714491793
  randomNumber(); // => 0.32678224417562673
  randomNumber(); // => 0.43265697184952523 */

  const oneOrZero = function () {
    let one = Math.round(Math.random() );
     return one;
  };
  
  /* oneOrZero(); // => 1
  oneOrZero(); // => 1
  oneOrZero(); // => 0 */

  const randomRange = function (number) {
    let theRandomNumber = Math.floor(Math.random() * 10) + 1;
    return theRandomNumber;
  }; 
  
/*
  // 10 and 0 are included
  randomRange(10); // => 10
  randomRange(10); // => 7 
  randomRange(10); // => 1
  randomRange(10); // => 0 */ 
  
  /* const includeOf = function (string, character) {
     let string = character.include(string);
     /* let searchTearm = character.indexOf(character);
     return string ;
   }; 

    includeOf("Hello", "h"); // => false
   includeOf("hello", "h"); // => true
   includeOf("hello", "a"); // => false
   includeOf("World", "r"); // => true
   includeOf("World", "a"); // => false */ 
   
   
  
 



      
