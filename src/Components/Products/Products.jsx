import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {fetchProducts} from '../../store/products';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Products.css';

function Products() {
  let products = useSelector(currentState => currentState.productReducer.products);
  let category = useSelector(currentState => currentState.categoryReducer.activeCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


  const addToCart = (product) => {
    dispatch({
      type: 'ADD_CART',
      payload: product
    });
    // dispatch(addCartToApi());
  }
  return (
    <>
      {(category === 'show all' || category === null) ? products.filter((product) =>
        product.inStock > 0).map((product, idx) =>
          <Card sx={{ maxWidth: 250 }} id={idx}>
            <CardMedia
              component="img"
              alt={product.name}
              height="200"
              image={`https://picsum.photos/${Math.floor(Math.random() * 200)}/200`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Product description
              </Typography>
              <Typography variant="h6" color="text.secondary">
                ${product.price}
              </Typography>
              <Typography variant="body3" color="text.secondary">
                In Stock: {product.inStock}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => addToCart(product)}>Add to Cart</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ) : products.filter((product) =>
          product.category === category && product.inStock > 0).map((product, idx) =>
            <Card sx={{ maxWidth: 250 }} id={idx}>
              <CardMedia
                component="img"
                alt={product.name}
                height="200"
                image={`https://picsum.photos/${Math.floor(Math.random() * 200)}/200`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Product description
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  ${product.price}
                </Typography>
                <Typography variant="body3" color="text.secondary">
                  In Stock: {product.inStock}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => addToCart(product)}>Add to Cart</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          )}
    </>
  );
}

export default Products;
