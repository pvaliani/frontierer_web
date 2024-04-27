import { biography } from "./content";

const Content = () => {
  return (
    <section className="p-4">
      <h1 className="text-xl font-bold">Biography</h1>
      <p className="text-base mt-2">{biography}</p>
    </section>
  );
};

export default Content;
