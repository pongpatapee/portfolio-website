import GitHubLogo from "../assets/imgs/8bit_github_logo1.png";
import LinkedinLogo from "../assets/imgs/8bit_linkedin_logo.png";

const Footer = () => {
  return (
    <footer className="bottom-[1rem] w-screen z-10">
      <div className="flex items-center justify-between mx-14">
        <div>
          Dan Peerapatanapokin © {new Date().getFullYear()} 
        </div> 
        <div className="flex justify-end my-5">
          <a
            href="https://github.com/pongpatapee"
            target="_blank"
            rel="noopener noreferrer"
            className="pr-5"
          >
            <img src={GitHubLogo} alt="GitHub Logo" width={48} className="hover:scale-110" />
          </a>
          <a
            href="https://www.linkedin.com/in/pongpatapee-peerapatanapokin-7294231b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="pr-5"
          >
            <img src={LinkedinLogo} alt="Linkedin Logo" width={48} className="hover:scale-110" />
        </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
