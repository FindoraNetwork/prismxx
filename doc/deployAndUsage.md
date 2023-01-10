## 合约部署及调用

### prismProxy合约
#### 1）部署prismProxy
    该合约constructor方法没有参数，可以直接部署
#### 2）prismProxy合约调用
    调用adminSetPrismBridgeAddress方法设置prismBridge地址
    调用transferOwnership方法设置新的owner
    查看当前owner和prismBridge地址

### prismXXBridge合约
#### 1）部署prismXXBridge
    该合约constructor方法参数_proxy_contract为上一步部署的prismProxy合约地址
#### 2）prismXXBridge合约调用
    

#### proxyAdmin合约
#### 1）部署ProxyAdmin合约
    该合约constructor方法没有参数，可以直接部署
#### 2）ProxyAdmin合约调用
    调用changeProxyAdmin方法设置新的admin
    调用transferOwnership方法设置新的owner
    查看当前owner地址

#### prismXXAsset合约
#### 1）部署prismXXAsset合约
    该合约没有constructor方法，直接部署
#### 2）prismXXAsset合约调用
    调用adminSetPrismBridgeAddress方法设置prismBridge地址
    调用transferOwnership方法设置新的owner
    查看当前owner和prismBridge地址

#### prismXXAsset的Proxy合约
#### 1）通过Proxy合约部署prismXXAssetProxy合约
    constructor参数：_logic为prismXXAsset合约地址，_admin为proxyAdmin合约地址，_data为prismXXAsset合约中initialize方法参数的encode值
#### 2）prismXXAssetProxy合约调用
    用调用prismXXAsset的方法去调用prismXXAssetProxy合约


#### prismXXLedger合约
#### 1）部署prismXXLedger合约
    该合约没有constructor方法，直接部署
#### 2）prismXXLedger合约调用
    调用adminSetPrismBridgeAddress方法设置prismBridge地址
    调用transferOwnership方法设置新的owner
    查看当前owner和prismBridge地址

#### prismXXLedger的Proxy合约
#### 1）通过Proxy合约部署prismXXLedgerProxy合约
    constructor参数：_logic为prismXXLedger合约地址，_admin为proxyAdmin合约地址，_data为prismXXLedger合约中initialize方法参数的encode值
#### 2）prismXXLedgerProxy合约调用
    用调用prismXXLedger的方法去调用prismXXLedgerProxy合约

