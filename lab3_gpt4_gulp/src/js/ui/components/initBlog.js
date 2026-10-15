// import blogData from "../../mockData/blogData.js";
// import blogTemplate from "../templates/blogTemplate.js";
// const initBlog = (blogNode) => {
//   blogNode.insertAdjacentHTML(
//     "beforeend",
//     blogTemplate(blogData)
//   );
// };
// export default initBlog;

// берем внешний API применяем к шаблону нашему локальному
import blogData from "../../mockData/blogData.js";
import blogTemplate from "../templates/blogTemplate.js";

const initBlog = async (blogNode) => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=6" // лимит указывает сколько от внешнего апи получаем, работает для примера 6 стоит
    );

    if (!response.ok) {
      throw new Error("Не удалось получить данные из API");
    }

    const posts = await response.json();

    const apiArticles = posts.map((post, index) => ({
      ...blogData.articles[index],
      title: post.title,
    }));

    const apiBlogData = {
      ...blogData,
      articles: apiArticles,
    };

    blogNode.insertAdjacentHTML(
      "beforeend",
      blogTemplate(apiBlogData)
    );
  } catch (error) {
    console.error("Ошибка загрузки блога:", error);

    // Если API недоступен, показываем локальные данные.
    blogNode.insertAdjacentHTML(
      "beforeend",
      blogTemplate(blogData)
    );
  }
};

export default initBlog;
