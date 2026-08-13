// updated cypress/e2e/quiz.cy.js with green comments
describe('Tech Quiz End-to-End Test', () => { // Describe block for the E2E test
  it('completes the quiz flow', () => { // Test to complete the quiz flow
    cy.visit('http://localhost:5173'); // Visit the app’s frontend (adjust port if needed)

    cy.contains('Start').click(); // Click the Start button

    // Loop through 10 questions
    for (let i = 0; i < 10; i++) {
      // Click the first answer button for each question
      cy.get('button').contains(/Answer/i).first().click(); // Click answer button
    }

    // Check if final score is displayed
    cy.contains('Your score:').should('be.visible'); // Assert final score is visible

    // Check for start new quiz button
    cy.contains('Start New Quiz').should('be.visible'); // Assert new quiz button is visible
  });
});
// end of file
