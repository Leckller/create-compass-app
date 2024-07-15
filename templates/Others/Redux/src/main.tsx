import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// Caso queira adicionar arquivos css extras importe eles aqui
import './index.css';
import { store } from './redux/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  /*
  O componente BrowserRouter do react-router-dom é usado para envolver
  sua aplicação e fornecer recursos de roteamento. Ele utiliza a API de
  Histórico HTML5 para manter a interface do usuário em sincronia com a URL.
  */
  <BrowserRouter>

    {/*
  O componente Provider do react-redux é usado para fornecer o Redux store
  ao componente que deseja ter acesso à state global.
  */}
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
