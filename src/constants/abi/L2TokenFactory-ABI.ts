export const l2TokenFactoryABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "l2Token",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "l1RemoteToken",
          "type": "address"
        }
      ],
      "name": "DeployL2Erc20",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "creator",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "tokenName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "tokenSymbol",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "bridge",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "remoteToken",
          "type": "address"
        }
      ],
      "name": "deployL2Erc20",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "index",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "userInfoList",
      "outputs": [
        {
          "internalType": "address",
          "name": "creatorL1",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "l1RemoteToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "l2Token",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]