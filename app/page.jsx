// `app/page.js` is the UI for the `/` URL
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Hello World, This is the home page of this app!</h1>
      <div>
        <Link href="/kanban-board">
          Kanban Board
        </Link>
      </div>
      <div>
        <Link href="/shop-ease">
          ShopEase
        </Link>
      </div>
    </div>
  );
}
