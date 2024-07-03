import Link from "next/link";
import CONTENT from "../../data/footer.json";
import Logo from "../Logo/Logo";
import Container from "../Container/Container";
import FooterLinksContainer from "../FooterLinksContainer/FooterLinksContainer";
import FooterLinks from "../FooterLinks/FooterLinks";
import FooterContacts from "../FooterContacts/FooterContacts";
import FooterLinksSM from "../FooterLinksSM/FooterLinksSM";

const Footer = () => {
  const {
    text: { information, contacts, media },
  } = CONTENT;


  return (
    <footer className="min-h-[417px] bg-black-2c text-white">
      <Container sx="flex w-full justify-between pt-[58px] pb-[60px]">
        <Link href="/" className="text-inherit">
          <Logo sx="w-[145px] h-[94px] fill-white" />
        </Link>

        <FooterLinksContainer title={information.title}>
          <FooterLinks links={information.all} />
        </FooterLinksContainer>
        
        <FooterLinksContainer title={contacts.title}>
          <FooterContacts contacts={contacts.all} />
        </FooterLinksContainer>

        <FooterLinksContainer title={media.title}>
          <FooterLinksSM media={media.links} />
        </FooterLinksContainer>
        
      </Container>
    </footer>
  );
};

export default Footer;
