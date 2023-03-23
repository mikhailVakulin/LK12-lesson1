console.log("async");

let promise1 = new Promise((resolve, reject) => {
  let n = Math.random();
  if (n > 0.5) {
    resolve("hleb bil kyplen");
  } else reject("hleb ne bil kyplen");
});

let promise2 = new Promise((resolve, reject) => {
  let m = Math.random();
  if (m > 0.2) {
    resolve("hleb bil narezan");
  } else reject("chto to poshlo ne tak");
});

promise1
  .then(function (data) {
    console.log(data);
    return promise2;
  })
  .then((data2) => {
    console.log(data2);
  });
