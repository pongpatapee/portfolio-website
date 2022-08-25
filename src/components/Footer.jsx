import GitHubLogo from "../assets/imgs/8bit_github_logo1.png";
import LinkedinLogo from "../assets/imgs/8bit_linkedin_logo.png";

const Footer = () => {
  return (
    <footer className="fixed bottom-[1rem] w-screen">
      <div className="flex justify-end">
        <a
          href="https://github.com/pongpatapee"
          target="_blank"
          rel="noopener noreferrer"
          className="pr-5"
        >
          <img src={GitHubLogo} alt="GitHub Logo" width={48} />
        </a>
        <a
          href="https://www.linkedin.com/in/pongpatapee-peerapatanapokin-7294231b4/"
          target="_blank"
          rel="noopener noreferrer"
          className="pr-5"
        >
          <img src={LinkedinLogo} alt="Linkedin Logo" width={48} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
