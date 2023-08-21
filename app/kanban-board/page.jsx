// `app/shop-ease/page.js` is the UI for the `/shop-ease/` URL
'use client'
import styled from 'styled-components';
import KanbanBoard from '../../components/Kanbanboard';

const TextContent = styled.div``;

export default function Page({ wines}) {
  return <div>
    <ht>Kanban Board Demo</ht>
    <div>
      <KanbanBoard></KanbanBoard>
    </div>
  </div>
}
