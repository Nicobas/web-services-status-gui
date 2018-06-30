module.exports = {
    port: 3000,
    http_timeout: 10, // seconds
    ping_timeout: 10,
    services: [
        {
            type: 'ping',
            host: 'skeelapp.com', // or '8.8.8.8',
            name: 'Skeel server',
            services: [
                {
                    type: 'http',
                    host: 'https://skeelappa.com',
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