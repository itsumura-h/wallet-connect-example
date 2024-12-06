import { useState, useEffect } from "preact/hooks";
import { getAccount, GetAccountReturnType } from "@wagmi/core";
import { wagmiConfig } from "../config/wagmiConfig";

export const useAccount = () => {
  const [getAccountData, setGetAccountData] = useState<GetAccountReturnType>()

  useEffect(() => {
    const interval = setInterval(() => {
      const data = getAccount(wagmiConfig)
      setGetAccountData(data)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return {
    address: getAccountData ? getAccountData.address : "",
    addresses: getAccountData ? getAccountData.addresses : [],
    chain: getAccountData ? getAccountData.chain : undefined,
    chainId: getAccountData ? getAccountData.chainId : 0,
    connector: getAccountData ? getAccountData.connector : undefined,
    isConnecting: getAccountData ? getAccountData.isConnecting : false,
    isReconnecting: getAccountData ? getAccountData.isReconnecting : false,
    isConnected: getAccountData ? getAccountData.isConnected : false,
    isDisconnected: getAccountData ? getAccountData.isDisconnected : true,
  }
}
