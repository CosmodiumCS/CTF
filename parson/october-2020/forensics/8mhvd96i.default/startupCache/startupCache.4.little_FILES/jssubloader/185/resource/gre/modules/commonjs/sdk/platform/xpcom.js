   20170118123726C  n   ¹   0                           A       `  "       / *   T h i s   S o u r c e   C o d e   F o r m   i s   s u b j e c t   t o   t h e   t e r m s   o f   t h e   M o z i l l a   P u b l i c 
   *   L i c e n s e ,   v .   2 . 0 .   I f   a   c o p y   o f   t h e   M P L   w a s   n o t   d i s t r i b u t e d   w i t h   t h i s 
   *   f i l e ,   Y o u   c a n   o b t a i n   o n e   a t   h t t p : / / m o z i l l a . o r g / M P L / 2 . 0 / .   * / 
 
 " u s e   s t r i c t " ; 
 
 m o d u l e . m e t a d a t a   =   { 
     " s t a b i l i t y " :   " u n s t a b l e " 
 } ; 
 
 c o n s t   {   C c ,   C i ,   C r ,   C m ,   c o m p o n e n t s :   {   c l a s s e s B y I D   }   }   =   r e q u i r e ( ' c h r o m e ' ) ; 
 c o n s t   {   r e g i s t e r F a c t o r y ,   u n r e g i s t e r F a c t o r y ,   i s C I D R e g i s t e r e d   }   = 
             C m . Q u e r y I n t e r f a c e ( C i . n s I C o m p o n e n t R e g i s t r a r ) ; 
 
 c o n s t   {   m e r g e   }   =   r e q u i r e ( ' . . / u t i l / o b j e c t ' ) ; 
 c o n s t   {   C l a s s ,   e x t e n d ,   m i x   }   =   r e q u i r e ( ' . . / c o r e / h e r i t a g e ' ) ; 
 c o n s t   {   u u i d   }   =   r e q u i r e ( ' . . / u t i l / u u i d ' ) ; 
 
 / /   T h i s   i s   a   b a s e   p r o t o t y p e ,   t h a t   p r o v i d e s   b a r e   b o n e s   o f   X P C O M .   J S   b a s e d 
 / /   c o m p o n e n t s   c a n   b e   e a s i l y   i m p l e m e n t   b y   e x t e n d i n g   i t . 
 c o n s t   U n k n o w n   =   n e w   f u n c t i o n ( )   { 
     f u n c t i o n   h a s I n t e r f a c e ( c o m p o n e n t ,   i i d )   { 
         r e t u r n   c o m p o n e n t   & &   c o m p o n e n t . i n t e r f a c e s   & & 
             (   c o m p o n e n t . i n t e r f a c e s . s o m e ( i d   = >   i i d . e q u a l s ( C i [ i d ] ) )   | | 
                 c o m p o n e n t . i m p l e m e n t s . s o m e ( $   = >   h a s I n t e r f a c e ( $ ,   i i d ) )   | | 
                 h a s I n t e r f a c e ( O b j e c t . g e t P r o t o t y p e O f ( c o m p o n e n t ) ,   i i d ) ) ; 
     } 
 
     r e t u r n   C l a s s ( { 
         / * * 
           *   T h e   ` Q u e r y I n t e r f a c e `   m e t h o d   p r o v i d e s   r u n t i m e   t y p e   d i s c o v e r y   u s e d   b y   X P C O M . 
           *   T h i s   m e t h o d   r e t u r n   q u e r i e d   i n s t a n c e   o f   ` t h i s `   i f   g i v e n   ` i i d `   i s   l i s t e d   i n 
           *   t h e   ` i n t e r f a c e s `   p r o p e r t y   o r   i n   e q u i v a l e n t   p r o p e r t i e s   o f   o b j e c t s   i n   i t ' s 
           *   p r o t o t y p e   c h a i n .   I n   a d d i t i o n   i t   w i l l   l o o k   u p   i n   t h e   p r o t o t y p e s   u n d e r 
           *   ` i m p l e m e n t s `   a r r a y   p r o p e r t y ,   t h i s   w a y s   c o m p o s i t i o n s   m a d e   v i a   ` C l a s s ` 
           *   u t i l i t y   w i l l   c a r r y   i n t e r f a c e s   i m p l e m e n t e d   b y   c o m p o s i t i o n   c o m p o n e n t s . 
           * / 
         Q u e r y I n t e r f a c e :   f u n c t i o n   Q u e r y I n t e r f a c e ( i i d )   { 
             / /   F o r   s o m e   r e a s o n   t h e r e   a r e   c a s e s   w h e n   ` i i d `   i s   ` n u l l ` .   I n   s u c h   c a s e s   w e 
             / /   j u s t   r e t u r n   ` t h i s ` .   O t h e r w i s e   w e   v e r i f y   t h a t   c o m p o n e n t   i m p l e m e n t s   g i v e n 
             / /   ` i i d `   i n t e r f a c e .   T h i s   w i l l   b e   n o   l o n g e r   n e c e s s a r y   o n c e   B u g   7 4 8 0 0 3   i s 
             / /   f i x e d . 
             i f   ( i i d   & &   ! h a s I n t e r f a c e ( t h i s ,   i i d ) ) 
                 t h r o w   C r . N S _ E R R O R _ N O _ I N T E R F A C E ; 
 
             r e t u r n   t h i s ; 
         } , 
         / * * 
           *   A r r a y   o f   ` X P C O M `   i n t e r f a c e s   ( a s   s t r i n g s )   i m p l e m e n t e d   b y   t h i s   c o m p o n e n t . 
           *   A l l   c o m p o n e n t s   i m p l e m e n t   ` n s I S u p p o r t s `   b y   d e f a u l t   w h i c h   i s   d e f a u l t   v a l u e 
           *   h e r e .   P r o v i d e   a r r a y   o f   i n t e r f a c e s   i m p l e m e n t e d   b y   a n   o b j e c t   w h e n 
           *   e x t e n d i n g ,   t o   a p p e n d   t h e m   t o   t h i s   l i s t   ( P l e a s e   n o t e   t h a t   t h e r e   i s   n o 
           *   n e e d   t o   r e p e a t   i n t e r f a c e s   i m p l e m e n t e d   b y   s u p e r   a s   t h e y   w i l l   b e   a d d e d 
           *   a u t o m a t i c a l l y ) . 
           * / 
         i n t e r f a c e s :   O b j e c t . f r e e z e ( [   ' n s I S u p p o r t s '   ] ) 
     } ) ; 
 } 
 e x p o r t s . U n k n o w n   =   U n k n o w n ; 
 
 / /   B a s e   e x e m p l a r   f o r   c r e a t i n g   i n s t a n c e s   i m p l e m e n t i n g   ` n s I F a c t o r y `   i n t e r f a c e , 
 / /   t h a t   m a y b e   r e g i s t e r e d   i n t o   r u n t i m e   v i a   ` r e g i s t e r `   f u n c t i o n .   I n s t a n c e s   o f 
 / /   t h i s   f a c t o r y   c r e a t e   i n s t a n c e s   o f   e n c l o s e d   c o m p o n e n t   o n   ` c r e a t e I n s t a n c e ` . 
 c o n s t   F a c t o r y   =   C l a s s ( { 
     e x t e n d s :   U n k n o w n , 
     i n t e r f a c e s :   [   ' n s I F a c t o r y '   ] , 
     / * * 
       *   A l l   t h e   d e s c e n d a n t s   w i l l   g e t   a u t o   g e n e r a t e d   ` i d `   ( a l s o   k n o w n   a s   ` c l a s s I D ` 
       *   i n   X P C O M   w o r l d )   u n l e s s   o n e   i s   m a n u a l l y   p r o v i d e d . 
       * / 
     g e t   i d ( )   {   t h r o w   E r r o r ( ' F a c t o r y   m u s t   i m p l e m e n t   ` i d `   p r o p e r t y ' )   } , 
     / * * 
       *   X P C O M   ` c o n t r a c t I D `   m a y   o p t i o n a l l y     b e   p r o v i d e d   t o   a s s o c i a t e   t h i s   f a c t o r y 
       *   w i t h   i t .   ` c o n t r a c t `   i s   a   u n i q u e   s t r i n g   t h a t   h a s   a   f o l l o w i n g   f o r m a t : 
       *   ' @ v e n d o r . c o m / u n i q u e / i d ; 1 ' . 
       * / 
     c o n t r a c t :   n u l l , 
     / * * 
       *   C l a s s   d e s c r i p t i o n   t h a t   i s   b e i n g   r e g i s t e r e d .   T h i s   v a l u e   i s   i n t e n d e d   a s   a 
       *   h u m a n - r e a d a b l e   d e s c r i p t i o n   f o r   t h e   g i v e n   c l a s s   a n d   d o e s   n o t   n e e d s   t o   b e 
       *   g l o b a l l y   u n i q u e . 
       * / 
     d e s c r i p t i o n :   ' J e t p a c k   g e n e r a t e d   f a c t o r y ' , 
     / * * 
       *   T h i s   m e t h o d   i s   r e q u i r e d   b y   ` n s I F a c t o r y `   i n t e r f a c e s ,   b u t   a s   i n   m o s t 
       *   i m p l e m e n t a t i o n s   i t   d o e s   n o t h i n g   i n t e r e s t i n g . 
       * / 
     l o c k F a c t o r y :   f u n c t i o n   l o c k F a c t o r y ( l o c k )   { 
         r e t u r n   u n d e f i n e d ; 
     } , 
     / * * 
       *   I f   p r o p e r t y   i s   ` t r u e `   X P C O M   s e r v i c e   /   f a c t o r y   w i l l   b e   r e g i s t e r e d 
       *   a u t o m a t i c a l l y   o n   c r e a t i o n . 
       * / 
     r e g i s t e r :   t r u e , 
     / * * 
       *   I f   p r o p e r t y   i s   ` t r u e `   X P C O M   f a c t o r y   w i l l   b e   u n r e g i s t e r e d   p r i o r   t o   a d d - o n 
       *   u n l o a d . 
       * / 
     u n r e g i s t e r :   t r u e , 
     / * * 
       *   M e t h o d   i s   c a l l e d   o n   ` S e r v i c e . n e w ( o p t i o n s ) `   p a s s i n g   g i v e n   ` o p t i o n s `   t o 
       *   i t .   O p t i o n s   i s   e x p e c t e d   t o   h a v e   ` c o m p o n e n t `   p r o p e r t y   h o l d i n g   X P C O M 
       *   c o m p o n e n t   i m p l e m e n t a t i o n   t y p i c a l l y   d e c e d e n t   o f   ` U n k n o w n `   o r   a n y   c u s t o m 
       *   i m p l e m e n t a t i o n   w i t h   a   ` n e w `   m e t h o d   a n d   o p t i o n a l   ` r e g i s t e r ` ,   ` u n r e g i s t e r ` 
       *   f l a g s .   U n l e s s   ` r e g i s t e r `   i s   ` f a l s e `   S e r v i c e   /   F a c t o r y   w i l l   b e 
       *   a u t o m a t i c a l l y   r e g i s t e r e d .   U n l e s s   ` u n r e g i s t e r `   i s   ` f a l s e `   c o m p o n e n t   w i l l 
       *   b e   a u t o m a t i c a l l y   u n r e g i s t e r e d   o n   a d d - o n   u n l o a d . 
       * / 
     i n i t i a l i z e :   f u n c t i o n   i n i t i a l i z e ( o p t i o n s )   { 
         m e r g e ( t h i s ,   { 
             i d :   ' i d '   i n   o p t i o n s   ?   o p t i o n s . i d   :   u u i d ( ) , 
             r e g i s t e r :   ' r e g i s t e r '   i n   o p t i o n s   ?   o p t i o n s . r e g i s t e r   :   t h i s . r e g i s t e r , 
             u n r e g i s t e r :   ' u n r e g i s t e r '   i n   o p t i o n s   ?   o p t i o n s . u n r e g i s t e r   :   t h i s . u n r e g i s t e r , 
             c o n t r a c t :   ' c o n t r a c t '   i n   o p t i o n s   ?   o p t i o n s . c o n t r a c t   :   n u l l , 
             C o m p o n e n t :   o p t i o n s . C o m p o n e n t 
         } ) ; 
 
         / /   I f   s e r v i c e   /   f a c t o r y   h a s   a u t o   r e g i s t r a t i o n   e n a b l e d   t h e n   r e g i s t e r . 
         i f   ( t h i s . r e g i s t e r ) 
             r e g i s t e r ( t h i s ) ; 
     } , 
     / * * 
       *   C r e a t e s   a n   i n s t a n c e   o f   t h e   c l a s s   a s s o c i a t e d   w i t h   t h i s   f a c t o r y . 
       * / 
     c r e a t e I n s t a n c e :   f u n c t i o n   c r e a t e I n s t a n c e ( o u t e r ,   i i d )   { 
         t r y   { 
             i f   ( o u t e r ) 
                 t h r o w   C r . N S _ E R R O R _ N O _ A G G R E G A T I O N ; 
             r e t u r n   t h i s . c r e a t e ( ) . Q u e r y I n t e r f a c e ( i i d ) ; 
         } 
         c a t c h   ( e r r o r )   { 
             t h r o w   e r r o r   i n s t a n c e o f   C i . n s I E x c e p t i o n   ?   e r r o r   :   C r . N S _ E R R O R _ F A I L U R E ; 
         } 
     } , 
     c r e a t e :   f u n c t i o n   c r e a t e ( )   { 
         r e t u r n   t h i s . C o m p o n e n t ( ) ; 
     } 
 } ) ; 
 e x p o r t s . F a c t o r y   =   F a c t o r y ; 
 
 / /   E x e m p l a r   f o r   c r e a t i n g   s e r v i c e s   t h a t   i m p l e m e n t   ` n s I F a c t o r y `   i n t e r f a c e ,   t h a t 
 / /   c a n   b e   r e g i s t e r e d   i n t o   r u n t i m e   v i a   c a l l   t o   ` r e g i s t e r ` .   T h i s   s e r v i c e s   r e t u r n 
 / /   e n c l o s e d   ` c o m p o n e n t `   o n   ` g e t S e r v i c e ` . 
 c o n s t   S e r v i c e   =   C l a s s ( { 
     e x t e n d s :   F a c t o r y , 
     i n i t i a l i z e :   f u n c t i o n   i n i t i a l i z e ( o p t i o n s )   { 
         t h i s . c o m p o n e n t   =   o p t i o n s . C o m p o n e n t ( ) ; 
         F a c t o r y . p r o t o t y p e . i n i t i a l i z e . c a l l ( t h i s ,   o p t i o n s ) ; 
     } , 
     d e s c r i p t i o n :   ' J e t p a c k   g e n e r a t e d   s e r v i c e ' , 
     / * * 
       *   C r e a t e s   a n   i n s t a n c e   o f   t h e   c l a s s   a s s o c i a t e d   w i t h   t h i s   f a c t o r y . 
       * / 
     c r e a t e :   f u n c t i o n   c r e a t e ( )   { 
         r e t u r n   t h i s . c o m p o n e n t ; 
     } 
 } ) ; 
 e x p o r t s . S e r v i c e   =   S e r v i c e ; 
 
 f u n c t i o n   i s R e g i s t e r e d ( {   i d   } )   { 
     r e t u r n   i s C I D R e g i s t e r e d ( i d ) ; 
 } 
 e x p o r t s . i s R e g i s t e r e d   =   i s R e g i s t e r e d ; 
 
 / * * 
   *   R e g i s t e r s   g i v e n   ` c o m p o n e n t `   o b j e c t   t o   b e   u s e d   t o   i n s t a n t i a t e   a   p a r t i c u l a r 
   *   c l a s s   i d e n t i f i e d   b y   ` c o m p o n e n t . i d ` ,   a n d   c r e a t e s   a n   a s s o c i a t i o n   o f   c l a s s 
   *   n a m e   a n d   ` c o m p o n e n t . c o n t r a c t `   w i t h   t h e   c l a s s . 
   * / 
 f u n c t i o n   r e g i s t e r ( f a c t o r y )   { 
     i f   ( ! ( f a c t o r y   i n s t a n c e o f   F a c t o r y ) )   { 
         t h r o w   n e w   E r r o r ( " x p c o m . r e g i s t e r ( )   e x p e c t   a   F a c t o r y   i n s t a n c e . \ n "   + 
                                         " P l e a s e   r e f a c t o r   y o u r   c o d e   t o   n e w   x p c o m   m o d u l e   i f   y o u "   + 
                                         "   a r e   r e p a c k i n g   a n   a d d o n   f r o m   S D K   < =   1 . 5 : \ n "   + 
                                         " h t t p s : / / d e v e l o p e r . m o z i l l a . o r g / e n - U S / A d d - o n s / S D K / L o w - L e v e l _ A P I s / p l a t f o r m _ x p c o m " ) ; 
     } 
 
     r e g i s t e r F a c t o r y ( f a c t o r y . i d ,   f a c t o r y . d e s c r i p t i o n ,   f a c t o r y . c o n t r a c t ,   f a c t o r y ) ; 
 
     i f   ( f a c t o r y . u n r e g i s t e r ) 
         r e q u i r e ( ' . . / s y s t e m / u n l o a d ' ) . w h e n ( u n r e g i s t e r . b i n d ( n u l l ,   f a c t o r y ) ) ; 
 } 
 e x p o r t s . r e g i s t e r   =   r e g i s t e r ; 
 
 / * * 
   *   U n r e g i s t e r   a   f a c t o r y   a s s o c i a t e d   w i t h   a   p a r t i c u l a r   c l a s s   i d e n t i f i e d   b y 
   *   ` f a c t o r y . c l a s s I D ` . 
   * / 
 f u n c t i o n   u n r e g i s t e r ( f a c t o r y )   { 
     i f   ( i s R e g i s t e r e d ( f a c t o r y ) ) 
         u n r e g i s t e r F a c t o r y ( f a c t o r y . i d ,   f a c t o r y ) ; 
 } 
 e x p o r t s . u n r e g i s t e r   =   u n r e g i s t e r ; 
 
 f u n c t i o n   a u t o R e g i s t e r ( p a t h )   { 
     / /   T O D O :   T h i s   a s s u m e s   t h a t   t h e   u r l   p o i n t s   t o   a   d i r e c t o r y 
     / /   t h a t   c o n t a i n s   s u b d i r e c t o r i e s   c o r r e s p o n d i n g   t o   O S / A B I   a n d   t h e n 
     / /   f u r t h e r   s u b d i r e c t o r i e s   c o r r e s p o n d i n g   t o   G e c k o   p l a t f o r m   v e r s i o n . 
     / /   w e   s h o u l d   p r o b a b l y   e i t h e r   b e h a v e   i n t e l l i g e n t l y   h e r e   o r   a l l o w 
     / /   t h e   c a l l e r   t o   p a s s - i n   m o r e   o p t i o n s   i f   e . g .   t h e r e   a r e n ' t 
     / /   G e c k o - s p e c i f i c   b i n a r i e s   f o r   a   c o m p o n e n t   ( w h i c h   w i l l   b e   t h e   c a s e 
     / /   i f   o n l y   f r o z e n   i n t e r f a c e s   a r e   u s e d ) . 
 
     v a r   r u n t i m e   =   r e q u i r e ( " . . / s y s t e m / r u n t i m e " ) ; 
     v a r   o s D i r N a m e   =   r u n t i m e . O S   +   " _ "   +   r u n t i m e . X P C O M A B I ; 
     v a r   p l a t f o r m V e r s i o n   =   r e q u i r e ( " . . / s y s t e m / x u l - a p p " ) . p l a t f o r m V e r s i o n . s u b s t r i n g ( 0 ,   5 ) ; 
 
     v a r   f i l e   =   C c [ ' @ m o z i l l a . o r g / f i l e / l o c a l ; 1 ' ] 
                           . c r e a t e I n s t a n c e ( C i . n s I L o c a l F i l e ) ; 
     f i l e . i n i t W i t h P a t h ( p a t h ) ; 
     f i l e . a p p e n d ( o s D i r N a m e ) ; 
     f i l e . a p p e n d ( p l a t f o r m V e r s i o n ) ; 
 
     i f   ( ! ( f i l e . e x i s t s ( )   & &   f i l e . i s D i r e c t o r y ( ) ) ) 
         t h r o w   n e w   E r r o r ( " c o m p o n e n t   n o t   a v a i l a b l e   f o r   O S / A B I   "   + 
                                         o s D i r N a m e   +   "   a n d   p l a t f o r m   "   +   p l a t f o r m V e r s i o n ) ; 
 
     C m . Q u e r y I n t e r f a c e ( C i . n s I C o m p o n e n t R e g i s t r a r ) ; 
     C m . a u t o R e g i s t e r ( f i l e ) ; 
 } 
 e x p o r t s . a u t o R e g i s t e r   =   a u t o R e g i s t e r ; 
 
 / * * 
   *   R e t u r n s   r e g i s t e r e d   f a c t o r y   t h a t   h a s   a   g i v e n   ` i d `   o r   ` n u l l `   i f   n o t   f o u n d . 
   * / 
 f u n c t i o n   f a c t o r y B y I D ( i d )   { 
     r e t u r n   c l a s s e s B y I D [ i d ]   | |   n u l l ; 
 } 
 e x p o r t s . f a c t o r y B y I D   =   f a c t o r y B y I D ; 
 
 / * * 
   *   R e t u r n s   f a c t o r y   r e g i s t e r e d   w i t h   a   g i v e n   ` c o n t r a c t `   o r   ` n u l l `   i f   n o t   f o u n d . 
   *   I n   c o n t r a s t   t o   ` C c [ c o n t r a c t ] `   t h a t   d o e s   i g n o r e s   n e w   f a c t o r y   r e g i s t r a t i o n 
   *   w i t h   a   g i v e n   ` c o n t r a c t `   t h i s   w i l l   r e t u r n   a   f a c t o r y   c u r r e n t l y   a s s o c i a t e d 
   *   w i t h   a   ` c o n t r a c t ` . 
   * / 
 f u n c t i o n   f a c t o r y B y C o n t r a c t ( c o n t r a c t )   { 
     r e t u r n   f a c t o r y B y I D ( C m . c o n t r a c t I D T o C I D ( c o n t r a c t ) ) ; 
 } 
 e x p o r t s . f a c t o r y B y C o n t r a c t   =   f a c t o r y B y C o n t r a c t ; 
   resource://gre/modules/commonjs/toolkit/loader.js -> resource://gre/modules/commonjs/sdk/platform/xpcom.js     "                                                   	   
                                 =   ;   [    =   ]   0   ;      =   :    : Q5    ¡    Q5   ¡   Q5   ¡   Q5   ¡   Q5      : Q5   ¡   QQQ   ¸   
   5   :    : Q5   ¡   Q5   ¡   Q5   ¡   QQ;      =   :    : Q5   ¡   QQ;      =   :    : Q5   	¡   	Q5   
¡   
Q5   ¡   QQ;      =   :    : Q5   ¡   QQ   A,  R  ¡   Q;      0      	   	Y      ]   f   ]       a   !@]   "=   #]   $   ]   %C]   &C]   '   ]   (   ]   )   ]   *: ¡   Q;      0      	   	[   
   ]      ]   (=   +]   $   	]   *: ¡   Q;      0   ;      ,0   ,;      &0   &;      '0   ';      -0   -;      .0   .;      /0   /ÿÖ  ¡	  «	  ¾	  Ä	  ã	  î	ÊÐÏ2ÿâÖõÏÝÏõÏÝÊ
É;Ð@ÏÊÊGÊMSÊXÊ_dnÊ~Ê  Ê@É  Ð  ÏÊÊÊÊ  É  ÐÐ  «  ¸Ð  ¾Ð  ÞÐ  ãÐ  îÐ.    Cc   Ci   Cr   Cm   classesByID   registerFactory#   unregisterFactory   isCIDRegistered   merge   Class   extend   mix	   uuid   Unknown   Factory   Service   use strict   module   metadata   unstable   stability   require   chrome-   RequireObjectCoercible   components   QueryInterface+   nsIComponentRegistrar   ../util/object!   ../core/heritage   ../util/uuid   exports   extends   interfaces   id   contract3   Jetpack generated factory   description   lockFactory   register   unregister   initialize   createInstance   create3   Jetpack generated service   isRegistered   autoRegister   factoryByID#   factoryByContract   ÿÿÿÿ      isRegistered   register   unregister   autoRegister   factoryByID#   factoryByContract   Cc   Ci   Cr   Cm   classesByID   registerFactory#   unregisterFactory   isCIDRegistered   merge   Class   extend   mix	   uuid   Unknown   Factory   Service                      stability                    Unknown<c   B       ¹                                        þ  	                           Q        [      ]   ;   ¸   
f   : ]   : ËÏ&Ê8ÑÈ	:    Class   QueryInterface   Object   freeze   interfaces    ÿÿÿÿ      hasInterface                      hasInterface           ¹   @     iid   T"        "   ¹    @    T" ¾  ×     "   ¹    @              QueryInterfaceB B  µ  &   +   ¹
    @                nsISupports                   QueryInterface         interfaces                      nsIFactory                get id         ¹                                         {  µ  G                 ;        =   : pÏ.    ErrorI   Factory must implement `id` property    ÿÿÿÿ              ¹    @              lockFactoryC         ¹                                          ?  X   #             ;        undefined   ÿÿÿÿ      lockFactory                     	   lock        ¹    @              initializeC  ù      ¹      7                                _  0  n   !            ¹W   Q;        V   [    =   T  q   æT  5      æ;      :  æ]   =   T  q   æT  5      æV   5   æ]   =   T  q   æT  5      æV   5   æ]   =   T  q   æT  5      æ@æ]   T  5   ]   : QV   5      æ;      V   : QæÓÉÞ#ÉÉãÉãÉÛÍoxÉÓ    merge   id	   uuid   register   unregister   contract   Component   ÿÿÿÿ      initialize                        options   .this                       id         register         unregister         contract         Component       ¹
    @              createInstanceC        ¹      *                        
       «    ~   )            ¹W   QT     æ;    5   pæV   ¸   
:  ¸   
T :    Fæ  Qv  QV  ;   5   r   æV     æ;    5   æpÉ    æ2ÌËÐ  É  ÌÏ
ä    Cr/   NS_ERROR_NO_AGGREGATION   create   QueryInterface   Ci   nsIException!   NS_ERROR_FAILURE   ÿÿÿÿ      createInstance                        outer   iid   .this                   error                 6      F   2   ÿÿÿÿ¹    @              createC         ¹      
                                  ¹  Þ                 ¹W   QV   ¸    
:  Ë    Component   ÿÿÿÿ      create                        .this         ¹
    @              initializeC  ?      ¹                                              !            ¹W   QV   T  ¸   
:  0    Q;   5   5   ¸   
V   T  l QÎÉá    component   Component   Factory   prototype   initialize	   call   ÿÿÿÿ      initialize                        options   .this       ¹
    @              createC         ¹                                          ;                 ¹W   QV   5    É    component   ÿÿÿÿ      create                        .this         ¹
    @                 extends         initialize         description         create                    isRegistered  /       ¹      	                                  q    ¡                 T      : Q5   W   QQ      V   : ÜÎ -   RequireObjectCoercible   id   isCIDRegistered    ÿÿÿÿ       id                    register         ¹      $                                  ¤  É  «                 T  ;    r    æ;   A=   ,  R pæ;      T  5   T  5   T  5   T  : QT  5      6æ;      =   	: ¸   

;   ¸   
@T  : : QæÊÏ  ³éÈé!ÿÿÿß    Factory   Error­  xpcom.register() expect a Factory instance.
Please refactor your code to new xpcom module if you are repacking an addon from SDK <= 1.5:
https://developer.mozilla.org/en-US/Add-ons/SDK/Low-Level_APIs/platform_xpcom   registerFactory   id   description   contract   unregister   require!   ../system/unload	   when	   bind    ÿÿÿÿ      factory        ¹    @              unregister  1       ¹                                        b  ¸  ¾                 ;        T  :    æ;      T  5   T  : QæÍÚ    isRegistered#   unregisterFactory   id    ÿÿÿÿ      factory        ¹    @              autoRegister  7      ¹      V                          #        ð     Ä                ;        =   : W   QV   5   =   V   5   W  Q;        =   : 5   ¸   
>×: W  Q;   5   	¸   

;   5   : W  QV  ¸   
T  : QV  ¸   
V  : QV  ¸   
V  : QV  ¸   
:  E   æQV  ¸   
:  æ    )æ;   A=   V  =   V  ,  R pæ;   ¸   
;   5   : Q;   ¸   
V  : Q  ÍÏ
ÈÞÏÚÑÊ  ÑÈÒÓÓËÕËÔ  Ø
ÚÔ    require#   ../system/runtime   OS   _   XPCOMABI#   ../system/xul-app   platformVersion   substring   Cc3   @mozilla.org/file/local;1   createInstance   Ci   nsILocalFile   initWithPath   append   exists   isDirectory   ErrorG   component not available for OS/ABI     and platform    Cm   QueryInterface+   nsIComponentRegistrar   autoRegister    ÿÿÿÿ   	   path   runtime   osDirName   platformVersion	   file       ¹    @              factoryByID         ¹                                        ¡   Ë   ã                 ;    T  7D   æQ@æÒ    classesByID    ÿÿÿÿ      id        ¹    @           #   factoryByContract  !       ¹                                        "  O"  î                 ;        ;   ¸   
T  : : Ùÿÿÿô    factoryByID   Cm   contractIDToCID    ÿÿÿÿ      contract        ¹    @ 