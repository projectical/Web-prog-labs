const expectationsTemplate = (data) => `
  <div class="expectations__image">
    <img src="${data.image}" , alt="">
  </div>
  <div class="expectations__content">
    <a href="#" class="expectations__top-link">
      ${data.topLink}
    </a>
    <h2 class="expectations__title">${data.title}</h2>
    <p class="expectations__description">${data.description}</p>
    <a href="#" class="expectations__bottom-link">
      ${data.bottomLink}
    </a>
  </div>
`;

export default expectationsTemplate;
//как мы показываем (html js)