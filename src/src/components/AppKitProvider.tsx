import { cookieStorage, createStorage, http } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { sepolia } from '@reown/appkit/networks'
import { WALLETCONNECT_PROJECT_ID } from "../config/env"


//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId: WALLETCONNECT_PROJECT_ID,
  networks: [sepolia]
})

export const config = wagmiAdapter.wagmiConfig
