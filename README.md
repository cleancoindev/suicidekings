# suicidekings

## Quickstart Instructions ##
Prerequisites/Versions I've used:

1. truffle v5.1.24 on Ubuntu 18.04 (`npm install -g truffle`)
2. ganache-cli (`npm install -g ganache-cli`)

To get the project running:

1. Optional - Open folder in Visual Studio

2. Terminal #1 - Run ganache-cli in deterministic mode on port 8545

`ganache-cli -d`

3. Terminal #2 - Start truffle and connect to ganache blockchain

`truffle console --network develop`

4. Terminal #3 - Run the react front-end at http://localhost:3000

`cd app`

`npm run start`

## More Information ##
Initially, the dapp just looks for a web3 instance running at localhost:8545, but we'll be updating it soon to use Metamask, Web3Modal, or something else.

Notes on how I built the initial project skeleton with React, Drizzle, Truffle, and Open Zeppelin's libraries [can be found in our team folder](https://docs.google.com/document/d/1I7B9iST4kpjjlLcyr6ArD9XWojdH8XJXWWMRTyZ4SWQ/edit) on Google Drive.
