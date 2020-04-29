# cordova-bypass-clearTextTraffic

Step 1: You should add below code in your `config.xml` if it is not there under platform android.
```
  <platform name="android">
        <edit-config file="app/src/main/AndroidManifest.xml" mode="merge" target="/manifest/application" xmlns:android="http://schemas.android.com/apk/res/android">
            <application android:networkSecurityConfig="@xml/network_security_config" />
        </edit-config>
        <resource-file src="resources/android/xml/network_security_config.xml" target="app/src/main/res/xml/network_security_config.xml" />
        </platform>
```

Step 2: copy `create_network_config.js` file to your project directory where is your package.json

Step 3: Open `create_network_config.js` file and change domain name.

Step 4: In `package.json` add below script
```
  "scripts": {
    "clearTextTraffic": "node create_network_config"
  },
```
# Make sure that you add platform before executing this command


Step 4: Execute `npm run clearTextTraffic` in terminal

Feel free to report if this does not work
