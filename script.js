function foo() {
  setTimeout(() => {
    console.log("foo");
  }, 1000);
}

function bar() {
  setTimeout(() => {
    console.log("bar");
  }, 2000);
  foo();
}

function baz() {
  setTimeout(() => {
    console.log("baz");
  }, 3000);
  bar();
}

baz();
