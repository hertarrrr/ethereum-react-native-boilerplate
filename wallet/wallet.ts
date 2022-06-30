import * as ethers from "ethers"

export class Wallet {
    node: ethers.utils.HDNode
    private constructor() { }

    static fromMnemonic(mnemonic: string): Wallet {
        const main = ethers.utils.HDNode.fromMnemonic(mnemonic)
        const wallet = new Wallet()
        wallet.node = main.derivePath("m/44'/60'/0'/0/0")
        return wallet
    }

    publicKey(): string {
        return this.node.publicKey
    }

    privateKey(): string {
        return this.node.privateKey
    }

    address(): string {
        return this.node.address
    }

    mnemonic(): string {
        return this.node.mnemonic.phrase
    }
}

// bsc path: m/44'/714'/0'/0/0
