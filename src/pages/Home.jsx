import styled from "styled-components";
import { Product } from "../components/product/Product";

export default function Home() {
  return (
    <HomeContainer>
      <Banner
        alt='banner'
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jgp'
      />

      <Products>
        <Product
          title='The Lean Startup: How constant innovation radically successful business paperback'
          price='11.98'
          rating={5}
          img='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
        />
        <Product
          title='Kenwood kMix stand mixer for baking, stylish kitchen mixer with K-beater, dough hook and whisk, 5 litre glass bowl'
          price='239'
          rating={4}
          img='https://images-na.ssl-images-amazon.com/images/I/61etD4-IrPL._AC_SL1200_.jpg'
        />
        <Product
          title='Samsung LC49RG90SSUXEN 49" Curved LED gaming monitor'
          price='199.99'
          rating={5}
          img='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
        />
        <Product
          title='Amazon echo (3rd generation() | smart speaker with alexa charcoal fabric'
          price='98.99'
          rating={3}
          img='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?300x400_retinamobilex2$'
        />
        <Product
          title='New apple ipad pro (12.9 inch, Wi-Fi, 198GB) - silver(4th generation)'
          price='598.99'
          rating={3}
          img='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
        />
        <Product
          title='The Lean Startup: How constant innovation radically successful business paperback'
          price='11.98'
          rating={4}
          img='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
        />
      </Products>
    </HomeContainer>
  );
}

const HomeContainer = styled.main``;

const Banner = styled.img`
  width: 100%;
  z-index: -1;
  margin-bottom: -150px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const Products = styled.section`
  display: grid;
  padding: 0 24px;
  gap: 2rem;
  max-width: 1600px;
  margin: auto;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    padding: 0 60px;
    grid-template-columns: repeat(6, 1fr);

    article:nth-of-type(1) {
      grid-column: 1 /4;
    }

    article:nth-of-type(2) {
      grid-column: 4 /7;
    }

    article:nth-of-type(3) {
      grid-column: 1 /3;
    }

    article:nth-of-type(4) {
      grid-column: 3 /5;
    }

    article:nth-of-type(5) {
      grid-column: 5 /7;
    }

    article:nth-of-type(6) {
      grid-column: 1 /7;
    }
  }
`;
