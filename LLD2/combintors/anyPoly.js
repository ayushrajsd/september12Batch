/**
 * 1. resolve as soon as first promise resolves
 * 2. ignore all rejected promises until every promise rejects -> Aggregate error with reasons for all the rejects
 * 3. success first combinator
 */

Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      reject(new AggregateError("Empty array"));
      return;
    }
    const errors = []; // keep tracks of rejected reason
    let rejectedCount = 0;

    promises.forEach((item, index) => {
      Promise.resolve(item)
        .then(resolve)
        .catch((error) => {
          errors[index] = error;
          rejectedCount += 1;
          if (rejectedCount === promises.length) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
    });
  });
};

Promise.any([
  Promise.reject("fail 1"),
  //   Promise.resolve("success"),
  Promise.reject("fail 2"),
])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
Promise.myAny([
  Promise.reject("fail 1"),
  //   Promise.resolve("success"),
  Promise.reject("fail 2"),
])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
