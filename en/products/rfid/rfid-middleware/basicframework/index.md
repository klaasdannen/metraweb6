---
path: "/"
title: "IoT Engine Framework / Dashboard"
rank: "10"
section: "RFID"
group: "RFID Middleware"
type: "product"
featuredImage: iot.png
bulletPoints:
  []
---
This plugin includes the core functionality of the framework that allows all other plugins to work. Besides internal functionality it provides the web-based Dashboard, which all other components use to display their information. It can be used from any modern browser, including tablet and mobile phone based browsers. It includes a user management (username/password) with different user groups and flexible access rights. Some users might only be allowed to search for objects, other users might change data, others can edit the entire system configuration. The customer can configure these rights and add/delete users as needed through the web interface.

All configuration changes incl. adding and deleting rights of users are logged to a secure log file (audit log) that allows a full roll-back of any change if necessary. The core-plugin also manages system updates with a graphical updates system that allows each plugin to be updated separately with a simple drag and drop in the browser. In case of problems, old versions can be restored as well directly inside the web dashboard. All actions, events and hardware and software problems are automatically logged by the core-plugin and can be reviewed via the browser (no need to log in to a server console) and sent to the metraTec support with a single button for quick and easy support.

The core system (Core Plugin) provides all general functions of the IoT Engine and is a prerequisite for all further plugins. These features are:

* User-Management
* Logging
* Web-GUI
* CSV Inputs
* CSV and Email Output
