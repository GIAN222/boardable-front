import axios from "axios";
import { buttonOption } from "../constant/buttonOption.jsx";

function Forms(action = "login") {
  async function handlesubmit(e) {
    e.preventDefault();
    if (action === buttonOption.LOGIN) {
      await axios.post("api/login");
    } else if (action === buttonOption.SIGNUP) {
      await axios.post("api/signup");
    }
  }

  return (
    <form className="flex flex-col my-8 gap-4" onSubmit={handlesubmit}>
      <div className="flex flex-col">
        <label className="mb-2">User name</label>
        <input
          className="px-3 py-2 outline-non border border-slate 500 rounded-md"
          type="text"
        ></input>
      </div>
      <div className="flex flex-col">
        <label className="mb-2">Password</label>
        <input
          className="px-3 py-2 outline-non border border-slate 500 rounded-md "
          type="password"
        ></input>
      </div>
      <div>
        <button className="bg-violet-700 text-white px-8 py-2 rounded-md w-full ">
          Login
        </button>
      </div>
    </form>
  );
}

export default Forms;
