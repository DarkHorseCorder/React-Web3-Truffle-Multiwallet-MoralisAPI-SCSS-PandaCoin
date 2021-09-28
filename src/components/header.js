import React, {useEffect, useState} from 'react';
import logo from "../img/logo.png";
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import Button from 'react-bootstrap/Button'
import Onboard from '@web3-onboard/core'
import injectedModule from '@web3-onboard/injected-wallets'
import walletConnectModule from '@web3-onboard/walletconnect'
// import trezorModule from '@web3-onboard/trezor'
// import ledgerModule from '@web3-onboard/ledger'
// import walletConnectModule from '@web3-onboard/walletconnect'
// import coinbaseModule from '@web3-onboard/coinbase'
// import portisModule from '@web3-onboard/portis'
// import magicModule from '@web3-onboard/magic'
// import fortmaticModule from '@web3-onboard/fortmatic'
// import torusModule from '@web3-onboard/torus'
// import keepkeyModule from '@web3-onboard/keepkey'
// import gnosisModule from '@web3-onboard/gnosis'
// import web3authModule from '@web3-onboard/web3auth'
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { providerOptions } from "../utils/providerOptions";
const MAINNET_RPC_URL = "https://mainnet.infura.io/v3/28337fe6f81d41dcaf891dbba47aaabe"
const injected = injectedModule()
// const coinbase = coinbaseModule()
const walletConnect = walletConnectModule({
  bridge: 'https://bridge.walletconnect.org',
  qrcodeModalOptions: {
    mobileLinks: ['rainbow', 'metamask', 'argent', 'trust', 'imtoken', 'pillar']
  },
  connectFirstChainId: true
})
var wallets;
// const portis = portisModule({
//   apiKey: 'b2b7586f-2b1e-4c30-a7fb-c2d1533b153b'
// })

// const fortmatic = fortmaticModule({
//   apiKey: 'pk_test_886ADCAB855632AA'
// })

// const torus = torusModule()
// const ledger = ledgerModule()
// const keepkey = keepkeyModule()

// const gnosis = gnosisModule()

// const trezorOptions = {
//   email: 'test@test.com',
//   appUrl: 'https://www.blocknative.com'
// }

// const trezor = trezorModule(trezorOptions)

// const magic = magicModule({
//   // Example api key, may need to be updated when max hits reached
//   // Get one to test with for free from https://magic.link/
//   apiKey: 'pk_live_02207D744E81C2BA',
//   userEmail: localStorage.getItem('magicUserEmail')
// })

// const web3auth = web3authModule({
//   clientId:
//     'DJuUOKvmNnlzy6ruVgeWYWIMKLRyYtjYa9Y10VCeJzWZcygDlrYLyXsBQjpJ2hxlBO9dnl8t9GmAC2qOP5vnIGo'
// })

const onboard = Onboard({
  wallets: [
    injected,
    walletConnect
    // ledger,
    // coinbase,
    // trezor,
    // walletConnect,
    // web3auth,
    // gnosis,
    // magic,
    // fortmatic,
    // keepkey,
    // portis,
    // torus
  ],
  chains: [
    {
      id: '0x1',
      token: 'ETH',
      label: 'Ethereum Mainnet',
      rpcUrl: MAINNET_RPC_URL
    },
    {
      id: '0x38',
      token: 'BNB',
      label: 'BNB Chain',
      rpcUrl: 'https://bsc-dataseed.binance.org/'
    },
    {
      id: '0x89',
      token: 'MATIC',
      label: 'Matic Mainnet',
      rpcUrl: 'https://matic-mainnet.chainstacklabs.com'
    },
    {
      id: '0xfa',
      token: 'FTM',
      label: 'Fantom Mainnet',
      rpcUrl: 'https://rpc.ftm.tools/'
    }
  ],
  appMetadata: {
    name: 'Panda Coin',
    icon: logo,
    description: 'My app using Onboard'
  }
})
function Header() {
    const [walletConnectState, setWalletConnectState] = useState('connect')
    
    const connectWallet = async () => {
      try {
        handleNavBar()
        const wallets = await onboard.connectWallet()
        if(wallets.length > 0){
        document.getElementsByTagName("onboard-v2")[0].style.display = "none"
        setWalletConnectState('connected')}
        console.log(wallets)
      } catch (error) {
          console.log(error);
        }
    }

    useEffect(()=>{
      window.addEventListener("scroll", handleScroll);
    },[])
    const handleScroll=()=>{
      if (window.pageYOffset > 100) {
        document.getElementById('mainheader').style.backgroundColor = "#2F5425"
    }else{
      document.getElementById('mainheader').style.backgroundColor = "transparent"
    }
    }

    const handleNavBar =()=>{
      if(document.getElementsByClassName('header__burger')[0].classList.contains('active')){
        document.getElementsByClassName('header__burger')[0].classList.toggle("active")
        document.getElementById('mainheader').classList.add("header_right")
      }
      else{
      document.getElementById('mainheader').classList.remove("header_right")
      document.getElementsByClassName('header__burger')[0].classList.toggle("active")
      }
    }
    return (
        <header className="header header_right" id='mainheader'>
            <div className="container-fluid"> 
                <div className="row">
                    <div className="col-6 col-md-3 header-left__logo">
                        <a href="#"><img src={logo} alt="logo"/></a>
                    </div>
                    <div className="col-6 col-md-9 container__header-right align-self-center">
                        <nav className="header-right__menu text-lg-center">
                            <ul>
                                <li><a  href="index.html">Home</a></li>
                                <li><a  href="#">Tokenomics</a></li>
                                <li><a  href="#">Roadmap</a></li>
                                <li><a  href="#">Partners</a></li>
                                <li><a  href="#">Contact Us</a></li>
                                
                                <li className="connect"><button onClick={() => connectWallet()}>{walletConnectState}</button></li>
                            </ul>
                        </nav>
                        <div className="header__burger" onClick={handleNavBar}>
                            <span></span>
                        </div>
                    </div>
                </div> 
            </div>
        </header>  
  );
}

export default Header;
