const Handlebars = require('handlebars');

const allBooks = `
  <tr>
    <td class="main">№</td>
    <td class="main">Название книги</td>
    <td class="main">Автор</td>
    <td class="main">Жанр</td>
    <td class="main">Рейтинг</td>
  </tr>
{{#each this}}
  <tr>
    <td class="dynamic">{{id}}</td>
    <td class="dynamic">{{title}}</td>
    <td class="dynamic">{{author}}</td>
    <td class="dynamic">{{genres}}</td>
    <td class="dynamic">{{rating}}</td>
  </tr>
{{/each}}`;

export const TEMPLATE = Handlebars.compile(allBooks);

const book = `
<tr>
    <td class="dynamic">{{id}}</td>
    <td class="dynamic">{{title}}</td>
    <td class="dynamic">{{author}}</td>
    <td class="dynamic">{{genres}}</td>
    <td class="dynamic">{{rating}}</td>
  </tr>
`;
export const TEMPLATE_BOOK = Handlebars.compile(book);
