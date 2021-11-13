function findAccountById(accounts, id) {
  const result = accounts.find(account => account.id === id)
  return result
}

function sortAccountsByLastName(accounts) {
  const result = accounts.sort((a, b) => a.name.last > b.name.last ? 1 : -1)
  return result
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((count, book) => {
    count += book.borrows.filter(borrow => account.id === borrow.id).length
    return count;
  }, 0)
}
  


function getBooksPossessedByAccount(account, books, authors) {
  const result = [];
  const id = account.id;
  books.forEach(book => {
    book.borrows.forEach(borrow => {
      let firstLast = {};
      authors.forEach(author => {
        if (author.id === book.authorId) {
          firstLast = author
        }
      })
      if (borrow.id === id && !borrow.returned) {
          book.author = firstLast;
          result.push(book);
      }
    })
  })
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
