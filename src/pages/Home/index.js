import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';

import { getAllCategoriasWithVideos } from '../../repositories/categoriaRepository';

function Home() {
  const [
    categorias, setCategorias,
  ] = useState();

  async function getCategorias() {
    const resposta = await getAllCategoriasWithVideos();
    console.log(resposta);
    setCategorias(resposta);
  }

  useEffect(() => {
    getCategorias();
  }, [
  ]);

  return (
    <>
      <PageDefault paddingOff>
        <BannerMain videoTitle="Jey Sempre somem" videoDescription="JEY" url="https://youtu.be/JxS-wo9bhdo" />
        { categorias && categorias.map((categoria) => ((
          <Carousel
            category={categoria}
            key={categoria.id}
          />
        )))}

      </PageDefault>
    </>

  );
}

export default Home;
