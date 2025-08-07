import { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../../assets/images/background4.png";
import logo from "../../assets/images/logo2.png";
import InputEmail from "../../components/form/inputEmail";
import InputPassword from "../../components/form/inputPassword";
import Alert from "../../components/ui/Alert";
import FillButtonLarge from "../../components/ui/fillButtonLarge";
import { TOAST } from "../../data/toast";

export default function Login() {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState([]);
  const [shown, setShown] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:5500/auth/signIn", {
      method: "POST",
      body: JSON.stringify(loginInfo),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => {
        if (data.status === 200) {
          data.json().then((acc) => {
            console.log(acc);
            localStorage.setItem("token", acc.access_token);
            localStorage.setItem("firstName", acc.user.firstname);
            localStorage.setItem("lastName", acc.user.lastname);
            localStorage.setItem("id", acc.user.id);

            navigate("/app/dashboard");
          });
        } else {
          data.json().then((acc) => {
            setShown((prev) => [
              ...prev,
              <Alert
                key={Date()}
                title={TOAST.error.title}
                text={acc.message}
                svg={TOAST.error.svg}
              />,
            ]);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginInfo((prevTable) => ({
      ...prevTable,
      [name]: value,
    }));
  };
  return (
    <div
      className="w-full h-screen font-sans bg-cover bg-landscape "
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="container flex items-center justify-center flex-1 h-full mx-auto ">
        <div className="fixed bottom-3 right-0 flex flex-col items-end gap-1 z-30">
          {shown}
        </div>
        <div className="w-full max-w-lg ">
          <div className="leading-loose ba">
            <form
              className="max-w-md p-10 mt-5 m-auto bg-white rounded shadow-xl"
              onSubmit={handleSubmit}
            >
              <div className="px-8 text-left mb-5 flex flex-col items-center justify-center">
                <img src={logo} alt="logo" className="h-14" />
                <h2 className="block p-2 text-xl font-medium  text-[#148a66] cursor-default tracking-wider">
                  TestBench-VS
                </h2>
              </div>
              <div className="mb-2">
                <div className=" relative ">
                  <InputEmail
                    name="email"
                    label="Email"
                    isRequired={true}
                    setVal={handleChange}
                  />
                </div>
              </div>
              <div className="mb-2">
                <div className=" relative ">
                  <InputPassword
                    name="password"
                    label="password"
                    isRequired={true}
                    setVal={handleChange}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mt-7 h-14">
                <FillButtonLarge text="Validate" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
