import './TestLanding.css';

function TestLanding() {
  return (
    <div className="site-wrapper">
      <div className="site-wrapper-inner">
        <div className="container">
          <div className="masthead clearfix">
            <div className="container inner">
              <h3 className="masthead-brand">Cover</h3>
              <nav>
                <ul className="nav masthead-nav">
                  <li className="active">
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="inner cover">
            <h1 className="cover-heading">Cover your page.</h1>
            <p className="lead">
              Cover is a one-page template for building simple and beautiful
              home pages. Download, edit the text, and add your own fullscreen
              background photo to make it your own.
            </p>
            <p className="lead">
              <a href="#" className="btn btn-lg btn-default">
                Learn more
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestLanding;
