import Content from "../util/Content";
import Gap from "../util/Gap";
import FooterGroup from "./FooterGroup";
import FooterHeadline from "./FooterHeadline";
import FooterItem from "./FooterItem";
import LangSelect from "./LangSelect";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-950 text-white min-h-[40rem] mt-[10rem] p-20 flex justify-center">
      <Content className="flex flex-col justify-between">
        <div className="flex justify-between">
          <div>
            <LangSelect />
            <div className="flex mt-12 text-[2rem] gap-6">
              <a href="https://github.com/5tarlight" target="_blank">
                <FaGithub />
              </a>
              <FaYoutube />
              <FaInstagram />
              <FaLinkedin />
              <FaTwitter />
            </div>
          </div>
          <div className="flex gap-4">
            <FooterGroup>
              <FooterHeadline>Portpolent</FooterHeadline>
              <Gap height="h-4" />
              <FooterItem>About</FooterItem>
              <FooterItem>Contribution</FooterItem>
            </FooterGroup>
            <FooterGroup>
              <FooterHeadline>Policy</FooterHeadline>
              <Gap height="h-4" />
              <FooterItem>Terms</FooterItem>
              <FooterItem>Privacy</FooterItem>
              <FooterItem>Cookie</FooterItem>
            </FooterGroup>
          </div>
        </div>
        <div>
          <div className="bg-white h-[1px] w-full mb-8" />
          <div className="flex justify-between">
            <div>&copy; 2023-{new Date().getFullYear()} Portpolent.</div>
            <div>Do not share your private information</div>
          </div>
        </div>
      </Content>
    </footer>
  );
};

export default Footer;
