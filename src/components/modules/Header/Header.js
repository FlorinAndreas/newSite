import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Logo from 'components/elements/Logo/Logo'
import { useThemeContext } from 'context/ThemeContext'
import React from 'react'
import { useTranslation } from 'react-i18next'

import Cart from './Cart'
import { LogoWrapper, Toolbar } from './Header.styles'
import NavigationDesktop from './NavigationDesktop'
import NavigationMobile from './NavigationMobile'

export default function Header() {
  const { t } = useTranslation()
  const { isMobile } = useThemeContext()

  const navigationItems = [
    { slug: 'women', name: t('Wildflower_Honey') },
    { slug: 'men', name: t('Linden_Honey') },
    { slug: 'kids', name: t('Eucalyptus_Honey') },
    { slug: 'babies', name: t('Acacia_Honey') },
  ]

  return (
    <AppBar position="sticky">
      <header>
        <Container>
          <Toolbar>
            {isMobile && <NavigationMobile navigationItems={navigationItems} />}
            <LogoWrapper $isMobile={isMobile}>
              <Logo />
            </LogoWrapper>
            {!isMobile && <NavigationDesktop navigationItems={navigationItems} />}
            <Cart />
          </Toolbar>
        </Container>
      </header>
    </AppBar>
  )
}
