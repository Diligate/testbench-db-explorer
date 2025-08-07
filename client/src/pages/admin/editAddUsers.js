import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InputEmail from "../../components/form/inputEmail";
import InputPassword from "../../components/form/inputPassword";
import InputText from "../../components/form/inputText";
import Textarea from "../../components/form/textarea";
import NavbarAdmin from "../../components/navBarAdmin";
import SideBar from "../../components/sideBar";
import Alert from "../../components/ui/Alert";
import FillButton from "../../components/ui/fillButton";
import WhiteButton from "../../components/ui/whiteButton";
import { TOAST } from "../../data/toast";

export default function EditAddUsers() {
  const { id } = useParams();
  const [change, setChange] = useState(false);
  const [shown, setShown] = useState([]);
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    // comment !!!
    if (id) {
      fetch("http://localhost:5500/users/" + id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
        });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    if (id) {
      fetch("http://localhost:5500/users/" + id, {
        method: "PATCH",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then(() => {
          setChange((prev) => !prev);
          setShown((prev) => [
            ...prev,
            <Alert
              title={TOAST.success.title}
              text="The user has been updated successfully."
              svg={TOAST.success.svg}
            />,
          ]);
        })
        .catch(() => {
          setChange((prev) => !prev);
          setShown((prev) => [
            ...prev,
            <Alert
              title={TOAST.error.title}
              text="There was a problem! we can't update the user for the moment."
              svg={TOAST.error.svg}
            />,
          ]);
        });
    } else {
      fetch("http://localhost:5500/auth/signUp", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((data) => {
          console.log(data);
          if (data.ok) {
            setUser({
              firstname: "",
              lastname: "",
              email: "",
              password: "",
            });
            setShown((prev) => [
              ...prev,
              <Alert
                title={TOAST.success.title}
                text="The user has been added successfully."
                svg={TOAST.success.svg}
              />,
            ]);
          } else {
            setUser({
              firstname: "",
              lastname: "",
              email: "",
              password: "",
            });
            setShown((prev) => [
              ...prev,
              <Alert
                title={TOAST.error.title}
                text="Credentials taken."
                svg={TOAST.error.svg}
              />,
            ]);
          }
        })
        .catch(() => {
          setShown((prev) => [
            ...prev,
            <Alert
              title={TOAST.error.title}
              text="There was a problem! we can't add a new user for the moment."
              svg={TOAST.error.svg}
            />,
          ]);
        });
    }
    event.preventDefault();
  };
  return (
    <div className="flex overflow-hidden h-screen w-screen">
      <div className="fixed bottom-3 right-0 flex flex-col items-end gap-1 z-30">
        {shown}
      </div>
      <SideBar />
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <NavbarAdmin />
        <main className="relative flex-1 overflow-y-auto focus:outline-none bg-slate-50">
          <div className="py-6">
            <div className="px-4 mx-auto  sm:px-6 md:px-8 ">
              {/* Put your content here */}
              <div className="py-4">
                <div className="rounded-lg bg-white p-3">
                  <div className="p-5">
                    <h1 className="font-medium text-3xl">
                      User: <span>{id && user.name}</span>
                    </h1>

                    <form className="flex flex-col" onSubmit={handleSubmit}>
                      <div className="mt-8 grid lg:grid-cols-2 gap-4 p-3 rounded-lg border-[#07b4a3] border-2">
                        <div>
                          <InputText
                            label="First name"
                            name="firstname"
                            val={user.firstname}
                            disable={id && !change}
                            setVal={handleChange}
                            isRequired={!id}
                          />
                        </div>
                        <div>
                          <InputText
                            label="last name"
                            name="lastname"
                            val={user.lastname}
                            disable={id && !change}
                            setVal={handleChange}
                          />
                        </div>
                        <div>
                          <InputEmail
                            label="email"
                            name="email"
                            val={user.email}
                            disable={id && !change}
                            setVal={handleChange}
                            isRequired={!id}
                          />
                        </div>
                        {!id && (
                          <div>
                            <InputPassword
                              label="password"
                              name="password"
                              val={user.password}
                              disable={id && !change}
                              setVal={handleChange}
                              isRequired={!id}
                            />
                          </div>
                        )}
                      </div>

                      <div className="space-x-3 mt-8 gap-2 flex justify-end">
                        {!change && id && (
                          <FillButton
                            text="change"
                            handleAction={setChange}
                            type="button"
                          />
                        )}
                        {!id && <FillButton text="add" type="submit" />}
                        {change && <FillButton text="update" type="submit" />}
                        {change && (
                          <WhiteButton text="cancel" handleAction={setChange} />
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* Do not cross the closing tag underneath this coment*/}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
