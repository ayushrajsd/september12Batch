// const Message = ({ isLoggedIn }) => {
//   if (isLoggedIn) {

//     return <h1>Welcom back</h1>;
//   }
//   return <h1>Please log in</h1>;
// };

// export const VAL = 123;
// export const VAL2 = 123;
// export const VAL3 = 123;
// export const VAL4 = 123;

// const Message = ({ isLoggedIn }) => {
//   console.log(isLoggedIn);
//   return <h1>{isLoggedIn ? "Welcome back" : "Please Log in"}</h1>;
// };

// export default Message;

const Message = ({ isLoggedIn }) => {
  console.log(isLoggedIn);
  return <div>{isLoggedIn && <h1>Welcome back</h1>}</div>;
};

export default Message;
