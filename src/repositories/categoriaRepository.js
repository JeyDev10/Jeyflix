import URL_BACKEND from '../config/globalVariables';

const URL_CATEGORIAS = `${URL_BACKEND}/categorias`;

function createCategoria(novaCategoria) {
  return fetch(URL_CATEGORIAS, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(novaCategoria),
  }).then(async (resp) => {
    if (!resp.ok) {
      throw new Error(`${'Ocorreu um erro, categoria não cadastrada ! Error'}${resp.status}`);
    }
    return resp;
  });
}

function deleteCategoria(idCategoria) {
  return fetch(`${URL_CATEGORIAS}/${idCategoria}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  }).then((resp) => {
    if (!resp.ok) {
      throw new Error(`Ocorreu um erro ao tentar excluir a categoria ! Error ${resp.status}`);
    }
    return resp;
  });
}

function updateCategoria(categoria) {
  return fetch(`${URL_CATEGORIAS}/categorias/${categoria.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(categoria),
  }).then((resp) => {
    if (!resp.ok) {
      throw new Error(`Ocorreu um erro ao tentar atualizar a categoria ! Error ${resp.status}`);
    }
    return resp;
  });
}

function getAllCategoriasWithVideos() {
  return fetch(`${URL_BACKEND}/categorias?_embed=videos`)
    .then(async (resp) => {
      if (!resp.ok) {
        throw new Error(`Ocorreu um erro ao tentar buscar as categorias ! Error ${resp.status}`);
      }
      const resposta = await resp.json();
      return resposta;
    });
}

function getAllCategorias() {
  return fetch(URL_CATEGORIAS)
    .then(async (resp) => {
      if (!resp.ok) {
        throw new Error(`Ocorreu um erro ao tentar buscar as categorias ! Error ${resp.status}`);
      }
      const resposta = await resp.json();

      return resposta;
    });
}

export {
  createCategoria, deleteCategoria, getAllCategoriasWithVideos, getAllCategorias, updateCategoria,
};
