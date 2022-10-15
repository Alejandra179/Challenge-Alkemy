export const signIn = async ({ email, password }) => {
  try{

    const res = await fetch(`http://localhost:4000/auth/signIn`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password }),
    }).then(response=>response.json())
    return res
  }  catch(err){
    console.log("fail of connection")
    
  }
  
};


