import {AppState} from './store';
import {User, AuthService} from '../services/AuthService';
function createTypeName(name: string, prefix?: string) {
  const replaceRegex = /([A-Z])/g;
  const typeName = name
    .replace(replaceRegex, '_$1')
    .toUpperCase()
    .replace(/^_/, '');
  const typeVal = prefix
    ? prefix + '/' + typeName.toLowerCase()
    : typeName.toLowerCase();
  return {typeName, typeVal};
}
type Parameters<T> = T extends (... args: infer T) => any ? T : never; 

function createActions<U, T extends {[key: string]:({...param}: U)=> any}>(
  actionsSpec: T,
  prefix?: string,
) {
  var r = {};
  var t = {};

  for (const [key, action] of Object.entries(actionsSpec)) {
    const {typeName: actionType} = createTypeName(key, prefix);
    r[key] = (...params: any) => ({type: actionType, payload: params});
    t[key] = actionType;
  }
  return {
    actions: r as {[key in keyof typeof actionsSpec]:(...args: Parameters<typeof actionsSpec[key]>) =>{type: string, payload: (typeof args[0]) }},
    types: t as {[key in keyof typeof actionsSpec]: string},
  };
}

const {actions, types} = createActions({
  signInRequest: ()=>null,
  signUpRequest: ()=>null,
  signInError: ({error: string})=>null,
  signUpError: ({error: string})=>null,
  signInSuccess: ({user: User, error: string})=>null,
  signOutRequest: ()=>null
}, "auth");

actions.signInSuccess

export const START_SIGN_IN = 'START_SIGN_IN';
export const SIGNED_IN = 'SIGNED_IN';
export const START_SIGN_UP = 'START_SIGN_UP';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const SIGNIN_ERROR = 'SIGNIN_ERROR';
export const SIGN_OUT = 'SIGN_OUT';

const signOutAction = () => ({
  type: SIGN_OUT as typeof SIGN_OUT,
});

const signinErrorAction = (error: string) => ({
  type: SIGNIN_ERROR as typeof SIGNIN_ERROR,
  error,
});

const signUpErrorAction = (error: string) => ({
  type: SIGNUP_ERROR as typeof SIGNUP_ERROR,
  error,
});

const signedInAction = (user: User) => ({
  type: SIGNED_IN as typeof SIGNED_IN,
  user,
});

const startSignIn = () => ({
  type: START_SIGN_IN as typeof START_SIGN_IN,
});

const startSignUp = () => ({
  type: START_SIGN_UP as typeof START_SIGN_UP,
});

export interface authState {
  user?: User;
  errors: {
    signup: string;
    signin: string;
  };
  pending: boolean;
}

const initialstate: authState = {
  errors: {
    signin: '',
    signup: '',
  },
  pending: false,
  user: null,
};

export const signIn = (email: string, password: string) => dispatch => {
  dispatch(startSignIn());
  new AuthService()
    .signInWithCredential(email, password)
    .then(u => dispatch(signedInAction(u)))
    .catch(e => dispatch(signinErrorAction(e.message || e)));
};

export const signUp = (
  email: string,
  password: string,
  firstname: string,
  lastname: string,
  telnr: string,
) => dispatch => {
  dispatch(startSignUp());
  new AuthService()
    .signUp(new User('', email, firstname, lastname, telnr), password)
    .then(u => dispatch(signedInAction(u)))
    .catch(e => dispatch(signUpErrorAction(e.message || e)));
};

export const signOut = () => d => {
  d(signOutAction());
  new AuthService().signOut();
};

export const autoSignIn = () => d => {
  d(startSignIn());
  new AuthService()
    .signIn()
    .then(u => d(signedInAction(u)))
    .catch(e => d(signOut()));
};

export type ActionType =
  | ReturnType<typeof signinErrorAction>
  | ReturnType<typeof signUpErrorAction>
  | ReturnType<typeof signedInAction>
  | ReturnType<typeof startSignIn>
  | ReturnType<typeof signOutAction>
  | ReturnType<typeof startSignUp>;

export default (
  state: authState = {...initialstate, pending: true},
  action: ActionType,
): authState => {
  switch (action.type) {
    case 'SIGNIN_ERROR':
      return {
        ...state,
        ...initialstate,
        errors: {...initialstate.errors, signin: action.error},
      };
    case 'SIGNUP_ERROR':
      return {
        ...state,
        ...initialstate,
        errors: {...initialstate.errors, signup: action.error},
      };
    case 'SIGNED_IN':
      return {...state, ...initialstate, user: action.user};
    case 'START_SIGN_IN':
    case 'START_SIGN_UP':
      return {...state, ...initialstate, pending: true};
    case SIGN_OUT:
      return initialstate;
    default:
      return state;
  }
};
