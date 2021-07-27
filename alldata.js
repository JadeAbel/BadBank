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
  const ctx = React.useContext(UserContext);
  const names = ["Josh", "Jade", "k-dog", "scibbs"];
  return (
    <div className="d-flex p-4">
      <Card
        bgcolor="success"
        txtcolor="white"
        header="ALL DATA"
        body={
          <div>
            <ul className="list-group list-group-horizontal">
              <li className="list-group-item">Name</li>
              <li className="list-group-item">Email</li>
              <li className="list-group-item">Password</li>
            </ul>

            {ctx &&
              ctx.users.map((user) => {
                return (
                  <DataRow
                    name={user.name}
                    email={user.email}
                    password={user.password}
                  />
                );
              })}

            {/* 
            {cxt.users.map((user) => {
              return <DataRow name={user.name} />;
            })}
             */}
          </div>
        }
      />
    </div>
  );
}
