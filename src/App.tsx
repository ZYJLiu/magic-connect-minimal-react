import React from "react"
import "./styles.css"

import ConnectButton from "./components/ui/connect-button"
import { useMagicContext } from "./context/magic-context"
import { useEffect, useState } from "react"
import WalletMethods from "./components/wallet-methods"
import LoginPageBackground from "./images/login.svg"
import AppHeader from "./components/app-header"
import Spacer from "./components/ui/spacer"
import Wallet from "./components/wallet"
import Signing from "./components/signing"

export default function App() {
  const { magic, web3 } = useMagicContext()
  const [account, setAccount] = useState<string | null>(null)

  const isLoggedIn = async () => {
    if (!magic || !web3) return
    const accounts = await web3.eth.getAccounts()
    setAccount(accounts[0])
    console.log(accounts)
  }

  useEffect(() => {
    isLoggedIn()
  }, [isLoggedIn])

  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `url(${LoginPageBackground})`,
      }}
    >
      <AppHeader />
      <Spacer size={32} />
      {!account ? (
        <ConnectButton setAccount={setAccount} />
      ) : (
        <>
          <Wallet account={account} setAccount={setAccount} />
          <WalletMethods setAccount={setAccount} />
          <Signing account={account} />
        </>
      )}
    </div>
  )
}
