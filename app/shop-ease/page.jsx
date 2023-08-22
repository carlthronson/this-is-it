// `app/shop-ease/page.js` is the UI for the `/shop-ease/` URL
'use client'
import styled from 'styled-components';
import SearchResult from '../../components/SearchResult';

const TextContent = styled.div``;

export default function Page({ wines}) {
  return <div>
    <h1>ShopEase</h1>
    <div>
      <SearchResult></SearchResult>
    </div>
  </div>
}
