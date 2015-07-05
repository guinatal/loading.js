# Loading.js

Very simple and quick loading to your web project. Supported web mobile.

## Usage

Add "loading.js" and "loading.css" to your project. Add also the div below inside body tag.

```html
<script type="text/javascript" src="loading.js"></script>
<link rel="stylesheet" type="text/css" href="loading.css" />
```

```html
<div id="loading_"></div>
```

## Show loading

You may just call the function below or also add your loading message as parameter.

```javascript
loading.initialize();
```

```javascript
loading.initialize("Loading");
```

## Close loading

Call the following function to close the loading.

```javascript
loading.close();
```

## Check loading

It returns true if the loading is initialized and false if it's not.

```javascript
loading.exists();
```
