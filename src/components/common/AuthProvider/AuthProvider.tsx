import  React, {useState} from 'react';
import AuthContext from '@src/context/auth-context';

import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import { State } from 'react-native-gesture-handler';

type AuthProviderProps = {};

type AuthState = {
  isLoading: boolean;
  isSignOut: boolean;
  userToken: string | null;
};

type AuthAction =
  | {type: 'RESTORE_TOKEN'; token: string | null}
  | {type: 'SIGN_IN'; token: string | null}
  | {type: 'SIGN_OUT'; token?: null};

const initialAuthState: AuthState = {
  isLoading: false,
  isSignOut: false,
  userToken: '',
};

const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...state,
        userToken: action.token,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...state,
        userToken: action.token,
        isSignOut: false,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        userToken: null,
        isSignOut: true,
      };
    default:
      return state;
  }
};

const infoRequest = new GraphRequest(
  '/me', 
  {
    parameters: {
      'fields': {
          'string' : 'id,email,name,birthday,picture.type(large)'
      }
    }
  },
  (err, res) => {
    console.log(err, res);
  }
);

// const loginingin = (ds) => {
//   LoginManager.logInWithPermissions(["public_profile", "email"]).then(
//     function(result) {
//       if (result.isCancelled) {
//         console.log("Login cancelled");
//       }
//       else {
//         console.log("Login success with permissions: " + result.grantedPermissions.toString());
//         const data = AccessToken.getCurrentAccessToken();
        
//         ds({type: 'SIGN_IN', token: data});

//         getResponseInfo(new GraphRequestManager().addRequest(infoRequest).start());
//       }
//     },
//     function(error) {
//       console.log("Login fail with error: " + error);
//     }
//   );
// };

const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [state, dispatch] = React.useReducer(AuthReducer, initialAuthState);
  const {userToken} = state;
  const [userName, setUserName] = useState('');
  const [token, setToken] = useState('');
  const [profilePic, setProfilePic] = useState('');
  
  
  const authContext = React.useMemo(
    () => ({
      userToken,
      signIn: () => {
        const getResponseInfo = (result) => {
            //response alert
            console.log("WWWWWWWWWW", result);

            console.log(state);
            // setUserName('Welcome ' + result.name);
            // setToken('User Token: ' + result.id);
            // setProfilePic(result.picture.data.url);
          
        };

        LoginManager.logInWithPermissions(["public_profile", "email"]).then(
          function(result) {
            if (result.isCancelled) {
              console.log("Login cancelled");
            }
            else {
              // console.log("Login success with permissions: " + result.grantedPermissions.toString());
              const data = AccessToken.getCurrentAccessToken();
              
              dispatch({type: 'SIGN_IN', token: data});
      
              AuthState = new GraphRequestManager().addRequest(infoRequest).start();
            }
          },
          function(error) {
            console.log("Login fail with error: " + error);
          }
        )
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: () => {
        // Once signed in, get the users AccesToken
        const data = AccessToken.getCurrentAccessToken();
        dispatch({type: 'SIGN_IN', token: data});
      },
    }),
    [userToken],
  );

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
