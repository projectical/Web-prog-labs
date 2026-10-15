const registrationTemplate = (data) => `
  <div class="registration">
    <div class="registration__content">
      <span class="registration__top-link">${data.topLink}</span>
      <h4 class="registration__title">${data.title}</h4>
    </div>
    <button class="registration__btn">${data.buttonText}</button>
  </div>
`;

export default registrationTemplate;
