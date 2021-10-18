const express = require('express');
const express_app = express(); // can be const app = require('express')();
// Set up static and middleware
// app.use
express_app.use(express.static('navbar-app'));

// app.get
// app.get('/', (req, res) => {
//     console.log('User on page');
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
//     // adding to static assets
//     // SSR - Server Side Rendering(template engine)
// });

express_app.get('/about', (req, res) => {
    res.send('About Page');
});

// app.all
express_app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not found</h1>')
});
express_app.listen(5000, () => {
    console.log('Service is listening on port 5000');
});

// app.post
// app.put
// app.delete
// app.use
// app.listen