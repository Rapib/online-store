// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import CardActions from '@mui/material/CardActions';
// import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Products() {
  let products = useSelector(currentState => currentState.productReducer.products);
  let category = useSelector(currentState => currentState.categoryReducer.activeCategory);

  console.log(category);
  return (
    <>
      <p>list of products</p>
      {products.filter(product =>
        product.category === category).map((product, idx) =>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt={product.name}
              height="345"
              image="https://picsum.photos/345"
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
            </CardContent>
            <CardActions>
              <Button size="small">Add to Cart</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        )}
      {/* {products.filter(product => 
      product.category === category).map((product,idx) =>
        <div>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      )} */}
    </>
    // Displays a list of products associated with the selected category.
  );
}

export default Products;





//   let totalVotes = useSelector((currentState) => currentState.totalVotes);
//   let candidates = useSelector((currentState) => currentState.candidates);
//   let currentState = useSelector(currentState => currentState);

//   let currentLeader = candidates.reduce((acc, candidate) => {
//     if (candidate.votes > acc.votes ) {
//       return candidate;
//     }
//     return acc
//   }, {name: 'No Leader', votes: 0});
//   console.log('OUR CURRENT STORE VALUES', currentState);
//   return (
//     <div>
//       <h2>Vote Results</h2>
//       <p>Current Winner: {currentLeader.name}</p>
//       <p>Total Votes: {totalVotes}</p>
//     </div>
//   )

// }
