import styled from 'styled-components';
import { useCollapse } from 'react-collapsed'
import MyJob from './MyJob'

const TextContent = styled.div``;

const ToggleDetailsButton = styled.div`
    display: 'flex';
    justifyContent: 'right';
    padding: 2;
`;

const CompanyHeader = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

const CompanyName = styled.div`
    display: 'flex';
    justifyContent: 'center';
    padding: 2;
`;

const Container = styled.div`
    border-radius: 2px;
  box-shadow: 1px 1px 1px 1px grey;
    padding: 8px;
    color: #000;
    margin-bottom: 8px;
    min-height: 25px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: '#DCDCDC';
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`   ;

export default function MyCompany({ company, index }) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

    return <div>
        <Container>
            <CompanyHeader {...getToggleProps()}>
                <CompanyName>{company.companyName}</CompanyName>
                <div style={{ display: 'flex', justifyContent: 'start', padding: 2 }}></div>
                {/* Number of jobs: {company.jobs.length} */}
                <button>{isExpanded ? 'Hide' : 'View'}</button>
                {/* <button>{isExpanded ? 'Hide' : ('View' + company.jobs.length)}</button> */}
                {/* <button>{isExpanded ? '\u25B2' : ('View' + company.jobs.length +  ' \u25BC')}</button> */}
            </CompanyHeader>
            <div style={{ display: 'flex', justifyContent: 'start', padding: 2 }}></div>
            <section {...getCollapseProps()}>
            <p></p>
                {company.jobs.map((item, index) => (
                    <MyJob key={index} job={item} index={index} />
                ))}
            </section>
        </Container>
    </div>
}