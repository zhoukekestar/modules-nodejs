
if (process.env.NODE_ACE !== undefined) {

  console.log('log.js exports ACE env. ACE!!')
  module.exports = {

    signCode: 'your-sign-code',
    project: 'your-project-name',
    hostname: 'localhost',
    port: 3000,
    path: '/MongoDB/logs',
    https: false,
    debug: true
  }

} else if (process.env.OS !== 'Windows_NT') {

  console.log('log.js exports TEST env. TEST!!');

  module.exports = {

    signCode: 'your-sign-code',
    project: 'your-project-name',
    hostname: 'localhost',
    port: 3000,
    path: '/MongoDB/logs',
    https: false,
    debug: true
  }

} else {
  console.log('log.js exports local env. LOCAL!!');

  module.exports = {

    signCode: 'your-sign-code',
    project: 'your-project-name',
    hostname: 'localhost',
    port: 3000,
    path: '/MongoDB/logs',
    https: false,
    debug: true
  }
}
