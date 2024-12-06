import { http, createConfig } from "wagmi";
import { mainnet, polygon, sepolia, anvil } from "wagmi/chains";
import { getDefaultConfig } from "connectkit";
import { WALLETCONNECT_PROJECT_ID } from "../config/env";

export const wagmiConfig = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [mainnet, polygon, sepolia, anvil],
    transports: {
      // RPC URL for each chain
      [mainnet.id]: http(),
      [polygon.id]: http(),
      [sepolia.id]: http(),
      [anvil.id]: http(),
    },

    // Required API Keys
    walletConnectProjectId: WALLETCONNECT_PROJECT_ID,

    // Required App Info
    appName: "Romakin-testnet",

    // Optional App Info
    appDescription: "ConnectKit Wallet Connect Example",
    appUrl: "https://reown.com/appkit", // your app's url
    appIcon: "https://assets.reown.com/reown-profile-pic.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);
