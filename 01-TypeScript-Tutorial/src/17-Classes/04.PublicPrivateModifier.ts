/* ########## CLASSES PUBLIC PRIVATE MODIFIERS ########## */

class Book {
  public readonly title: string;
  public author: string;
  private checkedOut: boolean = false;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  public checkOut() {
    // this.checkedOut = true;
    this.checkedOut = this.toggleCheckedOutStatus();
  }

  public isCheckedOut() {
    return this.checkedOut;
  }

  private toggleCheckedOutStatus() {
    return !this.checkedOut;
  }
}

const alchemist = new Book('The Alchemist', 'Paulo Coelho');
console.log(alchemist);
alchemist.checkOut();
console.log(alchemist);
console.log(alchemist.isCheckedOut());
alchemist.checkOut();
console.log(alchemist.isCheckedOut());
