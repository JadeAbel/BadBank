function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      alert("Error: " + label + " field is blank");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function validatePassword(password) {
    if (password.length < 8) {
      alert("Error: Password must be at least 8 characters.");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    if (!validatePassword(password, "password")) return;
    ctx.users.push({ name, email, password, balance: 100 });
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <div className="d-flex p-4">
      <Card
        bgcolor="success"
        header="CREATE ACCOUNT"
        status={status}
        body={
          show ? (
            <>
              NAME
              <br />
              <input
                type="input"
                className="form-control"
                id="name"
                placeholder="ENTER NAME"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
              <br />
              EMAIL ADDRESS
              <br />
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="ENTER EMAIL"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
              <br />
              PASSWORD
              <br />
              <input
                type="input"
                className="form-control"
                id="password"
                placeholder="ENTER PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
              <br />
              <button
                type="submit"
                className="btn btn-light"
                onClick={handleCreate}
                disabled={!(name && email && password)}
              >
                SUBMIT
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
                ADD ANOTHER ACCOUNT
              </button>
            </>
          )
        }
      />
    </div>
  );
  return (
    <h1>
      Create Account <br />
      {JSON.stringify(ctx)}
    </h1>
  );
}
