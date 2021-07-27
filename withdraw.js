function Withdraw() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [withdrawAmount, setWithdrawAmount] = React.useState("");
  const [statusMessage, setStatusMessage] = React.useState("SUCCESS");
  const [buttonText, setButtonText] = React.useState(
    "WITHDRAW ADDITIONAL FUNDS"
  );
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleWithdraw(e) {
    if (!validate(withdrawAmount, "withdraw")) return;
    const newWithdraw = parseInt(withdrawAmount / -1, 10);
    const newBalance = (ctx.balance || 0) + newWithdraw;
    console.log("less by", newWithdraw, ctx);
    if (newBalance < 0) {
      //if newBalance is negative
      // don't update balance
      // trigger error messge
      setButtonText("ATTEMPT DIFFERENT TRANSACTION");
      setStatusMessage("TRANSACTION FAILED");
    } else {
      console.log("bal", newWithdraw);
      // ctx.balance = newBalance
      ctx.balance = ctx.balance + newWithdraw;
    }
    setShow(false);
  }

  function clearForm() {
    setWithdrawAmount("");
    setShow(true);
  }

  return (
    <div className="d-flex p-4">
      <Card
        bgcolor="success"
        header="WITHDRAW"
        title={`Balance: ${ctx.balance || 0}`}
        status={status}
        body={
          show ? (
            <>
              WITHDRAW AMOUNT
              <br />
              <input
                type="number"
                className="form-control"
                id="withdraw"
                placeholder="WITHDRAW AMOUNT"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.currentTarget.value)}
              />
              <br />
              <button
                type="submit"
                className="btn btn-light"
                onClick={handleWithdraw}
              >
                WITHDRAW
              </button>
            </>
          ) : (
            <>
              <h5>{statusMessage}</h5>
              <button
                type="submit"
                className="btn btn-light"
                onClick={clearForm}
              >
                {buttonText}
              </button>
            </>
          )
        }
      />
    </div>
  );
}
