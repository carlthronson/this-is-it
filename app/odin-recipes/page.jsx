// `app/bookmarks/page.js` is the UI for the `/bookmarks/` URL
'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import Link from "next/link";

const TextContent = styled.div``;

export default function Page({ data }) {

  const TextContent = styled.div``;

  return (
    <div>
      <h1>Odin Recipes</h1>
      <Link href="/odin-recipes/acai-bowl">Acai Bowl</Link>
    </div>
  );
}

