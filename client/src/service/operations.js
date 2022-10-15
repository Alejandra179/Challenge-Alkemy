const urlServer = "http://localhost:4000/operations/";

export const getLastOperations = async (idUser) => {
  const res = await fetch(`${urlServer}last/${idUser}`);
  console.log(res);
  return;
};
export const getOperations = async () => {
  const res = await fetch(`${urlServer}`,{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      
    },
  });
  console.log(res);
  return;
};
export const addOperation = async ({ type_operation, concept, amount }) => {
  const res = await fetch(`${urlServer}addOperation`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify({ type_operation, concept, amount }),
  });
  console.log(res);
  return;
};

export const getOperationsByType = async ({ type_operation }) => {
  const res = await fetch(`${urlServer}type-operation/${type_operation}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("token"),
    },
  });
  console.log(res);
  return;
};
export const getOperationsByCategory = async ({ category }) => {
  const res = await fetch(`${urlServer}categories/${category}`);
  console.log(res);
  return;
};
export const getOperationsbyCategoryAndType = async ({ category, type_operation }) => {
  const res = await fetch(`${urlServer}${category}/${type_operation}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("token"),
    },
  });
  console.log(res);
  return;
};
export const getBalance = async () => {
  const res = await fetch(`${urlServer}getBalance`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("token"),
    },
  });
  console.log(res);
  return;
};
export const updateOperation = async ({ id_operation }) => {
  const res = await fetch(`${urlServer}${id_operation}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("token"),
    },
  });
  console.log(res);
  return;
};

export const deleteOperation = async ({ id_operation }) => {
  const res = await fetch(`${urlServer}${id_operation}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("token"),
    },
  });
  console.log(res);
  return;
};

export const addCategory = async ({ description }) => {
  const res = await fetch(`${urlServer}categories/addCategory`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify({ description }),
  });
  console.log(res);
  return;
};


