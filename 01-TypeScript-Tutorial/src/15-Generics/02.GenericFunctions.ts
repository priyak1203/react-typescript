/* ########## CREATE GENERIC FUNCTIONS AND INTERFACE ########## */

function createString(arg: string): string {
  return arg;
}

function createNumber(arg: number): number {
  return arg;
}

// Generic Function
function genericFunction<T>(arg: T): T {
  return arg;
}

const someStringValue = genericFunction<string>('Hello World');
const someNumberValue = genericFunction<number>(25);
