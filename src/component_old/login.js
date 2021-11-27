import logo from '../images/fire-ball.gif';
import '../../src/App.css';


function Login()
{
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} 
            className="rounded-circle mb-5" 
            style={{height:'auto',width:'500px'}} alt="logo" 
            />
            <form className="row g-3">
              {/* Header */}
              <div className='display-4 mb-5'>
                Login Page
              </div>
              {/* Form Body */}
              <div className="col-md-12 text-start">
                <label for="UserID" className="form-label fs-4">User ID</label>
                <input type="text" className="form-control mb-5 lh-md fs-4" id="userID" onChange='handleChange' placeholder='User ID' />

                <label for="pwd" className="form-label fs-4">Password</label>
                <input type="password" className="form-control mb-5 lh-md fs-4" id="pwd" onChange='handleChange' placeholder='Password' />
              </div>
              {/* Submit Button */}
              <div className="col-12">
                <button type="submit" className="btn btn-primary btn-lg ps-5 pe-5 pt-2 pb-2" onClick='handleClick'>Sign in</button>
              </div>
            </form>
          </div>
        </div>
      );
}

export default Login
