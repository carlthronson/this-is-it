// `app/bookmarks/page.js` is the UI for the `/bookmarks/` URL
'use client'
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import Link from "next/link";

const TextContent = styled.div``;

export default function Page({ data }) {
  { /* State */ }
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    fetch('./bookmarks.json')
      .then((response) => response.json())
      .then((json) => {
        setBookmarks(json.filter((bookmark) => true));
      });
  }, []);

  const TextContent = styled.div``;

  return (
    <div>
      <h1>Here is a list of bookmarks with {bookmarks.length} bookmarks</h1>
      <p>I had too many open tabs.  But, now I have this page in the cloud.
        So, all my bookmarks are available on any device.  And I don't have all those open tabs.</p>
      <p>How did I do it???</p>
      <p>Step 1. First I used Chrome features to bookmark all my pages and export them to a local file.
        This was a good start.  But, the bookmarks were only available on the machine where I created them.
        And when I clicked on a bookmark, it opened in the same tab by default.
      </p>
      <p>Step 2. So I wrote a small Java program to parse the bookmarks file and generate a json file (bookmarks.json).
        For this program, I used the following open source libraries.
        <ol>
          <li>Jsoup: to parse the HTML.</li>
          <li>Jackson: to generate json file.</li>
        </ol>
      </p>
      <p>Step 3. Then I added this bookmarks page to this React app.
        For this, I created a new branch in my git repository.  And I added the following files:
        <ol>
          <li>/public/bookmarks.json: This is the file I generated using my Java program that I wrote.</li>
          <li>/app/bookmarks/page.jsx: This is a JSX source code file that I developed to render the UX you see here.</li>
        </ol>
        And, of course, I modified the main page to include a link to this page.
      </p>
      <p>Step 4.  Finally, I pushed my changes to github, which automatically triggers a rebuild and redeployment of this app.
      </p>
      <p>And, here it is.  Any time I want to update my bookmarks, I just need to update bookmarks.json
        The Java program took me about an hour.  And the React app page also took about an hour.
        And here are all my bookmarks.
      </p>
      <ul>
        {bookmarks.map((bookmarkDetails, index) => (
          <li>
            {/* <Link href={jobDescription.jobUrl}>{jobDescription.companyName}</Link> */}
            {/* <Link href={bookmarkDetails.url}>{bookmarkDetails.title}</Link> */}
            <a href={bookmarkDetails.url} target="_blank" rel="noopener noreferrer">{bookmarkDetails.title}</a>
            {/* <Bookmark key={index} index={index} bookmark={bookmarkDetails} /> */}
          </li>
        ))}
      </ul>

    </div>
  );
}

