import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import Pagination from "./components/Pagination";
import Filter from "./components/Filter";
import Search from "./components/Search";

function App() {
  const [recipeArr, setRecipeArr] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [query, setQuery] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [diet, setDiet] = useState(false);
  const [ingredients, setIngredients] = useState([]);

  //fetching API
  useEffect(() => {
    fetchMyApi();
  }, [cuisine, diet, query]);

  async function fetchMyApi() {
    let response = await fetch(
      `https://api.spoonacular.com/recipes/search?query=${query}&cuisine=${cuisine}&deit=${diet && "vegan"}&ingredients=${ingredients}&number=100&apiKey=1d8fa2929ccf4efc88bb523a204889e4`
    );
    let result = await response.json();
    console.log(result);
    setRecipeArr(result.results);
  }

  //Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = recipeArr.slice(indexOfFirstPost, indexOfLastPost);
  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="page">
      <h1>Food Recipes APP</h1>
      <Search search={setQuery} />
      <Filter
        setCuisine={selectedCuisine => {
          setCuisine(selectedCuisine);
        }}
        setVegan={vegan => {
          setDiet(vegan);
        }}
      />

      <div className="container">
        {currentPosts.map(item => {
          return (
            <Card
              key={item.id}
              name={item.title}
              minutes={item.readyInMinutes}
              link={item.sourceUrl}
              src={"https://spoonacular.com/recipeImages/" + item.image}
            />
          );
        })}
      </div>
      <Pagination
        paginate={paginate}
        postsPerPage={postsPerPage}
        totalPosts={recipeArr.length}
      />
    </div>
  );
}

export default App;
