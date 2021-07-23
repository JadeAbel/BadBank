/*function AllData() {
  const ctx = React.useContext(UserContext);

  return (
    <h1>
      All Data <br />
      {JSON.stringify(ctx)}
    </h1>
  );
}
*/
function AllData() {
  return (
    <div className="d-flex p-4">
      <Card
        bgcolor="success"
        txtcolor="white"
        header="BAD BANK LANDING PAGE"
        title="WELCOME TO THE BANK"
        text="'Here, you can pretend to be a trillionaire.'"
        body={
          <div>
            <ul className="list-group list-group-horizontal">
              <li className="list-group-item">Name</li>
              <li className="list-group-item">Email</li>
              <li className="list-group-item">Password</li>
            </ul>

            <ul className="list-group list-group-horizontal-sm">
              <li className="list-group-item"> </li>
              <li className="list-group-item"> </li>
              <li className="list-group-item"> </li>
            </ul>

            <ul className="list-group list-group-horizontal-sm">
              <li className="list-group-item"> </li>
              <li className="list-group-item"> </li>
              <li className="list-group-item"> </li>
            </ul>
          </div>
        }
      />
    </div>
  );
}
