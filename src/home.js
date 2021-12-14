import './styles/home.css';
import { useNavigate } from 'react-router-dom';
import { Search } from 'react-bootstrap-icons';

const Home = () => {

  const navigate = useNavigate();

  const search = () => {
    const input = document.getElementById('search-term').value;
    navigate(`/search/${input}`);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  }

  return (
    <div className="home">
      <h1>CIS555 SEARCH</h1>
      <div className="wrap">
        <div className="search">
          <input type="text" className="searchTerm" id="search-term" placeholder="What are you looking for?"
            onKeyDown={handleKeyDown} />
          <button type="submit" className="searchButton" onClick={() => search()}>
            <Search color="white" size={23} style={{ cursor: 'pointer' }} />
          </button>
        </div>
      </div>
    </div>
  );
}


export default Home;