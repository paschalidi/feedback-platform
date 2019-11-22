import styled from "styled-components";
import Colors from "../Colors";

const ButtonStyles = styled.div`
  .component-child {
    font-family: "Untitled Sans";
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    border-radius: 4px;
    padding-top: 2px;
    width: 150px;
    height: 48px;
    font-weight: 400;
    line-height: 1.9rem;
  }

  button:disabled,
  button:disabled .component-child {
    cursor: not-allowed !important;
  }

  button {
    padding: 0;
    border-radius: 4px;
    display: block;
    text-decoration: none;
    cursor: pointer;
  }

  a {
    border-radius: 4px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
  }

  a:focus:active,
  button:focus:active {
    outline: 0;
  }

  .primary {
    color: ${Colors.white};
    background-color: ${Colors.primary};
    border: 0;

    i {
      font-size: 1.5em;
    }

    &:hover {
      background-color: ${Colors.active};
    }

    &:active {
      background-color: ${Colors.active};
    }

    &:disabled {
      background-color: ${Colors.divider};
    }
  }

  .secondary {
    color: ${Colors.textPrimary};
    background-color: ${Colors.white};
    border: 1px solid ${Colors.divider};

    i {
      font-size: 1.4em;
    }

    &:hover,
    &:active {
      color: ${Colors.white};
      background-color: ${Colors.primary};
      border: 1px solid ${Colors.primary};
    }

    &:disabled {
      color: ${Colors.textPrimary};
      background-color: ${Colors.secondary};
      border: 1px solid ${Colors.secondary};
    }
  }
`;

export default ButtonStyles;
