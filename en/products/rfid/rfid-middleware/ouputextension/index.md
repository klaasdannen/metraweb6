---
path: "/"
title: "Output Extensions"
rank: "40"
section: "RFID"
group: "RFID Middleware"
type: "product"
featuredImage: output.png
bulletPoints:
  []
---
In the operation of the IoT Engine different events are created depending on the type of the installed plugins. These can be entering or leaving an IPS zone, scanning an RFID transponder, etc. These events can be stored externally via outputs or forwarded to other software. In the basic version, only a CSV file can be specified as output into which the events are stored. These can then be further processed with an external program (eg MS Excel or OpenOffice). If other interfaces are required, they can be installed via output extensions.

Currently the following outputs are available:

* REST
* SQL Database
* MQTT
* AMQP
* TCP Server/Client
