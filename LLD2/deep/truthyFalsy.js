/**
 * if(variableName)
 *
 * Fasly - false, 0, -0, "" ,null, undefined, NaN
 */

const values = [1, -1, 0, "hello", " ", "", {}, [], () => {}];

for (let value of values) {
  if (value) {
    console.log(`${JSON.stringify(value)} is truthy`);
  } else {
    console.log(`${JSON.stringify(value)} is falsy`);
  }
}

const port = process.env.PORT || 3000;

function greet(name) {
  name = name || "Guest";
}
greet("asd");
greet();

value - undefined;
if (!value) {
}
