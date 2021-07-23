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
          <img src="bank.png" className="img-fluid" alt="Responsive image" />
        }
      />
    </div>
  );
}
