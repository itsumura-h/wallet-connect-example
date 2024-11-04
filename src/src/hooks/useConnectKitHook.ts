import { Core } from "@walletconnect/core";
import { WalletKit } from "@reown/walletkit";

const core = new Core({
  projectId: "ae5a61df38ba7d517f890e9910ccdc45",
});

const metadata = {
  name: "Romakin-testnet",
  description: "AppKit Example",
  url: "https://reown.com/appkit", // origin must match your domain & subdomain
  icons: ["https://assets.reown.com/reown-profile-pic.png"],
};

const walletKit = await WalletKit.init({
  core, // <- pass the shared 'core' instance
  metadata,
});
