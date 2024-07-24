import styled from 'styled-components';

export const CalendarContainer = styled.div`
  margin: 10px;
  padding: 5px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  /* Adjust height dynamically based on the screen size */
  height: auto;

  /* Media Queries */
  @media (max-width: 320px) { /* for very small mobile screens */
    padding: 3px;
  }

  @media (min-width: 321px) and (max-width: 480px) { /* for small mobile screens */
    padding: 5px;
  }

  @media (min-width: 481px) and (max-width: 768px) { /* for medium screens, large tablets */
    padding: 10px;
  }

  @media (min-width: 769px) and (max-width: 1024px) { /* for large tablets and small desktops */
    padding: 15px;
  }

  @media (min-width: 1025px) and (max-width: 1200px) { /* for small desktop screens */
    padding: 20px;
  }

  @media (min-width: 1201px) { /* for large desktop screens */
    padding: 25px;
  }
`;
