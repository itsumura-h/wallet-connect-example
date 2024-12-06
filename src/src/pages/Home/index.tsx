
import { ConnectKitWalletConnect } from "../../components/ConnectKitWalletConnect";
import { WalletInfo } from "../../components/WalletInfo";

export function Home() {
	return (
		<>
			<section class="py-8 px-4 lg:w-3/4 mx-auto">
				<WalletInfo />
			</section>
			<section class="py-8 px-4 lg:w-3/4 mx-auto">
				<ConnectKitWalletConnect />
			</section>
		</>
	);
}
