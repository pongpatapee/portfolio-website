import { Link } from "react-router-dom";

export default function Home() {
  // TODO: Switch the logo out with an svg (How lazyvim does it)
  const logo = `
██████╗  █████╗ ███╗   ██╗    ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
██╔══██╗██╔══██╗████╗  ██║    ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
██║  ██║███████║██╔██╗ ██║    ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
██║  ██║██╔══██║██║╚██╗██║    ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
██████╔╝██║  ██║██║ ╚████║    ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝    ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 
`;

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#282C34] text-[#e5c07b]">
      <pre className="font-JetBrainsNF">{logo}</pre>

      {/* <div className="flex flex-col justify-items-start text-xl mt-10 text-[#abb2bf] outline-rose-500 outline"> */}
      <div className="w-1/3 text-xl mt-10 text-[#abb2bf] ">
        <div>
          <Link to="/about">
            <button className="mt-10">
              <span></span> <span>About Me</span>
            </button>
          </Link>
        </div>
        <div>
          <Link to="/experience">
            <button className="mt-10">
              <span>󰈚</span> <span>Experience</span>
            </button>
          </Link>
        </div>
        <div>
          <Link to="/projects">
            <button className="mt-10">
              <span></span> <span>Projects</span>
            </button>
          </Link>
        </div>
        <div>
          <Link to="/developer-tools">
            <button className="mt-10">
              <span></span> <span>Developer Tools</span>
            </button>
          </Link>
        </div>
        <div>
          <Link to="/contact">
            <button className="mt-10">
              <span>󰛋</span> <span>Contact</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
