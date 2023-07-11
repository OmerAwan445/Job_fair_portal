export function getAccountRole(token: string): string {
// Split the token into its three parts: header, payload, and signature
const parts = token.split('.');
const encodedPayload = parts[1];

// Decode the payload (Base64 URL-safe decoding)
const decodedPayload = atob(encodedPayload.replace(/-/g, '+').replace(/_/g, '/'));
const payload = JSON.parse(decodedPayload);
console.log(payload);
// Extract the role from the payload
const accountRole:string = payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
console.log(accountRole);
return accountRole;

}