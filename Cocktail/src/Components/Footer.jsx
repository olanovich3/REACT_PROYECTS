import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <ul className="contact">
        <li>
          <strong>Powered by Carlos Olano</strong>
        </li>
        <li>
          <a href="https://github.com/olanovich3?tab=repositories">
            <img
              src="https://res.cloudinary.com/dysog0ybg/image/upload/v1676300979/SocialMedia%20Icons/github_a3wdej.png"
              alt="github"
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/carlos-olano-gonz%C3%A1lez-338b3b68/">
            <img
              src="https://res.cloudinary.com/dysog0ybg/image/upload/v1676300979/SocialMedia%20Icons/linkedin_rxabeq.png"
              alt="linkedin"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
