# TSDX React User Guide

## du-product-card

- Paquete de prueba de despliegue a npm utilizando TSDX

### Daniel Unapanta

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'du-product-card';
```

```
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
```
