//Add a new element h4 with green background and insert into the new element (h4) the book author


// function init() {

//     const booksListDiv = document.getElementById("booksList") // create the books list container
//     booksListDiv.style.border = "1px solid black"
//     booksListDiv.style.background = "pink"
//     booksListDiv.style.textAlign = "center"
//     // create book ui 
//     // var singleBook = books[0]
//     // var singleBook2 = books[1]

//     // books.forEach(function (currentBook) {

//     // })

//     for (let index = 0; index < books.length; index++) {
//         const currentBook = books[index];
//         const bookContainerDiv = document.createElement("div") // create the single book container

//         const bookTitleH3 = document.createElement("h3") // create header for title
//         bookTitleH3.innerText = currentBook.title // insert the title from the Data into UI 

//         bookContainerDiv.append(bookTitleH3) // append title (h3) into single book container

//         booksListDiv.append(bookContainerDiv) // append single book container into books list container

//         const bookContainerDiv2 = document.createElement("div") // create the single book container 2

//         const bookAuthorH4 = document.createElement("h4") // create header for author
//         bookAuthorH4.innerText = currentBook.author // insert the author from the Data into UI 

//         bookContainerDiv2.append(bookAuthorH4) // append author (h4) into single book container

//         bookContainerDiv.append(bookContainerDiv2) // append single book container into books list container
//     }




// }
// init();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function getSingleBookByProp(key, value) {
//     var result = books.find(function (currentBook) {return currentBook[key].toLowerCase() === value.toLowerCase()})
//     return result
// }
//  console.log(getSingleBookByProp("author", "Virginia Woolf"))

//  function getSingleBookByProp(key, value) {
//     return books.find(currentBook => currentBook[key].toLowerCase() === value.toLowerCase())
// }
//  console.log(getSingleBookByProp("author", "Virginia Woolf"))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var movies = [
    { movieName: "Shrek", rating: 5 },
    { movieName: "lord of the rings", rating: 10 },
    { movieName: "up", rating: 7 }
]

function getHighRating(rating, movieArr) {
    // if (typeof rating !== 'number') return;
    if (isNaN(Number(rating))) return;
    if (!Array.isArray(movieArr)) return;

    return movieArr.filter(currentMovie => currentMovie.rating > rating)
}

console.log(getHighRating(7, movies))

function deleteByName(name, movieArr) {
    if (typeof name !== 'string') return;
    if (!Array.isArray(movieArr)) return;
    var movieNameToLower = name.toLowerCase()
    var indexToDelete = movieArr.findIndex(currentMovie => currentMovie.movieName.toLowerCase() === movieNameToLower)
    if (indexToDelete > -1) {
        movieArr.splice(indexToDelete, 1)
    }

}

function changePages(title, newPages, booksArray) {
    if (isNaN(Number(newPages))) return;
    if (!Array.isArray(booksArray)) return;
    if (typeof title !== 'string') return;
    var singleBook = books.find(function (currentBook) { return currentBook.title.toLowerCase() === title.toLowerCase() })
    if (singleBook) {
        singleBook.pages = newPages
    }
}


function init() {
    var booksListDiv = document.getElementById("booksList")
    // booksListDiv.style.border = "1px solid black"
    //booksListDiv.style.background = "pink"
    booksListDiv.style.textAlign = "center"



    // books.forEach(function (currentBook) {

    // })

    for (let index = 0; index < books.length; index++) {
        const currentBook = books[index];
        const bookContainerDiv = document.createElement("div")
        bookContainerDiv.id = `book_${index}`
        bookContainerDiv.className = `book-card`


        const bookTitleH2 = document.createElement("h2")
        bookTitleH2.innerText = currentBook.title
        bookTitleH2.addEventListener("mouseover", function () {
            bookTitleH2.style.background = "rgb(255, 192, 203, 0.7)"
        })

        const bookAuthorH4 = document.createElement("h4")
        // bookAuthorH4.style.background = "green"
        bookAuthorH4.innerText = currentBook.author
        bookAuthorH4.addEventListener("mouseover", function () {
            bookAuthorH4.style.background = "rgb(255, 192, 203, 0.7)"
        })

        const bookLangugeH4 = document.createElement("h4")
        bookLangugeH4.innerText = currentBook.language

        const bookCountryH4 = document.createElement("h4")
        bookCountryH4.innerText = currentBook.country

        const bookLinkH4 = document.createElement("h4")
        bookLinkH4.innerText = currentBook.Link

        const bookImageLinkH4 = document.createElement("h4")
        bookImageLinkH4.innerText = currentBook.imageLink

        const bookPagesH4 = document.createElement("h4")
        bookPagesH4.innerText = currentBook.pages

        const bookYearH4 = document.createElement("h4")
        bookYearH4.innerText = currentBook.year

        const button = document.createElement("button");
        button.innerText = "select"
        button.addEventListener("click", function () {
            bookContainerDiv.style.background = "rgb(176, 174, 168, 0.8)";
        })

        const buttonDelete = document.createElement("button");
        buttonDelete.innerText = "🗑️"
        buttonDelete.addEventListener("click", function () {
            bookContainerDiv.remove()
        })

        bookContainerDiv.append(bookTitleH2, bookAuthorH4, bookLangugeH4,
            bookPagesH4, bookYearH4, bookCountryH4, bookImageLinkH4, bookLinkH4, button, buttonDelete)

        booksListDiv.append(bookContainerDiv)

    }

}

init();
