import URL_BACKEND from '../config/globalVariables';

const URL_VIDEOS = `${URL_BACKEND}/videos`;

function cadastrarVideo(video) {
  return fetch(URL_VIDEOS, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(video),
  })
    .then((resp) => {
      if (!resp.ok) {
        throw new Error(`Ocorreu um erro ao cadastrar um video ! Error ${resp.status}`);
      }
      console.log(resp);
    });
}

export default cadastrarVideo;
