interface Todo {
  title: string;
  description: string;
}

function randonStorage(): Todo | null {
  return { title: 'Clean room', description: 'Clean the room before the guests arrive.' };
}

const fetchTodo = (id: string): Todo | null => {
  return {
    title: 'Clean room',
    description: 'Clean the room before the guests arrive.',
  };
};

const todo = fetchTodo('1');

// This will throw an error because the todo object can be null
//@ts-expect-error
todo.title;

// This will not throw an error because optional chaining is used
todo?.description;
