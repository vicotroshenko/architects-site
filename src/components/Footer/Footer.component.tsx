import Link from 'next/link';

import CONTENT from '../../../public/data/footer.json';
import Container from '../Container/Container.component';
import Logo from '../Logo/Logo.component';
import FooterContacts from './FooterContacts.component';
import FooterLinks from './FooterLinks.component';
import FooterLinksContainer from './FooterLinksContainer.component';
import FooterLinksSM from './FooterLinksSM.component';

const Footer = () => {
  const {
    text: { information, contacts, media },
  } = CONTENT;

  return (
    <footer className="min-h-[417px] bg-black-2c text-white">
      <div className="container m-auto flex flex-wrap justify-center gap-10 w-full lg:justify-between pt-[58px] pb-[60px]">
        <Link
          href="/"
          className="text-inherit"
        >
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
      </div>
    </footer>
  );
};

export default Footer;
