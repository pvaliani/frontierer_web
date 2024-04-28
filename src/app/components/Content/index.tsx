import { biography } from "./content";

const Content = () => {
  return (
    <section className="flex flex-col items-center justify-center p-4">
      <h1 className="text-xl font-bold text-center"></h1>
      <div className="mt-4 p-4 rounded-lg max-w-4xl w-full">
        <p className="text-base text-center">{biography}</p>
      </div>
    </section>
  );
};

export default Content;
