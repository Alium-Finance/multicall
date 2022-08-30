import chai from "chai";

import { ethers } from "hardhat";
import { Signer } from "ethers";
import { assert } from "chai";
import { solidity } from "ethereum-waffle";

chai.use(solidity);

import MULTICALL2_ABI from "./MULTICALL2_ABI.json"
import MULTICALL2 from "../artifacts/src/solc0.8/Multicall2.sol/Multicall2.json"
import ERC20_ARTIFACT from "@openzeppelin/contracts/build/contracts/ERC20.json"

describe("Multicall2", function () {
    let accounts: Signer[];

    let OWNER_SIGNER: any;
    let ALICE_SIGNER: any;

    let OWNER: any;
    let ALICE: any;

    let multicall: any;
    let token: any;
    let token2: any;

    before("config", async () => {
        accounts = await ethers.getSigners();

        OWNER_SIGNER = accounts[0];
        ALICE_SIGNER = accounts[1];

        OWNER = await OWNER_SIGNER.getAddress();
        ALICE = await ALICE_SIGNER.getAddress();

        // const Multicall2 = await ethers.getContractFactory("Multicall2");
        const Multicall2 = await ethers.getContractFactory(MULTICALL2_ABI, MULTICALL2.bytecode);
        const ERC20Mock = await ethers.getContractFactory(ERC20_ARTIFACT.abi, ERC20_ARTIFACT.bytecode);

        multicall = await Multicall2.deploy()
        await multicall.deployed()

        token = await ERC20Mock.deploy("Test", "TEST")
        await token.deployed()

        token2 = await ERC20Mock.deploy("Test 2", "TEST2")
        await token2.deployed()
    });

    it('should success call contract address with exist method', async function () {
        let multicallInst = new ethers.Contract(multicall.address, MULTICALL2_ABI, OWNER_SIGNER);

        let result = await multicallInst.tryAggregate(false, [
            {
                target: token.address,
                callData: "0x06fdde03"
            },
            {
                target: token2.address,
                callData: "0x06fdde03"
            }
        ])

        const abiCoder = new ethers.utils.AbiCoder()

        result.map((item: any, index: number) => {
            assert.equal(item.success, true, "Not success")
            if (index === 0) {
                assert.equal(abiCoder.decode([ "string" ], item.returnData).toString(), "Test", "Name")
            }
            if (index === 1) {
                assert.equal(abiCoder.decode([ "string" ], item.returnData).toString(), "Test 2", "Name")
            }
        })
    });

    it('should fail call contract address with no exist method', async function () {
        let multicallInst = new ethers.Contract(multicall.address, MULTICALL2_ABI, OWNER_SIGNER);
        let result = await multicallInst.tryAggregate(false, [
            {
                target: token.address,
                callData: "0x06fdde01"
            }
        ])
        assert.equal(result[0].success, false, "Not failed")
        assert.equal(result[0].returnData, '0x', "Not zero")
    });

    it('should fail call non contract address', async function () {
        let multicallInst = new ethers.Contract(multicall.address, MULTICALL2_ABI, OWNER_SIGNER);
        let result = await multicallInst.tryAggregate(false, [
            {
                target: OWNER,
                callData: "0x06fdde03"
            }
        ])
        assert.equal(result[0].success, false, "Not failed")
        assert.equal(ethers.utils.toUtf8String(result[0].returnData), 'NON_CONTRACT_CALL', "Not NON_CONTRACT_CALL")
    });
});
