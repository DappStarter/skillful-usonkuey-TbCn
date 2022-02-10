require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remind purpose hunt infant tail slab'; 
let testAccounts = [
"0xe7837c9375c0d468d9f2bae5d35cd6fa3c94688ca680dc2e45ad239f8bd503b6",
"0x5edd7e60e4ec18c6d2990ff3bf753b5ea2262f47b00f6e7616465304f9275fdc",
"0xe777768a4b3aa1768e47f16cfbcb9cb477cb83dc4c6bf6b9f14916f2f78e57f2",
"0x7a5b47393af448004ecf03bf9c5d5ac7aaa6675b1073901dddb69e3b90cd6bf7",
"0x7666ae683547baf794e590227fc9326bed6d08d8710323aa5e1807d6bcf92104",
"0x36de4c2a3330944371fadb1b4bd34a0f83994cb4611a3b29dfeacb6ac98d7885",
"0x1ae2acbd40dbfab1767e1433071e70ab2b2a2812be162d689306c365aa7eb663",
"0x2379987da6fc65acb871c29688c007f32c7d248e71f341dfac06301df3797686",
"0xb861769d556935c8181380b17ed5cfd672106fab9d2c7d021e4ffd2e4db029c7",
"0x9f4fb8eac290a5e68cd951828635f3a7b07e667de0902dbcb1ee6924744081e1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

