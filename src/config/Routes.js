import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import CadastroVideo from '../pages/Cadastro/Video';
import CadastroCategoria from '../pages/Cadastro/Categoria';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route path="/cadastro/categoria" component={CadastroCategoria} />
      </Switch>
    </BrowserRouter>
  );
}
