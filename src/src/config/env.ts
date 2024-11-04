type WalletConnectProjectId = string;
export const WALLETCONNECT_PROJECT_ID: WalletConnectProjectId = (function () {
  const env = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;
  if (!env) {
    throw new Error("VITE_WALLETCONNECT_PROJECT_ID is not set");
  }
  return env;
})();
