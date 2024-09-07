/* ########## CLASSES GETTERS AND SETTERS ########## */

class Book {
  private checkedOut: boolean = false;
  constructor(readonly title: string, public author: string) {}

  get info() {
    return `${this.title} by ${this.author}`;
  }

  private set checkOutStatus(checkedOut: boolean) {
    this.checkedOut = checkedOut;
  }

  get checkOutStatus() {
    return this.checkedOut;
  }

  public get toggleCheckout() {
    this.checkOutStatus = true;
    return `${this.title} by ${this.author}`;
  }
}

const atomicHabits = new Book('Atomic Habits', 'James Clear');
console.log(atomicHabits.info);
// atomicHabits.checkOut = true; // This will result in TypeScript Error
console.log(atomicHabits);
console.log(atomicHabits.checkOutStatus);
console.log(atomicHabits.toggleCheckout);
console.log(atomicHabits);
console.log(atomicHabits.checkOutStatus);
