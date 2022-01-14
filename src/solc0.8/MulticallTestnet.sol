// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0;

import "./Multicall.sol";

contract MulticallTestnet is Multicall {
    function aggregate(Call[] calldata calls) external override(Multicall) returns (uint256 blockNumber, bytes[] memory returnData) {
        uint len = calls.length;
        blockNumber = block.number;
        returnData = new bytes[](len);
        for(uint256 i = 0; i < len; i++) {
            (, bytes memory ret) = calls[i].target.call(calls[i].callData);
            returnData[i] = ret;
        }
    }
}
