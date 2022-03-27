# Smart contract for transactions

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

Create a .env file with these properties :

```
ACCOUNT_PRIVATE_KEY=
RINKEDBY_RPC_URL=
```

To deploy, run:

```shell
npx hardhat run scripts/deploy.js
```

Après avoir déployé, on obtient l'adresse du contrat et l'abi dans artifacs/contracts/[nom_contrat].json. On copie le contenu de ce fichier et on 