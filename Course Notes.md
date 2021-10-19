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

Importing a module will invoke the code (calling functions) look trick_file.js and related require in http_app.js

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

File watcher and restart express_app for development

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
* **Streams** - read or write sequentially - big source, file or etc. Streams extend event emitter class. Size of buffer
  64KB. **highWaterMark** to control size of buffer

  **Stream types**
    * Writeable
    * Readable
    * Duplex
    * Transform

## Server Port

Assign port that will accept the traffic from request

## Response in node

res.end() - must be called

res.writeHead (for setting headers) - content-type header you can specify what is being returned and how it will be
handled by browser(text/html will be translated to html)
[MIME Types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)

## HTTP Status Codes

[HTTP status codes descriptions](https://www.restapitutorial.com/httpstatuscodes.html)

## Resource handling

With HTTP module you can return all necessary responses for each resource, but it is ineffective(could take time to map
all resources)

## Serving files

* using res.sendFile
* adding to static assets - The easiest way of setting up simple site
* SSR - Server Side Rendering(template engine)

## Express.js use cases

* **API**
    * API - JSON responses
    * Send Data
    * res.json()
* **SSR**
    * SSR - TEMPLATE responses
    * Send Template
    * res.render()
## Middleware
req => middleware => res
Call next() to pass onto next middleware(those could be your methods)

How to use:
* used as an extra argument for api_app method parameters
* api_app.use() - mount middleware and executes it at specified path

Options:
* our own
* express - static
* third party - morgan(for logging)
* 
Pass multiple functions as list to apply multiple middlewares. **Order matters.**

## HTTP Methods
* GET 
* POST - Need to handle(parse) form data 
* PUT
* DELETE

## POSTMAN
For testing APIs

## ROUTER
