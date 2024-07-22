// Define your Book class here:
class Book {
  constructor(title, author, copyrightDate, isbn, numPages, numTimesCheckedOut, discarded){
    this.title = title;
    this.author = author;
    this.copyright = copyrightDate;
    this.isbn = isbn;
    this.numPages = numPages;
    this.timesCheckedOut = this.timesCheckedOut;
    this.discarded = this.discarded;
  }

  checkout(uses=1) {
    this.timesCheckedOut += uses;
  }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
  constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded) {
    super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
  }

  dispose(currentYear){
    if (currentYear - this.copyright > 5) {
      this.discarded = 'Yes';
    }
  }
}

class Novel extends Book {
  constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded) {
    super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
  }

  dispose() {
    if (this.timesCheckedOut > 100) {
      this.discarded = 'Yes';
    }
  }
}

// Declare the objects for exercises 2 and 3 here:
let sampleNovel = new Novel('Pride and Prejudice', 'Jane Austen', 1813, 1111111111111, 432, 32, 'No');

let sampleManual = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013,'0000000000000', 1147, 1, 'No')


console.log(sampleManual);
console.log(sampleNovel);

// Code exercises 4 & 5 here:

sampleManual.dispose(2024);
console.log(sampleManual.discarded);

sampleNovel.checkout(5);
sampleNovel.dispose();
console.log(sampleNovel.discarded);