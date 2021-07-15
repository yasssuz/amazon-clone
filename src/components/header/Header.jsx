import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {
  Basket,
  HeaderContainer,
  Logo,
  Navbar,
  Option,
  SearchArea,
  SearchInput,
} from "./Header.style";

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
