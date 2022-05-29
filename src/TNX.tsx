import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Keypair, SystemProgram, Transaction,PublicKey, Signer,internal,LAMPORTS_PER_SOL } from '@solana/web3.js';
import React, { FC, useCallback } from 'react';
import { useState} from 'react';
import {TOKEN_PROGRAM_ID,createMint, getOrCreateAssociatedTokenAccount, mintTo, transfer} from '@solana/spl-token'
import { createTransferInstruction } from './createTransferInstructions.ts'

export const SendOneLamportToRandomAddress: FC = () => {

		
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();
    const fromWallet=useWallet();
		const PK = new PublicKey("HirPiXu4X9hLCiFPxTuzz5ZqVumUJ6jzyJmvTn9Sw5i2");
		//const mint=new PublicKey('29eNab8p9kBFKDw3epJehpmf6gZmURyQnaA9tGGW3uQH');
		const mint= new PublicKey('48A1pXHvottXTf954CMhZyoG7MdFjngLJCDKJS6iJUth');//('7rQBH5uxDHbcP34zbEic8HDroejAyzwJnM96mbfgztFN');
//For the token transfer


//for the counter
	const [count, setCount] = useState(0);
	



//Lamport transfer

		//PK = new PublicKey('FGAG8ZXvJigJUne93C3UM9rNHHdaotPjPaRhZmbTKbGC');
    const onClick = useCallback(async () => {
      if (!publicKey) throw new WalletNotConnectedError();
      
      
		  const fromTokenAccount =await  getOrCreateAssociatedTokenAccount(
				    connection,
				    fromWallet,
				    mint,
				    publicKey
				);
			console.log(fromTokenAccount.address)
			const toTokenAccount = await getOrCreateAssociatedTokenAccount(
						connection,
						fromWallet,
						mint,
						PK
				);
   
    		console.log(fromTokenAccount);

        const transaction = new Transaction().add(
            SystemProgram.transfer({
            		//associatedToken,
                fromPubkey: publicKey,
                toPubkey: PK,
                lamports: 10000000,
            }),
            createTransferInstruction(
          fromTokenAccount.address, // source
          toTokenAccount.address, // dest
          publicKey,
          count*100,
          [],
          TOKEN_PROGRAM_ID
      )
        );
        
/*
      const transaction2 = new Transaction().add(
      createTransferInstruction(
          fromTokenAccount.address, // source
          toTokenAccount.address, // dest
          publicKey,
          count*100,
          [],
          TOKEN_PROGRAM_ID
      )
 		 )
            */
        const signature = await sendTransaction(transaction, connection);

        await connection.confirmTransaction(signature, 'processed');
    }, [publicKey, sendTransaction, connection]);







    return (
		<div>
				<div>
        <button  onClick={() => setCount(count - 1)}>-</button>
        {count}
        <button onClick={() => setCount(count +1 )}>+</button>
        </div>
        <button onClick={onClick} disabled={!publicKey}>
           Buy {count} tickets
        </button>
			</div>
    );
};

