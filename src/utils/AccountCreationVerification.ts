import { SignupFormData } from "../Types";

export async function AccountCreationVerification(formdata:SignupFormData){
  const BASE_URL = process.env.REACT_APP_API_ENDPOINT;
  try {
    if (!BASE_URL) throw new Error('No API ENDPOINT FOUND');
    const headers = {
      'accept': 'text/plain',
      'Content-Type': 'application/json'
    };
    const { data } = await axios.post(${BASE_URL}/auth/Register, formdata, { headers });
}
}