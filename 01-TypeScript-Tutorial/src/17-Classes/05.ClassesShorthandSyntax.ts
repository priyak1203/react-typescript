/* ########## CLASSES SHORTHAND SYNTAX ########## */

class Book {
  private checkedOut: boolean = false;
  constructor(
    readonly title: string,
    public author: string,
    private somevalue: number
  ) {
    this.title = title;
    this.author = author;
  }
  public getSomeValue() {
    return this.somevalue;
  }
}

const atomicHabits = new Book('Atomic Habits', 'James Clear', 128);
console.log(atomicHabits);
console.log(atomicHabits.getSomeValue());
