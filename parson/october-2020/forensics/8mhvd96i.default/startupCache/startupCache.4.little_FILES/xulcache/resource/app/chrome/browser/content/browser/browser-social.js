   X   ¹   a>   20170118123726      ¹                                             chrome://browser/content/browser-social.js     *H                                  :  È
Ê õ    SocialUI   SocialShare1   SocialActivationListener   ÿÿÿÿ      SocialUI   SocialShare1   SocialActivationListener                 C   É     ¹   &   þ       $                          /  %H  
                 ¹W   Q    ¸   
V   =       : Q    ¸   
V   =      : QÖ   Y   B]      ]      ]      ]      ]   	   ]   
   ]      a      	a      
]      ]      ]      QÖ   [      ]      ]      ]      QÖ   Y      a      a   @]      a      a      ]      ]      a      ]      ]      ]      ]      ]      a      ]       ]   !    ]   "   !]   #   "]   $   #]   %   QÞÞÊÊ2Ê>ÊFÊJÊOÊdÊrÊyÊ}Ê  Ð  ÊÊÊÐ  ÎÊÊ  ×Ê  ÜÊÊ  èÊ  óÊ Ê Ê #Ê -Ê 6Ê =Ê ^Ê jÊÊ sÊ Ê áÊ íÐ õ    XPCOMUtils!   defineLazyGetter!   OpenGraphBuilder)   DynamicResizeWatcher   SocialUI   _initialized	   init   uninit   observe#   _providersChanged   showLearnMoreA   closeSocialPanelForLinkTraversal   _chromeless   enabled   canSharePage   onCustomizeEnd   updateState1   SocialActivationListener   receiveMessage   SocialShare   _dynamicResizer   anchor   _currentAnchor   panel   iframe   _createFrame   messageManager   handleEvent'   getSelectedProvider   createTooltip)   populateProviderMenu   shareButton   _onclick   onShowing   onHidden   sharePage   showDirectory   _openPanel    ÿÿÿÿ      .this                    C   7       ¹                                        s  Ü                      Q[       Q    ¸   
=   V   : QV   5   ÉÉÊÙÉ    Cu   import=   resource:///modules/Social.jsm!   OpenGraphBuilder    ÿÿÿÿ                           tmp                               0   ÿÿÿÿ    4                     C   7       ¹                                        "                        Q[       Q    ¸   
=   V   : QV   5   ÉÉÊÙÉ    Cu   import=   resource:///modules/Social.jsm)   DynamicResizeWatcher    ÿÿÿÿ                           tmp                               0   ÿÿÿÿ    4                       SocialUI_initC   Ø      ¹      6                                
                    ¹   Q   Q   5       
æÉæ   ¸   
=   :    QV   ¸   
=   C: QV   ¸   
=   C: Q   5   ¸   	
   =   
B: Q   ¸   
   : Q   ¸   
:  Q   ¸   
:  ¸   
    : Q   C6    QÉÐ/ ÑÈÕÕ$à&ÕÐ)à.Í    _initialized   window-   getGroupMessageManager   social   loadFrameScriptG   chrome://browser/content/content.jsU   chrome://browser/content/social-content.js   Services   obs   addObserver1   social:providers-changed   CustomizableUI   addListener1   SocialActivationListener	   init   Social	   then   ÿÿÿÿ      SocialUI_init                        .this                     mm                      SocialUI_init/<e         ¹      
                                   ³  ú  )                  T     æ   ¸    
:  QæÑ #   _providersChanged    ÿÿÿÿ      update              Ê   ÿÿÿÿ                           SocialUI_uninitC   g      ¹   	   #                                   a  O  2                ¹W   QV   5        ææ   5   ¸   
V   =   : Q   ¸   
V   : Q   ¸   
:  QV   B6    QÊ<6Þ8ÔÐ;Ë    _initialized   Services   obs   removeObserver1   social:providers-changed   CustomizableUI   removeListener1   SocialActivationListener   uninit   ÿÿÿÿ      SocialUI_uninit                        .this                   !   SocialUI_observeC  1      ¹                                        v    >                ¹W   QT x=    y   æz   æV   ¸   
:  Q   æk&vÌÏXD 1   social:providers-changed#   _providersChanged   ÿÿÿÿ   !   SocialUI_observe                        subject   topic	   data   .this                 5   SocialUI._providersChangedc          ¹                                          %  U  F                      ¸   
:  QÐ    SocialShare)   populateProviderMenu    ÿÿÿÿ                        -   SocialUI.showLearnMorec   C       ¹                                         q  ð  J                    Q    5   ¸   
=   : =      Q      V   =   : QÉÖÎØ    Services   urlFormatter   formatURLPref'   app.support.baseURL   social-api   openUILinkIn   tab    ÿÿÿÿ                           url                <   ÿÿÿÿ          S   SocialUI.closeSocialPanelForLinkTraversalc  é       ¹      C                                   e  O                      QÇ   T  =    D   æQT  =   æ   
æÈæT 5      QV   ¸   
   5   : ¸   
   5   : ¸   
   5   : 5   	  QV  5   
   Q   5   ¸   
=   : E   æQ      5   ræ   æ          >: QæÈQébUÍÕÊÊVÊXÊVÍZÏÖÊÑ^Ð`^b       _self   ownerGlobal   QueryInterface   Ci+   nsIInterfaceRequestor   getInterface!   nsIWebNavigation   nsIDocShell%   chromeEventHandler   parentNode   classList   contains   social-panel+   nsIDOMXULPopupElement   setTimeout    ÿÿÿÿ      target   linkNode                     win   container   containerParent                   W   SocialUI.closeSocialPanelForLinkTraversal/<e          ¹                                          "  V  ^                        ¸    
:  QÕ    hidePopup    ÿÿÿÿ                    Ù   ÿÿÿÿ    2                       get _chromeless        ¹      #                         
         y  »  d                 ¹W   Q    Q    5     QV  ¸   
=   : ¸   
=   : D   )æQV  ¸   
=   : ¸   
=   : æ  QV   %   QV   V  6   QV  ÉÉfÊÏiÐÙÐØmÊÎ    document   documentElement   getAttribute   chromehidden   includes   extrachrome   toolbar   _chromeless    ÿÿÿÿ      .this                      docElem   chromeless                  ÿÿÿÿ                           get enabled  +      ¹                                         Ë  e  r                 ¹W   QV   5       æBæ   5   Ù   >tÉwvÑ    _chromeless   Social   providers   length    ÿÿÿÿ      .this                   +   SocialUI.canSharePagec  8       ¹                                           Ô  y                  T  E   2æQT  ¸    
=   : D   æQT  ¸    
=   : æÙÙ    schemeIs	   http   https    ÿÿÿÿ   	   aURI                  /   SocialUI.onCustomizeEndc        ¹   
   0                                 ñ  ª  }                 ¹W   Q    QT         
æÉæV   ¸   
   5   :   Q   5     QV     CæV     æV  ¸   
=   : Q   æV  ¸   
=   =   	: QæÉÓ    ÕÈÏÚÛ    window   canSharePage   gBrowser   currentURI   SocialShare   shareButton   removeAttribute   disabled   setAttribute	   true    ÿÿÿÿ      aWindow   .this                    canShare   shareButton                  ÿÿÿÿ    "                    )   SocialUI.updateStatec   2      ¹                                         3                     ¹W   Q        =   V   ¸   
   5   : : Qä,ÿÿÿÔ '   goSetCommandEnabled)   Social:PageShareable   canSharePage   gBrowser   currentURI    ÿÿÿÿ      .this                   ;   SocialActivationListener.initc          ¹                                         á  +                   ¹W   Q    ¸   
=   V   : QÙ    messageManager%   addMessageListener#   Social:Activation    ÿÿÿÿ      .this                   ?   SocialActivationListener.uninitc          ¹                                         ?                     ¹W   Q    ¸   
=   V   : QÙ    messageManager+   removeMessageListener#   Social:Activation    ÿÿÿÿ      .this                   O   SocialActivationListener.receiveMessagec  ©       ¹      :                                ¨  Á                          QT  5       QT  5     QV      6   Q  QV     5   E    æQ   5   ¸   
=   : æ   æ[    C]   	C]   
W  Qæ   ¸   
V      V  : QÉÎÍÍÏì)ÌÕ  Ê  ¨  Ë 	   json   target   window   SocialShare   iframe   Services   prefs   getBoolPrefG   social.share.activationPanelEnabled%   bypassContentCheck%   bypassInstallPanel   Social   installProvider    ÿÿÿÿ      aMessage                  	   data   browser   options                       %   bypassContentCheck      %   bypassInstallPanel                S   SocialActivationListener.receiveMessage/<c         ¹                                       º  ²  ¨                      ¸   
T  5       : QÝ  Ê    Social%   activateFromOrigin   origin    ÿÿÿÿ      manifest                  W   SocialActivationListener.receiveMessage/</<c  m      ¹      S                        /            ª  ©                 T  5      æ   Q   ¸   
=   :    QV   5    E   æQ   5   5   =   æ   :æ   ¸   	
=      5   
: Q   ¸   
   : Qæ   ¸   
:  Q   5   ¸   
=   =   : Q   5   ¸   
=   T  5   : Q   ¸   
:  Q   5   5   =      æ   ¸   
T  5   : QæÉæT  5      =æ   ¸   
T  5   [       5   5   =   ]   : QæÈ  ¯Ñ	ÈçßÖ  »
Ð
ß
â
ÐÕÛÈ
Ù1ÚÿÿÿÏ    shareURL   CustomizableUI   getWidget'   social-share-button   areaType   SocialShare   panel   state	   open   addWidgetToArea   AREA_NAVBAR   SocialUI   onCustomizeEnd   window   _createFrame   iframe   setAttribute   src;   data:text/plain;charset=utf8,   origin)   populateProviderMenu   sharePage#   postActivationURL   gBrowser   loadOneTab   inBackground    ÿÿÿÿ      provider                     widget                          inBackground               ÿÿÿÿ         ÿÿÿÿ             	   init         uninit         receiveMessage                 '   get _dynamicResizer  2      ¹                                         ê  k  Ï                 ¹W   QV   %    QV      A,  R  6    QV   5    ÊÎÉÉ    _dynamicResizer)   DynamicResizeWatcher    ÿÿÿÿ      .this                      get anchor  <       ¹                                           }  ×                    Q    ¸   
=   :    QV   ¸   
   : 5   ÉÉÑ	ÈÐÈ    CustomizableUI   getWidget'   social-share-button   forWindow   window   anchor    ÿÿÿÿ                           widget                5   ÿÿÿÿ    9                       get panel         ¹      
                                    ô  6  Þ                      ¸   
=   : Ñ    document   getElementById%   social-share-panel    ÿÿÿÿ                           get iframe        ¹      
                                   E    â                 ¹W   QV   5    5   5   Ó    panel   lastChild   firstChild    ÿÿÿÿ      .this                   %   SocialShare.uninitc   ¥      ¹   	                                        n   è                 ¹W   QV   5       æ  QV   5     QV  ¸   
=   V   : QV  ¸   
=   V   : QV  ¸   
=   V   : QV   5    ¸   
=   V   : QV   5    ¸   
:  QÉæÉ
ÎØØØÝÖ    iframe   messageManager+   removeMessageListener'   PageVisibility:Show'   PageVisibility:Hide+   Social:DOMWindowClose'   removeEventListener	   load   remove    ÿÿÿÿ      .this                      mm                  ÿÿÿÿ          1   SocialShare._createFramec   â     ¹   $   s                        &            Ô$  ó          	       ¹W   Q      QV   5      QV   5      
æÉæV   5    B6   Q   ¸   
=   :   QV  ¸   
=   =   : QV  ¸   
=   	=   
: QV  ¸   
=   =   : QV  ¸   
=   =   : QV  ¸   
=   =   : QV  ¸   
=   =   : QV  ¸   
=   =   : QV  ¸   
=   =   : QV  5   ¸   
V  : QV   5     QV  ¸   
=   V   : QV  ¸   
=   V   : QV  ¸   
=   [    =   ]   : QV  ¸    
=   !V   C: QV  ¸   
=   "V   : QV   ¸   #
:  QÉÎÎÉ   ÷ÐÑ	ÈÙÙÙÙÙÙÙÙØÎØØÐÊ ÙØÐ    panel   iframe   hidden   document   createElement   browser   setAttribute	   type   content   class%   social-share-frame   context-   contentAreaContextMenu   tooltip   aHTMLTooltip)   disableglobalhistory	   true	   flex   1   message'   messagemanagergroup   social   lastChild   appendChild   messageManager%   addMessageListener'   PageVisibility:Show'   PageVisibility:Hide!   sendAsyncMessage%   Social:SetErrorURL}   about:socialerror?mode=compactInfo&origin=%{origin}&url=%{url}   template!   addEventListener	   load+   Social:DOMWindowClose)   populateProviderMenu    ÿÿÿÿ      .this                      panel   iframe   mm                         template             Í  ÿÿÿÿ    4                    %   get messageManager  4      ¹                                         ë$  ø%                  ¹W   QV   5    ¸   
   5   5   : 5   5   ßÍ    iframe   QueryInterface   Components   interfaces'   nsIFrameLoaderOwner   frameLoader   messageManager    ÿÿÿÿ      .this                   5   SocialShare.receiveMessagec  ©      ¹      /                                 &  '                  ¹W   Q  QV   5      QT  5   x=   y   !æ=   y   >æ=   y   Næz   bæ   5   ¸   
V  5   V  : Q   :æ   5   ¸   	
:  Q   æV   5   
¸   
:  Q   æÉÎÈh  vËpËpÌâXÕXÔX    iframe	   name'   PageVisibility:Show'   PageVisibility:Hide+   Social:DOMWindowClose   SocialShare   _dynamicResizer   start   parentNode	   stop   panel   hidePopup    ÿÿÿÿ      aMessage   .this                    iframe                  ÿÿÿÿ          /   SocialShare.handleEventc  r      ¹                                        ¦'  ¬(  #                ¹W   QT  5    x=   y   æz   VæV   5   5   ¸   
=   : QV   5      )æ   5   ¸   	
=   
V   5   : QæÈhbvÌÞÉ
ä 	   type	   load   iframe   parentNode   removeAttribute   loading   currentShare   SocialShare   messageManager!   sendAsyncMessage)   Social:OpenGraphData    ÿÿÿÿ      event   .this                 ?   SocialShare.getSelectedProviderc   p      ¹                                        Î(  µ)  -                ¹W   Q    Q  QV   5    E   æQV   5    ¸   
=   : æ  QV     æ   ¸   
V  : W  QæV  ÉÉÊå$ÉÐÉ    iframe   getAttribute   origin   Social-   _getProviderFromOrigin    ÿÿÿÿ      .this                      provider%   lastProviderOrigin               _   ÿÿÿÿ    m                    3   SocialShare.createTooltipc         ¹                                        Ñ)  Ã*  6                     QT  5       Q   ¸   
V   5   ¸   
=   : :   QV   5   ¸   
=   V  5   	: QV   5   
¸   
=   V  5   : QÉÊÍá)ÿÿÿâÈâã    target   Social-   _getProviderFromOrigin   triggerNode   getAttribute   origin   firstChild   setAttribute   value	   name   lastChild    ÿÿÿÿ      event                     tt   provider             
   ~   ÿÿÿÿ          A   SocialShare.populateProviderMenuc   t     ¹   $   ¬                       3        æ*  A0  =                ¹W   Q        QV   5        
æÉæ   5   ¸   
    :   Q   ¸   
=   :   Q   ¸   
=   :   Qæ   mV  ¸   
V  5   	: QãV  5   	V  ÿÿÿ×æV   ¸   

:    Q  QV  -Á
    <m  Q5     Q  Q   ¸   
=   :   QV  ¸   
=   =   : QV  ¸   
=   =   : QV  ¸   
=   =   : QV  ¸   
=   V  5   : QV  ¸   
=   =   : QV  ¸   
=   V  5   : QV  ¸   
=   V  5   : QV  ¸   
=   =   : QV  V     æV   V  6   QæV  ¸   
V  : QÉãQ¸    
:   5   !ÿÿþ³æ ÉV   5       æV   V  6   QæV   5   ¸   
=   "=   #: QÉÒÊ \ @×ÈÑÈÑÉ(. EØ EÖËÈÓ8 RÒ	
Ñ	ÈÙÙÙÝÙÝÝÙÉÏÔ IËÿÿÿëÕ XÊÏß    iframe   Social   providers   filter   document   getElementById;   social-share-provider-buttons%   add-share-provider   removeChild   lastChild'   getSelectedProvider   value   createElement   toolbarbutton   setAttribute   classK   toolbarbutton-1 share-provider-button	   type   radio   group   share-providers   image   iconURL   tooltip)   share-button-tooltip   origin   label	   name   oncommandg   SocialShare.sharePage(this.getAttribute('origin'));   defaultButton   appendChild	   next	   done   checked	   true    ÿÿÿÿ      .this                      providers	   hbox   addButton!   selectedProvider                     provider                     button                  W   SocialShare.populateProviderMenu/providers<u  
       ¹                                         ;+  J+  @                 T  5    1È    shareURL    ÿÿÿÿ      p           Ø   R      ~   .         [  ÿÿÿÿ    +             Ì   i         ö                     get shareButton  t       ¹      ;                         
          U0  ×1  ^                   Q    5       
æ@Éæ   ¸   
=   :    QV    D   æQV   5    æ   
æ@ÉæV   ¸   
    : 5   ÉÉË h dÑ	ÈÌË gÐÈ    window   CustomizableUI   getWidget'   social-share-button   areaType   forWindow	   node    ÿÿÿÿ                           widget                m   ÿÿÿÿ                  U              q                    )   SocialShare._onclickc   &       ¹                                          î1  =2  j                     5   ¸   
=   : ¸   
>: Qå    Services   telemetry!   getHistogramById'   SOCIAL_PANEL_CLICKS   add    ÿÿÿÿ                        +   SocialShare.onShowingc   Y      ¹   	                                      U2  ä2  n                ¹W   QV   5    D   æQV   5   æ¸   
=   =   : QV   5   ¸   
=   V   5   C: Qïã    _currentAnchor   anchor   setAttribute	   open	   true   iframe!   addEventListener   click   _onclick    ÿÿÿÿ      .this                   )   SocialShare.onHiddenc   Å      ¹      &                                   û2  5  s                ¹W   QV   5    D   æQV   5   æ¸   
=   : QV   @6    QV   5   B6   QV   5   ¸   
=   V   5   C: QV   5   ¸   	
=   
=   : QV   5   ¸   
=   : QV   @6   QV   5   ¸   
:  QêËÐãÞÙËÔ    _currentAnchor   anchor   removeAttribute	   open   iframe!   docShellIsActive'   removeEventListener   click   _onclick   setAttribute   src;   data:text/plain;charset=utf8,   messageManager!   sendAsyncMessage#   Social:ClearFrame   currentShare'   purgeSessionHistory    ÿÿÿÿ      .this                   +   SocialShare.sharePagec  *     ¹   5   +                       l       %5  ^E        	          ¹   Q                   QÇ     ¸    
:  Q  5      Q     æ     æ  5   æ   Q      +æ   5   ¸   
   5   @@:    æ   5   æ  Q   	¸   

V  :     
æÈæ   Q    D   æQV     5   æ   Yæ   ¸   
=          : Q   5   5   ¸   
=   @[     ]   : QÈæ   5    E   æQ  æ   Yæ   ¸   
=         : Q   5   5   ¸   
=   @[     ]   : QÈæ     6   Q  Q     $æ   ¸   
  : W  Q   æ  ¸   
:  W  QæV   D   æQV  5    æ   æ  ¸   
  : QÈæ   ¸   
=   :   QV  ¸   
=   V  5   =    :   QV     æV  C6   !Qæ   "¸   #
V  5      :   Q  5   $¸   %
:  QV  ¸   &
=   ':   QV     æV  %   (QæV  V   ¸   )
=   *:   QV     `æ  5   $¸   +
V   5   ,V   V  : QV   C6   -Q   .5   ¸   
=   /  5   : Q   $æV   5   ,¸   0
=   1=   2: QæV   ¸   3
:  Q   5   ¸   
V  @@:   QV   ¸   0
=   V  5   : QV   ¸   0
=   *V  : Q  ¸   4
  : QÈëÐÏ â&ãÉÐÐ ß Ýà £á]Êÿÿÿ£ ß §Øà ­áaÊÿÿÿ ß °ÐÑÎÌÉÌËÕ ß ¼ÑÈàÈÌÚÈÕÐÈË ÎÔ!É[æËêßÏ×ÈÝØÖ    _createFrame   iframe   currentShare   Services   io   newURI   url   gBrowser   currentURI   SocialUI   canSharePage   messageManager%   addMessageListener7   PageMetadata:PageDataResult   selectedBrowser!   sendAsyncMessage1   PageMetadata:GetPageData   target   microformats?   PageMetadata:MicroformatsResult9   PageMetadata:GetMicroformats   Social-   _getProviderFromOrigin'   getSelectedProvider   shareURL   showDirectory   document   getElementById;   social-share-provider-buttons   querySelector   [origin='   origin   ']   checked!   OpenGraphBuilder'   generateEndpointURL   _dynamicResizer	   stop   getPageSize   share   width   getAttribute   src   start   parentNode!   docShellIsActive   SocialShare)   Social:OpenGraphData   setAttribute   loading	   true'   purgeSessionHistory   _openPanel    ÿÿÿÿ      providerOrigin   graphData   target   anchor   .this                    iframe   pageData   sharedURI   _dataFn   provider	   hbox   btn   shareEndpoint	   size   endpointMatch   uri       	            ;   SocialShare.sharePage/_dataFne  £       ¹                                        E:  Ý;                     Q    ¸   
=         : QT  5      Q     Fæ  Q  K   $m  Q  V   V    V  78QãQLMÿÿÿÜæQNÉæ  ¸   
  V       : QÉßÍÎ0)Ìãä    messageManager+   removeMessageListener7   PageMetadata:PageDataResult	   json   sharePage    ÿÿÿÿ      msg                     pageData                      p            P   +            ÿÿÿÿ   C   :                       target                ;   SocialShare.sharePage/_dataFne  \       ¹                                         &=  þ=  ¨                     ¸   
=         : Q      T  5   6   Q  ¸   
         : QßØä    messageManager+   removeMessageListener?   PageMetadata:MicroformatsResult   microformats	   data   sharePage    ÿÿÿÿ      msg                        target          2   ÷  ÿÿÿÿ    Ö              T             Æ             R                   3   SocialShare.showDirectoryc  ¬      ¹      1                                 zE  ÄF  á                ¹W   Q  QV   ¸    
:  QV   5     QV  ¸   
=   : =      
æÉæV  ¸   
=   : QV  5   ¸   
=   	=   
: QV  ¸   
=   =   : QV   ¸   
T  : QÉÏÎÐÉ ë æÔÞÙÓ    _createFrame   iframe   getAttribute   src/   about:providerdirectory   removeAttribute   origin   parentNode   setAttribute   loading	   true   _openPanel    ÿÿÿÿ      anchor   .this                    iframe                  ÿÿÿÿ    K                    -   SocialShare._openPanelc        ¹                                        ÝF  H  í         	       ¹W   QV   T  D   æQV   5   æ6    Q   ¸   
V   5    =   =   : U  QV   5   ¸   
T  =   >>BB: Q   	5   
¸   
=   : ¸   
>: QÞß	àå    _currentAnchor   anchor   document=   getAnonymousElementByAttribute   class%   toolbarbutton-icon   panel   openPopup+   bottomcenter topright   Services   telemetry!   getHistogramById-   SOCIAL_TOOLBAR_BUTTONS   add    ÿÿÿÿ      anchor   .this       