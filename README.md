# Multicall <img width="100" align="right" alt="Multicall" src="https://user-images.githubusercontent.com/304108/55666937-320cb180-5888-11e9-907b-48ba66150523.png" />

Multicall aggregates results from multiple contract constant function calls.

This reduces the number of separate JSON RPC requests that need to be sent
(especially useful if using remote nodes like Infura), while also providing the
guarantee that all values returned are from the same block (like an atomic read)
and returning the block number the values are from (giving them important
context so that results from old blocks can be ignored if they're from an
out-of-date node).

Updates:    
- Using solc0.8.x     
- Processing non contract calls for create2 calculations as example

# Multcall V2:

## Mainnet deployed:

| name	 | address	                                                      | network |
|-------|---------------------------------------------------------------| ------- |
| Multicall2 | 0x737EAd42CE0859C1CB056d162D1DE6dEBB41b4A6                    |	FTM |
| Multicall2 | 	0x603bC4530ad41153859Bd4c0AE1FBa4D10660299                   |	BSC |
| Multicall2 | 	0x983b4625630ae1aaa7648f4cad68b9c0a52b8ae8                   |	POLYGON |
| Multicall2 | 	0x1f8559Ea0c917a79f8Ab475E78cF7F390C94F22d |	ETHEREUM  |         
| Multicall2 | 	0xF74B88DED057f7013A972F4caC2d31Cb70e0F7a2 |	METIS (ANDROMEDA)  |
| Multicall2 | 	0x33d1cE5C23eaBCf9fC24b06dc29693Cba1ef02fE |	HECO  |            
| Multicall2 | 	0x1C259099C089E2C31d7FDF0A57f525dcAD82f670 |	MOONBEAM   |       
| Multicall2 | 	0x763FA754b3048F1B027eD7f5297FF9882c3e21df |	NEAR (AURORA)  |    
| Multicall2 | 	0xe762b3e74f04C9FbF1DAB800Fbd44e799089F024 |	MOONRIVER   |       
| Multicall2 | 	0x4D3D711853a4A25AE1D17347a97253A66Ed63D18 |	OKC      |          

## Testnet deployed:

| name	 | address	                                   | network |
|-------|--------------------------------------------| ------- |
| Multicall2 | 0x9ED79c3A9221303a7B2Ee4C5617e1ea4688a12dA |	FTM |
| Multicall2 | 0x1f12Df344B63F1eb20ED661Ac160208266179C49 |	BSC |
| Multicall2 | 0x9ca69E6168e0a87b75053CA0847838A9e73AFCBD |	POLYGON (MUMBAI) |
| Multicall2 | 0xa951e5085a6F9508cC58065EC59845A5DEaE4cB3 |	ETHEREUM (RINKEBY) |
| Multicall2 | 0x2613047BfEEa744eEc08fD72864FB2Feb654Eb05 |	METIS (ANDROMEDA) |
| Multicall2 | 0x626413137d565852B498b776B49739D00B2345A8 |	HECO |
| Multicall2 | 0x2613047BfEEa744eEc08fD72864FB2Feb654Eb05 |	MOONBEAM (Moonbase Alpha) |
| Multicall2 | 0x8613ecdbd50EFD649EE1D7837E78Fb71ee405240 |	NEAR (AURORA) |
| Multicall2 | 0x2613047BfEEa744eEc08fD72864FB2Feb654Eb05 |	MOONRIVER (Moonbase Alpha) |
| Multicall2 | 0x849A4780B4A292B6Ce1e0fA07eAb533D8d78a009 |	OKC |              
