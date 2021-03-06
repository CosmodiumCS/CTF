   20170118123726       ¹                                      `          / *   T h i s   S o u r c e   C o d e   F o r m   i s   s u b j e c t   t o   t h e   t e r m s   o f   t h e   M o z i l l a   P u b l i c 
   *   L i c e n s e ,   v .   2 . 0 .   I f   a   c o p y   o f   t h e   M P L   w a s   n o t   d i s t r i b u t e d   w i t h   t h i s 
   *   f i l e ,   Y o u   c a n   o b t a i n   o n e   a t   h t t p : / / m o z i l l a . o r g / M P L / 2 . 0 / .   * / 
 
 " u s e   s t r i c t " ; 
 
 ( f u n c t i o n   ( f a c t o r y )   { 
     / /   T h i s   f i l e   c a n   b e   l o a d e d   i n   s e v e r a l   d i f f e r e n t   w a y s .     I t   c a n   b e 
     / /   r e q u i r e ( ) d ,   e i t h e r   f r o m   t h e   m a i n   t h r e a d   o r   f r o m   a   w o r k e r   t h r e a d ; 
     / /   o r   i t   c a n   b e   i m p o r t e d   v i a   C u . i m p o r t .     T h e s e   d i f f e r e n t   f o r m s 
     / /   e x p l a i n   s o m e   o f   t h e   h a i r i n e s s   o f   t h i s   c o d e . 
     / / 
     / /   I t ' s   i m p o r t a n t   f o r   t h e   d e v t o o l s - a s - h t m l   p r o j e c t   t h a t   a   r e q u i r e ( ) 
     / /   o n   t h e   m a i n   t h r e a d   n o t   u s e   a n y   c h r o m e   p r i v i l e g e d   A P I s .     I n s t e a d , 
     / /   t h e   b o d y   o f   t h e   m a i n   f u n c t i o n   c a n   o n l y   r e q u i r e ( )   ( n o t   C u . i m p o r t ) 
     / /   m o d u l e s   t h a t   a r e   a v a i l a b l e   i n   t h e   d e v t o o l s   c o n t e n t   m o d e .     T h i s , 
     / /   p l u s   t h e   l a c k   o f   | c o n s o l e |   i n   w o r k e r s ,   r e s u l t s   i n   s o m e   g y r a t i o n s 
     / /   i n   t h e   d e f i n i t i o n   o f   | c o n s o l e | . 
     i f   ( t h i s . m o d u l e   & &   m o d u l e . i d . i n d e x O f ( " e v e n t - e m i t t e r " )   > =   0 )   { 
         l e t   c o n s o l e ; 
         i f   ( i s W o r k e r )   { 
             c o n s o l e   =   { 
                 e r r o r :   ( )   = >   { } 
             } ; 
         }   e l s e   { 
             c o n s o l e   =   t h i s . c o n s o l e ; 
         } 
         / /   r e q u i r e 
         f a c t o r y . c a l l ( t h i s ,   r e q u i r e ,   e x p o r t s ,   m o d u l e ,   c o n s o l e ) ; 
     }   e l s e   { 
         / /   C u . i m p o r t .     T h i s   s n i p p e t   i m p l e m e n t s   a   s o r t   o f   m i n i a t u r e   l o a d e r , 
         / /   w h i c h   i s   r e s p o n s i b l e   f o r   a p p r o p r i a t e l y   t r a n s l a t i n g   r e q u i r e ( ) 
         / /   r e q u e s t s   f r o m   t h e   c l i e n t   f u n c t i o n .     T h i s   c o d e   c a n   u s e 
         / /   C u . i m p o r t ,   b e c a u s e   i t   i s   n e v e r   r u n   i n   t h e   d e v t o o l s - i n - c o n t e n t 
         / /   m o d e . 
         t h i s . i s W o r k e r   =   f a l s e ; 
         c o n s t   C u   =   C o m p o n e n t s . u t i l s ; 
         l e t   c o n s o l e   =   C u . i m p o r t ( " r e s o u r c e : / / g r e / m o d u l e s / C o n s o l e . j s m " ,   { } ) . c o n s o l e ; 
         / /   B u g   1 2 5 9 0 4 5 :   T h i s   m o d u l e   i s   l o a d e d   e a r l y   i n   f i r e f o x   s t a r t u p   a s   a   J S M , 
         / /   b u t   i t   d o e s n ' t   d e p e n d s   o n   a n y   r e a l   m o d u l e .   W e   c a n   s a v e   a   f e w   c y c l e s 
         / /   a n d   b y t e s   b y   n o t   l o a d i n g   L o a d e r . j s m . 
         l e t   r e q u i r e   =   f u n c t i o n   ( m o d u l e )   { 
             s w i t c h   ( m o d u l e )   { 
                 c a s e   " d e v t o o l s / s h a r e d / d e f e r " : 
                     r e t u r n   C u . i m p o r t ( " r e s o u r c e : / / g r e / m o d u l e s / P r o m i s e . j s m " ,   { } ) . P r o m i s e . d e f e r ; 
                 c a s e   " S e r v i c e s " : 
                     r e t u r n   C u . i m p o r t ( " r e s o u r c e : / / g r e / m o d u l e s / S e r v i c e s . j s m " ,   { } ) . S e r v i c e s ; 
                 c a s e   " d e v t o o l s / s h a r e d / p l a t f o r m / s t a c k " :   { 
                     l e t   o b j   =   { } ; 
                     C u . i m p o r t ( " r e s o u r c e : / / d e v t o o l s / s h a r e d / p l a t f o r m / c h r o m e / s t a c k . j s " ,   o b j ) ; 
                     r e t u r n   o b j ; 
                 } 
             } 
             r e t u r n   n u l l ; 
         } ; 
         f a c t o r y . c a l l ( t h i s ,   r e q u i r e ,   t h i s ,   {   e x p o r t s :   t h i s   } ,   c o n s o l e ) ; 
         t h i s . E X P O R T E D _ S Y M B O L S   =   [ " E v e n t E m i t t e r " ] ; 
     } 
 } ) . c a l l ( t h i s ,   f u n c t i o n   ( r e q u i r e ,   e x p o r t s ,   m o d u l e ,   c o n s o l e )   { 
     / /    & & & & & & & & & & & & & & & &
     / /   A f t e r   t h i s   p o i n t   t h e   c o d e   m a y   n o t   u s e   C u . i m p o r t ,   a n d   s h o u l d   o n l y 
     / /   r e q u i r e ( )   m o d u l e s   t h a t   a r e   " c l e a n - f o r - c o n t e n t " . 
     l e t   E v e n t E m i t t e r   =   t h i s . E v e n t E m i t t e r   =   f u n c t i o n   ( )   { } ; 
     m o d u l e . e x p o r t s   =   E v e n t E m i t t e r ; 
 
     / /   S e e   c o m m e n t   i n   J S M   m o d u l e   b o i l e r p l a t e   w h e n   a d d i n g   a   n e w   d e p e n d e n c y . 
     c o n s t   S e r v i c e s   =   r e q u i r e ( " S e r v i c e s " ) ; 
     c o n s t   d e f e r   =   r e q u i r e ( " d e v t o o l s / s h a r e d / d e f e r " ) ; 
     c o n s t   {   d e s c r i b e N t h C a l l e r   }   =   r e q u i r e ( " d e v t o o l s / s h a r e d / p l a t f o r m / s t a c k " ) ; 
     l e t   l o g g i n g E n a b l e d   =   t r u e ; 
 
     i f   ( ! i s W o r k e r )   { 
         l o g g i n g E n a b l e d   =   S e r v i c e s . p r e f s . g e t B o o l P r e f ( " d e v t o o l s . d u m p . e m i t " ) ; 
         S e r v i c e s . p r e f s . a d d O b s e r v e r ( " d e v t o o l s . d u m p . e m i t " ,   { 
             o b s e r v e :   ( )   = >   { 
                 l o g g i n g E n a b l e d   =   S e r v i c e s . p r e f s . g e t B o o l P r e f ( " d e v t o o l s . d u m p . e m i t " ) ; 
             } 
         } ,   f a l s e ) ; 
     } 
 
     / * * 
       *   D e c o r a t e   a n   o b j e c t   w i t h   e v e n t   e m i t t e r   f u n c t i o n a l i t y . 
       * 
       *   @ p a r a m   O b j e c t   o b j e c t T o D e c o r a t e 
       *                 B i n d   a l l   p u b l i c   m e t h o d s   o f   E v e n t E m i t t e r   t o 
       *                 t h e   o b j e c t T o D e c o r a t e   o b j e c t . 
       * / 
     E v e n t E m i t t e r . d e c o r a t e   =   f u n c t i o n   ( o b j e c t T o D e c o r a t e )   { 
         l e t   e m i t t e r   =   n e w   E v e n t E m i t t e r ( ) ; 
         o b j e c t T o D e c o r a t e . o n   =   e m i t t e r . o n . b i n d ( e m i t t e r ) ; 
         o b j e c t T o D e c o r a t e . o f f   =   e m i t t e r . o f f . b i n d ( e m i t t e r ) ; 
         o b j e c t T o D e c o r a t e . o n c e   =   e m i t t e r . o n c e . b i n d ( e m i t t e r ) ; 
         o b j e c t T o D e c o r a t e . e m i t   =   e m i t t e r . e m i t . b i n d ( e m i t t e r ) ; 
     } ; 
 
     E v e n t E m i t t e r . p r o t o t y p e   =   { 
         / * * 
           *   C o n n e c t   a   l i s t e n e r . 
           * 
           *   @ p a r a m   s t r i n g   e v e n t 
           *                 T h e   e v e n t   n a m e   t o   w h i c h   w e ' r e   c o n n e c t i n g . 
           *   @ p a r a m   f u n c t i o n   l i s t e n e r 
           *                 C a l l e d   w h e n   t h e   e v e n t   i s   f i r e d . 
           * / 
         o n ( e v e n t ,   l i s t e n e r )   { 
             i f   ( ! t h i s . _ e v e n t E m i t t e r L i s t e n e r s )   { 
                 t h i s . _ e v e n t E m i t t e r L i s t e n e r s   =   n e w   M a p ( ) ; 
             } 
             i f   ( ! t h i s . _ e v e n t E m i t t e r L i s t e n e r s . h a s ( e v e n t ) )   { 
                 t h i s . _ e v e n t E m i t t e r L i s t e n e r s . s e t ( e v e n t ,   [ ] ) ; 
             } 
             t h i s . _ e v e n t E m i t t e r L i s t e n e r s . g e t ( e v e n t ) . p u s h ( l i s t e n e r ) ; 
         } , 
 
         / * * 
           *   L i s t e n   f o r   t h e   n e x t   t i m e   a n   e v e n t   i s   f i r e d . 
           * 
           *   @ p a r a m   s t r i n g   e v e n t 
           *                 T h e   e v e n t   n a m e   t o   w h i c h   w e ' r e   c o n n e c t i n g . 
           *   @ p a r a m   f u n c t i o n   l i s t e n e r 
           *                 ( O p t i o n a l )   C a l l e d   w h e n   t h e   e v e n t   i s   f i r e d .   W i l l   b e   c a l l e d   a t   m o s t 
           *                 o n e   t i m e . 
           *   @ r e t u r n   p r o m i s e 
           *                 A   p r o m i s e   w h i c h   i s   r e s o l v e d   w h e n   t h e   e v e n t   n e x t   h a p p e n s .   T h e 
           *                 r e s o l u t i o n   v a l u e   o f   t h e   p r o m i s e   i s   t h e   f i r s t   e v e n t   a r g u m e n t .   I f 
           *                 y o u   n e e d   a c c e s s   t o   s e c o n d   o r   s u b s e q u e n t   e v e n t   a r g u m e n t s   ( i t ' s   r a r e 
           *                 t h a t   t h i s   i s   n e e d e d )   t h e n   u s e   l i s t e n e r 
           * / 
         o n c e ( e v e n t ,   l i s t e n e r )   { 
             l e t   d e f e r r e d   =   d e f e r ( ) ; 
 
             l e t   h a n d l e r   =   ( _ ,   f i r s t ,   . . . r e s t )   = >   { 
                 t h i s . o f f ( e v e n t ,   h a n d l e r ) ; 
                 i f   ( l i s t e n e r )   { 
                     l i s t e n e r . a p p l y ( n u l l ,   [ e v e n t ,   f i r s t ,   . . . r e s t ] ) ; 
                 } 
                 d e f e r r e d . r e s o l v e ( f i r s t ) ; 
             } ; 
 
             h a n d l e r . _ o r i g i n a l L i s t e n e r   =   l i s t e n e r ; 
             t h i s . o n ( e v e n t ,   h a n d l e r ) ; 
 
             r e t u r n   d e f e r r e d . p r o m i s e ; 
         } , 
 
         / * * 
           *   R e m o v e   a   p r e v i o u s l y - r e g i s t e r e d   e v e n t   l i s t e n e r .     W o r k s   f o r   e v e n t s 
           *   r e g i s t e r e d   w i t h   e i t h e r   o n   o r   o n c e . 
           * 
           *   @ p a r a m   s t r i n g   e v e n t 
           *                 T h e   e v e n t   n a m e   w h o s e   l i s t e n e r   w e ' r e   d i s c o n n e c t i n g . 
           *   @ p a r a m   f u n c t i o n   l i s t e n e r 
           *                 T h e   l i s t e n e r   t o   r e m o v e . 
           * / 
         o f f ( e v e n t ,   l i s t e n e r )   { 
             i f   ( ! t h i s . _ e v e n t E m i t t e r L i s t e n e r s )   { 
                 r e t u r n ; 
             } 
             l e t   l i s t e n e r s   =   t h i s . _ e v e n t E m i t t e r L i s t e n e r s . g e t ( e v e n t ) ; 
             i f   ( l i s t e n e r s )   { 
                 t h i s . _ e v e n t E m i t t e r L i s t e n e r s . s e t ( e v e n t ,   l i s t e n e r s . f i l t e r ( l   = >   { 
                     r e t u r n   l   ! = =   l i s t e n e r   & &   l . _ o r i g i n a l L i s t e n e r   ! = =   l i s t e n e r ; 
                 } ) ) ; 
             } 
         } , 
 
         / * * 
           *   E m i t   a n   e v e n t .     A l l   a r g u m e n t s   t o   t h i s   m e t h o d   w i l l 
           *   b e   s e n t   t o   l i s t e n e r   f u n c t i o n s . 
           * / 
         e m i t ( e v e n t )   { 
             t h i s . l o g E v e n t ( e v e n t ,   a r g u m e n t s ) ; 
 
             i f   ( ! t h i s . _ e v e n t E m i t t e r L i s t e n e r s   | |   ! t h i s . _ e v e n t E m i t t e r L i s t e n e r s . h a s ( e v e n t ) )   { 
                 r e t u r n ; 
             } 
 
             l e t   o r i g i n a l L i s t e n e r s   =   t h i s . _ e v e n t E m i t t e r L i s t e n e r s . g e t ( e v e n t ) ; 
             f o r   ( l e t   l i s t e n e r   o f   t h i s . _ e v e n t E m i t t e r L i s t e n e r s . g e t ( e v e n t ) )   { 
                 / /   I f   t h e   o b j e c t   w a s   d e s t r o y e d   d u r i n g   e v e n t   e m i s s i o n ,   s t o p 
                 / /   e m i t t i n g . 
                 i f   ( ! t h i s . _ e v e n t E m i t t e r L i s t e n e r s )   { 
                     b r e a k ; 
                 } 
 
                 / /   I f   l i s t e n e r s   w e r e   r e m o v e d   d u r i n g   e m i s s i o n ,   m a k e   s u r e   t h e 
                 / /   e v e n t   h a n d l e r   w e ' r e   g o i n g   t o   f i r e   w a s n ' t   r e m o v e d . 
                 i f   ( o r i g i n a l L i s t e n e r s   = = =   t h i s . _ e v e n t E m i t t e r L i s t e n e r s . g e t ( e v e n t )   | | 
                     t h i s . _ e v e n t E m i t t e r L i s t e n e r s . g e t ( e v e n t ) . s o m e ( l   = >   l   = = =   l i s t e n e r ) )   { 
                     t r y   { 
                         l i s t e n e r . a p p l y ( n u l l ,   a r g u m e n t s ) ; 
                     }   c a t c h   ( e x )   { 
                         / /   P r e v e n t   a   b a d   l i s t e n e r   f r o m   i n t e r f e r i n g   w i t h   t h e   o t h e r s . 
                         l e t   m s g   =   e x   +   " :   "   +   e x . s t a c k ; 
                         c o n s o l e . e r r o r ( m s g ) ; 
                         d u m p ( m s g   +   " \ n " ) ; 
                     } 
                 } 
             } 
         } , 
 
         l o g E v e n t ( e v e n t ,   a r g s )   { 
             i f   ( ! l o g g i n g E n a b l e d )   { 
                 r e t u r n ; 
             } 
 
             l e t   d e s c r i p t i o n   =   d e s c r i b e N t h C a l l e r ( 2 ) ; 
 
             l e t   a r g O u t   =   " ( " ; 
             i f   ( a r g s . l e n g t h   = = =   1 )   { 
                 a r g O u t   + =   e v e n t ; 
             } 
 
             l e t   o u t   =   " E M I T T I N G :   " ; 
 
             / /   W e   n e e d   t h i s   t r y   /   c a t c h   t o   p r e v e n t   a n y   d e a d   o b j e c t   e r r o r s . 
             t r y   { 
                 f o r   ( l e t   i   =   1 ;   i   <   a r g s . l e n g t h ;   i + + )   { 
                     i f   ( i   = = =   1 )   { 
                         a r g O u t   =   " ( "   +   e v e n t   +   " ,   " ; 
                     }   e l s e   { 
                         a r g O u t   + =   " ,   " ; 
                     } 
 
                     l e t   a r g   =   a r g s [ i ] ; 
                     a r g O u t   + =   a r g ; 
 
                     i f   ( a r g   & &   a r g . n o d e N a m e )   { 
                         a r g O u t   + =   "   ( "   +   a r g . n o d e N a m e ; 
                         i f   ( a r g . i d )   { 
                             a r g O u t   + =   " # "   +   a r g . i d ; 
                         } 
                         i f   ( a r g . c l a s s N a m e )   { 
                             a r g O u t   + =   " . "   +   a r g . c l a s s N a m e ; 
                         } 
                         a r g O u t   + =   " ) " ; 
                     } 
                 } 
             }   c a t c h   ( e )   { 
                 / /   O b j e c t   i s   d e a d   s o   t h e   t o o l b o x   i s   m o s t   l i k e l y   s h u t t i n g   d o w n , 
                 / /   d o   n o t h i n g . 
             } 
 
             a r g O u t   + =   " ) " ; 
             o u t   + =   " e m i t "   +   a r g O u t   +   "   f r o m   "   +   d e s c r i p t i o n   +   " \ n " ; 
 
             d u m p ( o u t ) ; 
         } , 
     } ; 
 } ) ; 
   resource://gre/modules/commonjs/toolkit/loader.js -> resource://devtools/shared/event-emitter.js                          =        ž   
º   l Ì;  ú    use strict	   call   ÿÿÿÿ                       C  :     ¹      J                               ç   o	            
       ¹W   QV   5    E   "æQ;    5   ž   
=   : >æ   ræ  Q  Q;       æ[       ]   W  Q   æV   5   W  QæT  ž   
V   ;   ;   	;    V  l QÉ   æ    QÇ   V   B0   Q;   
5      Q   ž   
=   [   : 5     Q     QT  ž   
V   V  V   [   V   ]   	V  l QV   f   0   QÈææmÖÏì$ÏË
ÐÖ
Í*Ê8Û$ÍÿÿÿÜÑ;    module   id   indexOf   event-emitter   isWorker   error   console	   call   require   exports   Components   utils   importE   resource://gre/modules/Console.jsm!   EXPORTED_SYMBOLS    ÿÿÿÿ      factory   .this                    console                      console   require   Cu                     console.errord"  û          ¹    @                 error                                  requireb   ÷  *      ¹    @                 exports                      EventEmitter      >   a   ÿÿÿÿ   Ž      ÿÿÿÿ           C  )     ¹      q       
                        	     ;                 ¹W   QÇ   V       0       QT    0   QT  =   :    QT  =   :    QT  =   :    : Q5      QQC   Q;       Pæ   5   ž   	
=   
:    Q   5   ž   
=   
[      ]   B: Qæ      0   Q   [   	   ]      ]      ]      ]      ]   0   QÈ?ÔÎCÉÉÉÉÉÝHÖÉÛËNJXÐ`ÊiÊ  Ê  Ê  «Ê  ÊÑ  ú    EventEmitter   exports   Services+   devtools/shared/defer=   devtools/shared/platform/stack-   RequireObjectCoercible#   describeNthCaller   isWorker   prefs   getBoolPref%   devtools.dump.emit   addObserver   observe   decorate   prototype   on	   once   off	   emit   logEvent    ÿÿÿÿ      require   exports   module   console   .this                   EventEmitter   loggingEnabled   Services   defer#   describeNthCaller                  #   this.EventEmitterb  n
  s
  ?   2   ¹    @             .observed"  C    K      ¹    @                 observe                +   EventEmitter.decorateb €  Œ  X   #   ¹    @             onB µ  ß  i      ¹    @          	   onceB E  œ        ¹   @     event    listener    deferred    handler    .this   D#   J        ¹    @             offB ò  C        ¹   @     listener   D" Ý  2  ¡   @   ¹    @          	   emitB œ  Î  «      ¹+   @     listener   T"     œ   6   ¹    @             logEventB Ý     Ê      ¹4    @                 on      	   once         off      	   emit         logEvent               ÿÿÿÿ