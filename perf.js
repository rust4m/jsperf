const { performance } = require("perf_hooks");

const func1 = () => {
  const arr = [1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 10];
  arr.reverse();

  // for (let i = 0; i < 10000; i++) {
  //   console.log(i);
  // }

  const used = process.memoryUsage().heapUsed;
  console.log(`memory : ${used}`);
};

function func2() {
  const arr = [1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 10];

  for (let i = 0; i < 10000; i++) {
    arr.reverse();
    // console.log(i);
  }

  const used = process.memoryUsage().heapUsed;
  console.log(`memory used: ${used}`);
}

// const used = process.memoryUsage().heapUsed;

let t0 = performance.now();

// func1();
func2();

let t1 = performance.now();

console.log(`ms: ${t1 - t0}`);
