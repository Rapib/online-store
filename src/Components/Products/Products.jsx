// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import CardActions from '@mui/material/CardActions';
// import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';


function Products() {
  let products = useSelector(currentState => currentState.productReducer.products);
  let category = useSelector(currentState => currentState.categoryReducer.activeCategory);

  console.log(category);
  return (
    <>
      <p>list of products</p>

      {products.filter(product => 
      product.category === category).map((product,idx) =>
        <div>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      )}
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
