import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
    position:relative;
    width:100%;
    

    textarea{
      min-height:150px;
    }

    input[type="color"]{
        padding-left:170px;
    }

`;

export const Label = styled.label`
  color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;

  display:flex;
  align-items:center;

  transform-origin: left top;

  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .4s;
`;

const InputPattern = `

  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 60px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;

  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type='color']) +${Label} {
    transform: scale(.7) translateY(-10px);
  }




 
`;

const changeBorder = ({ value }) => {
  const hasValue = String(value).length > 0;
  return hasValue && css`
  &:not([type='color']) +${Label} {
    transform: scale(.7) translateY(-10px);
  }`;
};

export const Input = styled.input`
${InputPattern}
${changeBorder}
  

`;

export const Select = styled.select`
${InputPattern}
${changeBorder}
`;
