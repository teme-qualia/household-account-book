VSCodeで「mock-node」フォルダを開きます。  
ターミナルを起動します。  

```ps1
# package.jsonのあるフォルダで実行
npm i

# テストDB(dev.dbファイル)を初期化
npx prisma migrate dev
# テーブルを開いて(m_buyerなど)作成できたことを確認します。
npx prisma studio
```

デバッグ実行▷をします。
  
`http://localhost:3000/swagger`にアクセスします。  
Record APIの以下のGETリクエストのみ動きます。

- record/records
- record/{recordId}

「Try it out」から試してみてください。