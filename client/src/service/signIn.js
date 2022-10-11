const signIn = ({ username, password }) => {
  return fetch(`localhost:4000/users/signIn`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then(async (resp) => {
      if (!resp.ok) {
        const { msg } = await resp.json();
        return alert(msg);
      }

      const { token, user } = await resp.json();
      dispatch({
        type: types.login,
        payload: user,
      });
      localStorage.setItem("token", token);

      reset();

      dispatch({
        types: types.login,
        payload: { ...user },
      });

      return;
    })
    .catch((err) => res.json(err.message));
};

module.exports = signIn;
