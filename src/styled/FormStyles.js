import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  label {
    margin-bottom: 10px;
    color: #666;
  }

  input[type="text"],
  input[type="datetime-local"] {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: calc(100% - 22px); // Accounting for padding and border
  }

  button {
    background-color: #4CAF50; // Green background for the submit button
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #45a049;
    }
  }

  @media (max-width: 480px) {
    padding: 10px;
    margin: 10px;

    input[type="text"],
    input[type="datetime-local"] {
      padding: 8px;
    }

    button {
      padding: 8px 10px;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 15px;
    margin: 15px;

    input[type="text"],
    input[type="datetime-local"] {
      padding: 10px;
    }

    button {
      padding: 10px 14px;
    }
  }
`;
