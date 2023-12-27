# grpc-js-memory-leak

## Steps to reproduce

1. `yarn server`
2. `yarn client` in another shell

## Branches

- [close-client](https://github.com/gedorinku/grpc-js-memory-leak/tree/close-client)
  - Explicitly close the clients.
  - The memory leak does not reproduce.
- [deprecated-grpc](https://github.com/gedorinku/grpc-js-memory-leak/tree/deprecated-grpc)
  - with deprecated `grpc` package
  - The memory leak does not reproduce.
