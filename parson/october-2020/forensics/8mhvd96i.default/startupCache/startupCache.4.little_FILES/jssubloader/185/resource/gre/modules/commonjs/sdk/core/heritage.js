   20170118123726b  _   ¹   $   Ê                         V       `  c       / *   T h i s   S o u r c e   C o d e   F o r m   i s   s u b j e c t   t o   t h e   t e r m s   o f   t h e   M o z i l l a   P u b l i c 
   *   L i c e n s e ,   v .   2 . 0 .   I f   a   c o p y   o f   t h e   M P L   w a s   n o t   d i s t r i b u t e d   w i t h   t h i s 
   *   f i l e ,   Y o u   c a n   o b t a i n   o n e   a t   h t t p : / / m o z i l l a . o r g / M P L / 2 . 0 / .   * / 
 ' u s e   s t r i c t ' ; 
 
 m o d u l e . m e t a d a t a   =   { 
     " s t a b i l i t y " :   " u n s t a b l e " 
 } ; 
 
 v a r   g e t P r o t o t y p e O f   =   O b j e c t . g e t P r o t o t y p e O f ; 
 v a r   g e t N a m e s   =   x   = >   [ . . . O b j e c t . g e t O w n P r o p e r t y N a m e s ( x ) , 
                                           . . . O b j e c t . g e t O w n P r o p e r t y S y m b o l s ( x ) ] ; 
 v a r   g e t O w n P r o p e r t y D e s c r i p t o r   =   O b j e c t . g e t O w n P r o p e r t y D e s c r i p t o r ; 
 v a r   c r e a t e   =   O b j e c t . c r e a t e ; 
 v a r   f r e e z e   =   O b j e c t . f r e e z e ; 
 v a r   u n b i n d   =   F u n c t i o n . c a l l . b i n d ( F u n c t i o n . b i n d ,   F u n c t i o n . c a l l ) ; 
 
 / /   T h i s   s h o r t c u t   m a k e s   s u r e   t h a t   w e   d o   p e r f o r m   d e s i r e d   o p e r a t i o n s ,   e v e n   i f 
 / /   a s s o c i a t e d   m e t h o d s   h a v e   b e i n g   o v e r r i d d e n   o n   t h e   u s e d   o b j e c t . 
 v a r   o w n s   =   u n b i n d ( O b j e c t . p r o t o t y p e . h a s O w n P r o p e r t y ) ; 
 v a r   a p p l y   =   u n b i n d ( F u n c t i o n . p r o t o t y p e . a p p l y ) ; 
 v a r   s l i c e   =   A r r a y . s l i c e   | |   u n b i n d ( A r r a y . p r o t o t y p e . s l i c e ) ; 
 v a r   r e d u c e   =   A r r a y . r e d u c e   | |   u n b i n d ( A r r a y . p r o t o t y p e . r e d u c e ) ; 
 v a r   m a p   =   A r r a y . m a p   | |   u n b i n d ( A r r a y . p r o t o t y p e . m a p ) ; 
 v a r   c o n c a t   =   A r r a y . c o n c a t   | |   u n b i n d ( A r r a y . p r o t o t y p e . c o n c a t ) ; 
 
 / /   U t i l i t y   f u n c t i o n   t o   g e t   o w n   p r o p e r t i e s   d e s c r i p t o r   m a p . 
 f u n c t i o n   g e t O w n P r o p e r t y D e s c r i p t o r s ( o b j e c t )   { 
     r e t u r n   r e d u c e ( g e t N a m e s ( o b j e c t ) ,   f u n c t i o n ( d e s c r i p t o r ,   n a m e )   { 
         d e s c r i p t o r [ n a m e ]   =   g e t O w n P r o p e r t y D e s c r i p t o r ( o b j e c t ,   n a m e ) ; 
         r e t u r n   d e s c r i p t o r ; 
     } ,   { } ) ; 
 } 
 
 f u n c t i o n   i s D a t a P r o p e r t y ( p r o p e r t y )   { 
     v a r   v a l u e   =   p r o p e r t y . v a l u e ; 
     v a r   t y p e   =   t y p e o f ( p r o p e r t y . v a l u e ) ; 
     r e t u r n   " v a l u e "   i n   p r o p e r t y   & & 
                   ( t y p e   ! = =   " o b j e c t "   | |   v a l u e   = = =   n u l l )   & & 
                   t y p e   ! = =   " f u n c t i o n " ; 
 } 
 
 f u n c t i o n   g e t D a t a P r o p e r t i e s ( o b j e c t )   { 
     v a r   p r o p e r t i e s   =   g e t O w n P r o p e r t y D e s c r i p t o r s ( o b j e c t ) ; 
     r e t u r n   g e t N a m e s ( p r o p e r t i e s ) . r e d u c e ( f u n c t i o n ( r e s u l t ,   n a m e )   { 
         v a r   p r o p e r t y   =   p r o p e r t i e s [ n a m e ] ; 
         i f   ( i s D a t a P r o p e r t y ( p r o p e r t y ) )   { 
             r e s u l t [ n a m e ]   =   { 
                 v a l u e :   p r o p e r t y . v a l u e , 
                 w r i t a b l e :   t r u e , 
                 c o n f i g u r a b l e :   t r u e , 
                 e n u m e r a b l e :   f a l s e 
             } ; 
         } 
         r e t u r n   r e s u l t ; 
     } ,   { } ) 
 } 
 
 / * * 
   *   T a k e s   ` s o u r c e `   o b j e c t   a s   a n   a r g u m e n t   a n d   r e t u r n s   i d e n t i c a l   o b j e c t 
   *   w i t h   t h e   d i f f e r e n c e   t h a t   a l l   o w n   p r o p e r t i e s   w i l l   b e   n o n - e n u m e r a b l e 
   * / 
 f u n c t i o n   o b s c u r e ( s o u r c e )   { 
     v a r   d e s c r i p t o r   =   r e d u c e ( g e t N a m e s ( s o u r c e ) ,   f u n c t i o n ( d e s c r i p t o r ,   n a m e )   { 
         v a r   p r o p e r t y   =   g e t O w n P r o p e r t y D e s c r i p t o r ( s o u r c e ,   n a m e ) ; 
         p r o p e r t y . e n u m e r a b l e   =   f a l s e ; 
         d e s c r i p t o r [ n a m e ]   =   p r o p e r t y ; 
         r e t u r n   d e s c r i p t o r ; 
     } ,   { } ) ; 
     r e t u r n   c r e a t e ( g e t P r o t o t y p e O f ( s o u r c e ) ,   d e s c r i p t o r ) ; 
 } 
 e x p o r t s . o b s c u r e   =   o b s c u r e ; 
 
 / * * 
   *   T a k e s   a r b i t r a r y   n u m b e r   o f   s o u r c e   o b j e c t s   a n d   r e t u r n s   f r e s h   o n e ,   t h a t 
   *   i n h e r i t s   f r o m   t h e   s a m e   p r o t o t y p e   a s   a   f i r s t   a r g u m e n t   a n d   i m p l e m e n t s   a l l 
   *   o w n   p r o p e r t i e s   o f   a l l   a r g u m e n t   o b j e c t s .   I f   t w o   o r   m o r e   a r g u m e n t   o b j e c t s 
   *   h a v e   o w n   p r o p e r t i e s   w i t h   t h e   s a m e   n a m e ,   t h e   p r o p e r t y   i s   o v e r r i d d e n ,   w i t h 
   *   p r e c e d e n c e   f r o m   r i g h t   t o   l e f t ,   i m p l y i n g ,   t h a t   p r o p e r t i e s   o f   t h e   o b j e c t   o n 
   *   t h e   l e f t   a r e   o v e r r i d d e n   b y   a   s a m e   n a m e d   p r o p e r t y   o f   t h e   o b j e c t   o n   t h e   r i g h t . 
   * / 
 v a r   m i x   =   f u n c t i o n ( s o u r c e )   { 
     v a r   d e s c r i p t o r   =   r e d u c e ( s l i c e ( a r g u m e n t s ) ,   f u n c t i o n ( d e s c r i p t o r ,   s o u r c e )   { 
         r e t u r n   r e d u c e ( g e t N a m e s ( s o u r c e ) ,   f u n c t i o n ( d e s c r i p t o r ,   n a m e )   { 
             d e s c r i p t o r [ n a m e ]   =   g e t O w n P r o p e r t y D e s c r i p t o r ( s o u r c e ,   n a m e ) ; 
             r e t u r n   d e s c r i p t o r ; 
         } ,   d e s c r i p t o r ) ; 
     } ,   { } ) ; 
 
     r e t u r n   c r e a t e ( g e t P r o t o t y p e O f ( s o u r c e ) ,   d e s c r i p t o r ) ; 
 } ; 
 e x p o r t s . m i x   =   m i x ; 
 
 / * * 
   *   R e t u r n s   a   f r o z e n   o b j e c t   w i t h   t h a t   i n h e r i t s   f r o m   t h e   g i v e n   ` p r o t o t y p e `   a n d 
   *   i m p l e m e n t s   a l l   o w n   p r o p e r t i e s   o f   t h e   g i v e n   ` p r o p e r t i e s `   o b j e c t . 
   * / 
 f u n c t i o n   e x t e n d ( p r o t o t y p e ,   p r o p e r t i e s )   { 
     r e t u r n   c r e a t e ( p r o t o t y p e ,   g e t O w n P r o p e r t y D e s c r i p t o r s ( p r o p e r t i e s ) ) ; 
 } 
 e x p o r t s . e x t e n d   =   e x t e n d ; 
 
 / * * 
   *   R e t u r n s   a   c o n s t r u c t o r   f u n c t i o n   w i t h   a   p r o p e r   ` p r o t o t y p e `   s e t u p .   R e t u r n e d 
   *   c o n s t r u c t o r ' s   ` p r o t o t y p e `   i n h e r i t s   f r o m   a   g i v e n   ` o p t i o n s . e x t e n d s `   o r 
   *   ` C l a s s . p r o t o t y p e `   i f   o m i t t e d   a n d   i m p l e m e n t s   a l l   t h e   p r o p e r t i e s   o f   t h e 
   *   g i v e n   ` o p t i o n ` .   I f   ` o p t i o n s . i m p l e m e n s `   a r r a y   i s   p a s s e d ,   i t ' s   e l e m e n t s 
   *   w i l l   b e   m i x e d   i n t o   p r o t o t y p e   a s   w e l l .   A l s o ,   ` o p t i o n s . e x t e n d s `   c a n   b e 
   *   a   f u n c t i o n   o r   a   p r o t o t y p e .   I f   f u n c t i o n   t h a n   i t ' s   p r o t o t y p e   i s   u s e d   a s 
   *   a n   a n c e s t o r   o f   t h e   p r o t o t y p e ,   i f   i t ' s   a n   o b j e c t   t h a t   i t ' s   u s e d   d i r e c t l y . 
   *   A l s o   ` o p t i o n s . i m p l e m e n t s `   m a y   c o n t a i n   f u n c t i o n s   o r   o b j e c t s ,   i n   c a s e   o f 
   *   f u n c t i o n s   t h e i r   p r o t o t y p e s   a r e   u s e d   f o r   m i x i n g . 
   * / 
 v a r   C l a s s   =   n e w   f u n c t i o n ( )   { 
     f u n c t i o n   p r o t o t y p e O f ( i n p u t )   { 
         r e t u r n   t y p e o f ( i n p u t )   = = =   ' f u n c t i o n '   ?   i n p u t . p r o t o t y p e   :   i n p u t ; 
     } 
     v a r   n o n e   =   f r e e z e ( [ ] ) ; 
 
     r e t u r n   f u n c t i o n   C l a s s ( o p t i o n s )   { 
         / /   C r e a t e   d e s c r i p t o r   w i t h   n o r m a l i z e d   ` o p t i o n s . e x t e n d s `   a n d 
         / /   ` o p t i o n s . i m p l e m e n t s ` . 
         v a r   d e s c r i p t o r   =   { 
             / /   N o r m a l i z e   e x t e n d s   p r o p e r t y   o f   ` o p t i o n s . e x t e n d s `   t o   a   p r o t o t y p e   o b j e c t 
             / /   i n   c a s e   i t ' s   c o n s t r u c t o r .   I f   p r o p e r t y   i s   m i s s i n g   t h a t   f a l l b a c k   t o 
             / /   ` T y p e . p r o t o t y p e ` . 
             e x t e n d s :   o w n s ( o p t i o n s ,   ' e x t e n d s ' )   ? 
                               p r o t o t y p e O f ( o p t i o n s . e x t e n d s )   :   C l a s s . p r o t o t y p e , 
             / /   N o r m a l i z e   ` o p t i o n s . i m p l e m e n t s `   t o   m a k e   s u r e   t h a t   i t ' s   a r r a y   o f 
             / /   p r o t o t y p e   o b j e c t s   i n s t e a d   o f   c o n s t r u c t o r   f u n c t i o n s . 
             i m p l e m e n t s :   o w n s ( o p t i o n s ,   ' i m p l e m e n t s ' )   ? 
                                     f r e e z e ( m a p ( o p t i o n s . i m p l e m e n t s ,   p r o t o t y p e O f ) )   :   n o n e 
         } ; 
 
         / /   C r e a t e   a r r a y   o f   p r o p e r t y   d e s c r i p t o r s   w h o ' s   p r o p e r t i e s   w i l l   b e   d e f i n e d 
         / /   o n   t h e   r e s u l t i n g   p r o t o t y p e .   N o t e :   U s i n g   r e f l e c t i o n   ` c o n c a t `   i n s t e a d   o f 
         / /   m e t h o d   a s   i t   m a y   b e   o v e r r i d d e n . 
         v a r   d e s c r i p t o r s   =   c o n c a t ( d e s c r i p t o r . i m p l e m e n t s ,   o p t i o n s ,   d e s c r i p t o r ,   { 
             c o n s t r u c t o r :   c o n s t r u c t o r 
         } ) ; 
 
         / /   N o t e :   w e   u s e   r e f l e c t i o n   ` a p p l y `   i n   t h e   c o n s t r u c t o r   i n s t e a d   o f   m e t h o d 
         / /   c a l l   s i n c e   l a t e r   m a y   b e   o v e r r i d d e n . 
         f u n c t i o n   c o n s t r u c t o r ( )   { 
             v a r   i n s t a n c e   =   c r e a t e ( p r o t o t y p e ,   a t t r i b u t e s ) ; 
             i f   ( i n i t i a l i z e )   a p p l y ( i n i t i a l i z e ,   i n s t a n c e ,   a r g u m e n t s ) ; 
             r e t u r n   i n s t a n c e ; 
         } 
         / /   C r e a t e   ` p r o t o t y p e `   t h a t   i n h e r i t s   f r o m   g i v e n   a n c e s t o r   p a s s e d   a s 
         / /   ` o p t i o n s . e x t e n d s ` ,   f a l l i n g   b a c k   t o   ` T y p e . p r o t o t y p e ` ,   i m p l e m e n t i n g   a l l 
         / /   p r o p e r t i e s   o f   g i v e n   ` o p t i o n s . i m p l e m e n t s `   a n d   ` o p t i o n s `   i t s e l f . 
         v a r   p r o t o t y p e   =   e x t e n d ( d e s c r i p t o r . e x t e n d s ,   m i x . a p p l y ( m i x ,   d e s c r i p t o r s ) ) ; 
         v a r   i n i t i a l i z e   =   p r o t o t y p e . i n i t i a l i z e ; 
 
         / /   C o m b i n e   a n c e s t o r   a t t r i b u t e s   w i t h   p r o t o t y p e ' s   a t t r i b u t e s   s o   t h a t 
         / /   a n c e s t o r s   a t t r i b u t e s   a l s o   b e c o m e   i n i t i a l i z e a b l e . 
         v a r   a t t r i b u t e s   =   m i x ( d e s c r i p t o r . e x t e n d s . c o n s t r u c t o r . a t t r i b u t e s   | |   { } , 
                                                   g e t D a t a P r o p e r t i e s ( p r o t o t y p e ) ) ; 
 
         c o n s t r u c t o r . a t t r i b u t e s   =   a t t r i b u t e s ; 
         O b j e c t . d e f i n e P r o p e r t y ( c o n s t r u c t o r ,   ' p r o t o t y p e ' ,   { 
             c o n f i g u r a b l e :   f a l s e , 
             w r i t a b l e :   f a l s e , 
             v a l u e :   p r o t o t y p e 
         } ) ; 
         r e t u r n   c o n s t r u c t o r ; 
     } ; 
 } 
 C l a s s . p r o t o t y p e   =   e x t e n d ( n u l l ,   o b s c u r e ( { 
     c o n s t r u c t o r :   f u n c t i o n   c o n s t r u c t o r ( )   { 
         t h i s . i n i t i a l i z e . a p p l y ( t h i s ,   a r g u m e n t s ) ; 
         r e t u r n   t h i s ; 
     } , 
     i n i t i a l i z e :   f u n c t i o n   i n i t i a l i z e ( )   { 
         / /   D o   y o u r   i n i t i a l i z a t i o n   l o g i c   h e r e 
     } , 
     / /   C o p y   u s e f u l   p r o p e r t i e s   f r o m   ` O b j e c t . p r o t o t y p e ` . 
     t o S t r i n g :   O b j e c t . p r o t o t y p e . t o S t r i n g , 
     t o L o c a l e S t r i n g :   O b j e c t . p r o t o t y p e . t o L o c a l e S t r i n g , 
     t o S o u r c e :   O b j e c t . p r o t o t y p e . t o S o u r c e , 
     v a l u e O f :   O b j e c t . p r o t o t y p e . v a l u e O f , 
     i s P r o t o t y p e O f :   O b j e c t . p r o t o t y p e . i s P r o t o t y p e O f 
 } ) ) ; 
 e x p o r t s . C l a s s   =   f r e e z e ( C l a s s ) ; 
   resource://gre/modules/commonjs/toolkit/loader.js -> resource://gre/modules/commonjs/sdk/core/heritage.js     c                                                   	   
                        =   ;   [    =   ]   0   Ö    ;   5        QÖ   @      QÖ   ;   5      QÖ   ;   5      QÖ   ;   5      QÖ   ;   5   ¸   
;   5   ;   5   :    QÖ         ;   5   5   :    QÖ         ;   5   5   :    QÖ   ;   5   D   #æQ      ;   5   5   : æ   QÖ   	;   5   	D   #æQ      ;   5   5   	: æ   	QÖ   
;   5   
D   #æQ      ;   5   5   
: æ   
QÖ   ;   5   D   #æQ      ;   5   5   : æ   Q;      0   Ö         Q;      0   ;      0   Ö      A,  R     Q         @      [      	]      
]   ;   5   5   ]   ;   5   5    ]    ;   5   5   !]   !;   5   5   "]   ";   5   5   #]   #: : 0   ;            : 0   ÿÌ	#	+	?	b	ÊĞ
ÕÑÕÕÕê	ÉŞÉŞÉïÊïÊïÊïÊ#+?HĞRĞ\ĞbeĞrÏÉ  ©ßÊÊÔÔÔÔÔ  ©ÿÿÿóÉ  ¸ÔÉ    getPrototypeOf   getNames1   getOwnPropertyDescriptor   create   freeze   unbind	   owns   apply   slice   reduce   map   concat   mix   Class   use strict   module   metadata   unstable   stability   Object   Function	   call	   bind   prototype   hasOwnProperty   Array   exports   obscure   extend   constructor   initialize   toString   toLocaleString   toSource   valueOf   isPrototypeOf   ÿÿÿÿ   3   getOwnPropertyDescriptors   isDataProperty#   getDataProperties   obscure   extend   getPrototypeOf   getNames1   getOwnPropertyDescriptor   create   freeze   unbind	   owns   apply   slice   reduce   map   concat   mix   Class                      stability                    getNamesu  £       ¹                                       I  ©                   Z    >;    ¸   
T  : -Á
     m5   _ã,  ¸   
:   5   ÿÿÿáæ ;    ¸   
T  : -Á
     m5   _ã,  ¸   
:   5   ÿÿÿáæ QÏÏ8$ïÏÏ8$ğ     Object'   getOwnPropertyNames   value	   next	   done+   getOwnPropertySymbols    ÿÿÿÿ      x           v   $      )   $   ¹    @           3   getOwnPropertyDescriptors  +       ¹                                         @                    ;        ;         :     [   : ÙÈ 	!    reduce   getNames    ÿÿÿÿ      object                 7   getOwnPropertyDescriptors/<c  "       ¹                                        Ê  8     *              T  T ;           T : 9QT  Ø 1   getOwnPropertyDescriptor    ÿÿÿÿ      descriptor	   name        ¹    @                             isDataProperty  W       ¹                                        Y    #                T  5    W   QT  5    ÄW  Q=    T  qE   0æQV  =   ID   æQV   @HæE   æQV  =   IæÍÎĞßË    value   object   function    ÿÿÿÿ      property   value	   type       ¹    @           #   getDataProperties  >       ¹                                       6  ®  +                  ;        T  :    Q;         : ¸   
    [   : ÍÉÏÏ8-	9 3   getOwnPropertyDescriptors   getNames   reduce    ÿÿÿÿ      object   properties                 '   getDataProperties/<c  X       ¹      #                                 ¤  §  -   -                T 7W   Q;        V   :    3æT  T [    V   5   ]   C]   C]   B]   9QæT  ÎÎËÎÉ7    isDataProperty   value   writable   configurable   enumerable    ÿÿÿÿ      result	   name   property                       value         writable         configurable         enumerable       ¹    @                             obscure  S       ¹                               
        S  {	  ?                 ;        ;         :     [   : W   Q;      ;         : V   : ÙÈE@ÈFÙÿÿÿù    reduce   getNames   create   getPrototypeOf    ÿÿÿÿ      source   descriptor                '   obscure/descriptor<c  6       ¹                                          >	  @   4             ;           T : W   QV   B0   QT  T V   9QT  ÒÈËÌ 1   getOwnPropertyDescriptor   enumerable    ÿÿÿÿ      descriptor	   name   property       ¹    @                             mixc  V      ¹                                     "  y  ¿  R                 	W  Q;        ;      V  :     [   : W   Q;      ;      T  : V   : ØÈXSÈZ×ÿÿÿù    reduce   slice   create   getPrototypeOf    ÿÿÿÿ      source   descriptor   arguments                    mix/descriptor<c  )       ¹                                       ¸    S                  ;        ;         :     T  : ÙÈWTX    reduce   getNames    ÿÿÿÿ      descriptor   source                 #   mix/descriptor</<c  "       ¹                                        û  o  T   ,              T  T ;           T : 9QT  Ø 1   getOwnPropertyDescriptor    ÿÿÿÿ      descriptor	   name        ¹    @                             extend  "       ¹                                        |  Ú  b                 ;        T  ;      T : : Úÿÿÿî    create3   getOwnPropertyDescriptors    ÿÿÿÿ      prototype   properties        ¹    @              Class<c   *       ¹                                          L  r                         Q        Z    :    Q   ËrvÏÉx  ¨    freeze    ÿÿÿÿ      prototypeOf	   none                      prototypeOf °     s      ¹    @              ClassC  §      ¹                               (        2  I  x          
          W  Q[   ;        T  =   :    æ  T  5   :    æ5   æ]   ;        T  =   :    2æ;      ;      T  5     : :    æ  æ]   W   Q;      V   5   T  V   [   V  ]   : W  Q;      V   5   ;   	¸   

;   	V  O :    Q   5      Q;   	   	V   5   5   5   D   æQ[   æ;         : :    QV     0   Q;   ¸   
V  =   [   B]   B]      ]   : QV    Êx{Ò	ÎÕÒ-áÿÿÿùÙ  ßÉ  È    è'ÿÿÿåÉĞêÏ  ÉÏÚÊ  ¡  ¦ 	   owns   extends   prototype   implements   freeze   map   concat   constructor   extend   mix   apply   initialize   attributes#   getDataProperties   Object   defineProperty   configurable   writable   value   ÿÿÿÿ      Class                        options   descriptor   descriptors   constructor   prototype   initialize   attributes                  constructor    )        ¹    @                 extends         implements                       constructor                                      configurable         writable         value                    constructorC   .      ¹                                       "   Ş  ª   #            	W   Q¹W  QV  5    ¸   
V  V   O QV  ÅÜ    initialize   apply   ÿÿÿÿ      constructor                        arguments   .this         ¹    @              initializeC          ¹                                             2  ®   !                  ÿÿÿÿ      initialize                                ¹    @                 constructor         initialize         toString         toLocaleString         toSource         valueOf         isPrototypeOf       