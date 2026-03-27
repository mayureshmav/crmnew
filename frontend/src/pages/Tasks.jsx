import MainLayout from "../layout/MainLayout";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useState } from "react";

const initialTasks = {
  todo: {
    name: "To Do",
    items: [
      { id: "1", title: "Electrical Work", project: "Modern Villa" },
      { id: "2", title: "Wall Painting", project: "Office Renovation" },
    ],
  },
  progress: {
    name: "In Progress",
    items: [
      { id: "3", title: "Floor Installation", project: "Modern Villa" },
    ],
  },
  done: {
    name: "Completed",
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

      <h1 className="text-2xl font-semibold mb-6">
        Tasks
      </h1>

      <DragDropContext onDragEnd={onDragEnd}>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

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

                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-gray-50 border border-gray-200 p-3 rounded-lg shadow-sm"
                          >

                            <h4 className="font-medium">
                              {item.title}
                            </h4>

                            <span className="text-xs text-indigo-600">
                              {item.project}
                            </span>

                          </div>

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

    </MainLayout>
  );
};

export default Tasks;