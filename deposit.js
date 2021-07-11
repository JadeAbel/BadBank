function Deposit() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [deposit, setDeposit] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(deposit);
    if (!validate(deposit, "deposit")) return;
    ctx.users.push({ deposit, balance: 100 });
    setShow(false);
  }

  function clearForm() {
    setDeposit("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="DEPOSIT"
      title="Balance:"
      status={status}
      body={
        show ? (
          <>
            DEPOSIT AMOUNT
            <br />
            <input
              type="input"
              className="form-control"
              id="deposit"
              placeholder="DEPOSIT AMOUNT"
              value={deposit}
              onChange={(e) => setDeposit(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleCreate}
            >
              DEPOSIT
            </button>
          </>
        ) : (
          <>
            <h5>SUCCESS</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              MAKE ADDITIONAL DEPOSIT
            </button>
          </>
        )
      }
    />
  );
}
