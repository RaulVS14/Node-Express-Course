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

Install globally (might require sudo). Less need with npx (Package runner tool)

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

### Version numbering

1(Major).0(Minor update).0(Bug fixes)

## Nodemon

File watcher and restart app for development

```
npm i nodemon -D
```

Generally stick to using local installs or npx

## Concepts

* **Event Loop** - allows Node.js to perform non-blocking I/O operations, by offloading operations to the system kernel
  wherever possible. A bit different in Browsers. 
  * [YouTube EventLoop](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
  * [YouTube EventLoop in Node.js](https://www.youtube.com/watch?v=PNa9OMajw9w)
* **Async Patterns** - JavaScript Is Synchronous And Single Threaded
  * Blocking code
  * Promises - promisify from node.js utils can be used to turn functions into promises
* **Events Emitter** - listen for event before emitting, otherwise nothing will be
  * Server emits event which you can listen to
    * request
    * etc
* **Streams** - read or write sequentially - big source, file or etc. Streams extend event emitter class. Size of buffer 64KB. **highWaterMark** to control size of buffer
  
  **Stream types**
  * Writeable
  * Readable
  * Duplex
  * Transform

  