// updated cypress/component/Quiz.cy.jsx with green comments
import React from 'react'; // Import React for JSX
import { mount } from 'cypress/react'; // Import mount function from Cypress React plugin
import Quiz from '../../../client/src/components/Quiz'; // Import Quiz component

describe('Quiz Component', () => { // Describe block for the Quiz component tests
  it('renders the Quiz component correctly', () => { // Test to check if Quiz component renders
    mount(<Quiz />); // Mount the Quiz component

    // Check if the Start button is present
    cy.contains('Start').should('be.visible'); // Assert that Start button is visible
  });
});

// end of file .
