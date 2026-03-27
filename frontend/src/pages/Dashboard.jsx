import MainLayout from "../layout/MainLayout";
import { motion } from "framer-motion";

const stats = [
  { title: "Total Leads", value: "124" },
  { title: "Active Projects", value: "8" },
  { title: "Meetings Today", value: "5" },
  { title: "Revenue", value: "₹3.2M" },
];

const Dashboard = () => {
  return (
    <MainLayout>

      <h1 className="text-2xl font-semibold text-gray-800">
  Dashboard
</h1>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {stats.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl p-6 border border-gray-400 shadow-sm"
          >

            <p className="text-sm text-gray-500">
              {item.title}
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-2 text-gray-900">
              {item.value}
            </h2>

          </motion.div>
        ))}

      </div>

    </MainLayout>
  );
};

export default Dashboard;