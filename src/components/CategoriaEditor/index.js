import React, { useState } from 'react';

import { CategoriaWrapper, HeaderWrapper, FormWrapper } from './styles';
import Button from '../Button';
import CategoriaInputs from '../CategoriaInputs/index';

import { deleteCategoria, updateCategoria } from '../../repositories/categoriaRepository';
import useForm from '../../hooks/useForm';

export default function CategoriaEditor({ categoria, setLastChange }) {
  const { valores, setValores, handleFieldsChanges } = useForm(categoria);

  const [
    showForm, setShowForm,
  ] = useState(false);

  function handleDelete(deletedCategoria) {
    deleteCategoria(deletedCategoria.id)
      .catch((err) => (console.log(err)));

    console.log('Delete acionado !');

    setLastChange(deletedCategoria);
  }

  function handleCancelUpdate() {
    setShowForm(!(showForm));
    setValores(categoria);
  }

  function handleUpdateCategoria(categoria) {
    console.log(categoria);
  }

  return (
    <CategoriaWrapper showForm={showForm}>
      <HeaderWrapper>
        {categoria.titulo}
        <div>
          <Button background="var(--primary)" onClick={() => handleDelete(categoria)}>Excluir</Button>
          <Button
            background="#5151de"
            onClick={() => setShowForm(!(showForm))}
          >
            Alterar
          </Button>
        </div>
      </HeaderWrapper>
      <FormWrapper>
        <CategoriaInputs
          valores={valores}
          handleFieldsChanges={handleFieldsChanges}
        />
        <Button>Salvar</Button>
        <Button background="#cc453a" onClick={() => handleCancelUpdate()}>Cancelar</Button>
      </FormWrapper>

    </CategoriaWrapper>

  );
}
