import React from "react";
import { Text } from "react-native";
import App from "./App";
import { Providers } from "./Providers";

import { generateMnemonic } from "../wallet/mnemonic"
import { Wallet } from "../wallet/wallet"

const test_mnemonic = "mobile found obey beach example steak prepare lend chunk lunch vocal fragile"

export default () => {
  const mnemonic = generateMnemonic()
  const eth = Wallet.fromMnemonic(test_mnemonic)
  const pri_eth = Wallet.fromPrivateKey(eth.privateKey())
  return (
      <Text>
          {eth.log()}
          {pri_eth.log()}
      </Text>
  )
}
