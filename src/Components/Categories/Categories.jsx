import { useSelector, useDispatch } from 'react-redux';

function Categories() {
  const categories = useSelector(currentState => currentState.categoryReducer.categories)
  const dispatch = useDispatch();
  console.log('5sd',categories);
  const handleClick = (category) => {
    dispatch({
      type: 'FILTER_CATEGORY',
      payload: category
    });
  }

  return (
    <>
      <h2>List of categories</h2>
      <ul>
        {categories.map((category) => <li onClick={() => handleClick(category)} >{category}</li>)}
      </ul>
    </>
  );
}

export default Categories;


// function VoteForm() {

//   return (
//     <Grid id="vote-form" container justifyContent="center" spacing={4}>
//       {candidates.map((candidate, i) => {
//         return (
//           <Grid item>
//             <Card key={i} sx={{ minWidth: 100 }}>
//               <CardContent>
//                 <Typography>{candidate.name}</Typography>
//               </CardContent>
//               <CardActions>
//                 <Button variant="contained" onClick={() => handleClick(candidate.name)}>Vote</Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         )
//       })}
//     </Grid>
//   )
// }

// export default VoteForm;
