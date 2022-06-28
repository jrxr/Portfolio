import { lighten } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.secondary};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
      background: ${({ theme }) => lighten(0.4, theme.secondary)};
    }
  }
  body {
    background: ${props => props.theme.background};
    font: 400 1rem 'Montserrat', sans-serif;
  }
  img {
    width: 100%;
    max-width: 100%;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  .container {
    width: 100%;
    margin: 0 auto;
    max-width: 85rem;
    padding: 0 1rem;
    @media(max-width:1450px) {
      max-width: 70rem;
    }
    @media(max-width:1000px) {
      max-width: 50rem;
    }
    @media(max-width:700px) {
      padding: 0 2rem;
    }
  }

  .pipeRun {
    animation: pipe-animate 1.5s infinite linear;
  }

  @keyframes pipe-animate {
    from {
      right: -70px;
    }
    to {
      right: 1250px;
    }
  }

  .jump {
    animation: mario-jump 500ms linear;
  }

  .dead {
    animation: mario-dead 1s linear;
  }

  @keyframes mario-jump {
    0% {
      bottom: 0;
    }
    40% {
      bottom: 120px;
    }
    50% {
      bottom: 120px;
    }
    60% {
      bottom: 120px;
    }
    100% {
      bottom: 0;
    }
  }

  @keyframes mario-dead {
    0% {
      bottom: 0;
    }

    50% {
      bottom: 120px;
    }

    100% {
      bottom: -200px;
    }
  }
`;
