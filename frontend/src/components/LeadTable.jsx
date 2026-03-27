import { motion } from "framer-motion";

const LeadTable = ({ leads }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">

      <table className="w-full text-sm">

        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="p-3 text-left">Client</th>
            <th className="p-3 text-left">Source</th>
            <th className="p-3 text-left">City</th>
            <th className="p-3 text-left">Budget</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead, index) => (
            <motion.tr
              key={lead.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ backgroundColor: "#f9fafb" }}
              className="border-t"
            >

              <td className="p-3">{lead.name}</td>
              <td className="p-3">{lead.source}</td>
              <td className="p-3">{lead.city}</td>
              <td className="p-3">₹{lead.budget}</td>
              <td className="p-3">{lead.status}</td>

            </motion.tr>
          ))}
        </tbody>

      </table>

    </div>
  );
};

export default LeadTable;