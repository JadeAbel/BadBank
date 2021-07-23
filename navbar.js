function NavBar() {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              BAD BANK
            </a>
            <a className="navbar-brand" href="#CreateAccount">
              CREATE ACCOUNT
            </a>
            <a className="navbar-brand" href="#/deposit">
              DEPOSIT
            </a>
            <a className="navbar-brand" href="#/withdraw">
              WITHDRAW
            </a>
            <a className="navbar-brand" href="#alldata">
              ALL DATA
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
