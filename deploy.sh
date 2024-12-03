THEGRAPH_NODE=http://127.0.0.1:8020
THEGRAPH_IPFS=http://127.0.0.1:5001
graph create glacier/testnet --node $THEGRAPH_NODE
DEBUG=1 graph deploy glacier/testnet --ipfs $THEGRAPH_IPFS --node $THEGRAPH_NODE