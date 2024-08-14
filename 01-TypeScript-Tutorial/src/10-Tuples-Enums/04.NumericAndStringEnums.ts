/* ########## NUMERIC AND STRING ENUMS ########## */

enum NumericEnum {
  Member = 1,
}

enum StringEnum {
  Member = 'value',
}

let numericEnumValue: NumericEnum = 1; // This is allowed
console.log(numericEnumValue);

// let stringEnumValue: StringEnum = 'Value'; // This is not allowed

enum ServerResponseNumbers {
  Success = 200,
  Error = 500,
}

interface NumberResponse {
  result: ServerResponseNumbers;
  data: string[];
}

function getServerResponseNumbers(): NumberResponse {
  return {
    // result: ServerResponseNumbers.Success,
    // This is allowed
    result: 200,
    data: ['first item', 'second item'],
  };
}

enum ServerResponseStrings {
  Success = 'Success',
  Error = 'Error',
}

interface StringResponse {
  result: ServerResponseStrings;
  data: string[];
}

function getServerResponseStrings(): StringResponse {
  return {
    // result: 'Success', // This is not allowed
    result: ServerResponseStrings.Success,
    data: ['old item', 'new item'],
  };
}
