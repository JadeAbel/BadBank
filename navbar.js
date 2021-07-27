function NavBar() {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
          <div className="container-fluid">
            <a className="navbar-brand customTooltip" href="#">
              <span className="tooltiptext">HOME TAB</span>
              BAD BANK
            </a>
            <a className="navbar-brand customTooltip" href="#CreateAccount">
              <span className="tooltiptext">NEW ACCNT</span>
              CREATE ACCOUNT
            </a>
            <a className="navbar-brand customTooltip" href="#/deposit">
              <span className="tooltiptext">(+)MONEY</span>
              DEPOSIT
            </a>
            <a className="navbar-brand customTooltip" href="#/withdraw">
              <span className="tooltiptext">(-)MONEY</span>
              WITHDRAW
            </a>
            <a className="navbar-brand customTooltip" href="#alldata">
              <span className="tooltiptext">ACCNT DTS</span>
              ALL DATA
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
