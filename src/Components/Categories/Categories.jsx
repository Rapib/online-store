import { useSelector, useDispatch } from 'react-redux';
// import Divider from '@mui/material/Divider';
// import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';
// import { styled } from '@mui/material/styles';
import Nav from 'react-bootstrap/Nav';
import './Categories.css';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

function Categories() {
  const categories = useSelector(currentState => currentState.categoryReducer.categories)
  const dispatch = useDispatch();
  // console.log('5sd', categories);
  const handleClick = (category) => {
    dispatch({
      type: 'FILTER_CATEGORY',
      payload: category
    });
  }

  return (
    <>
      {/* <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        >
        {categories.map((category) => <Item onClick={() => handleClick(category)} >{category}</Item>)}
      </Stack> */}
      <Nav fill variant="tabs">
        {categories.map((category, idx) => <Nav.Item id={idx}><Nav.Link onClick={() => handleClick(category)} >{category}</Nav.Link></Nav.Item>)}
      </Nav>
      {/* <ul>
        {categories.map((category) => <li onClick={() => handleClick(category)} >{category}</li>)}
      </ul> */}
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
