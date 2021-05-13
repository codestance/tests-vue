describe('Listing Restaurants', () => {
  it('shows restaurants from the server', () => {
    const saladPlace = 'Salad Place';
    const pastaPlace = 'Pasta Place';

    cy.server({force404: true});

    cy.route({
      method: 'GET',
      url: 'https://outside-in-dev-api.herokuapp.com/GKJG6iANsshGd8xC5yyo8JBZkUEdvI6l/restaurants',
      response: [
        {id: 1, name: saladPlace},
        {id: 2, name: pastaPlace},
      ],
    });

    cy.visit('/');
    cy.contains(saladPlace);
    cy.contains(pastaPlace);
  });
});
