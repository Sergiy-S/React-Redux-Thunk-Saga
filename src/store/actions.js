import { CREATE_POST, FETCH_POST, REQUEST_POSTS, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT } from "./types";

export const createPost = (post) => ({
  type: CREATE_POST,
  payload: post,
});

export const showLoader = () => ({
  type: SHOW_LOADER,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
});

export const showAlert = (text) => {
  return (dispath) => {
    dispath({ type: SHOW_ALERT, payload: text });
    setTimeout(() => {
      dispath(hideAlert());
    }, 3000);
  };
};

export const hideAlert = () => ({
  type: HIDE_ALERT,
});

export const fetchPosts = () => {
  return {
    type: REQUEST_POSTS,
  };
  //   return async (dispath) => {
  //     try {
  //       dispath(showLoader());
  //       const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  //       const json = await response.json();
  //       setTimeout(() => {
  //         dispath({ type: FETCH_POST, payload: json });
  //         dispath(hideLoader());
  //       }, 500);
  //     } catch (error) {
  //       dispath(showAlert("Something went wrong"));
  //       dispath(hideLoader());
  //     }
  //   };
};
