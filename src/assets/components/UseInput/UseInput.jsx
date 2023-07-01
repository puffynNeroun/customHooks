import useInput from "../../hooks/useInput.js";

const UseInput = () => {
  const username = useInput('')
  const password = useInput('')


    return (
        <div>
            <input {...username} type="text" placeholder='Username'/>
            <input {...password} type="text" placeholder='Password'/>
            <button onClick={() => console.log(username.value, password.value)}>Click</button>
        </div>
    );
};

export default UseInput;