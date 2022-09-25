// Одна книга
export function fetchOneBook(id) {
  return fetch(`http://localhost:3000/book/${id}`).then(response =>
    response.json()
  );
}

// Все книги
export function fetchBooks() {
  return fetch(`http://localhost:3000/book`).then(response => response.json());
}
// Создание книги
export function fetchCreateBook(newBook) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newBook),
  };
  return fetch(`http://localhost:3000/book`, options).then(response =>
    response.json()
  );
}

// Удаление книги

export function fetchDeleteBook(id) {
  const options = {
    method: 'DELETE',
  };

  return fetch(`http://localhost:3000/book/${id}`, options)
    .then(response => response.json())
    .then(console.log);
}

// Редактирование книги

export function fetchPatchBook(partOfBook, id) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(partOfBook),
  };
  return fetch(`http://localhost:3000/book/${id}`, options)
    .then(response => response.json())
    .then(console.log);
}

// fetchCreateBook(newBook);
// function fetchBooks(id) {
//   return fetch(`http://localhost:3000/book/${id}`)
//     .then(response => response.json())
//     .then(console.log);
// }
// fetchBooks(2);

// Создание
// const newBook = {
//   title: 'Убийца драконов',
//   author: 'Адам Р.Р. Смиттт',
//   genres: ['фантастика'],
//   rating: 9.2,
// };

// function fetchCreateBook() {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify(newBook),
//   };
//   return fetch(`http://localhost:3000/book`, options)
//     .then(response => response.json())
//     .then(console.log);
// }

// // fetchCreateBook(newBook);

// // Обновление книги
// const partOfBook = {
//   title: 'test',
//   author: 'test',
//   genres: ['test'],
//   rating: 'v',
// };

// function fetchPatchBook(partOfBook, id) {
//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify(partOfBook),
//   };
//   return fetch(`http://localhost:3000/book/${id}`, options)
//     .then(response => response.json())
//     .then(console.log);
// }
// // fetchPatchBook(partOfBook, 5);

// // Удаление книги
// function fetchDeleteBook(id) {
//   const options = {
//     method: 'DELETE',
//   };

//   return fetch(`http://localhost:3000/book/${id}`, options)
//     .then(response => response.json())
//     .then(console.log);
// }
// fetchDeleteBook(6);
