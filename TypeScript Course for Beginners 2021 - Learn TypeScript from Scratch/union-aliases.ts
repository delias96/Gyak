type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof input1 == "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    return (result = +input1 + +input2);
  } else {
    return (result = input1.toString() + input2.toString());
  }
  //if (resultConversion === "as-number") {
  //  return +result;
  //} else {
  //  return result.toString();
  //}
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
