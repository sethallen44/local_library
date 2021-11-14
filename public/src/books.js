function findAuthorById(authors, id) {
  const result = authors.find(author => author.id === id);
  return result;
}

function findBookById(books, id) {
  let result = 0;
for (book in books)
  if (books[book].id === id){
     result = books[book];
  }
  return result;
}

function partitionBooksByBorrowedStatus(books) {
  const result = [];
  const checkOut = [];
  const returned1= [];
  books.forEach(book => {
    book.borrows.some(borrow =>!borrow.returned) ? returned1.push(book) : checkOut.push(book)
  })
  result.push(returned1, checkOut)
  return result
}

function getBorrowersForBook(book, accounts) {
    const result = []
  book.borrows.forEach(borrow => {
    accounts.forEach(account => account.returned = borrow.returned)
    result.push(accounts.find(account => account.id === borrow.id))
  })
  return result.slice(0, 10);
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
