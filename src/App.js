import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider,useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    SolletExtensionWalletAdapter,
    SolletWalletAdapter
} from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { Keypair, SystemProgram, Transaction } from '@solana/web3.js';
import logo from './logo.svg';
import './App.css';

import {SendOneLamportToRandomAddress }from './TNX.tsx'

import logo_dev from './logo_dev.png'
require('@solana/wallet-adapter-react-ui/styles.css');


const App = () => {
 	//const network = WalletAdapterNetwork.Devnet;
	const network = WalletAdapterNetwork.Mainnet;
  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded.
  const wallets = useMemo(
      () => [
          new PhantomWalletAdapter(),
          new SlopeWalletAdapter(),
          new SolflareWalletAdapter({ network }),
      ],
      [network]
  );

  return (
		 <div className="App">
      <header>
        <h1>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
               <WalletModalProvider>
               			<div className="App-MultiButton">
                    <WalletMultiButton />
                    </div>
										<div className="Raffle">
										<h1>Buy raffle tickets
										</h1>
										<img src={logo_dev} alt="Logo" />
                 	<SendOneLamportToRandomAddress/>
                 </div>
                </WalletModalProvider>
            </WalletProvider>
      </ConnectionProvider> 
        </h1>

     
       </header>
     
</div>
  );
};

export default App;
