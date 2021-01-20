/* eslint-disable import/no-named-as-default */
import React, { useState, useEffect } from 'react';
import useForm from '../../../hooks/useForm';

import PageDefault from '../../../components/PageDefault';
import CategoriaInputs from '../../../components/CategoriaInputs/index';
import Button from '../../../components/Button';
import LoadingComponent from '../../../components/LoadingComponent';
import URL_BACKEND from '../../../config/globalVariables';
import { createCategoria } from '../../../repositories/categoriaRepository';
import CategoriaEditor from '../../../components/CategoriaEditor';
import {
  Form, ListWrapper, UpdateWrapper, ContentWrapper,
} from './styles';

export default function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const [
    showInputUpdate, changeShowInputUpdate,
  ] = useState(false);

  const { valores, handleFieldsChanges, clearForm } = useForm(valoresIniciais);

  const [
    categorias, setCategorias,
  ] = useState([
  ]);

  const [
    lastChange, setLastChange,
  ] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    createCategoria(valores)
      .then((resp) => console.log(resp))
      .catch((err) => (console.log(err)));
    clearForm();
  }

  const handleDelete = (deletedCategoria) => {
    deleteCategoria(deletedCategoria.id)
      .catch((err) => (console.log(err)));

    console.log('Delete acionado !');

    setLastChange(deletedCategoria);
  };

  function handleUpdate(updatedCategoria) {
    console.log('plaw');
  }

  useEffect(() => {
    fetch(`${URL_BACKEND}/categorias`)
      .then(async (resp) => {
        console.log(resp);
        if (resp.ok) {
          const resposta = await resp.json();
          console.log(resposta);
          setTimeout(() => {
            setCategorias(resposta);
          }, 2000);
        }
      });
  }, [
    lastChange,
  ]);

  return (
    <PageDefault>
      <h1>
        Nova Categoria:
        {valores.titulo}
      </h1>

      <Form onSubmit={handleSubmit}>
        <CategoriaInputs valores={valores} handleFieldsChanges={handleFieldsChanges} />
        <Button background="#141414">Salvar</Button>
      </Form>
      <div>
        {categorias.length === 0 && <LoadingComponent />}
        <ListWrapper>
          {categorias.map((categoria) => (
            <CategoriaEditor
              key={categoria.id}
              categoria={categoria}
              setLastChange={setLastChange}
            />
          ))}
        </ListWrapper>
      </div>
    </PageDefault>
  );
}
