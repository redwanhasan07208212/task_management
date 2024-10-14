import name from "./assets/logo.png";
export default function Header() {
  return (
    <div>
      <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
          {/* <!-- Logo --> */}
          <a href="/" className="flex justify-between items-center">
            <img src={name} alt="" className="w-36 opacity-90 mix-blend-normal shadow-lg p-2 rounded-lg bg-white" />
          </a>
          {/* <!-- Logo Ends --> */}
        </div>
      </nav>
    </div>
  );
}
