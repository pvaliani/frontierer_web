import { bookingAgents } from "./bookingInfo";
import Layout from "../components/layout";

const Contact = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center space-y-4 p-4 w-full">
        <div className="flex flex-col items-start space-y-4">
          {bookingAgents.map((agent, index) => (
            <div key={index} className="text-left max-w-2xl w-full">
              <h3 className="text-m md:text-2xl lg:text-3xl font-bold">{`${agent.territory} - ${agent.role}`}</h3>
              <p className="text-m md:text-2xl lg:text-3xl whitespace-nowrap">
                {agent.name} -{" "}
                <a
                  href={`mailto:${agent.email}`}
                  className="underline hover:text-black hover:bg-gray-300"
                >
                  {agent.email}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
