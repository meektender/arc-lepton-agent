import { initiateDeveloperControlledWalletsClient } from '@circle-fin/developer-controlled-wallets';
import dotenv from 'dotenv';

dotenv.config();

// Initialize the Circle client with your secure configurations
const circleClient = initiateDeveloperControlledWalletsClient({
    apiKey: process.env.CIRCLE_API_KEY,
    entitySecret: process.env.CIRCLE_ENTITY_SECRET
});

/**
 * Triggers an automated nanopayment or routing sequence on the stablecoin-native network.
 * @param {string} destinationWallet - The receiver's public address.
 * @param {string} amount - The USDC amount to transfer (e.g., "0.01").
 */
export async function processAgentPayment(destinationWallet, amount) {
    try {
        console.log(`[Engine] Initializing autonomous pipeline loop for ${amount} USDC...`);
        
        const response = await circleClient.createTransaction({
            walletId: process.env.CIRCLE_WALLET_ID,
            tokenId: process.env.USDC_TOKEN_ID, // Arc Network USDC Token Reference
            destinationAddress: destinationWallet,
            amounts: [amount],
            feeLevel: "LOW" // Keeps microtransaction fees predictable at a sub-cent scale
        });

        console.log(`[Engine] Pipeline sequence verified successfully.`);
        return {
            success: true,
            transactionId: response.data.id,
            status: response.data.state
        };
    } catch (error) {
        console.error(`[Engine Critical Error] Pipeline processing failed:`, error.message);
        return {
            success: false,
            error: error.message
        };
    }
}
