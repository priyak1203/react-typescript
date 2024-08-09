/* ########## TYPE ALIAS ########## */

// Other types

// Union Types
type StringOrNumber = string | number;

let value: StringOrNumber;

value = 'Random';
console.log(value);
value = 120;
console.log(value);

// Literal Types
type Theme = 'light' | 'dark';

let theme: Theme;
theme = 'dark';
console.log(theme);
theme = 'light';
console.log(theme);

function setTheme(t: Theme) {
  theme = t;
}

setTheme('dark');
console.log(theme);
