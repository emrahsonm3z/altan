import axios from "axios";
import { FB_APP_ID, REDIRECT_URI } from "../constant";
let params = "fbloged=1";
export default function Home() {
  const handleClick = () => {
    console.log("🚀 -> handleClick -> handleClick");

    const uriXX = `https://www.facebook.com/v11.0/dialog/oauth?
    client_id=${FB_APP_ID}
    &redirect_uri=${REDIRECT_URI}
    &state=${params}`;

    console.log(uriXX);
    axios
      .get(uriXX)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  // const response = axios
  // .post(`https://www.facebook.com/v11.0/dialog/oauth`, {
  //   client_id: FB_APP_ID,
  //   redirect_uri: REDIRECT_URI,
  //   state: params,
  // })
  // .then((res) => console.log(res))
  // .catch((err) => console.log(err));

  return (
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  );
}
