import Featured from "../components/Featured";
import CardList from "../components/CardList";
import Menu from "../components/Menu";
import CategoryList from "../components/CategoryList";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <div>
      <Featured />
      <CategoryList />
      <div className="flex gap-12">
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}
