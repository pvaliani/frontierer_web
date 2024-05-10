import { biography } from "./biography";

const Content = () => {
  return (
    <section className="flex flex-col items-center justify-center p-4">
      <h1 className="text-xxl font-bold text-center"></h1>
      <div className="mt-4 p-4 rounded-lg max-w-4xl w-full">
        <p className="text-m md:text-3xl lg:text-3xl text-center cursor-pulse">
          {biography}
        </p>
      </div>
    </section>
  );
};

export default Content;
