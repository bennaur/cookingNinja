import React, { useState, useEffect } from 'react'
import "./Home.css";
import Recipe from '../Recipe/Recipe';
import Pagination from '../Pagination/Pagination';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';


const Home = ({ data, loading, error }) => {

  let showData;
  let pages;

  //pagination 
  const [currentPage, setCurrentPage] = useState(1);

  if (data) {
    pages = Math.ceil(data.length / 10);
    const indexLastPost = 10 * currentPage;
    const indexFirstPost = indexLastPost - 10;
    showData = data.slice(indexFirstPost, indexLastPost);
  }



  useEffect(() => {
    setCurrentPage(1)
  }, [data])
  

  const paginate = number => { 
    setCurrentPage(number) 
  }

  return (
    <div className='home'>

      {error &&
        <div className="home--error">{error}</div>         
      }

      {loading && 
      <div className="home--loading">
        <Loading/>
      </div>
        }

      <div className='home--grid'>
        {
          data && !loading &&
          showData.map(el => {
            //detect id
            let id= el.recipe.uri.split('#recipe_').pop();

            return <Link to={`/recipe/${id}`} className="link--router" key={showData.indexOf(el)} state={{recipe: el.recipe}} >
           <Recipe key={id} imgsrc={el.recipe.image} label={el.recipe.label} type={el.recipe.cuisineType} />
            </Link>
          })
        }
      </div>

      {data && !loading &&
        data.length > 10 && <Pagination pages={pages} paginate={paginate} cp={currentPage} />
      }
      </div>)
}
export default Home