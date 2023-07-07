import axios from "axios";
import { NewAccountData,AccountCreationVerification} from "../Types";

export async function createAccount  (newAccountData: NewAccountData,AccountCreationVerification:AccountCreationVerification)  {
 const BASE_URL = process.env.REACT_APP_API_ENDPOINT;
  try {
    if (!BASE_URL) throw new Error('No API ENDPOINT FOUND');
    const headers = {
      'accept': '*/*',
      'Content-Type': 'application/json'
    };

    const userData = {
     ...newAccountData
    };

    const { data } = await axios.post(`${BASE_URL}/auth/Register`, userData, { headers });

     if (data.statusCode === 401) throw new Error('Invalid email or password');    
}

catch (error: unknown) {
    console.error(error);
    if (error instanceof Error) {
      return {
        isCreate: false,
        errorMessage: error.message
      };
    } else {
      throw error;
    }
  }
}