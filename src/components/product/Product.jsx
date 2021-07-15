import {
  AddCartBtn,
  Illustration,
  Price,
  ProductContainer,
  Rating,
  Title,
} from "./Product.style";

export function Product(props) {
  const { title, price, rating, img } = props;

  return (
    <ProductContainer>
      <Title>{title}</Title>
      <Price>
        $ <strong>{price}</strong>
      </Price>
      <Rating>
        {Array(rating)
          .fill()
          .map(() => (
            <span>⭐</span>
          ))}
      </Rating>
      <Illustration src={img} alt='product illustration' />
      <AddCartBtn>Add to basket</AddCartBtn>
    </ProductContainer>
  );
}
