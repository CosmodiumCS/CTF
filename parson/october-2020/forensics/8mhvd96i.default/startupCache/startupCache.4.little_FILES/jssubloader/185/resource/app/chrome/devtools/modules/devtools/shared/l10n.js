   20170118123726-  -   š      |                                `  Q       / *   T h i s   S o u r c e   C o d e   F o r m   i s   s u b j e c t   t o   t h e   t e r m s   o f   t h e   M o z i l l a   P u b l i c 
   *   L i c e n s e ,   v .   2 . 0 .   I f   a   c o p y   o f   t h e   M P L   w a s   n o t   d i s t r i b u t e d   w i t h   t h i s 
   *   f i l e ,   Y o u   c a n   o b t a i n   o n e   a t   h t t p : / / m o z i l l a . o r g / M P L / 2 . 0 / .   * / 
 " u s e   s t r i c t " ; 
 
 c o n s t   p a r s e P r o p e r t i e s F i l e   =   r e q u i r e ( " d e v t o o l s / s h a r e d / n o d e - p r o p e r t i e s / n o d e - p r o p e r t i e s " ) ; 
 c o n s t   {   s p r i n t f   }   =   r e q u i r e ( " d e v t o o l s / s h a r e d / s p r i n t f j s / s p r i n t f " ) ; 
 
 c o n s t   p r o p e r t i e s M a p   =   { } ; 
 
 / * * 
   *   M e m o i z e d   g e t t e r   f o r   p r o p e r t i e s   f i l e s   t h a t   e n s u r e s   a   g i v e n   u r l   i s   o n l y   r e q u i r e d   a n d 
   *   p a r s e d   o n c e . 
   * 
   *   @ p a r a m   { S t r i n g }   u r l 
   *                 T h e   U R L   o f   t h e   p r o p e r t i e s   f i l e   t o   p a r s e . 
   *   @ r e t u r n   { O b j e c t }   p a r s e d   p r o p e r t i e s   m a p p e d   i n   a n   o b j e c t . 
   * / 
 f u n c t i o n   g e t P r o p e r t i e s ( u r l )   { 
     i f   ( ! p r o p e r t i e s M a p [ u r l ] )   { 
         p r o p e r t i e s M a p [ u r l ]   =   p a r s e P r o p e r t i e s F i l e ( r e q u i r e ( ` r a w ! $ { u r l } ` ) ) ; 
     } 
 
     r e t u r n   p r o p e r t i e s M a p [ u r l ] ; 
 } 
 
 / * * 
   *   L o c a l i z a t i o n   c o n v e n i e n c e   m e t h o d s . 
   * 
   *   @ p a r a m   s t r i n g   s t r i n g B u n d l e N a m e 
   *                 T h e   d e s i r e d   s t r i n g   b u n d l e ' s   n a m e . 
   * / 
 f u n c t i o n   L o c a l i z a t i o n H e l p e r ( s t r i n g B u n d l e N a m e )   { 
     t h i s . s t r i n g B u n d l e N a m e   =   s t r i n g B u n d l e N a m e ; 
 } 
 
 L o c a l i z a t i o n H e l p e r . p r o t o t y p e   =   { 
     / * * 
       *   L 1 0 N   s h o r t c u t   f u n c t i o n . 
       * 
       *   @ p a r a m   s t r i n g   n a m e 
       *   @ r e t u r n   s t r i n g 
       * / 
     g e t S t r :   f u n c t i o n   ( n a m e )   { 
         l e t   p r o p e r t i e s   =   g e t P r o p e r t i e s ( t h i s . s t r i n g B u n d l e N a m e ) ; 
         i f   ( n a m e   i n   p r o p e r t i e s )   { 
             r e t u r n   p r o p e r t i e s [ n a m e ] ; 
         } 
 
         t h r o w   n e w   E r r o r ( " N o   l o c a l i z a t i o n   f o u n d   f o r   [ "   +   n a m e   +   " ] " ) ; 
     } , 
 
     / * * 
       *   L 1 0 N   s h o r t c u t   f u n c t i o n . 
       * 
       *   @ p a r a m   s t r i n g   n a m e 
       *   @ p a r a m   a r r a y   a r g s 
       *   @ r e t u r n   s t r i n g 
       * / 
     g e t F o r m a t S t r :   f u n c t i o n   ( n a m e ,   . . . a r g s )   { 
         r e t u r n   s p r i n t f ( t h i s . g e t S t r ( n a m e ) ,   . . . a r g s ) ; 
     } , 
 
     / * * 
       *   L 1 0 N   s h o r t c u t   f u n c t i o n   f o r   n u m e r i c   a r g u m e n t s   t h a t   n e e d   t o   b e   f o r m a t t e d . 
       *   A l l   n u m e r i c   a r g u m e n t s   w i l l   b e   f i x e d   t o   2   d e c i m a l s   a n d   g i v e n   a   l o c a l i z e d 
       *   d e c i m a l   s e p a r a t o r .   O t h e r   a r g u m e n t s   w i l l   b e   l e f t   a l o n e . 
       * 
       *   @ p a r a m   s t r i n g   n a m e 
       *   @ p a r a m   a r r a y   a r g s 
       *   @ r e t u r n   s t r i n g 
       * / 
     g e t F o r m a t S t r W i t h N u m b e r s :   f u n c t i o n   ( n a m e ,   . . . a r g s )   { 
         l e t   n e w A r g s   =   a r g s . m a p ( x   = >   { 
             r e t u r n   t y p e o f   x   = =   " n u m b e r "   ?   t h i s . n u m b e r W i t h D e c i m a l s ( x ,   2 )   :   x ; 
         } ) ; 
 
         r e t u r n   t h i s . g e t F o r m a t S t r ( n a m e ,   . . . n e w A r g s ) ; 
     } , 
 
     / * * 
       *   C o n v e r t s   a   n u m b e r   t o   a   l o c a l e - a w a r e   s t r i n g   f o r m a t   a n d   k e e p s   a   c e r t a i n 
       *   n u m b e r   o f   d e c i m a l s . 
       * 
       *   @ p a r a m   n u m b e r   n u m b e r 
       *                 T h e   n u m b e r   t o   c o n v e r t . 
       *   @ p a r a m   n u m b e r   d e c i m a l s   [ o p t i o n a l ] 
       *                 T o t a l   d e c i m a l s   t o   k e e p . 
       *   @ r e t u r n   s t r i n g 
       *                   T h e   l o c a l i z e d   n u m b e r   a s   a   s t r i n g . 
       * / 
     n u m b e r W i t h D e c i m a l s :   f u n c t i o n   ( n u m b e r ,   d e c i m a l s   =   0 )   { 
         / /   I f   t h i s   i s   a n   i n t e g e r ,   d o n ' t   d o   a n y t h i n g   s p e c i a l . 
         i f   ( n u m b e r   = = =   ( n u m b e r | 0 ) )   { 
             r e t u r n   n u m b e r ; 
         } 
         / /   I f   t h i s   i s n ' t   a   n u m b e r   ( a n d   y e s ,   ` i s N a N ( n u l l ) `   i s   f a l s e ) ,   r e t u r n   z e r o . 
         i f   ( i s N a N ( n u m b e r )   | |   n u m b e r   = = =   n u l l )   { 
             r e t u r n   " 0 " ; 
         } 
 
         l e t   l o c a l i z e d   =   n u m b e r . t o L o c a l e S t r i n g ( ) ; 
 
         / /   I f   n o   g r o u p i n g   o r   d e c i m a l   s e p a r a t o r s   a r e   a v a i l a b l e ,   b a i l   o u t ,   b e c a u s e 
         / /   p a d d i n g   w i t h   z e r o s   a t   t h e   e n d   o f   t h e   s t r i n g   w o n ' t   m a k e   s e n s e   a n y m o r e . 
         i f   ( ! l o c a l i z e d . m a t c h ( / [ ^ \ d ] / ) )   { 
             r e t u r n   l o c a l i z e d ; 
         } 
 
         r e t u r n   n u m b e r . t o L o c a l e S t r i n g ( u n d e f i n e d ,   { 
             m a x i m u m F r a c t i o n D i g i t s :   d e c i m a l s , 
             m i n i m u m F r a c t i o n D i g i t s :   d e c i m a l s 
         } ) ; 
     } 
 } ; 
 
 f u n c t i o n   g e t P r o p e r t i e s F o r N o d e ( n o d e )   { 
     l e t   b u n d l e E l   =   n o d e . c l o s e s t ( " [ d a t a - l o c a l i z a t i o n - b u n d l e ] " ) ; 
     i f   ( ! b u n d l e E l )   { 
         r e t u r n   n u l l ; 
     } 
 
     l e t   p r o p e r t i e s U r l   =   b u n d l e E l . g e t A t t r i b u t e ( " d a t a - l o c a l i z a t i o n - b u n d l e " ) ; 
     r e t u r n   g e t P r o p e r t i e s ( p r o p e r t i e s U r l ) ; 
 } 
 
 / * * 
   *   T r a n s l a t e   e x i s t i n g   m a r k u p   a n n o t a t e d   w i t h   d a t a - l o c a l i z a t i o n   a t t r i b u t e s . 
   * 
   *   H o w   t o   u s e   d a t a - l o c a l i z a t i o n   i n   m a r k u p : 
   * 
   *       < d i v   d a t a - l o c a l i z a t i o n = " c o n t e n t = m y C o n t e n t ; t i t l e = m y T i t l e " / > 
   * 
   *   T h e   d a t a - l o c a l i z a t i o n   a t t r i b u t e   i d e n t i f i e s   a n   e l e m e n t   a s   b e i n g   l o c a l i z a b l e . 
   *   T h e   c o n t e n t   o f   t h e   a t t r i b u t e   i s   s e m i - c o l o n   s e p a r a t e d   l i s t   o f   d e s c r i p t o r s . 
   *   -   " t i t l e = m y T i t l e "   m e a n s   t h e   " t i t l e "   a t t r i b u t e   s h o u l d   b e   r e p l a c e d   w i t h   t h e   l o c a l i z e d 
   *       s t r i n g   c o r r e s p o n d i n g   t o   t h e   k e y   " m y T i t l e " . 
   *   -   " c o n t e n t = m y C o n t e n t "   m e a n s   t h e   t e x t   c o n t e n t   o f   t h e   n o d e   s h o u l d   b e   r e p l a c e d   b y   t h e 
   *       s t r i n g   c o r r e s p o n d i n g   t o   " m y C o n t e n t " 
   * 
   *   H o w   t o   d e f i n e   t h e   l o c a l i z a t i o n   b u n d l e   i n   m a r k u p : 
   * 
   *       < d i v   d a t a - l o c a l i z a t i o n - b u n d l e = " u r l / t o / m y . p r o p e r t i e s " > 
   *           [ . . . ] 
   *               < d i v   d a t a - l o c a l i z a t i o n = " c o n t e n t = m y C o n t e n t ; t i t l e = m y T i t l e " / > 
   * 
   *   S e t   t h e   d a t a - l o c a l i z a t i o n - b u n d l e   o n   a n   a n c e s t o r   o f   t h e   n o d e s   t h a t   s h o u l d   b e   l o c a l i z e d . 
   * 
   *   @ p a r a m   { E l e m e n t }   r o o t 
   *                 T h e   r o o t   n o d e   t o   u s e   f o r   t h e   l o c a l i z a t i o n 
   * / 
 f u n c t i o n   l o c a l i z e M a r k u p ( r o o t )   { 
     l e t   e l e m e n t s   =   r o o t . q u e r y S e l e c t o r A l l ( " [ d a t a - l o c a l i z a t i o n ] " ) ; 
     f o r   ( l e t   e l e m e n t   o f   e l e m e n t s )   { 
         l e t   p r o p e r t i e s   =   g e t P r o p e r t i e s F o r N o d e ( e l e m e n t ) ; 
         i f   ( ! p r o p e r t i e s )   { 
             c o n t i n u e ; 
         } 
 
         l e t   a t t r i b u t e s   =   e l e m e n t . g e t A t t r i b u t e ( " d a t a - l o c a l i z a t i o n " ) . s p l i t ( " ; " ) ; 
         f o r   ( l e t   a t t r i b u t e   o f   a t t r i b u t e s )   { 
             l e t   [ n a m e ,   v a l u e ]   =   a t t r i b u t e . t r i m ( ) . s p l i t ( " = " ) ; 
             i f   ( n a m e   = = =   " c o n t e n t " )   { 
                 e l e m e n t . t e x t C o n t e n t   =   p r o p e r t i e s [ v a l u e ] ; 
             }   e l s e   { 
                 e l e m e n t . s e t A t t r i b u t e ( n a m e ,   p r o p e r t i e s [ v a l u e ] ) ; 
             } 
         } 
 
         e l e m e n t . r e m o v e A t t r i b u t e ( " d a t a - l o c a l i z a t i o n " ) ; 
     } 
 } 
 
 c o n s t   s h a r e d L 1 0 N   =   n e w   L o c a l i z a t i o n H e l p e r ( " d e v t o o l s - s h a r e d / l o c a l e / s h a r e d . p r o p e r t i e s " ) ; 
 
 / * * 
   *   A   h e l p e r   f o r   h a v i n g   t h e   s a m e   i n t e r f a c e   a s   L o c a l i z a t i o n H e l p e r ,   b u t   f o r   m o r e 
   *   t h a n   o n e   f i l e .   U s e f u l   f o r   a b s t r a c t i n g   l 1 0 n   s t r i n g   l o c a t i o n s . 
   * / 
 f u n c t i o n   M u l t i L o c a l i z a t i o n H e l p e r ( . . . s t r i n g B u n d l e N a m e s )   { 
     l e t   i n s t a n c e s   =   s t r i n g B u n d l e N a m e s . m a p ( b u n d l e   = >   { 
         r e t u r n   n e w   L o c a l i z a t i o n H e l p e r ( b u n d l e ) ; 
     } ) ; 
 
     / /   G e t   a l l   f u n c t i o n   m e m b e r s   o f   t h e   L o c a l i z a t i o n H e l p e r   c l a s s ,   m a k i n g   s u r e   w e ' r e 
     / /   n o t   e x e c u t i n g   a n y   p o t e n t i a l   g e t t e r s   w h i l e   d o i n g   s o ,   a n d   w r a p   a l l   t h e 
     / /   m e t h o d s   w e ' v e   f o u n d   t o   w o r k   o n   a l l   g i v e n   s t r i n g   b u n d l e s . 
     O b j e c t . g e t O w n P r o p e r t y N a m e s ( L o c a l i z a t i o n H e l p e r . p r o t o t y p e ) 
         . m a p ( n a m e   = >   ( { 
             n a m e :   n a m e , 
             d e s c r i p t o r :   O b j e c t . g e t O w n P r o p e r t y D e s c r i p t o r ( L o c a l i z a t i o n H e l p e r . p r o t o t y p e , 
                                                                                                     n a m e ) 
         } ) ) 
         . f i l t e r ( ( {   d e s c r i p t o r   } )   = >   d e s c r i p t o r . v a l u e   i n s t a n c e o f   F u n c t i o n ) 
         . f o r E a c h ( m e t h o d   = >   { 
             t h i s [ m e t h o d . n a m e ]   =   ( . . . a r g s )   = >   { 
                 f o r   ( l e t   l 1 0 n   o f   i n s t a n c e s )   { 
                     t r y   { 
                         r e t u r n   m e t h o d . d e s c r i p t o r . v a l u e . a p p l y ( l 1 0 n ,   a r g s ) ; 
                     }   c a t c h   ( e )   { 
                         / /   D o   n o t h i n g 
                     } 
                 } 
                 r e t u r n   n u l l ; 
             } ; 
         } ) ; 
 } 
 
 e x p o r t s . L o c a l i z a t i o n H e l p e r   =   L o c a l i z a t i o n H e l p e r ; 
 e x p o r t s . l o c a l i z e M a r k u p   =   l o c a l i z e M a r k u p ; 
 e x p o r t s . M u l t i L o c a l i z a t i o n H e l p e r   =   M u l t i L o c a l i z a t i o n H e l p e r ; 
 O b j e c t . d e f i n e P r o p e r t y ( e x p o r t s ,   " E L L I P S I S " ,   {   g e t :   ( )   = >   s h a r e d L 1 0 N . g e t S t r ( " e l l i p s i s " )   } ) ; 
   resource://gre/modules/commonjs/toolkit/loader.js -> resource://devtools/shared/l10n.js     Q                                             	   
=   ;      =   : Ą    Q;      =   :    : Q5   Ą   QQ[    Ą   Q   	[      ]      ]      ]      ]   0   
   	A=   ,  R Ą   Q;      	0   	;      0   ;      0   ;   ¸   
;   =   [   @   ]   : Ů	!	u	  	  ´	ĎÉĎÝ	Ë!%Ę,Ę<ĘIĘ\Đu    ŽĎÉ  ´  ŃĐĐĐŰ-Ë˙˙˙ÓY '   parsePropertiesFile   sprintf   propertiesMap   sharedL10N   use strict   require_   devtools/shared/node-properties/node-propertiesC   devtools/shared/sprintfjs/sprintf-   RequireObjectCoercible%   LocalizationHelper   prototype   getStr   getFormatStr/   getFormatStrWithNumbers%   numberWithDecimalsQ   devtools-shared/locale/shared.properties   exports   localizeMarkup/   MultiLocalizationHelper   Object   defineProperty   ELLIPSIS   get   ˙˙˙˙	      getProperties%   LocalizationHelper)   getPropertiesForNode   localizeMarkup/   MultiLocalizationHelper'   parsePropertiesFile   sprintf   propertiesMap   sharedL10N                                  getProperties  J       š                                	          +                   ;    T  7    4ć;    T  ;      ;      =   T  ä: : 9Qć;    T  7Ęá8˙˙˙ń˙˙˙ěÉ    propertiesMap'   parsePropertiesFile   require	   raw!    ˙˙˙˙      url        š    @           %   LocalizationHelper        š                                        Ć    !                šW   QV   T  0    QÍ !   stringBundleName    ˙˙˙˙   !   stringBundleName   .this       š    @           G   LocalizationHelper.prototype.getStrc  `      š                                        d  ,                šW   Q  Q;        V   5   :   QT  V  q   ćV  T  7Éć;   A=   T  =   ,  R pÉÓČČČ32Ů    getProperties!   stringBundleName   Error7   No localization found for [   ]    ˙˙˙˙   	   name   .this                    properties               S   ˙˙˙˙    ?          š
    @           S   LocalizationHelper.prototype.getFormatStrc s      š                                      ń  6  <                šW   QŕU Q;        ~   V   ¸   
T  : `    ?T -Á
     m5   _ă,  ¸   
:   5   ˙˙˙áć Q)ÄĎ×Ď8$ń    sprintf   getStr   value	   next	   done    ˙˙˙˙   	   name	   args   .this          ?   $   š    @           i   LocalizationHelper.prototype.getFormatStrWithNumbersc       š                                      >  I                 š   QŕU Q   QT ¸    
    :    Q   ¸   
~   T  `    ?V   -Á
     m5   _ă,  ¸   
:   5   ˙˙˙áć Q)ÉÉĹĐ
ČNŃÉĐ8$ń    map   getFormatStr   value	   next	   done    ˙˙˙˙   	   name	   args   .this                    newArgs                   {   LocalizationHelper.prototype.getFormatStrWithNumbers/newArgs<e  0       š                                        ´    J                 T  '=       ć   ¸   
T  ×:    	ćT  ćĘ×Í    number%   numberWithDecimals    ˙˙˙˙      x        š    @    R   $         w   ˙˙˙˙                        _   LocalizationHelper.prototype.numberWithDecimalsc  ×       š      I                        	        	  S  \         	            QT     QT H   ćQ>ć  Q  QV   V   >H   ćV   Éć;        V   : D   ćQV   @Hć   ć=   ÉćV   ¸   
:    QV  ¸   
     :     ćV  ÉćV   ¸   
;   [   V  ]   V  ]   : ÉÉŘÎ^ŃrbÎŃrfËČjĐrnŐÉÉnr    isNaN   0   toLocaleString   match   undefined+   maximumFractionDigits+   minimumFractionDigits    ˙˙˙˙      number   decimals                   localized                   localized                [^\d]                 +   maximumFractionDigits      +   minimumFractionDigits          &   Ů˙˙˙˙˙˙˙   ,   Ş          C            q            Ś            Ô         š    @                 getStr         getFormatStr      /   getFormatStrWithNumbers      %   numberWithDecimals                 )   getPropertiesForNode  _       š      !                                 u  U  u                     QT  ¸    
=   :    QV       
ć@ÉćV   ¸   
=   :   Q;      V  : ÉÉĘĎČ}{ĐČÎ    closest5   [data-localization-bundle]   getAttribute1   data-localization-bundle   getProperties    ˙˙˙˙   	   node                     bundleEl   propertiesUrl             
   T   ˙˙˙˙    /              \          š    @              localizeMarkup  ô      š      }                        (        I                        QT  ¸    
=   :    Q  QV   -Á
    ˘m  Q5     Q    Q      V  :   QV      ćÉ  _ćV  ¸   
=   : ¸   
=   :   Q  QV  -Á
     ęm  Q5     Q    QV  ¸   
:  ¸   
=   	: -Á
  ¸   

:   5      ćQĺ   ć5   ć  Q¸   

:   5      ćQĺ   ć5   ć  QQQV  =   H   ćV  V  V  70   Q   "ćV  ¸   
V  V  V  7: QćÉăQ¸   

:   5   ˙˙˙ć ÉV  ¸   
=   : QÉăQ¸   

:   5   ˙˙ţMć ÉÉĎČÓ8 ¸ŇĘÎČAĐ×Ó8  Ň	Ę
Ëă˙˙˙đË	í	ÜĘŮŢ  ĄË˙˙˙ęŐ  ŞŐ  Ë˙˙˙ěÖ  Ź !   querySelectorAll'   [data-localization]   value)   getPropertiesForNode   getAttribute#   data-localization   split   ;	   trim   =	   next	   done   content   textContent   setAttribute   removeAttribute    ˙˙˙˙   	   root                     elements                      element                     properties   attributes                     attribute                  	   name   value            5   ¸     ¸            í  ˙˙˙˙   #   Ď         Q           s            Ś           Ô   É                /   MultiLocalizationHelper v      š      8                                Ź  `  ´                  š   QŕU  QÇ   T  ¸    
    :    Q;   ¸   
   5   : ¸    
   : ¸   
   : ¸   
   : QČĹĐÉ  źŕ  źĘ  Â  źĘ  Ă  ź  Ď    map   Object'   getOwnPropertyNames%   LocalizationHelper   prototype   filter   forEach    ˙˙˙˙   #   stringBundleNames   .this                    instances                    E   MultiLocalizationHelper/instances<d" í  '  ľ   (   š    @          3   MultiLocalizationHelper/<t" H  ó  ˝   	   š    @          3   MultiLocalizationHelper/<u  -       š                                          9  Â                 T      : Q5   W   QQV   5   ;   rÜ Ď -   RequireObjectCoercible   descriptor   value   Function    ˙˙˙˙       descriptor                3   MultiLocalizationHelper/<d" H  \  Ă      š   @     method   D# n  U  Ä      š    @       d   ˙˙˙˙          	   .getu          š                                         )  L  Ô   2              ;    ¸   
=   : 8Ô    sharedL10N   getStr   ellipsis    ˙˙˙˙              š    @                 get       