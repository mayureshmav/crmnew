import MainLayout from "../layout/MainLayout";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaTasks, FaCheckCircle, FaClock } from "react-icons/fa";

const initialTasks = {
  todo: {
    name: "To Do",
    color: "border-blue-300",
    bg: "bg-blue-50",
    items: [
      {
        id: "1",
        title: "Electrical Work",
        project: "Modern Villa",
        priority: "High",
        assigned: "Amit",
      },
      {
        id: "2",
        title: "Wall Painting",
        project: "Office Renovation",
        priority: "Medium",
        assigned: "Ravi",
      },
    ],
  },

  progress: {
    name: "In Progress",
    color: "border-yellow-300",
    bg: "bg-yellow-50",
    items: [
      {
        id: "3",
        title: "Floor Installation",
        project: "Modern Villa",
        priority: "High",
        assigned: "Rohit",
      },
    ],
  },

  done: {
    name: "Completed",
    color: "border-green-300",
    bg: "bg-green-50",
    items: [],
  },
};

const Tasks = () => {

  const [columns, setColumns] = useState(initialTasks);

  const onDragEnd = (result) => {

    const { source, destination } = result;

    if (!destination) return;

    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];

    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];

    const [removed] = sourceItems.splice(source.index, 1);

    destItems.splice(destination.index, 0, removed);

    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  };

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
            Tasks
          </h1>

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm shadow">
            + Add Task
          </button>

        </div>

        {/* TASK STATS */}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-blue-50 border border-blue-200 p-5 rounded-xl flex items-center gap-4"
          >
            <FaTasks className="text-blue-600 text-2xl" />

            <div>
              <p className="text-sm text-gray-600">
                Total Tasks
              </p>
              <h2 className="text-xl font-bold">
                14
              </h2>
            </div>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-50 border border-yellow-200 p-5 rounded-xl flex items-center gap-4"
          >
            <FaClock className="text-yellow-600 text-2xl" />

            <div>
              <p className="text-sm text-gray-600">
                In Progress
              </p>
              <h2 className="text-xl font-bold">
                5
              </h2>
            </div>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-green-50 border border-green-200 p-5 rounded-xl flex items-center gap-4"
          >
            <FaCheckCircle className="text-green-600 text-2xl" />

            <div>
              <p className="text-sm text-gray-600">
                Completed
              </p>
              <h2 className="text-xl font-bold">
                9
              </h2>
            </div>

          </motion.div>

        </div>

        {/* TASK BOARD */}

        <DragDropContext onDragEnd={onDragEnd}>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {Object.entries(columns).map(([columnId, column]) => (

              <div
                key={columnId}
                className={`${column.bg} border ${column.color} rounded-xl p-4`}
              >

                {/* COLUMN HEADER */}

                <div className="flex justify-between items-center mb-4">

                  <h3 className="font-semibold text-gray-700">
                    {column.name}
                  </h3>

                  <span className="text-xs bg-white px-2 py-1 rounded-full shadow">
                    {column.items.length}
                  </span>

                </div>

                <Droppable droppableId={columnId}>

                  {(provided) => (

                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="space-y-3 min-h-[200px]"
                    >

                      {column.items.map((item, index) => (

                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >

                          {(provided) => (

                            <motion.div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              whileHover={{ scale: 1.03 }}
                              className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
                            >

                              {/* TASK TITLE */}

                              <h4 className="font-medium text-gray-800">
                                {item.title}
                              </h4>

                              {/* PROJECT */}

                              <p className="text-xs text-indigo-600 mt-1">
                                {item.project}
                              </p>

                              {/* FOOTER */}

                              <div className="flex justify-between items-center mt-3">

                                {/* PRIORITY */}

                                <span
                                  className={`text-xs px-2 py-1 rounded-full
                                  ${
                                    item.priority === "High"
                                      ? "bg-red-100 text-red-600"
                                      : "bg-yellow-100 text-yellow-600"
                                  }`}
                                >
                                  {item.priority}
                                </span>

                                {/* ASSIGNED */}

                                <div className="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs font-semibold">
                                  {item.assigned.charAt(0)}
                                </div>

                              </div>

                            </motion.div>

                          )}

                        </Draggable>

                      ))}

                      {provided.placeholder}

                    </div>

                  )}

                </Droppable>

              </div>

            ))}

          </div>

        </DragDropContext>

      </motion.div>

    </MainLayout>
  );
};

export default Tasks;