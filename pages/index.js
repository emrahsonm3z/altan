import axios from "axios";
import { FB_APP_ID, REDIRECT_URI } from "../constant";

const params = { fblogin: 1 };
export default function Home() {
  const handleClick = () => {
    console.log("🚀 -> handleClick -> handleClick");

    const response = axios
      .get(`https://www.facebook.com/v11.0/dialog/oauth`, {
        client_id: FB_APP_ID,
        redirect_uri: REDIRECT_URI,
        state: params,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  );
}
