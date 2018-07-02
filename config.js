module.exports = {
    title: 'WEB SERVICES STATUS GUI',
    port: 3000,
    http_timeout: 10, // seconds
    ping_timeout: 10,
    services: [
        {
            type: 'ping', // ping, http or text (only text without status)
            host: 'skeelapp.com', // or '8.8.8.8',
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
