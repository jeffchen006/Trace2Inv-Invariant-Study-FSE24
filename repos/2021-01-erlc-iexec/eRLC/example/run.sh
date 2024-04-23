#!/bin/bash

# cat ./example/accounts.json | jq -r '.[].address' | node ./dist/main.js --ledger
# cat ./example/accounts.json | jq -r '.[].address' | node ./dist/main.js --mnemonic "scare swap question employ early pizza evoke seed series gun roast space"
cat ./example/accounts.json | jq -r '.[].address' | node ./dist/main.js --privatekey 0x6805cb14ef8b2d49e1af124f02acb2d634b66d19a8f972669dcf160673575b2e
