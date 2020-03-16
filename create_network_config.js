const fs = require('fs');
const path = require('path');

if (fs.existsSync(path.join(__dirname + '/platforms'))) {
    const securityPath = path.join(__dirname + '/platforms/android/app/src/main/res/')
    // const securityPath = path.join(__dirname + '/platforms/android/app/src/main/res/')
    const domain = "www.google.com" // your domain name;

    try {
        if (fs.existsSync(securityPath + '/network_security_config.xml')) {
            fs.unlinkSync(securityPath + '/network_security_config.xml');
        }
        if (fs.existsSync(securityPath + 'xml/network_security_config.xml')) {
            fs.unlinkSync(securityPath + 'xml/network_security_config.xml');
        }
    } catch (err) {
        console.log(err);
    }

    const writeFile = `
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
<base-config cleartextTrafficPermitted="true" />
<domain-config cleartextTrafficPermitted="true">
    <domain includeSubdomains="true">${domain}</domain>
</domain-config>
</network-security-config>`

    try {
        fs.appendFileSync(securityPath + '/network_security_config.xml', writeFile);
        fs.appendFileSync(securityPath + 'xml/network_security_config.xml', writeFile);
        console.log('Network Security Config file has been created!');
    } catch (e) {
        console.log(e)
    }
} else {
    console.log('Please add cordova platform')
}
