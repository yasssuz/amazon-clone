import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo
        src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
        alt='amazon logo'
      />
      <SearchArea>
        <SearchInput type='text' />
        <SearchIcon />
      </SearchArea>
      <Navbar>
        <Option>
          <span>Hello, Guest</span>
          <strong>Sign In</strong>
        </Option>
        <Option>
          <span>Returns</span>
          <strong>Orders</strong>
        </Option>
        <Option>
          <span>Your</span>
          <strong>Prime</strong>
        </Option>
        <Basket>
          <ShoppingBasketIcon />
          <span>0</span>
        </Basket>
      </Navbar>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  height: 6rem;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--clr-dark-gray);
`;

const Logo = styled.img`
  width: 100px;
  object-fit: contain;
  margin: 0 2rem;
  margin-top: 1.8rem;
`;

const SearchArea = styled.div`
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

const SearchInput = styled.input`
  height: 1.2rem;
  padding: 1rem;
  border: none;
  width: 100%;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-evenly;
`;

const Option = styled.div`
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

const Basket = styled.div`
  display: flex;
  align-items: center;
  color: var(--clr-white);

  span {
    margin: 0 1rem;
  }
`;
