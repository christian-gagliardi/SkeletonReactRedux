/// <reference types="cypress" />

let UiSelectedShop = {};
let APISelectedShop = {};
let APIShops = [];
let newSelectedShop = {};
let UiNewSelectedShop = {};

describe('Test Select Shop', () => {
  it('should always be true', () => {
    expect(true).to.equal(true);
  });
  it('visits the admin v3 url', () => {
    cy.visit('http://localhost:3001/');
  });
  it('card should be visible and display shop info', () => {
    cy.fixture('data').then((data) => {
      cy.request(`http://localhost:3000/api/store/details/${data.shopId}`).then((resp) => {
        if (expect(resp.status).to.eq(200)) {
          expect(resp).to.have.property('body');
          APISelectedShop = resp.body;
          if (APISelectedShop) {
            cy.get('[data-cy=show-store]').should('be.visible').and('have.class', 'card-grid-view');
            cy.get('[data-cy=card-img]').then(($image) => {
              const cardImgSrc = '/images/pha-logo.svg';
              cy.get($image).should('have.attr', 'src', cardImgSrc);
            });
            cy.get('[data-cy=card-title]').then(($title) => {
              UiSelectedShop.name = $title.text().trim();
              expect(UiSelectedShop.name.toUpperCase()).to.be.equal(
                APISelectedShop.name.toUpperCase()
              );
            });
            cy.get('[data-cy=card-subtitle]').then(($subtitle) => {
              UiSelectedShop.city = $subtitle.text().trim();
              expect(UiSelectedShop.city.toUpperCase()).to.be.equal(
                APISelectedShop.city.toUpperCase()
              );
            });
            cy.get('[data-cy=card-text]').then(($text) => {
              UiSelectedShop.address = $text.text().trim();
              expect(UiSelectedShop.address.toUpperCase()).to.be.equal(
                APISelectedShop.address.toUpperCase()
              );
            });
          } else {
            cy.get('[data-cy=show-store]').should('not.exist');
          }
        }
      });
    });
  });
  it('getAllShops button should be visible', () => {
    cy.get('[data-cy=button-getAllShops]').should('be.visible');
  });
  it('shops list should not exitst', () => {
    cy.get('[data-cy=shops-list]').should('not.exist');
  });
  it('clicks the getAllShops button', () => {
    cy.get('[data-cy=button-getAllShops]').click();
  });
  it('getAllShops button should not exist', () => {
    cy.get('[data-cy=button-getAllShops]').should('not.exist');
  });
  it('shops list should be visible', () => {
    cy.get('[data-cy=shops-list]').should('be.visible');
  });
  it('already selected shop should not be included in the list', () => {
    expect('[data-cy=shops-list]').not.to.contain(UiSelectedShop.name);
  });
  it('makes api call and check if the list displays correct info', () => {
    cy.fixture('data').then((data) => {
      cy.request(`http://localhost:3000/api/store/list/${data.offset}/${data.limit}`).then(
        (resp) => {
          if (expect(resp.status).to.eq(200)) {
            APIShops = resp.body.filter((shop) => shop._id !== APISelectedShop._id);
            APIShops.forEach((shop) => {
              cy.get(`[data-cy=list-item-title-${shop.code}]`).then(($title) => {
                const title = $title.text().trim();
                expect(title.toUpperCase()).to.be.equal(shop.name.toUpperCase());
              });
              cy.get(`[data-cy=list-item-subtitle-${shop.code}]`).then(($subtitle) => {
                const subtitle = $subtitle.text().trim();
                expect(subtitle.toUpperCase()).to.be.equal(
                  `${shop.address} - ${shop.city}`.toUpperCase()
                );
              });
            });
          }
        }
      );
    });
  });
  it('click the first shop from the list', () => {
    newSelectedShop = APIShops[0];
    cy.get(`[data-cy=list-item-title-${newSelectedShop.code}]`).click();
  });
  it('the card should display new selected shop info', () => {
    cy.get('[data-cy=card-title]').then(($title) => {
      UiNewSelectedShop.name = $title.text().trim();
      expect(UiNewSelectedShop.name.toUpperCase()).to.be.equal(newSelectedShop.name.toUpperCase());
    });
    cy.get('[data-cy=card-subtitle]').then(($subtitle) => {
      UiNewSelectedShop.city = $subtitle.text().trim();
      expect(UiNewSelectedShop.city.toUpperCase()).to.be.equal(newSelectedShop.city.toUpperCase());
    });
    cy.get('[data-cy=card-text]').then(($text) => {
      UiNewSelectedShop.address = $text.text().trim();
      expect(UiNewSelectedShop.address.toUpperCase()).to.be.equal(
        newSelectedShop.address.toUpperCase()
      );
    });
  });
});
