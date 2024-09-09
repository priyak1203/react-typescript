console.log('TypeScript Loaded');

// Generic Element
// has no access to button specific properties
const btnGeneric = document.querySelector('.test-btn')!;
console.log(btnGeneric);

// Specific Element
const btnEl = document.querySelector<HTMLButtonElement>('.test-btn')!;

btnEl.disabled = true;

// Checking for Btn
// Optional Chaining
const btnElCheck = document.querySelector<HTMLButtonElement>('.test-btn');

btnElCheck?.addEventListener('click', () => {
  console.log('Testing button ');
});

// btnElCheck?.disabled = false;  // Results in TypeScript Error

if (btnElCheck) {
  btnElCheck.disabled = false;
}

// Type Assertion option
const btnAssertion = document.querySelector('.test-btn')! as HTMLButtonElement;

btnAssertion.disabled = true;
