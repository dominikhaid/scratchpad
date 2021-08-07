import React from 'react';

type Todo = {
  userId: 1;
  id: 1;
  title: 'Test todo';
  completed: true;
};

type Props = {
  id: number;
  onClick: (todo: Todo) => void;
};

type State = {
  fetchState: 'loading' | 'error' | 'success';
  todo: Todo | undefined;
};

export function ToDo({id, onClick}: Props):React.ReactElement {
  const [state, setState] = React.useState<State>({
    fetchState: 'loading',
    todo: undefined,
  });

  React.useEffect(() => {
    function fetchTodo() {
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then<Todo>(response => response.json())
        // Normally we would probably check if the component
        // is still mounted here, before using `setState`
        .then(todo => setState({todo, fetchState: 'success'}))
        .catch(() => setState({todo: undefined, fetchState: 'error'}));
    }
    fetchTodo();
  }, [id]);

  if (state.fetchState == 'loading' || !state.todo) return <p>{"loading ..."}</p>;
  if (state.fetchState == 'error') return <p>{"error!..."}</p>;

  return (
    <div onClick={() => onClick(state.todo as Todo)}>
      <p>{state.todo.title}</p>
      <p>{state.todo.id}</p>
    </div>
  );
}
