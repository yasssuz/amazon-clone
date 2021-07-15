import styled from "styled-components";

export const ProductContainer = styled.article`
  background: var(--clr-white);
  padding: 1.6rem;
  z-index: 5;
  width: 100%;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  text-transform: capitalize;
  font-size: 1.9rem;
`;

export const Price = styled.p`
  margin: 0.5rem 0;
  font-size: 1.4rem;

  strong {
    font-size: 1.7rem;
  }
`;

export const Rating = styled.div`
  margin-bottom: 1.7rem;
`;

export const Illustration = styled.img`
  width: 100%;
  object-fit: contain;
  max-height: 300px;
  margin: 0 auto;
`;

export const AddCartBtn = styled.button`
  margin: 2rem auto 0;
  background: var(--clr-orange);
  font-size: 1.45rem;
  padding: 0.3em 0.7em;
  color: #111;
  border-color: #a88734 #9c7e31 #846a29;
  cursor: pointer;
`;
