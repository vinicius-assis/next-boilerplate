import * as S from './styles'

const Main = ({ title = 'React Avancado!' }) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avancado escrito ao lado."
    />
    <S.Title>{title}</S.Title>
    <S.Description>
      Typescript, ReactJS, NextJS e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com codigo."
    />
  </S.Wrapper>
)

export default Main
