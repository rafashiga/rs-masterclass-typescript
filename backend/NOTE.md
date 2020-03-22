# Anotações

## Instalação

```
    yarn add express @type/express -D
```

## Convertendo TS para JS

```
    yarn tsc src/index.ts
```

## Adicionar configurações do typescript

```
    yarn tsc --init
```

## Converter TS para JS 'automaticamente'

-   https://github.com/whitecolor/ts-node-dev

```
    yarn add ts-node-dev -D
```

-   no package.json

```json
    "scripts": {
		"dev:server": "ts-node-dev --respawn --transpileOnly src/index.ts"
	},
```
