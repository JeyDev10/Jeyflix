import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useForm from '../../../hooks/useForm';

import GenericInput from '../../../components/GenericInput';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';
import { getAllCategorias } from '../../../repositories/categoriaRepository';
import cadastrarVideo from '../../../repositories/videoRepository';

export default function CadastroVideo() {
  const valoresIniciais = {
    titulo: '',
    url: '',
    categoriaId: '',
  };

  const [
    categorias, setCategorias,
  ] = useState([
  ]);

  useEffect(() => {
    getAllCategorias()
      .then((respCategorias) => setCategorias(respCategorias))
      .catch((err) => console.log(err));
  }, [
  ]);

  const { valores, handleFieldsChanges, clearForm } = useForm(valoresIniciais);

  const FormHeader = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
  `;

  return (
    <PageDefault>
      <FormHeader>
        <h1>Cadastro Video</h1>
        <Link to="/cadastro/categoria">
          Cadastrar categoria
        </Link>
      </FormHeader>

      <form onSubmit={(event) => {
        event.preventDefault();
        console.log(valores);
        cadastrarVideo(valores);
        clearForm();
      }}
      >

        <GenericInput type="text" name="titulo" value={valores.titulo} onChange={handleFieldsChanges} desc="Título do vídeo:" />

        <GenericInput type="text" name="url" value={valores.url} onChange={handleFieldsChanges} desc="URL" />

        <GenericInput type="select" name="categoriaId" value={Number(valores.categoriaId)} onChange={handleFieldsChanges} desc="Categoria" list={categorias} />

        <Button>Salvar</Button>
      </form>
    </PageDefault>
  );
}
