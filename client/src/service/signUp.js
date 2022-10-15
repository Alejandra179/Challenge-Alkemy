const signUp = ({name,username, password})=>{
    return( fetch("localhost:4000/auth/signUp",
    {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, name })
      }).then(res=>{
        return res
      })
      )
}