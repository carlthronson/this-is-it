import React, { useState, useEffect } from 'react';
import MyCompany from './MyCompany';
import styled from 'styled-components';

const CompanyList = styled.div`
    padding: 3px;
  transistion: background-color 0.2s ease;
  background-color: #f4f5f7;
    flex-grow: 1;
    min-height: 100px;
`   ;

export default function JobSearchResult() {
  { /* State */ }
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    fetch('./jobDescriptions.json')
      .then((response) => response.json())
      .then((json) => {
        setCompanies(json.filter((company) => true));
      });
  }, []);

  const TextContent = styled.div``;

  return (
    <div>
      <ol>
      {companies.map((item, index) => (
        <li>
        <MyCompany key={index} index={index} company={item} />
        </li>
      ))}
      </ol>
    </div>
  );
}

