const createBlogCardTemplate = (article) => `
  <article class="blog__card ${article.large ? "blog__card--large" : ""}">
    <div class="blog__card-image">
      <img src="${article.image}" alt="${article.alt}" />
    </div>
    <div class="blog__card-content">
      <div>
        <span class="blog__card-date">${article.date}</span>
        <h3 class="blog__card-title">
          ${article.title}
        </h3>
      </div>
      <a href="#" class="blog__card-link">Читать полную статью</a>
    </div>
  </article>
`;
const blogTemplate = (data) => {
  const largeArticle = data.articles
    .filter((article) => article.large)
    .map((article) => createBlogCardTemplate(article))
    .join("");

  const smallArticles = data.articles
    .filter((article) => !article.large)
    .map((article) => createBlogCardTemplate(article))
    .join("");

  return `
    <div class="blog">
      <h2 class="blog__title">${data.title}</h2>
      <div class="blog__container">
        ${largeArticle}
        <div class="blog__grid">
          ${smallArticles}
        </div>
      </div>
    </div>
  `;
};

export default blogTemplate;