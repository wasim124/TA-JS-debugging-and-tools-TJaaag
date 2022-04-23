function addTwoNumbers(numA, numB) {
  return numA + numB;
}

let result, expected;

function test(message , callback){
    try{
        callback();
        console.log (`✔️`, message) ;
    }catch (error){
        console.error(error);
        console.log (`❎`, message) ;
    }
}

function testAdd(){
result = addTwoNumbers(2, 2);
expected = 4;

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
}

test("adding 2 and 2", testAdd);

// #### Multiply two numbers

function multiplyTwoNumbers(numA, numB) {
    return numA * numB;
  }
  
  let answer, expect;
  
  function test(message , callback){
      try{
          callback();
          console.log (`✔️`, message) ;
      }catch (error){
          console.error(error);
          console.log (`❎`, message) ;
      }
  }
  
  function testMultiply(){
  answer = multiplyTwoNumbers(2, 2);
  expect = 4;
  
  if (answer !== expect) {
    throw new Error(`${answer} is not equal to ${expect}`);
  }
  }
  
  test("multiply 2 and 2", testMultiply);