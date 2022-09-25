import { TEMPLATE, TEMPLATE_BOOK } from './templeate-string';
import {
  fetchBooks,
  fetchCreateBook,
  fetchDeleteBook,
  fetchOneBook,
  fetchPatchBook,
} from './API';

const insertBook = document.querySelector('tbody');

// Добавление всех книг на страницу
function myBooks() {
  fetchBooks().then(data => {
    renderTableBooks(data);
  });
}
myBooks();

function clear() {
  insertBook.innerHTML = '';
}

function renderTableBooks(data) {
  insertBook.insertAdjacentHTML('beforeend', TEMPLATE(data));
}

// Создание новой книги
const onBtnClick = document.querySelectorAll('button');
onBtnClick[0].addEventListener('click', onModalClick);
const modal = document.querySelector('[data-modal]');

function onModalClick() {
  modal.classList.remove('is-hidden');
}

const formCreate = document.querySelector('.form');
formCreate.addEventListener('submit', onCreateBookClsck);
formCreate.addEventListener('input', inputValue);

const newBook = {};
function inputValue(event) {
  newBook[event.target.name] = event.target.value;
}

function onCreateBookClsck(event) {
  event.preventDefault();
  modal.classList.add('is-hidden');
  event.currentTarget.reset();

  fetchCreateBook(newBook).then(data => {
    renderBook(data);
  });
}
function renderBook(data) {
  insertBook.insertAdjacentHTML('beforeend', TEMPLATE_BOOK(data));
}

// Удаление книги
onBtnClick[1].addEventListener('click', onDeleteBookClsck);

function onDeleteBookClsck() {
  document.querySelector('[data-modal-delete]').classList.remove('is-hidden');
}
const formDelete = document.querySelector('.form__delete');
formDelete.addEventListener('submit', onBookClsck);
formDelete.addEventListener('input', inputDeleteValue);

function onBookClsck(event) {
  event.preventDefault();
  document.querySelector('[data-modal-delete]').classList.add('is-hidden');
  event.currentTarget.reset();
  clear();
  const deleteBook = async () => {
    const deleteOneBook = await fetchDeleteBook(id);
    const books = await myBooks();
    return books;
  };
  deleteBook();
}

let id = 0;

function inputDeleteValue(event) {
  id = event.target.value;
}

// Редактирование книги
onBtnClick[2].addEventListener('click', onRender);
function onRender() {
  // console.log(5);
  document.querySelector('[data-modal-render]').classList.remove('is-hidden');
}

const formChoice = document.querySelector('.choise');
formChoice.addEventListener('submit', onChoiceSubmit);
formChoice.addEventListener('input', onChoiceInput);

function onChoiceSubmit(event) {
  event.preventDefault();
  document.querySelector('[data-modal-render]').classList.add('is-hidden');
  document
    .querySelector('[data-modal-render-form]')
    .classList.remove('is-hidden');
  event.currentTarget.reset();
  fetchOneBook(idChoice).then(data => {
    first[0].value = Object.values(data)[0];
    first[1].value = Object.values(data)[1];
    first[2].value = Object.values(data)[2];
    first[3].value = Object.values(data)[3];
  });
}
const first = document.querySelectorAll('.render-inp');

let idChoice = 0;
function onChoiceInput(event) {
  idChoice = event.target.value;
}

const formRender = document.querySelector('.form-render-last');
formRender.addEventListener('submit', onRenderSubmit);
formRender.addEventListener('input', onRenderInput);

const partOfBook = {};

function onRenderSubmit(event) {
  event.preventDefault();
  document.querySelector('[data-modal-render-form]').classList.add('is-hidden');
  event.currentTarget.reset();
  clear();
  const asyncFunct = async () => {
    const renderBook = await fetchPatchBook(partOfBook, idChoice);
    const books = await myBooks();
    return books;
  };
  asyncFunct();
}

function onRenderInput(event) {
  partOfBook[event.target.name] = event.target.value;
}

// const ICONS = {
//   edit: '&#9998;', // pencil
//   remove: '&#9760;', // jolly roger
// };
// console.log(ICONS.edit);

// Поиск книги по контекстному меню(недоделано)
// const menu = document.querySelector('.dynamic');
// console.log(menu);
// menu.addEventListener('contextmenu', setMenu);

// function setMenu(event) {
//   event.preventDefault();
//   const found = event.srcElement.textContent;
//   console.log(found);

//   const deleteS = async () => {
//     const user = await fetchBooks();

//     user.forEach(function (entry) {
//       if (
//         entry.title === found ||
//         entry.author === found ||
//         entry.genres === found ||
//         Number(entry.id) === Number(found) ||
//         Number(entry.rating) === Number(found)
//       ) {
//         console.log('Done', entry);
//         console.log(entry.id);
//       }
//       // console.log(entry);
//     });

//     return user;
//   };

//   deleteS();
// }
