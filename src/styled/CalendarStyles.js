import styled from 'styled-components';

export const CalendarContainer = styled.div`
  margin: 10px;
  padding: 5px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #fff;

  .rbc-toolbar {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #f4f4f4;
    border-radius: 6px;
    margin-bottom: 10px;
  }

  .rbc-btn-group button {
    color: #333;
    background-color: #e4e4e4;
    margin-right: 5px;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    outline: none;

    &:hover {
      background-color: #d4d4d4;
    }
  }

  @media (max-width: 320px) {
    padding: 3px;
  }

  @media (min-width: 321px) and (max-width: 480px) {
    padding: 5px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 10px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 15px;
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
    padding: 20px;
  }

  @media (min-width: 1201px) {
    padding: 25px;
  }
`;
