   U   ¹   S   20170118123726>      ¹                                              chrome://browser/content/browser-refreshblocker.js     Þ                        Ö    [       ]      ]      ]      ]       QÊÊÊÊ1ÐT    RefreshBlocker	   init   uninit   handleEvent   block   ÿÿÿÿ      RefreshBlocker                	   init@         ¹                                         õ  4                   ¹W   Q    ž   
=   V   : QÙ    gBrowser!   addEventListener   RefreshBlocked    ÿÿÿÿ      .this                      uninit@         ¹                                         ?                     ¹W   Q    ž   
=   V   : QÙ    gBrowser'   removeEventListener   RefreshBlocked    ÿÿÿÿ      .this                   5   RefreshBlocker.handleEventc  ;      ¹                                                             ¹W   QT  5    =      %æV   ž   
T  5   T  5   : QæÎà 	   type   RefreshBlocked   block   originalTarget   detail    ÿÿÿÿ      event   .this                    block@ w      ¹      n                                N  Ú  1                            Q    ž   
=   :    QV   ž   
=   :   Q   ž   
   5      æ=      æ=   	æZ   V  `    :   Q   
ž   
   :   QV  ž   
=   :   QV     æV  V  6   Q   ¡æ      Q   ž   
=   :   Q   ž   
=   :   QZ   [   V  ]   V  ]       ]   `      QV  ž   
V  =   =   V  5   V  : QÉæÉÖÑÈÐÈÖÑ+É5È9ÑÈÐÈ<ÔÎ
ÑÈ
ÑÈD
ÉÉÔNÔÉNS    document   getElementById   bundle_brand   getString   brandShortName!   gNavigatorBundle%   getFormattedString   sameURI7   refreshBlocked.refreshLabel9   refreshBlocked.redirectLabel   gBrowser%   getNotificationBox1   getNotificationWithValue   refresh-blocked   label/   refreshBlocked.goButtonC   refreshBlocked.goButton.accesskey   accessKey   callback%   appendNotification=   chrome://browser/skin/Info.png)   PRIORITY_INFO_MEDIUM    ÿÿÿÿ      browser	   data                    brandBundle   brandShortName   message   notificationBox   notification                   #   refreshButtonText-   refreshButtonAccesskey   buttons                  /   block/buttons<.callbackc  1       ¹                                         
  ³
  G                     5       %æ   5    ž   
=      : QæÊàK    messageManager!   sendAsyncMessage-   RefreshBlocker:Refresh    ÿÿÿÿ      notification   button                        label         accessKey         callback             `  ÿÿÿÿ   ç                       	   init         uninit         handleEvent         block       