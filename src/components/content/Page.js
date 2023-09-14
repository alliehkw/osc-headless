import Hero from "./Hero.js";
function Page({ page_data }) {
  return (
    <div className="page">
      <Hero />
      <h3>{page_data.title}</h3>
    </div>
  );
}
export default Page;
