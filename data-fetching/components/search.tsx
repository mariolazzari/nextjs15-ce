import Form from "next/form";

function Search() {
  return (
    <Form action="/products-db" className="flex gap-2 p-4 mx-auto">
      <input
        className="text-black rounded-md"
        type="text"
        name="query"
        placeholder="Search products..."
      />
      <button className="p-2 rounded-md bg-sky-800 text-white">Submt</button>
    </Form>
  );
}

export default Search;
