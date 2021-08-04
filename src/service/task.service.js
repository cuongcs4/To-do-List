import fetcher from "./index.js";

export const getAllTaskAPI = async () => {
  return await fetcher({
    url: "task"
  })
    .then((res) => res)
    .catch((err) => console.log(err));
};

export const updateTaskByIdAPI = async ({id,completed})=>{
  return await fetcher({
    url:`task/${id}`,
    method:'PUT',
    data:{
      completed
    }
  })
}

export const deleteTaskByIdAPI = async (id) => {
  return await fetcher({
    url:`task/${id}`,
    method:'DELETE'
  })
}

export const addTaskAPI = async (description) => {
  return await fetcher({
    url:'task',
    method:'POST',
    data: {
      description
    }
  })
}


// 
// này nó update được completed thôi k update được cái description