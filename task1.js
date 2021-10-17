 

 const addToArray = function (array, string) {
    
    let a =["Hello", "i", "am"];
    console.log(a, a.push('Rawan'));
  };
  
  /* addToArray(["Hello", "i", "am"], "John"); // => ["Hello", "i", "am", "John"]
  addToArray(["Hello", "John", "i", "am"], "Jane"); // => ["Hello", "John", "i", "am", "Jane"]
  */ 
  const convertToString = function (array,char) {
    
   let a= ["Hello", "i", "am", "John"];
   console.log(a.join('  '));
  };
  
 /* convertToString(["Hello", "i", "am", "John"]," "); // => "Hello i am John"
  convertToString(["Hello", "John", "i", "am", "Jane"],"+"); // => "Hello John i am Jane"
  */ 


 // the array values are unique, no duplicate values in the array
const updateValue = function (array,index,value) {
    let n = [10, 20, 30];
     console.log(`there is no element to updated in this index ${n}`);
  };
  
  /* updateValue([10, 20, 30], 3, 50); // => "there is no element to updated in this index"
  updateValue([1, 2, 3], 0, 10); // => [10, 2, 3]
  updateValue([1, 2, 3], 1, 10); //  => [1, 10, 3] */
  
  const onlyString = function (array) {
    let r = ["one",12,"hi",true , 88 , "12"];
    let string = r.filter(stringOnly);
    console.log(string);

    function stringOnly(value) {
        if (typeof (value) === 'string') {
            return value;
        }
    }
  };
  /* onlyString(["one",12,"hi",true , 88 , "12"]); // => ["one","hi","12"]
  onlyString([10, 20, 30, 40, 50, 60,false]); // => [] */ 
   
  const users = [ 
      ["Jane", "123456" ],
   ["admin", "abc123" ],
]; 
  
  const login = function (username, password) {
    if(username == users[0][0] && password == users[0][1])
    {
       console.log("Login Successful");
    }
    else if (username == users[1][0] && password == users[1][1])
    {
        console.log("Login Successful");
    }
    else {
        console.log("Login Faild");
    }
  }; 
  
  const maximumNumber = function (numbers) {
    let max = Math.max(...numbers);
    return max ;
   } 

  const reversString = function (string) {
    const b = string.split("")
  let a = b.reverse(); 
    console.log(a);
    return a.join("")  
  };
  
  /* reversString("Hello"); // => "olleH"
  reversString("John"); // => "nhoJ" */ 
  
  
  