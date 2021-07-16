<div align="center">
    <img class="logo" src="https://uiabsolute.com/assets/images/UI_Absolute_small.png" style="height: 60px;">
    <br>
    <br>
    <a href="https://npmjs.org/ui-absolute">
        <img src="https://api.travis-ci.com/UI-Absolute/UIAbsolute.svg?branch=main">
    </a>
    &nbsp;&nbsp;
    <a href="https://npmjs.org/ui-absolute">
        <img src="https://img.shields.io/npm/v/ui-absolute/latest.svg" alt="npm latest version">
    </a>
    <br>
    <a href="https://npmjs.org/ui-absolute">
        <img src="https://img.shields.io/npm/dm/ui-absolute.svg" alt="npm downloads">
    </a>
</div>

## Usage

#### Install using <b>npm</b>

```
    npm install ui-absolute --save
```

#### Add desired package to <b>NgModule</b> imports:

```
    import { UIABadgesModule } from 'ui-absolute';
  
    @NgModule({
      imports: [ UIABadgesModule,... ]
    })
```

#### Add desired component to <b>HTML</b> page:

```
    <uia-badge [value]="'Hello'"></uia-badge>
```

#### Bootstrap is required to make UI Absolute up and running
##### Using <b>index.html</b>:

```
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.X.X/css/bootstrap.min.css" rel="stylesheet">
```
#### or,
#### Using <b>npm</b>:

```
    npm install bootstrap --save
```

#### Once npm command is executed, add following to <b>angular.json</b> of your project:

```
    "styles": [
        "./node_modules/bootstrap/dist/css/bootstrap.css",
        ...
    ],
    "scripts": [
        ...
        "./node_modules/bootstrap/dist/js/bootstrap.js"
    ]
```

## Compatibility

| ui-absolute |    Bootstrap   |  Angular  |
| ----------- | -------------- | --------- |
| 1.x.x       | 3.x.x or 4.x.x | 8.x.x     |


### License

[MIT](https://github.com/UI-Absolute/UIAbsolute/blob/main/LICENSE)
