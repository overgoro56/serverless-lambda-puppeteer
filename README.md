# serverless-lambda-puppeteer

# ローカル実行方法

`npm run sls-invoke-local sampleHandler`

# デプロイ方法

###  のデプロイ

```
$ npm run deploy-production
```

```
$ npm run deploy-dev
```

# ファイル説明

## `./env` 以下

各環境ごとのリソース設定情報を管理

## `serverless.yml`

`serverless framework` の設定ファイルです。

ステージごとの情報を`./env`以下から読み取って設定を行います。

## `handler.js`

lambdaのコード

## `.editorconfig`、`.prettierrc`

コードフォーマッターの設定ファイル


## `.npmrc`

### `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=TRUE`

ChroniumをlambdaにのせずにLambdaの容量制限を回避する設定

## serverless plugins

### `serverless-layers`

Lambda Layer を使ってLambdaの容量制限を回避

### `serverless-prune-plugin`

Lambda の保持バージョンの指定。

古いバージョンは削除して容量制限に引っかからないようにします。
