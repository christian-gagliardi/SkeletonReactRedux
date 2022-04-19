/// <reference types="cypress" />

describe('Test Get Shop on page load', () => {
  it('should always be true', () => {
    expect(true).to.equal(true);
  });
  it('visits the admin v3 url', () => {
    cy.visit('http://localhost:3001/');
  });
  it('makes the api call and gets shop info', () => {
    cy.fixture('data').then((data) => {
      cy.request(`http://localhost:3000/api/store/details/${data.shopId}`).then((resp) => {
        if (expect(resp.status).to.eq(200)) {
          expect(resp).to.have.property('body');
          const shop = resp.body;
          if (shop) {
            cy.get('[data-cy=show-store]').should('be.visible').and('have.class', 'card-grid-view');
            cy.get('[data-cy=card-img]').then(($image) => {
              const cardImgSrc = '/images/pha-logo.svg';
              cy.get($image).should('have.attr', 'src', cardImgSrc);
            });
            cy.get('[data-cy=card-title]').then(($title) => {
              const shopName = $title.text().trim();
              expect(shopName.toUpperCase()).to.be.equal(shop.name.toUpperCase());
            });
            cy.get('[data-cy=card-subtitle]').then(($subtitle) => {
              const shopCity = $subtitle.text().trim();
              expect(shopCity.toUpperCase()).to.be.equal(shop.city.toUpperCase());
            });
            cy.get('[data-cy=card-text]').then(($text) => {
              const shopAddress = $text.text().trim();
              expect(shopAddress.toUpperCase()).to.be.equal(shop.address.toUpperCase());
            });
          } else {
            cy.get('[data-cy=show-store]').should('not.exist');
          }
        }
      });
    });
  });
});
