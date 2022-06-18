import axios from 'axios';
const API = axios.create({ baseURL: "http://localhost:3002/" });
// const url ="http://localhost:5000/posts";
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

// export const fetchPosts = ()=> API.get("/posts");

// export const createPost = (newPost)=> API.post("/posts",newPost);
// export const updatePost = (id,updatedPost)=> API.patch(`/posts/${id}`,updatedPost);
// export const deletePost = (id)=> API.delete(`/posts/${id}`);
// export const likePost = (id,updatedPost)=> API.patch(`/posts/${id}/likePost`,updatedPost);



export const signIn = (formData) => API.post("/login", formData);
export const fetchRequests = ()=> API.get("/requests");
export const fetchCategories = ()=> API.get("/categories");
export const fetchItems = ()=> API.get("/items");
export const  createRequest = (newRequest)=> API.post("/requests",newRequest);
// export const updateRqst = (id,request)=> API.patch(`/requests/${id}`,request);