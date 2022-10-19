import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "../../../public/coffee-mug.png",
};

const App = () => {
  return (
    <>
      <ProductCard
        initialValues={{ count: 4, maxCount: 10 }}
        product={product}
      >
        {({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
          <>
            <ProductImage  />
            <ProductTitle  />
            <ProductButtons />

          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
