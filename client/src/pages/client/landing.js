import { useEffect } from "react";
import { Link } from "react-router-dom";
import background from "../../assets/images/background4.png";

import logo from "../../assets/images/logo.png";
import RoundedButton from "../../components/ui/roundedButtonWhite";
export default function Landing() {

  useEffect(() => {
    fetch("http://localhost:5500/auth/signIn", {
      method: "POST",
      body: JSON.stringify({
        email:"admin@imbus.tn",
        password:"imbus"
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        res.json()
        .then((data)=>{
          if (data.message === "The email is incorrect") {
            fetch("http://localhost:5500/auth/signUp", {
              method: "POST",
              body: JSON.stringify({
                firstname:"admin",
                lastname:"imbus",
                email:"admin@imbus.tn",
                password:"imbus"
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
          }
  
        })
      })
      
      .catch((err) => {
        console.log(err);
      });
      
  }, []);



  return (
    <div
      className="w-full h-screen font-sans bg-cover bg-left-bottom flex flex-col flex-wrap"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <span className="absolute top-0 left-0 m-0 p-0 bg-gray-700 opacity-20  w-full h-full z-0"></span>

      <div className="pt-36 ml-20 gap-4 flex flex-col  items-start z-20">
        <img src={logo} alt="logo" className="h-28 z-20" />
        <h1 className="text-7xl  font-bold text-white z-20">
          TestBench-vs
        </h1>
      </div>
      <div className="ml-20 text-white mt-10 flex flex-col gap-5 ">
        <p className="z-20 w-max">
          This is a website that unable Imbus employees to visualize the
          database
          <br />
          in easer way.
        </p>
        <span className="z-20">
          <Link to="/home">
            <RoundedButton text="explore" />
          </Link>
        </span>
      </div>
      <div className="text-white z-20">
        <p className="absolute left-20 bottom-5">
          Made with ❤️ by {" "}
          <a
            href="https://www.linkedin.com/in/salma-soussi-dev20/"
            className="hover:text-neutral-800"
          >
            
            Salma Soussi
          </a>
        </p>
      </div>
    </div>
  );
}
