// `app/shop-ease/page.js` is the UI for the `/shop-ease/` URL
'use client'
import styled from 'styled-components';
import KanbanBoard from '../../components/Kanbanboard';

const TextContent = styled.div``;

export default function Page({ wines}) {
  return <div>
    <h1>Kanban Board Demo</h1>
    <div>
      <KanbanBoard></KanbanBoard>
    </div>
  </div>
}
