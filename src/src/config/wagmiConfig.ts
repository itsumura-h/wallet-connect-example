import { http, createConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { WALLETCONNECT_PROJECT_ID } from "../config/env";

export const wagmiConfig = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [sepolia],
    transports: {
      // RPC URL for each chain
      [sepolia.id]: http(sepolia.rpcUrls.default.http[0]),
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
