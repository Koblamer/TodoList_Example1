// Dependencies
import "./App.scss";
import {
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";
import Header from "../components/Header";
import ListItem from "../components/ListItem";
import TodoHeader from "../components/Todo/TodoHeader";
import TodoCreate from "../components/Todo/TodoCreate";
import TodoLists from "../components/Todo/TodoLists";
// import TodoForm from "../components/Todo/TodoForm";

function App() {
  const generalList = [
    { id: 1, text: "Inbox", icon: <FaInbox />, active: true },
    { id: 2, text: "Today", icon: <FaCalendar />, active: true },
    { id: 3, text: "Next 7 days", icon: <FaCalendarAlt />, active: true },
  ];

  const projectLists = [
    { id: 4, text: "Work", icon: <FaInbox />, active: true },
    { id: 5, text: "Home", icon: <FaInbox />, active: true },
  ];

  // <ListItem text="Project-A" icon={<FaInbox />} active={true} />;
  // <ListItem text="Project-B" icon={<FaInbox />} active={false} />;
  //ObjectDetail => <ListItem ...ObjectDetail/>
  // const projectLists = [{}];

  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className="sidebar">
          <section className="sidebar__category">
            <ul className="list">
              {generalList.map((obj) => (
                <ListItem
                  key={obj.id}
                  text={obj.text}
                  icon={obj.icon}
                  active={obj.active}
                />
              ))}

              {/* <ListItem text="Inbox" icon={<FaInbox />} active={true} />
              <ListItem text="Today" icon={<FaCalendar />} active={false} />
              <ListItem
                text="Next 7 Days"
                icon={<FaCalendarAlt />}
                active={false}
              /> */}
            </ul>
          </section>
          <section className="sidebar__category">
            <div className="accordion">
              {/* Toggle */}
              <div className="accordion__toggle">
                <li className="accordion__item">
                  <FaChevronDown className="accordion__item__icon accordion__item__active" />
                  <p className="accordion__item__text">Projects</p>
                </li>
              </div>
              {/* Lists */}
              <ul className="list">
                <ListItem text="Project-A" icon={<FaInbox />} active={true} />
                <ListItem text="Project-B" icon={<FaInbox />} active={false} />
              </ul>
            </div>
          </section>
        </aside>
      </div>
      <div className="todo__content">
        <TodoHeader />
        <TodoCreate />
        <TodoLists />

        {/* TodoList */}
      </div>
      {/* <div className="todo__create">
        <TodoCreate />
        to do create
      </div>
      <div className="todo__list">to do list</div> */}
    </div>
  );
}

export default App;

/* Challenge : Reffactor
- ให้ 2 section reder UI ที่ ...App
  - OptionA (2/5)  : render ต่างกัน <Lists/> กับ <Accordion/>
  - OptionB (4/5) : render UI เดียวกัน เช่น <Lists/>
  - OptionC (5/5) : render <Lists/> ภายใต้ <Accordion><Lists/><Accordion/>
ใช้ props.children */
