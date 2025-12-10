/**
 *
 * 1. settles as soon as first promise settles
 * 2. if the first one resolves, the entire promise resolves
 * 3. if the first one rejects, then whole race rejects
 */

Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((item) => {
      Promise.resolve(item).then(resolve).catch(reject);
    });
  });
};
