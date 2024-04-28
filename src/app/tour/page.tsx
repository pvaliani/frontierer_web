import Layout from "../components/layout";
import tourDates from "./tourDates";

const Tour = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <table className="w-full mt-8">
          <thead className="bg-gray-200 text-black">
            <tr>
              <th className="text-left py-2 px-4">Date</th>
              <th className="text-left py-2 px-4">Location</th>
              <th className="text-left py-2 px-4">Venue</th>
            </tr>
          </thead>
          <tbody>
            {tourDates.map((tourDate, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">{tourDate.date}</td>
                <td className="py-2 px-4">{tourDate.location}</td>
                <td className="py-2 px-4">{tourDate.venue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Tour;
