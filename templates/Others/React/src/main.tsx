import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// Caso queira adicionar arquivos css extras importe eles aqui
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  /*
  O componente BrowserRouter do react-router-dom é usado para envolver
  sua aplicação e fornecer recursos de roteamento. Ele utiliza a API de
  Histórico HTML5 para manter a interface do usuário em sincronia com a URL.
  */
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
