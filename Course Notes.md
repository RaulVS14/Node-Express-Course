# Course Notes

## JS Environment specifics

### Browser

* DOM
* Window
* Interactive Apps
* No Filesystem
* Fragmentation
* ES6 Modules

### Node.js

* No DOM
* No Window
* Server Side Apps
* Filesystem
* Versions
* CommonJS

## Globals

**__dirname** - current directory path

**__filename** - file name

**require** - use modules (CommonJS)

**module** - info about current module

**process** - info about env where the program is being executed

**console** - instance for outputting data into console

**setInterval** - set code to execute repeatedly after certain time

**setTimeout** - set code to execute after certain time period

## CommonJS

Every file is a module by default

Module is encapsulated code (only share minimum)

## Modules

Importing a module will invoke the code (calling functions) look trick_file.js and related require in app.js

```
const name = 'Steve';

module.exports = {name} // {name:'Steve'};

module.exports = name; // 'Steve'

module.exports.name = name; // {name:'Steve'};
```

```
const name = require('./name.js')
```

### BUILTIN

* OS
* PATH
* FS
* HTTP And more @[Node.js Documentations](https://nodejs.org/en/docs/)

## FILESYSTEM

You can read files synchronously and asynchronously;

**!** Writing into a file will require flag for appending `{flag:'a'}`

## HTTP

Easiest setup for webpage http.createServer

## NPM

Node Package Manager, comes with node

Doesn't have quality control, you need to verify packages. Good sign is if it has a lot of downloads.

Check version

```
npm --version
```

Install locally

```
npm i <package>
```

Install globally (might require sudo). Less need with npx

```
npm install -g <package>
```

### Manifest

package.json - keeps track of dependencies. Crucial for sharing code - so others can set up their environment for
development

```
// step by step 
npm init
```

```
// default setup
npm init -y
```