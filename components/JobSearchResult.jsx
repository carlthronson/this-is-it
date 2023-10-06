import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MyJobSearchGroup from './MyJobSearchGroup';

export default function JobSearchResult() {
  { /* State */ }
  const [companyGroups, setCompanyGroups] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    fetch('./jobDescriptions.json')
      .then((response) => response.json())
      .then((json) => {
        setCompanyGroups(json.filter((companyGroup) => true));
      });
  }, []);

  return (
    <div>
      {companyGroups.map((item, index) => (
        <MyJobSearchGroup key={index} index={index} companyGroup={item} />
      ))}
    </div>
  );
}

