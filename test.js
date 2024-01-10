//carring function

const add = (a) => {
  return (b) => {
    return (c) => {
      return a * (b + c);
    };
  };
};

//console.log(add(1)(2)(3));
const level = add(100);
console.log(level(2)(2));
console.log(level(2)(3));
console.log(level(3)(3));
console.log(level(2)(2));
console.log(level(2)(2));
