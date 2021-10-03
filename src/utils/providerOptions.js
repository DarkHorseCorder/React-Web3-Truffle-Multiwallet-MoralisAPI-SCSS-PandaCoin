import WalletConnect from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
// import TrustWallet from "@trustwallet/walletconnect";
export const providerOptions = {
  walletlink: {
    package: CoinbaseWalletSDK, // Required
    options: {
      appName: "Web 3 Modal Demo", // Required
      infuraId: "28337fe6f81d41dcaf891dbba47aaabe" // Required unless you provide a JSON RPC url; see `rpc` below
    }
  },
  walletconnect: {
    package: WalletConnect, // required
    options: {
      infuraId: "28337fe6f81d41dcaf891dbba47aaabe" // required
    }
  },
  // trustwallet: {
  //   package: TrustWallet, // Required
  //   options: {
  //     infuraId: "28337fe6f81d41dcaf891dbba47aaabe" // Required unless you provide a JSON RPC url; see `rpc` below
  //   }
  // },
};
