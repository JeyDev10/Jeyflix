import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display:flex;
  align-items:center;
  margin-bottom:10px;
`;

export const Description = styled.span`
  display:block;
  text-decoration: none;
  transition: opacity .3s;
  cursor:context-menu;
  opacity:0;
  transition: 0.3s ease-in;
  transform-origin: left center;

  &:hover{
    opacity: .5;
  }
  @media (max-width: 800px) {
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  margin:0;
  cursor:context-menu;
  font-weight:bold;
  display: inline-block;

  color:${({ categoryColor }) => (categoryColor || 'White')};
  line-height: 1;
  border-radius: 4px;

  &:hover +${Description}{
    transform:translateX(20%);
    opacity:1;

  }

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  
  li {
    margin-right: 16px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
  margin-right:5%;
  margin-bottom: 50px;
`;
