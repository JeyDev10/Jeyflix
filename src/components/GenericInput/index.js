import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
import {
  Input, InputWrapper, Label, Select,
} from './styles';

export default function GenericInput({
  type, name, value, onChange, desc, list,
}) {
  const id = `id_${name}`;

  if (type === 'select') {
    return (
      <InputWrapper>
        <Select name={name} id={id} value={value} onChange={onChange}>
          <option selected disabled value="0"> </option>
          {list && (list.map((categoria) => (
            <option key={`${id}_ option_${categoria.nome}`} value={categoria.id}>{categoria.titulo}</option>
          )))}
        </Select>
        <Label htmlFor={id}>{desc}</Label>
      </InputWrapper>

    );
  }
  const isTextarea = type === 'textarea';
  const tag = isTextarea ? 'textarea' : 'input';

  return (

    <InputWrapper>
      <Input as={tag} id={id} type={type} name={name} value={value} onChange={onChange} />
      <Label htmlFor={id}>
        {desc}
      </Label>
    </InputWrapper>
  );
}

GenericInput.defaultProps = {
  type: 'text',
  value: '',
  list: [
  ],
  onChange() { },

};

GenericInput.propTypes = {
  desc: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number,
  ]),
  onChange: PropTypes.func,
  list: PropTypes.array,
};
