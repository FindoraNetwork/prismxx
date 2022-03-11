#!/usr/bin/env bash


mkdir -p artifacts/infos

cat artifacts/contracts/PrismXXBridge.sol/PrismXXBridge.json | jq -r ".deployedBytecode" > artifacts/infos/PrismXXBridge.bytecode || exit 1
cat artifacts/contracts/PrismXXBridge.sol/PrismXXBridge.json | jq -r ".abi" > artifacts/infos/PrismXXBridge.abi.json || exit 1

cat artifacts/contracts/PrismXXAsset.sol/PrismXXAsset.json | jq -r ".deployedBytecode" > artifacts/infos/PrismXXAsset.bytecode || exit 1
cat artifacts/contracts/PrismXXAsset.sol/PrismXXAsset.json | jq -r ".abi" > artifacts/infos/PrismXXAsset.abi.json || exit 1

cat artifacts/contracts/PrismXXLedger.sol/PrismXXLedger.json | jq -r ".deployedBytecode" > artifacts/infos/PrismXXLedger.bytecode || exit 1
cat artifacts/contracts/PrismXXLedger.sol/PrismXXLedger.json | jq -r ".abi" > artifacts/infos/PrismXXLedger.abi.json || exit 1

