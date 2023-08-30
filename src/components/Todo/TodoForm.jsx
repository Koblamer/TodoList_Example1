import styles from "./TodoHeader.module.scss";

function TodoForm() {
  return (
    <form className="todo__form__container">
      <input className="todo__form__input" placeholder="Task Name" />
      <div className="todo__form__footer">
        <p className="todo__error">Title is required</p>
        <div className="todo__form__buttons">
          <button>Cancel</button>
          <button>Add Task</button>
        </div>
      </div>
    </form>
  );
}
