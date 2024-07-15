import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import NotFound from './routes/NotFound';

function App() {
  return (
    /*
    O componente Routes do react-router-dom é usado para definir as rotas da sua aplicação React.
    Ele é um componente de nível superior que encapsula as rotas e os componentes associados a elas.
    */
    <Routes>
      {/*
      A tag Route é usada para definir uma rota específica.
      O "path" é a URL que a rota irá responder.
      O "element" é o componente que será renderizado caso a URL coincida com a rota.
      */}
      <Route path="/" element={<Home />} />
      {/**
       A tag Route também pode ser usada para definir rotas que não são exatas usando o path "*".
       No exemplo abaixo toda a rota que não for definida vai cair no componente NotFound.
       */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
