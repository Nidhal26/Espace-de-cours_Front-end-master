describe('Login Page Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/'); // Replace 'path-to-your-page' with the actual path to your login page
  });

  it('should fill in the email and password fields and submit the form', () => {
    // Fill in the email field
    cy.get('input[name="Email"]').type('nidhallasta@gmail.com');

    // Fill in the password field
    cy.get('input[name="Mot_De_Pass"]').type('');

    // Submit the form
    cy.get('[id="login"]').click();
    // Add assertions as needed
    // For example, you might want to assert that the login was successful
    // or that the user is redirected to the expected page.
  });
});
