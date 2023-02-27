import React from 'react'
import { getSearchObj } from '@/helpers/location'
import './header.less'

const Header: React.FC = () => {
  function gotoOnlineVersion() {
    const query = getSearchObj();
    if (typeof window !== 'undefined') {
      window.open(`https://visiky.github.io/resume/?user=${query.user}`);
    }
  }
  return (
    <header>
      <span />
      <span>
        {/* {ModeSwitcher} */}
        <span className={'action-link'} onClick={gotoOnlineVersion}>
          在线版本
        </span>
        {/* <LangSwitcher /> */}
      </span>
    </header>
  )
}

export default Header