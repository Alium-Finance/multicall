solc -o ./build/solc0.5/ --bin --optimize --overwrite --asm-json --abi --metadata ./src/solc0.5/Multicall.sol
solc -o ./build/solc0.5/ --bin --optimize --overwrite --asm-json --abi --metadata ./src/solc0.5/Multicall2.sol
solc -o ./build/solc0.8/ --bin --optimize --overwrite --asm-json --abi --metadata ./src/solc0.8/Multicall2.sol
solc -o ./build/solc0.8/ --bin --optimize --overwrite --asm-json --abi --metadata ./src/solc0.8/MulticallTestnet.sol
