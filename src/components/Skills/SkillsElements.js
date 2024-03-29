import styled from 'styled-components';

export const SkillsContainer = styled.div`
  background: #eaf1f1;
  background-size: 200% 200%;
  display: flex; 
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 30px;
  height: 860px;
  position: relative;
`;
export const SkillsContent = styled.div`
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    height: 500px;
    width: 520px;
  }
  @media screen and (max-width: 580px) {
    height: 580px;
    width: 460px;
  }
  @media screen and (max-width: 480px) {
    height: 100%;
    width: 300px;
  }
`;
export const SkillColumn = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
  }
`;
export const Column1 = styled.div`
  margin: 0px 25px 15px 0px;
  padding: 0 15px;
  grid-area: col1;
  @media screen and (max-width: 768px) {
    margin: 0px;
  }
  @media screen and (max-width: 480px) {
    margin: 0px;
  }
`;
export const Column2 = styled.div`
  margin: 0px 0px 230px 50px;
  padding: 0 15px;
  grid-area: col2;
  @media screen and (max-width: 768px) {
    margin: 0px;
  }
  @media screen and (max-width: 480px) {
    margin: 0px;
  }
`;
export const SkillsH1 = styled.h1`
    font-size: 60px;
    color: #264653;
    margin: 22px 0px 22px 0px;
    font-weight: bold;
    @media screen and (max-width: 480px) {
    font-size: 37px;
  }
  `
export const SkillsH2 = styled.h2`
    font-size: 45px;
    color: #264653;
    margin: 15px 0px 15px 0px;
    text-algin: center;

  @media screen and (max-width: 480px) {
    font-size: 25px;
    margin: 15px 0px 15px 35px;
  }
`
export const SkillDiv =styled.div`
  color: #2A9D8F;
  font-size: 45px;
  padding: 5px;
  
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 36px;
    margin: 0px;
  }
  @media screen and (max-width: 480px) {
    font-size: 33px;
    margin: 0px;
  }
`