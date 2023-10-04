import Featured from "../components/Featured";
import CardList from "../components/CardList";
import Menu from "../components/Menu";
import CategoryList from "../components/CategoryList";

export default function Home() {
  return (
    <div>
      <Featured />
      <CategoryList />
      <div className="flex gap-12">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
