import { ConnectKitProviderWrapper } from "../../components/ConnectKitProvider";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";

const WalletInfo = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  if (isConnecting) return <div>Connecting...</div>;
  if (isDisconnected) return <div>Disconnected</div>;
  return <div>Connected Wallet: {address}</div>;
};

export function Home() {
	return (
		<>
			<ConnectKitProviderWrapper>
				<section class="py-8 lg:w-3/4 mx-auto">
					<h1 class="text-2xl font-bold">ConnectKit Wallet Connect Example</h1>
					<ConnectKitButton />
					<WalletInfo />
				</section>
			</ConnectKitProviderWrapper>
		</>
	);
}
