import React, { useState, useEffect } from 'react';
import MyCompany from './MyCompany';
import { useCollapse } from 'react-collapsed'
import styled from 'styled-components';

const CompanyGroupHeader = styled.div`
    display: flex;
    // justify-content: space-between;
    flex-direction: row;
`;

const CompanyGroupStatus = styled.h3`
    display: 'flex';
    justifyContent: 'center';
    padding: 2;
`;

export default function MyJobSearchGroup({ companyGroup, index }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  return (
    <div>
      <CompanyGroupHeader {...getToggleProps()}>
        <CompanyGroupStatus>{companyGroup.status}</CompanyGroupStatus>
        <div style={{ display: 'flex', justifyContent: 'start', padding: 2 }}></div>
        {/* Number of jobs: {company.jobs.length} */}
        <p>
        <button>{isExpanded ? 'Hide' : 'View'}</button>
        {/* <button>{isExpanded ? 'Hide' : ('View' + company.jobs.length)}</button> */}
        {/* <button>{isExpanded ? '\u25B2' : ('View' + company.jobs.length +  ' \u25BC')}</button> */}
        </p>
      </CompanyGroupHeader>
      <section {...getCollapseProps()}>
        <ol>
          {companyGroup.companies.map((item, index) => (
            <li key={index}>
              <MyCompany key={index} index={index} company={item} />
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

