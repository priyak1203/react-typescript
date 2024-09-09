console.log('TypeScript Loaded');

// Case 1
const btn = document.querySelector('.test-btn');

// Element could be null
btn?.addEventListener('click', () => {
  console.log('Run time check with optional chaining');
});

if (btn) {
  // Do something
}

// Case 2
// Non null assertion operator

const testBtn = document.querySelector('.test-btn')!;

testBtn.addEventListener('click', () => {
  console.log('Non Null Assertion Operator');
});
