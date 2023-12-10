import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Regis from "./Pages/Regis";
import { AnonAadhaarProvider } from "anon-aadhaar-react";
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { scrollSepolia } from 'wagmi/chains'

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [scrollSepolia],
  [alchemyProvider({ apiKey: 'yourAlchemyApiKey' }), publicProvider()],
)

const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
  ],
  publicClient,
  webSocketPublicClient,
})

const app_id = process.env.REACT_APP_ID || "";

function App() {
  return (
    <>
      <WagmiConfig config={config}>
        <AnonAadhaarProvider _appId={app_id} _isWeb={false}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Regis />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </AnonAadhaarProvider>
      </WagmiConfig>
    </>
  );
}

export default App;
