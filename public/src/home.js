function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let result = 0;
  books.forEach(book => {
    if (book.borrows.some(borrow => !borrow.returned)) {
      result++}
  })
  return result;
}       

function getMostCommonGenres(books) {
    let result = 0;
  books.forEach(book => {
    if (book.borrows.some(borrow => !borrow.returned)) {
      counter++}
  })
  return result;
}

function getMostCommonGenres(books) {
  const genre = []
  books.forEach(book => {
    let found = genre.find((genreDif => genreDif.name === book.genre))
    if (!found) {
      let name = book.genre
      let count = 1
      genre.push({name, count})
    } else {
      found.count++
    }
  })
  const result = genre.sort((a, b) => a.count > b.count ? -1 : 1)
  return result.slice(0,5)
}

function getMostPopularBooks(books) {
  const result = books.map(book => {
    const count = book.borrows.length
    const name = book.title
    return {name, count}
  })
  result.sort((a, b) => b.count - a.count)
  return result.slice(0, 5)
}

function getMostPopularAuthors(books, authors) {
  const result = books.map(book => {
    const found = authors.filter(author => author.id === book.authorId)
    const name = `${found[0].name.first} ${found[0].name.last}`
    const count = book.borrows.length
    return {name, count}
  })
  result.sort((a, b) => b.count - a.count)
  return result.slice(0, 5)
} 


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
