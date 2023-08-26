// `app/job-search/page.js` is the UI for the `/job-search/` URL
'use client'
import styled from 'styled-components';
import JobSearchResult from '../../components/JobSearchResult';

const TextContent = styled.div``;

export default function Page({ jobs }) {
  return <div>
    <h1>Job Search Results</h1>
    <div>
      <JobSearchResult></JobSearchResult>
    </div>
  </div>
}
