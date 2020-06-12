/**
 * Promise implementation EcmaScript 6 standard
 * 
 * this is the way to improve callbacks implementations with promises
 */
const booksDb = [
    {
        id: 1,
        title: 'Clean Code',
        authorId: 1
    },
    {
        id: 2,
        title: 'The Pramagtic Programmer',
        authorId: 2
    },
    {
        id: 3,
        title: 'Web Development with Node.js',
        authorId: 3
    },
];

const authorsDb = [
    {
        id: 1,
        name: 'Robert C. Martin'
    },
    {
        id: 2,
        name: 'Steve Forest'
    },
];

function getBookById(id) {
    return new Promise((resolve, reject) => {
        const book = booksDb.find((book) => book.id === id);
        if (!book) {
            const error = new Error();
            error.message = 'Book not found!';
            return reject(error);
        }
        resolve(book);
    });
}

function getAuthorById(id) {
    return new Promise((resolve, reject) => {
        const author = authorsDb.find((author) => author.id === id);
        if (!author) {
            const error = new Error();
            error.message = 'Author not found!';
            return reject(error);
        }
        resolve(author);
    });
}

getBookById(1)
    .then(book => {
        return getAuthorById(book.authorId);
    }).then(author => {
        console.log(author);
    }).catch(error => {
        console.log(error.message);
    });