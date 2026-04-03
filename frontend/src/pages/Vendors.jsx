import MainLayout from "../layout/MainLayout";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaTruck,
  FaStar,
  FaEye,
  FaEdit,
  FaShoppingCart
} from "react-icons/fa";

const Vendors = () => {

  const [vendors] = useState([
    {
      id: 1,
      name: "XYZ Tiles",
      category: "Tiles Supplier",
      phone: "9876543210",
      city: "Delhi",
      rating: 4.5,
      status: "Active",
    },
    {
      id: 2,
      name: "Modern Furniture",
      category: "Furniture Vendor",
      phone: "9123456780",
      city: "Noida",
      rating: 4.2,
      status: "Active",
    },
    {
      id: 3,
      name: "Elite Lighting",
      category: "Lighting Supplier",
      phone: "9988776655",
      city: "Gurgaon",
      rating: 4.8,
      status: "Preferred",
    },
  ]);

  const [procurement] = useState([
    {
      id: 1,
      project: "Modern Villa",
      material: "Floor Tiles",
      vendor: "XYZ Tiles",
      cost: "₹40,000",
      status: "Ordered",
    },
    {
      id: 2,
      project: "Office Renovation",
      material: "Wood Panels",
      vendor: "Modern Furniture",
      cost: "₹25,000",
      status: "Delivered",
    },
    {
      id: 3,
      project: "Luxury Apartment",
      material: "LED Lights",
      vendor: "Elite Lighting",
      cost: "₹18,000",
      status: "Pending",
    },
  ]);

  return (
    <MainLayout>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-8"
      >

        {/* HEADER */}

        <div className="flex justify-between items-center">

          <h1 className="text-2xl font-semibold text-gray-800">
            Vendor Management
          </h1>

          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition shadow">
            + Add Vendor
          </button>

        </div>

        {/* STATS */}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-blue-50 border border-blue-200 p-5 rounded-xl flex items-center gap-4"
          >
            <FaTruck className="text-blue-600 text-2xl" />
            <div>
              <p className="text-sm text-gray-600">Total Vendors</p>
              <h2 className="text-xl font-bold">18</h2>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-green-50 border border-green-200 p-5 rounded-xl flex items-center gap-4"
          >
            <FaStar className="text-green-600 text-2xl" />
            <div>
              <p className="text-sm text-gray-600">Preferred Vendors</p>
              <h2 className="text-xl font-bold">6</h2>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-50 border border-yellow-200 p-5 rounded-xl flex items-center gap-4"
          >
            <FaShoppingCart className="text-yellow-600 text-2xl" />
            <div>
              <p className="text-sm text-gray-600">Active Orders</p>
              <h2 className="text-xl font-bold">9</h2>
            </div>
          </motion.div>

        </div>

        {/* VENDORS TABLE */}

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-x-auto">

          <div className="p-4 border-b font-medium">
            Vendors
          </div>

          <table className="w-full text-sm">

            <thead className="bg-gray-50 text-gray-600 text-xs uppercase">

              <tr>
                <th className="p-4 text-left">Vendor</th>
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">Phone</th>
                <th className="p-4 text-left">City</th>
                <th className="p-4 text-left">Rating</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Actions</th>
              </tr>

            </thead>

            <tbody>

              {vendors.map((vendor, index) => (

                <motion.tr
                  key={vendor.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ backgroundColor: "#f9fafb" }}
                  className="border-t"
                >

                  {/* VENDOR */}

                  <td className="p-4">

                    <div className="flex items-center gap-3">

                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs font-semibold">
                        {vendor.name.charAt(0)}
                      </div>

                      <span className="font-medium text-gray-800">
                        {vendor.name}
                      </span>

                    </div>

                  </td>

                  <td className="p-4">{vendor.category}</td>

                  <td className="p-4">{vendor.phone}</td>

                  <td className="p-4">{vendor.city}</td>

                  <td className="p-4 text-yellow-500">
                    ⭐ {vendor.rating}
                  </td>

                  <td className="p-4">

                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium
                      ${
                        vendor.status === "Preferred"
                          ? "bg-green-100 text-green-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {vendor.status}
                    </span>

                  </td>

                  <td className="p-4">

                    <div className="flex gap-3 text-gray-500">

                      <button className="hover:text-indigo-600">
                        <FaEye />
                      </button>

                      <button className="hover:text-green-600">
                        <FaEdit />
                      </button>

                    </div>

                  </td>

                </motion.tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* PROCUREMENT TABLE */}

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-x-auto">

          <div className="flex justify-between items-center p-4 border-b">

            <h2 className="font-medium">
              Procurement
            </h2>

            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition">
              + Add Purchase
            </button>

          </div>

          <table className="w-full text-sm">

            <thead className="bg-gray-50 text-gray-600 text-xs uppercase">

              <tr>
                <th className="p-4 text-left">Project</th>
                <th className="p-4 text-left">Material</th>
                <th className="p-4 text-left">Vendor</th>
                <th className="p-4 text-left">Cost</th>
                <th className="p-4 text-left">Status</th>
              </tr>

            </thead>

            <tbody>

              {procurement.map((item, index) => (

                <motion.tr
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ backgroundColor: "#f9fafb" }}
                  className="border-t"
                >

                  <td className="p-4 font-medium">
                    {item.project}
                  </td>

                  <td className="p-4">
                    {item.material}
                  </td>

                  <td className="p-4">
                    {item.vendor}
                  </td>

                  <td className="p-4 font-semibold text-green-600">
                    {item.cost}
                  </td>

                  <td className="p-4">

                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium
                      ${
                        item.status === "Delivered"
                          ? "bg-green-100 text-green-600"
                          : item.status === "Ordered"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {item.status}
                    </span>

                  </td>

                </motion.tr>

              ))}

            </tbody>

          </table>

        </div>

      </motion.div>

    </MainLayout>
  );
};

export default Vendors;