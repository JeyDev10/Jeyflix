import styled from 'styled-components';

export const Form = styled.form`
  
`;

export const ListWrapper = styled.ul`
    display:flex;
    flex-flow:column;
    list-style:none;
    padding-left:0;
    
`;
ListWrapper.Item = styled.li`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:5px 10px;

    background-color:#53585D;
    margin-bottom:5px;
    border-radius:8px;
    border-bottom:solid var(--primary) 2px;

`;
