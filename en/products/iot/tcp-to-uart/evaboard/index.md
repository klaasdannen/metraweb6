---
layout: product_page
title: "TUC Evaluation Board"
rank: 10
section: "IoT"
group: "TCP to UART"
description: "Evaluation Board for the TUC TCP-to-UART Module"
featuredImage: evaboard.jpg
bulletPoints:
  - TCP/IP without own development
  - GPIOs via Ethernet
  - Smallest SMD Module
linked_files:
  - Ds_tuc
  - Doc_tuc2protocol
  - Doc_tuc2integrationguide
  - Sw_tucconfigmanager
---
More and more devices now need a connection to a data network to communicate with other devices in their environment. One of the most popular interface today is Ethernet which can be found almost anywhere. But the protocol requires high data rates and CPU speed and is there not available on most simple microcontrollers where easier interfaces, such as UART are more common. The metraTec TCP/IP to UART converter (TUC) solves this problem with a small module.

As a SMD component the TUC can be soldered to your PCB automatically in a reflow process and with 40 x 26 mm it only needs little space on your mainboard. Besides the possibility to send UART data over Ethernet the module also has 8 freely configurable GPIOs which can be set and read directly via Ethernet. If you connect the module to a PoE Network the voltage is directly available on two pins which makes building PoE-ready devices very easy. For a quick and easy integration a free Eagle-Library is available.

Besides its hardware features, the TUC compels with several easy configuration options. On the one hand there is a small Java program which can find and configure all TUC modules in a network - running on all operating systems that support Java. On the other hand the module can be configured directly by the host microcontroller using a 2nd UART connection. This enables your product to configure the Ethernet module as if it where a natural part of your product. This option increases the ease of use of the module and ultimately customer satisfaction.

For a quick test of our TUC module, we also offer a small Evalution Board.
