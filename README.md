# Prism++

Prism++'s contract will work as Findora system contract to support ERC20 on Prism.

## Deposit

### FRA

1. User or contract pay FRA to payable function `depositFRA`.
2. `PrismXXBridge` will build mint operation and store on contract.
3. When block end, call `consumeMints` function to get this block's all mint.
4. Burn FRA based on result of `consumeMints`.

### FRC20

## Withdraw

### FRA

### FRC20
