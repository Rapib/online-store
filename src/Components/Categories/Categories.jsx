import { useSelector, useDispatch } from 'react-redux';
import { fetchCategory } from '../../store/categories';
import { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import './Categories.css';

function Categories() {
  const categories = useSelector(currentState => currentState.categoryReducer.categories)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const handleClick = (category) => {
    dispatch({
      type: 'FILTER_CATEGORY',
      payload: category
    });
  }

  return (
    <>
      <Nav fill variant="tabs" >
        {categories.map((category, idx) => <Nav.Item id={idx} ><Nav.Link onClick={() => handleClick(category)} >{category}</Nav.Link></Nav.Item>)}
      </Nav>
    </>
  );
}

export default Categories;
