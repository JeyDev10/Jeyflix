import styled from 'styled-components';

export const Form = styled.form`
  
`;

export const ContentWrapper = styled.div`
    width:100%;
    display:flex;
    flex:1;
    justify-content:space-between;
    align-items:center;
    margin-bottom:10px;
    
    

`;

export const UpdateWrapper = styled.div`
    width:100%;
    padding:10px;
    background-color:#2f2f2f;
    border-radius:8px;
    transition:.4s;
    display:none;
`;

export const ListWrapper = styled.ul`
    display:flex;
    flex-flow:column;
    list-style:none;
    padding-left:0;
`;
ListWrapper.Item = styled.li`
    display:flex;
    flex-flow:column;
    justify-content:space-between;
    align-items:center;
    padding:5px 10px;
    transition:.3s;

    background-color:#53585D;
    margin-bottom:5px;
    border-radius:8px;
    border-bottom:solid var(--primary) 2px;
`;
