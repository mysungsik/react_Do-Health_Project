export const signinHandler = async (email: string, password: string) => {
  const sendRequest = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
    {
      method: "POST",
      body: JSON.stringify({ email, password, returnSecureToken: true }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const responseData = await sendRequest.json();

  return responseData;
};
