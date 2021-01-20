import styled from 'styled-components';

export const CategoriaWrapper = styled.div`
    display:flex;
    flex-flow:column;
    justify-content:space-between;
    align-items:center;
    padding:5px 10px;
    transition: all .4s;
    max-height:${({ showForm }) => (showForm ? '700px' : '70px')};
    overflow:hidden;

    background-color:#53585D;
    margin-bottom:5px;
    border-radius:8px;
    border-bottom:solid var(--primary) 2px;
`;

export const HeaderWrapper = styled.div`
    width:100%;
    display:flex;
    flex:1;
    justify-content:space-between;
    align-items:center;
    margin-bottom:10px;
`;

export const FormWrapper = styled.div`
    width:100%;
    padding:10px;
    background-color:#2f2f2f;
    border-radius:8px;
`;
