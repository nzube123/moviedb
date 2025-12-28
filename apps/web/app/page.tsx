import { Category } from "./ui/home/category";
import HeaderJSX from "./ui/home/header";

export default function Home() {

  return (
    <>
    <HeaderJSX />
      <div>
        <Category title="Popular Movies" category="popular" />
        <Category title="Top Rated Movies" category="top-rated" />
      </div>
    </>
  );
}
