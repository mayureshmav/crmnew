import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { motion } from "framer-motion";

const initialData = {
  new: {
    name: "New Lead",
    color: "border-blue-400",
    bg: "bg-blue-50",
    items: [
      { id: "1", name: "Rahul Sharma", source: "IndiaMart" },
      { id: "2", name: "Amit Kumar", source: "MagicBricks" },
    ],
  },

  contacted: {
    name: "Contacted",
    color: "border-yellow-400",
    bg: "bg-yellow-50",
    items: [{ id: "3", name: "Neha Singh", source: "Website" }],
  },

  meeting: {
    name: "Meeting",
    color: "border-purple-400",
    bg: "bg-purple-50",
    items: [],
  },

  quotation: {
    name: "Quotation",
    color: "border-orange-400",
    bg: "bg-orange-50",
    items: [],
  },

  won: {
    name: "Won",
    color: "border-green-400",
    bg: "bg-green-50",
    items: [],
  },
};

const LeadPipeline = () => {
  const [columns, setColumns] = useState(initialData);

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
    <DragDropContext onDragEnd={onDragEnd}>

      {/* Responsive Grid (No horizontal scroll) */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">

        {Object.entries(columns).map(([columnId, column]) => (

          <div
            key={columnId}
            className={`${column.bg} border ${column.color} rounded-xl p-4 shadow-sm`}
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
                  className="space-y-3 min-h-[250px]"
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
                          whileTap={{ scale: 0.98 }}
                          className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
                        >

                          {/* Lead header */}

                          <div className="flex items-center gap-3 mb-2">

                            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold text-sm">
                              {item.name.charAt(0)}
                            </div>

                            <h4 className="font-medium text-gray-800 text-sm">
                              {item.name}
                            </h4>

                          </div>

                          {/* Source */}

                          <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">
                            {item.source}
                          </span>

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
  );
};

export default LeadPipeline;