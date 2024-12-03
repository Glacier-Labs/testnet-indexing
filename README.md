# Glacier testnet indexing by [TheGraph](https://github.com/graphprotocol/graph-node)

## Deploy the local thegraph node

```
cd thegraph
docker-compose up -d
```

## Deploy testnet subgraph

```
npm install -g @graphprotocol/graph-cli
npm install
graph codegen
bash deploy.sh
```

## Quering the subgraph

Graphql: http://127.0.0.1:8020/subgraphs/name/glacier/testnet

```
query DailyNodeActivate {
  dailyNodeActivates(interval: day) {
    id
    timestamp
    count
    daily
  }
}
```

Curl:
```
curl 'http://127.0.0.1:8020/subgraphs/name/glacier/testnet' \
  -H 'content-type: application/json' \
  --data-raw '{"query":"query DailyNodeActivate {\n  dailyNodeActivates(interval: day) {\n    id\n    timestamp\n    count\n    daily\n  }\n}","operationName":"DailyNodeActivate","extensions":{}}'
```