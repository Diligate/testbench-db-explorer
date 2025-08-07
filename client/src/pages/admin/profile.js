import NavbarAdmin from "../../components/navBarAdmin";
import SideBar from "../../components/sideBar";

export default function Profile() {
  return (
    <div className="flex overflow-hidden h-screen w-screen">
      <SideBar />
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <NavbarAdmin />
        <main className="relative flex-1 overflow-y-auto focus:outline-none bg-slate-50">
          <div className="py-6">
            <div className="px-4 mx-auto  sm:px-6 md:px-8 ">
              {/* Put your content here */}
              <div className="py-4">
                <div className="rounded-lg bg-white p-3">
                  <h2>Profile</h2>
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
