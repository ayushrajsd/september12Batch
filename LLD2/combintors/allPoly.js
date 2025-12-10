/**
 * 1. input -> array of promises
 * 2. wait for all promises to resolve -> keeo track of length
 * 3. maintain the order -> index
 * 4. return the resolved array -> resolve(arr)
 * 5. reject immediately even one promise rejects
 */

Promise.myAll = function (values) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;
    values.forEach((item, index) => {
      Promise.resolve(item)
        .then((value) => {
          results[index] = value;
          completed += 1;
          if (completed === values.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};
