const createDeepCopy = (input) => {
  if (input instanceof Date) {
    return new Date(input.getTime()); // BASE CASE when input is of instance Date
  }
  if (typeof input !== "object") {
    return input; //BASE CASE
  }
  let copy = Array.isArray(input) ? [] : {};
  for (let key in input) {
    const value = input[key];
    copy[key] = createDeepCopy(value); //recursive call for each element of an array/object
  }

  return copy;
};

let original = [
  "hello world",
  24,
  {
    date: new Date(),
    location: {
      city: "tampa",
    },
  },
];

let deepCopied = createDeepCopy(original);

deepCopied[1] = 17
deepCopied[2].location.city = "orlando"


console.log(deepCopied, original);
