export interface LoginVerification {
    isLoggedIn: boolean,
    _token: string,
    errorMessage: string
}

export interface AppContextInitialState {
    token: string
}

/* export interface PersonalInfoContext {
    email: string,
    departmentId:number,
    registration:string,
    address:string,
    phone:string,
    linkedin:string,
    weblink:string,
    summary:string,
    file:string
} */
