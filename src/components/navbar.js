import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.svg";

const Navbar = () => {
  return (
    <header className="bg-[#132034] sticky z-30 top-0">
      <nav className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <Link legacyBehavior href={"/"}>
          <a>
            <Image src={logo} width={250} height={150} alt="The Mandalorian Logo" />
          </a>
        </Link>
        <div className="flex space-x-16">
          <div>
            <p className="uppercase text-white">
              <span className="text-[#c5a974]">Welcome back,</span> Din Djarin
            </p>
          </div>
          <div>
            <Link legacyBehavior href={"/"}>
              <a className="uppercase text-sm text-white hover:font-bold">
                Home
              </a>
            </Link>
          </div>
          <div>
            <Link legacyBehavior href={""}>
              <a className="uppercase text-sm hover:font-bold text-white">
                My Learnings
              </a>
            </Link>
          </div>
          <div>
            <Link legacyBehavior href={""}>
              <a className="uppercase text-sm hover:font-bold text-white">
                Log out
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

// <header>
// <nav className={`nav`}>
//   <Link href={"/"}>
//     <a>
//       <h1 className="logo">CodeWithMarish</h1>
//     </a>
//   </Link>
//   <div
//     onClick={() => setNavActive(!navActive)}
//     className={`nav__menu-bar`}
//   >
//     <div></div>
//     <div></div>
//     <div></div>
//   </div>
//   <div className={`${navActive ? "active" : ""} nav__menu-list`}>
//     {MENU_LIST.map((menu, idx) => (
//       <div
//         onClick={() => {
//           setActiveIdx(idx);
//           setNavActive(false);
//         }}
//         key={menu.text}
//       >
//         <NavItem active={activeIdx === idx} {...menu} />
//       </div>
//     ))}
//   </div>
// </nav>
// </header>
