const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

const Card = (props) => {
  const classes = () => {
    const bg = props.bgcolor ? "bg-" + props.bgcolor : "success";
    const txt = props.txtcolor ? "text-" + props.txtcolor : "text-white";
    return "card mb-3" + " " + bg + " " + txt;
  };

  return (
    <div className={classes()} style={{ maxWidth: "fluid" }}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && <h5 className="card-title">{props.title}</h5>}
        {props.text && <p className="card-text">{props.text}</p>}
        {props.body}
        {props.status && <div id="createStatus">{props.status}</div>}
      </div>
    </div>
  );
};

const DataRow = (props) => {
  return (
    <ul className="list-group list-group-horizontal">
      <li className="list-group-item"> {props.name} </li>
      <li className="list-group-item"> {props.email} </li>
      <li className="list-group-item"> {props.password}</li>
    </ul>
  );
};

//these components are from the ReactRouter library that we loaded on our HTML
