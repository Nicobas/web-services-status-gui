# web-services-status-gui
Node.js GUI to display the status of web services (http) and servers (ping)

## Features
* Display via a simple web interface the status of servers (ping) and web services (http)
* Add as much service as needed and organize them in tree view
* Simple configuration in a js file
* Installation and launch very easy


## Usage
### Prerequisites
You must have nodejs and npm installed on your system

Clone the repository and install the dependencies
```bash
git clone https://github.com/Nicobas/web-services-status-gui.git
cd web-services-status-gui
npm install
```

Configure your servers/web services in the file [`config.js`](config.js)
```js
module.exports = {
    title: 'WEB SERVICES STATUS GUI', // Web interface title
    port: 3000,
    http_timeout: 10, // http request timeout in seconds
    ping_timeout: 10,
    services: [
        {
            type: 'ping', // ping, http or text (only text without status)
            host: 'skeelapp.com', // or '8.8.8.8' (useless if type text)
            name: 'Skeel server', // text displayed beside the status
            services: [ // you can do service trees to infinity
                {
                    type: 'http',
                    host: 'https://skeelapp.com',
                    name: 'Skeel web site',
                    // services: [...]
                }
            ]
        },
        {
            type: 'http',
            host: 'https://github.com',
            name: 'Github'
        }
    ]
};
```

### Running the server
Run `npm start` and open [`http://localhost:3000`](http://localhost:3000) in your browser


## Todo
* [ ] Add tests
* [ ] Add https support
* [ ] Add authentication
* [ ] HTML dependencies with bower


## License

The MIT License.

See [LICENSE](LICENSE)
