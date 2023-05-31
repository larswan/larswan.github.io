import React from 'react';
import styled, { css } from 'styled-components';

const App = () => {
// Define the shared styles for both desktop and mobile
const sharedStyles = css`
  background-color: lightgray;
  padding: 20px;
`;

// Define the specific styles for desktop
const DesktopContainer = styled.div`
  ${sharedStyles}
  width: 500px;
  margin: 0 auto;

  @media (max-width: 767px) {
    display: none;
  }
`;

// Define the specific styles for mobile
const MobileContainer = styled.div`
  ${sharedStyles}
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    display: none;
  }
`;

  return (
    <div>
      <DesktopContainer>
        <h1>This is the desktop version</h1>
        <p>Content for desktop</p>
      </DesktopContainer>

      <MobileContainer>
        <h1>This is the mobile version</h1>
        <p>Content for mobile</p>
      </MobileContainer>
    </div>
  );
};

export default App;