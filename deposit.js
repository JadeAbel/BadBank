function Deposit() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [depositAmount, setDepositAmount] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleDeposit(e) {
    console.log("something", depositAmount);
    if (!validate(depositAmount, "deposit")) return;
    const newDeposit = parseInt(depositAmount, 10);
    if (!ctx.balance) {
      ctx.balance = newDeposit;
    } else {
      ctx.balance = ctx.balance + newDeposit;
    }
    // if there's no balance
    // set the balance to newDeposit

    // if there is a balance
    // add the newDeposit to the existing balance

    // ctx.users.push({ deposit, balance: 100 });
    setShow(false);
  }

  function clearForm() {
    setDepositAmount("");
    setShow(true);
  }

  return (
    <div className="d-flex p-4">
      <Card
        bgcolor="success"
        header="DEPOSIT"
        title={`Balance: ${ctx.balance || 0}`}
        status={status}
        body={
          show ? (
            <>
              DEPOSIT AMOUNT
              <br />
              <input
                type="number"
                className="form-control"
                id="deposit"
                placeholder="DEPOSIT AMOUNT"
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.currentTarget.value)}
              />
              <br />
              <button
                type="submit"
                className="btn btn-light"
                onClick={handleDeposit}
              >
                DEPOSIT
              </button>
            </>
          ) : (
            <>
              <h5>SUCCESS</h5>
              <button
                type="submit"
                className="btn btn-light"
                onClick={clearForm}
              >
                MAKE ADDITIONAL DEPOSIT
              </button>
            </>
          )
        }
      />
    </div>
  );
}
