import React from 'react'
import { connect } from 'react-redux';
import { signIn, signOut, createUser, fetchUser } from '../actions';


class GoogleAuth extends React.Component {



componentDidMount(){
    
    window.gapi.load('client:auth2', () =>{
        // init sends an async request to initialize our client
        // init returns a promise so we can chain a .then
        window.gapi.client.init({
            clientId: "503270995934-i3fnh0dk4midta7h04lc91gh2jm2onj8.apps.googleusercontent.com",
            scope: 'email'
        }).then(() =>{
           
          
        this.auth = window.gapi.auth2.getAuthInstance();
        
        this.onAuthChange(this.auth.isSignedIn.get())
        this.auth.isSignedIn.listen(this.onAuthChange)
       
      
        });
    
    });
    
 
}

onAuthChange = (isSignedIn) => {
  
   if(isSignedIn) {
      
       this.props.signIn({uid: this.auth.currentUser.get().getId(), uname: this.auth.currentUser.get().tt.Ad, uemail: this.auth.currentUser.get().tt.$t})
       this.props.createUser({name: this.auth.currentUser.get().tt.Ad, email: this.auth.currentUser.get().tt.$t})
      
   } else {
       this.props.signOut();
   }
}


onSignInClick = () => {
    this.auth.signIn();

};

onSignOutClick = () => {
    this.auth.signOut();
};


renderAuthButton() {

    if (this.props.isSignedIn === null) {
        return <div>Loading...</div>
    } else if (this.props.isSignedIn) {
        return (
            <div>
        <button onClick={this.onSignOutClick} className="ui red google button">
        <i className="google icon"/>
        Logout
        </button>
        <p>Welcome {this.props.userInfo.uname}</p>
        </div>
        )
    } else {
        return (
            <button onClick={this.onSignInClick} className="ui red google button">
            <i className="google icon"/>
            Login with google
            </button>
        )
    }
}

    render() {
return <div className="item">{this.renderAuthButton()}</div>;

    }
}

const mapStateToProps = (state) => {
//    console.log(state)
    return { isSignedIn: state.auth.isSignedIn, userInfo: state.auth.userInfo }
}

export default connect(
    mapStateToProps,
     { signIn, signOut, createUser, fetchUser}
     )(GoogleAuth);
     