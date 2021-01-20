import { useState } from 'react';

function useForm(valoresIniciais) {
  const [
    valores, setValores,
  ] = useState(valoresIniciais);

  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: (chave === 'categoriaId') ? Number(valor) : valor,
    });
  }

  function handleFieldsChanges(event) {
    setValor(event.target.getAttribute('name'), event.target.value);
    console.log(valores);
  }

  function clearForm() {
    setValores(valoresIniciais);
  }

  return {
    valores,
    setValores,
    handleFieldsChanges,
    clearForm,

  };
}

export default useForm;
