import React from "react";
import { connect } from 'react-redux';
import { deleteTodo, fetchTodos, Todo } from '../actions';
import { StoreState } from '../reducers';



interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}


interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    this.state = { fetching: false };
  }

  onButtonClick = (): void => {
    this.props.fetchTodos();

    this.setState({ fetching: true });
  };

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>{todo.title}</div>;
    });
  }


  render() {
    console.log(this.props.todos);
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        <h4>{this.state.fetching ? 'LOADING' : null}</h4>
        {this.renderList()}
      </div>

    );
  }
};


const mapStateToProps = (state: StoreState): { todos: Todo[]; } => {
  return { todos: state.todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
