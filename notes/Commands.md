No **package.json** podemos adicinar alguns comando para facilitar nossa vida
```json
{
	"scripts": {
	    "format": "npx prettier '**/*.ts' '**/*.js' --write",
	    "watch": "tsc -w",
	    "compile": "tsc",
	    "server": "lite-server --baseDir=dist",
	    "start": "concurrently \"npm run watch\" \"npm run server\""
  }
}
```

**tsc**: transcompila os arquivos conigurados no **tsconfig.json** para js
	parametro: -**w** (watch) fica esperando alguma alteracao para retranscompilar automaticamente