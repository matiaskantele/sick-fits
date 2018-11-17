import Link from "next/link";

const home = () => (
  <div>
    <h1>Hello World!</h1>
    <Link href="/sell">
      <a>Sell!</a>
    </Link>
  </div>
);

export default home;
