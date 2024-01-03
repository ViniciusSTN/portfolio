import {
  Container,
  Content,
  List,
  ListItem,
  LogoContainer,
  MenuContainer,
  NavContainer,
  Overlay,
} from './styles';
import menu from '@/images/menu.svg';
import logo from '@/images/logo-150.png';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import nav from '@/data/nav';

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  const router = useRouter();
  const navData = nav.data;

  useEffect(() => {
    function onResize() {
      const width = window.innerWidth;
      if (width >= 768) setNavbar(false);
    }

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <Container>
      <Content>
        <div>
          <LogoContainer>
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
          </LogoContainer>
        </div>

        <Overlay $isactive={navbar} onClick={() => setNavbar(false)} />

        <NavContainer $isactive={navbar}>
          <List>
            {navData.map((item) => (
              <ListItem
                key={item.href}
                $isactive={router.pathname === item.href}
              >
                <Link href={item.href}>{item.children}</Link>
              </ListItem>
            ))}
          </List>
        </NavContainer>

        <MenuContainer onClick={() => setNavbar(true)}>
          <Image src={menu} alt="menu" />
        </MenuContainer>
      </Content>
    </Container>
  );
}
