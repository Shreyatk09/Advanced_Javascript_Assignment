/*
function delayedGreeter(names) {
  for (var i = 0; i < names.length; i++) {
    setTimeout(function() {
      console.log(`Hello, ${names[i]}!`);
    }, i * 1000);
  }
}
delayedGreeter(['Alice', 'Bob', 'Charlie']);
*/

/* Immediately Invoked Function Expression */
/*
function delayedGreeterCorrected(names) {
  for (var i = 0; i < names.length; i++) {
    (function(index) {
      setTimeout(function() {
        console.log(`Hello, ${names[index]}!`);
      }, index * 1000);
    })(i);
  }
}
*/

/* changing var to let */
function delayedGreeter(names) {
  for (let i = 0; i < names.length; i++) {
    setTimeout(function() {
      console.log(`Hello, ${names[i]}!, ${i}`);
    }, i * 1000);
  }
}
delayedGreeter(['Alice', 'Bob', 'Charlie']);
