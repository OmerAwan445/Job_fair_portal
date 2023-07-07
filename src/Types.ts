export interface AccountCreationVerification{
 isCreate?: boolean;
 errorMessage?: string;   
}


export interface NewAccountData
{
    firstName: string,
    lastName: string,
    gender: BigInteger,
    email: string,
    password: string,
}