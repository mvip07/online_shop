import styled from "styled-components";
import StarOne from "../../assets/img/stars/starOne.svg";
import StarTwo from "../../assets/img/stars/starTwo.svg";
import StarThree from "../../assets/img/stars/starThree.svg";

export function One() {
  return (
    <Wrapper>
      <img src={StarOne} alt="star" />
      <img src={StarTwo} alt="star" />
      <img src={StarTwo} alt="star" />
      <img src={StarTwo} alt="star" />
      <img src={StarTwo} alt="star" />
    </Wrapper>
  );
}

export const OneAndHalf = () => {
  return (
    <Wrapper>
      <img src={StarOne} alt="star" />
      <img src={StarThree} alt="star" />
      <img src={StarTwo} alt="star" />
      <img src={StarTwo} alt="star" />
      <img src={StarTwo} alt="star" />
    </Wrapper>
  );
};

export const Two = () => {
  return (
    <Wrapper>
      <img src={StarOne} alt="star" />
      <img src={StarOne} alt="star" />
      <img src={StarTwo} alt="star" />
      <img src={StarTwo} alt="star" />
      <img src={StarTwo} alt="star" />
    </Wrapper>
  );
};

export const TwoAndHalf = () => {
  return (
    <Wrapper>
      <img src={StarOne} alt="star" />
      <img src={StarOne} alt="star" />
      <img src={StarThree} alt="star" />
      <img src={StarTwo} alt="star" />
      <img src={StarTwo} alt="star" />
    </Wrapper>
  );
};

export const Three = () => {
  return (
    <Wrapper>
      <img src={StarOne} alt="star" />
      <img src={StarOne} alt="star" />
      <img src={StarOne} alt="star" />
      <img src={StarTwo} alt="star" />
      <img src={StarTwo} alt="star" />
    </Wrapper>
  );
};

export const ThreeAndHalf = () => {
  return (
    <Wrapper>
      <img src={StarOne} alt="star" />
      <img src={StarOne} alt="star" />
      <img src={StarOne} alt="star" />
      <img src={StarThree} alt="star" />
      <img src={StarTwo} alt="star" />
    </Wrapper>
  );
};

export const Four = () => {
  return (
    <Wrapper>
      <img src={StarOne} alt="star" />
      <img src={StarOne} alt="star" />
      <img src={StarOne} alt="star" />
      <img src={StarOne} alt="star" />
      <img src={StarTwo} alt="star" />
    </Wrapper>
  );
};

export const FourAndHalf = () => {
  return (
    <Wrapper>
      <img src={StarOne} alt="star" />
      <img src={StarOne} alt="star" />
      <img src={StarOne} alt="star" />
      <img src={StarOne} alt="star" />
      <img src={StarThree} alt="star" />
    </Wrapper>
  );
};

export const Five = () => {
  return (
    <Wrapper>
      <img src={StarOne} alt="star" />
      <img src={StarOne} alt="star" />
      <img src={StarOne} alt="star" />
      <img src={StarOne} alt="star" />
      <img src={StarOne} alt="star" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  
  img {
    width: 15px;
    heigth: 15px;
  }
`;
