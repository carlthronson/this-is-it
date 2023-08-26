import React, { useState, useEffect } from 'react';
import JobDescription from './JobDescription';
import styled from 'styled-components';
import Link from "next/link";

const JobDescriptionList = styled.div`
    padding: 3px;
  transistion: background-color 0.2s ease;
  background-color: #f4f5f7;
    flex-grow: 1;
    min-height: 100px;
`   ;

export default function JobSearchResult() {
  { /* State */ }
  const [jobDescriptions, setJobDescriptions] = useState([]);

  useEffect(() => {
    fetch('./jobDescriptions.json')
      .then((response) => response.json())
      .then((json) => {
        setJobDescriptions(json.filter((jobDescription) => true));
      });
  }, []);

  const TextContent = styled.div``;

  return (
    <JobDescriptionList>
      <ol>
        {jobDescriptions.map((jobDescription, index) => (
          <li>
            {/* <Link href={jobDescription.jobUrl}>{jobDescription.companyName}</Link> */}
            <JobDescription key={index} index={index} job={jobDescription} />
          </li>
        ))}
      </ol>

    </JobDescriptionList>
  );
}

