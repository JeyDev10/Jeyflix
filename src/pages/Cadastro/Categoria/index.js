/* eslint-disable import/no-named-as-default */
import React, { useState, useEffect } from 'react';
import useForm from '../../../hooks/useForm';

import PageDefault from '../../../components/PageDefault';
import GenericInput from '../../../components/GenericInput';
import Button from '../../../components/Button';
import LoadingComponent from '../../../components/LoadingComponent';
import URL_BACKEND from '../../../config/globalVariables';
import { createCategoria, deleteCategoria } from '../../../repositories/categoriaRepository';
import {Form, ListWrapper} from './styles';

export default function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

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
  useEffect(() => {
    fetch(`${URL_BACKEND}/categorias`)
      .then(async (resp) => {
        console.log(resp);
        if (resp.ok) {
          const resposta = await resp.json();
          console.log(resposta);
          setTimeout(() => {
            setCategorias(resposta);
          }, 4000);
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
        <GenericInput type="text" name="titulo" value={valores.titulo} onChange={handleFieldsChanges} desc="Nome da Categoria:" />
        <GenericInput type="textarea" name="descricao" value={valores.descricao} onChange={handleFieldsChanges} desc="Descrição da Categoria:" />
        <GenericInput type="color" name="cor" value={valores.cor} onChange={handleFieldsChanges} desc="Cor da Categoria:" />
        <Button background="#141414">Salvar</Button>
      </Form>
      <div>
        {categorias.length === 0 && <LoadingComponent />}
        <ListWrapper>
          {categorias.map((categoria) => (
            <ListWrapper.Item key={`${categoria.id}`}>
              {categoria.titulo}
              <div>
                <Button background={"var(--primary)"} onClick={() => handleDelete(categoria)}>Excluir</Button>
                <Button background={"#5151de"} onClick={() => handleDelete(categoria)}>Atualizar</Button>
              </div>

            </ListWrapper.Item>
          ))}
        </ListWrapper>
      </div>

    </PageDefault>
  );
}
