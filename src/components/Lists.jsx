import ListItem from "./ListItem";
/*
props = {
    lists : Array <{
            id : number,
            text:string,
            icon:<component/>,
            active:true
        }>
}
*/

function Lists(props) {
  return (
    <ul className="List">
      {props.data.map((obj) => (
        <ListItem
          key={obj.id}
          text={obj.text}
          icon={obj.icon}
          active={obj.active}
        />
      ))}
    </ul>
  );
}

export default Lists;
