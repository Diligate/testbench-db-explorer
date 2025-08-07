import { Link } from "react-router-dom";
import image from "../assets/images/404Page.png";
import FillButton from "../components/ui/fillButton";
export default function Page404() {
  return (
    <main class="bg-white overflow-hidden h-screen relative">
      <div class="container mx-auto h-screen pt-32 md:pt-0 px-6 z-10 flex items-center justify-between">
        <div class="container mx-auto px-6 flex flex-col-reverse lg:flex-row justify-between items-center relative">
          <div class="w-full mb-16 md:mb-8 text-center lg:text-left">
            <h1 class="font-light font-sans text-center lg:text-left text-5xl lg:text-8xl mt-12 md:mt-0 text-gray-700">
              Sorry, this page isn&#x27;t available
            </h1>
            <div class="px-2 py-2 h-30 mt-16 font-light transition ease-in duration-200 text-lg">
              <Link to="/home">
                <FillButton text="Go back home" />
              </Link>
            </div>
          </div>
          <div class="block w-full mx-auto md:mt-0 relative max-w-md lg:max-w-2xl">
            <img src={image} alt="404 page" />
          </div>
        </div>
      </div>
    </main>
  );
}
