// `app/page.js` is the UI for the `/` URL
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Hello World, This is the home page of this app!</h1>
      <Link href="/shop-ease">
        <a>ShopEase</a>
      </Link>
    </div>
  )
}
