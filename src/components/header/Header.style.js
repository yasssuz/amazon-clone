import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 6rem;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--clr-dark-gray);
`;

export const Logo = styled.img`
  width: 100px;
  object-fit: contain;
  margin: 0 2rem;
  margin-top: 1.8rem;
`;

export const SearchArea = styled.div`
  display: flex;
  align-items: stretch;
  flex: 1;
  border-radius: 2.4rem;

  svg {
    padding: 0.5rem;
    height: 2.2rem !important;
    background: var(--clr-dark-orange);
  }
`;

export const SearchInput = styled.input`
  height: 1.2rem;
  padding: 1rem;
  border: none;
  width: 100%;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-evenly;
`;

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  color: var(--clr-white);

  span {
    font-size: 1rem;
  }

  strong {
    font-size: 1.3rem;
    font-weight: 800;
  }
`;

export const Basket = styled.div`
  display: flex;
  align-items: center;
  color: var(--clr-white);

  span {
    margin: 0 1rem;
  }
`;
