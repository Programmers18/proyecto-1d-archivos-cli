# Creador de archivos por CLI
En este proyecto vamos a poder crear archivos poniendo el nombre y la extension que deseamos.

## Instrucciones
Para un correcto uso, hay que seguir las instrucciones

### Instalación

* GLOBAL
```
npm install -g file-creator-cli
```

* LOCAL
```
npm install file-creator-cli
```

### Para usarlo
* Global
ejecutamos **file-creator-cli
* Local
Añadimos en el package.json
```
"scripts": {
    "file-creator-cli": "./node_modules/.bin/file-creator-cli"
}
```
Ejecutamos con 
```
npm run file-creator-cli
```