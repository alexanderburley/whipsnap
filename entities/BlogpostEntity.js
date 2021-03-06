const Entity = require("./Entity");

const content = (post) => {
  return `
    <div class="container">
      <br>
      <h1>${post.title}</h1>
      <hr>
      ${post.content}
    </div>
  `;
};

module.exports = (post) => Entity(content(post));
