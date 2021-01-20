import React from 'react';
import PropTypes from 'prop-types';

import GenericInput from '../GenericInput/index';

export default function CategoriaInputs({ valores, handleFieldsChanges }) {
  return (
    <>
      <>
        <GenericInput type="text" name="titulo" value={valores.titulo} onChange={handleFieldsChanges} desc="Nome da Categoria:" />
        <GenericInput type="textarea" name="descricao" value={valores.descricao} onChange={handleFieldsChanges} desc="Descrição da Categoria:" />
        <GenericInput type="color" name="cor" value={valores.cor} onChange={handleFieldsChanges} desc="Cor da Categoria:" />
      </>
    </>
  );
}

CategoriaInputs.propTypes = {
  valores: PropTypes.objectOf(PropTypes.number, PropTypes.string).isRequired,
  handleFieldsChanges: PropTypes.func.isRequired,
};
