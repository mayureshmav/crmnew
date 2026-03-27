import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { motion } from "framer-motion";

const initialData = {
  new: {
    name: "New Lead",
    items: [
      { id: "1", name: "Rahul Sharma", source: "IndiaMart" },
      { id: "2", name: "Amit Kumar", source: "MagicBricks" },
    ],
  },
  contacted: {
    name: "Contacted",
    items: [{ id: "3", name: "Neha Singh", source: "Website" }],
  },
  meeting: {
    name: "Meeting",
    items: [],
  },
  quotation: {
    name: "Quotation",
    items: [],
  },
  won: {
    name: "Won",
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

        {Object.entries(columns).map(([columnId, column]) => (

          <div
            key={columnId}
            className="bg-white border border-gray-200 rounded-xl p-4"
          >

            <h3 className="font-semibold mb-4">
              {column.name}
            </h3>

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
                          whileHover={{ scale: 1.02 }}
                          className="bg-gray-50 border border-gray-200 p-3 rounded-lg shadow-sm cursor-pointer"
                        >

                          <h4 className="font-medium text-gray-800">
                            {item.name}
                          </h4>

                          <span className="text-xs text-indigo-600">
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