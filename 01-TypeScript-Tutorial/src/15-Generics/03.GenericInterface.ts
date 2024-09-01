/* ########## CREATE GENERIC FUNCTIONS AND INTERFACE ########## */

// Generic Interface

interface GenericInterface<T> {
  value: T;
  getValue: () => T;
}

const genericString: GenericInterface<string> = {
  value: 'Hello TypeScript',
  getValue() {
    return this.value;
  },
};
