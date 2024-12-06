import { useState } from "preact/hooks";
import { disconnect } from "@wagmi/core";
import { mainnet, polygon, sepolia, anvil } from "viem/chains"
import { wagmiConfig } from "../config/wagmiConfig";
import { useAccount } from "wagmi"

export const WalletInfo = () => {
  const { isConnecting, isConnected, address, chain, chainId, connector, isDisconnected } = useAccount()
  const [selectedChainId, setSelectedChainId] = useState(isConnected ? chainId : 1)

  const selectChain = (e: Event) => {
    const target = e.target as HTMLSelectElement
    setSelectedChainId(Number(target.value))
  }

  const handleDisconnect = async () => {
    await disconnect(wagmiConfig)
  }

  const changeNetwork = async () => {
    const hexSelectedChainId = `0x${selectedChainId.toString(16)}`
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: hexSelectedChainId }],
    });
  }

  if (isConnecting) return <div>Connecting...</div>;
  if (isDisconnected) return <div>Disconnected</div>;

  return <>
    <p>Connected Wallet: {address}</p>
    <p>Chain: {chain.name}</p>
    <p>Chain ID: {chainId}</p>
    <p>Connector: {connector.name}</p>
    <p>Selected Chain ID: {selectedChainId}</p>
    <div>
      <select
        onChange={selectChain}
        class="select"
      >
        <option value={mainnet.id} selected={selectedChainId === mainnet.id} class="option">Ethereum</option>
        <option value={polygon.id} selected={selectedChainId === polygon.id} class="option">Polygon</option>
        <option value={sepolia.id} selected={selectedChainId === sepolia.id} class="option">Sepolia</option>
        <option value={anvil.id} selected={selectedChainId === anvil.id} class="option">Anvil</option>
      </select>
      <button class="btn" onClick={changeNetwork}>change network</button>
    </div>
    <div>
      <button class="btn" onClick={handleDisconnect}>Disconnect</button>
    </div>
  </>;
};
