/* eslint-disable */
import { Search } from 'react-bootstrap-icons';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getResults } from './api';
import './styles/result.css';
import WebCard from './webCard';


const Result = (props) => {

  const [results, setResults] = useState([]);
  const [complete, setCompelete] = useState(false);

  let { query } = useParams();
  console.log(query);
  const navigate = useNavigate();

  useEffect(async () => {
    const fetch = async () => {
      const res = await getResults(query);
      return res;
    }
    const rest = await fetch();
    setResults(rest);
    setCompelete(true);
  }, []);

  return (
    <div class="result-body">
      <nav className="navbar navbar-light bg-dark">
        <div id="nav" className="container-fluid">
          <span className="navbar-brand"><p className="h2 text-white">CIS555 Search Engine</p></span>
          <button class="btn btn-outline-light" type="button" onClick={() => navigate('/')}>Home</button>
        </div>
      </nav>
      {complete ? (
        <div id="results">
          {results.map((r) => (
            <WebCard
              url={r.url}
              title={r.title}
              intro={r.intro}
            />
          ))}
        </div>
      ) : (
        <div className="loader">Loading</div>
      )
      }

    </div>

  );

}

export default Result;