require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good entire sugar tooth film ring remember essay inner enrich orphan truly'; 
let testAccounts = [
"0x949dc9b9b7f887f16a3a819b8ea0871dd9a7d189408b88b0b6773fecd7fc96c1",
"0x6c0bf8a6fa290e853f07fe3465fe38fd1c87c6ac3c18002d39e0d3df61dd17d2",
"0xb8ddecac84b92ff7a7675721b8593106aa121054c575c0fa99d7c1b9f8483e62",
"0xd7983ec7fc050d45e284a3bfc1b2ae668b3039d9bfdd4d5011989ba967f387a7",
"0x144a3017bad9f18b4b25c8185472a8ce721bfd6befa3ec043f764ac56735acf3",
"0x1b428099b8bebe24e70db86e799ce9505001d5910edf801d347959bca2f5e119",
"0xcc4af0288c599d8f934b5830691a3a69ab1f41907b0b99dcdb05d5c9fe13c3b7",
"0x6f2f2166116afb588f07d2898cf642f8d1f91667195ec78ad1824f3b534929d5",
"0x3794138961e6dd2024b126c6b9eed45982037483e8cb62419a5f033687a2f18a",
"0xe2410827a85837b9199f98652b6ca5c7bf7c53e3607712a2b2260ef34cb7da45"
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

