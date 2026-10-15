const createLinksGroupTemplate = (group) => `
  <div class="footer__links-group">
    <h4>${group.title}</h4>
    ${group.items
      .map((item) => `<a href="#">${item}</a>`)
      .join("")}
  </div>
`;

const footerTemplate = (data) => `
  <footer class="footer">
    <div class="footer__heading">
      <h2 class="footer__title">${data.title}</h2>
      <a href="#" class="footer__btn">${data.buttonText}</a>
    </div>

    <div class="footer__links">
      <div class="footer__links-logo">
        <img src="${data.logo}" alt="${data.logoAlt}" />
        <p>${data.address}</p>
      </div>

      ${data.links.map(createLinksGroupTemplate).join("")}

      <div class="footer__links-group footer__contacts">
        <h4>${data.contacts.title}</h4>
        <p>${data.contacts.address}</p>
        <a href="#">${data.contacts.phone}</a>
        <a href="#">${data.contacts.email}</a>
      </div>
    </div>

    <div class="footer__copyright">
      <p>${data.copyright}</p>
    </div>
  </footer>
`;

export default footerTemplate;