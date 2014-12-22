var config = module.exports;

config.express = {
	port: process.env.EXPRESS_PORT || 3000,
	ip: '127.0.0.1',
	production: (process.env.NODE_ENV === 'production')
};
