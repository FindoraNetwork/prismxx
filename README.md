# Prism++

Prism++'s contract will work as Findora system contract to support ERC20 on Prism.

## Depoly

1. `PrismXXBridge` will depoly on some height auto.
2. Write a contract `is` `IPrismXXAsset` and depoly.
3. Write a contract `is` `IPrismXXLedger` and depoly.
4. Set address of `IPrismXXAsset` and `IPrismXXLedger` into `PrismXXBridge`

## Usage

### depositFRA

1. User or contract pay FRA to payable function `depositFRA`.
2. `PrismXXBridge` will build mint operation and store on contract.
3. When block end, call `consumeMints` function to get this block's all mint.
4. Burn FRA based on result of `consumeMints`.
5. Trig UTXO's coinbase to generate same value of FRA.

![图片](https://user-images.githubusercontent.com/10502431/159275435-73a83cbd-6dff-453e-a2a4-28f50f1dc991.png)

### depositFRC20

1. User or contract `approve` a `Token`.
2. User call `depositFRC20` on `PrismXXBridge`.
3. `depositFRC20` call `getAssetByAddress` in `IPrismXXAccount` to get target UTXO asset.
4. `depositFRC20` call `depositFRC20` in `IPrismXXLedger` to `burn` or `lock` FRC20 token.
5. `PrismXXBridge` will build mint operation and store on contract.
6. When block end, call `consumeMints` function to get this block's all mint.
7. Trig UTXO's coinbase to generate same value of UTXO asset.

![图片](https://user-images.githubusercontent.com/10502431/159276375-032eea3e-8725-466f-bb41-81b1b6284760.png)


### withdrawFRA

1. User build `ConvertAccount` operation and transfer some value of FRA to `BlockHole`.
2. `Blockchain` will mint same value of FRA to `PrismXXBridge` contract.
3. `Blockchain` call `withdrawFRA` function in `PrismXXBridge`.
4. `withdrawFRA` send same value of FRA to target address.

![图片](https://user-images.githubusercontent.com/10502431/159277579-ecb93d10-e174-4592-b4a7-063502464ff0.png)


### withdrawFRC20

1. User build `ConvertAccount` operation and transfer some value of `ASSET` to `BlockHole`.
2. `Blockchain` call `withdrawFRC20` function in `PrismXXBridge`.
3. `withdrawFRC20` call `getAddressByAsset` in `IPrismXXAccount` to get target FRC20 contract address.
4. `withdrawFRC20` call `withdrawFRC20` in `IPrismXXLedger` to `mint` or `release` FRC20 token to target address.

![图片](https://user-images.githubusercontent.com/10502431/159278585-57197056-9fe3-4ff3-8330-bf998aa7c22a.png)

