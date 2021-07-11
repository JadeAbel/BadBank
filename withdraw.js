function Withdraw() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [withdraw, setWithdraw] = React.useState("");
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
    console.log(withdraw);
    if (!validate(withdraw, "withdraw")) return;
    ctx.users.push({ withdraw, balance: 100 });
    setShow(false);
  }

  function clearForm() {
    setWithdraw("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="WITHDRAW"
      title="Balance:"
      status={status}
      body={
        show ? (
          <>
            WITHDRAW AMOUNT
            <br />
            <input
              type="input"
              className="form-control"
              id="withdraw"
              placeholder="WITHDRAW AMOUNT"
              value={withdraw}
              onChange={(e) => setWithdraw(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleCreate}
            >
              WITHDRAW
            </button>
          </>
        ) : (
          <>
            <h5>SUCCESS</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              WITHDRAW ADDITIONAL FUNDS
            </button>
          </>
        )
      }
    />
  );
}
