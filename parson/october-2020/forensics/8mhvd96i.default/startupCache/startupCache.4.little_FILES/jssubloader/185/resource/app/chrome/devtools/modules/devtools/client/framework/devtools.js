   20170118123726Ü  <   š   ;                           *       `  c@       / *   T h i s   S o u r c e   C o d e   F o r m   i s   s u b j e c t   t o   t h e   t e r m s   o f   t h e   M o z i l l a   P u b l i c 
   *   L i c e n s e ,   v .   2 . 0 .   I f   a   c o p y   o f   t h e   M P L   w a s   n o t   d i s t r i b u t e d   w i t h   t h i s 
   *   f i l e ,   Y o u   c a n   o b t a i n   o n e   a t   h t t p : / / m o z i l l a . o r g / M P L / 2 . 0 / .   * / 
 
 " u s e   s t r i c t " ; 
 
 c o n s t   S e r v i c e s   =   r e q u i r e ( " S e r v i c e s " ) ; 
 c o n s t   p r o m i s e   =   r e q u i r e ( " p r o m i s e " ) ; 
 c o n s t   d e f e r   =   r e q u i r e ( " d e v t o o l s / s h a r e d / d e f e r " ) ; 
 
 / /   L o a d   g D e v T o o l s B r o w s e r   t o o l b o x   l a z i l y   a s   t h e y   n e e d   g D e v T o o l s   t o   b e   f u l l y   i n i t i a l i z e d 
 l o a d e r . l a z y R e q u i r e G e t t e r ( t h i s ,   " T o o l b o x " ,   " d e v t o o l s / c l i e n t / f r a m e w o r k / t o o l b o x " ,   t r u e ) ; 
 l o a d e r . l a z y R e q u i r e G e t t e r ( t h i s ,   " g D e v T o o l s B r o w s e r " ,   " d e v t o o l s / c l i e n t / f r a m e w o r k / d e v t o o l s - b r o w s e r " ,   t r u e ) ; 
 
 c o n s t   { d e f a u l t T o o l s :   D e f a u l t T o o l s ,   d e f a u l t T h e m e s :   D e f a u l t T h e m e s }   = 
     r e q u i r e ( " d e v t o o l s / c l i e n t / d e f i n i t i o n s " ) ; 
 c o n s t   E v e n t E m i t t e r   =   r e q u i r e ( " d e v t o o l s / s h a r e d / e v e n t - e m i t t e r " ) ; 
 c o n s t   { J s o n V i e w }   =   r e q u i r e ( " d e v t o o l s / c l i e n t / j s o n v i e w / m a i n " ) ; 
 c o n s t   A b o u t D e v T o o l s   =   r e q u i r e ( " d e v t o o l s / c l i e n t / f r a m e w o r k / a b o u t - d e v t o o l s - t o o l b o x " ) ; 
 c o n s t   { w h e n :   u n l o a d }   =   r e q u i r e ( " s d k / s y s t e m / u n l o a d " ) ; 
 
 c o n s t   F O R B I D D E N _ I D S   =   n e w   S e t ( [ " t o o l b o x " ,   " " ] ) ; 
 c o n s t   M A X _ O R D I N A L   =   9 9 ; 
 
 / * * 
   *   D e v T o o l s   i s   a   c l a s s   t h a t   r e p r e s e n t s   a   s e t   o f   d e v e l o p e r   t o o l s ,   i t   h o l d s   a 
   *   s e t   o f   t o o l s   a n d   k e e p s   t r a c k   o f   o p e n   t o o l b o x e s   i n   t h e   b r o w s e r . 
   * / 
 t h i s . D e v T o o l s   =   f u n c t i o n   D e v T o o l s ( )   { 
     t h i s . _ t o o l s   =   n e w   M a p ( ) ;           / /   M a p < t o o l I d ,   t o o l > 
     t h i s . _ t h e m e s   =   n e w   M a p ( ) ;         / /   M a p < t h e m e I d ,   t h e m e > 
     t h i s . _ t o o l b o x e s   =   n e w   M a p ( ) ;   / /   M a p < t a r g e t ,   t o o l b o x > 
 
     / /   d e s t r o y ( )   i s   a n   o b s e r v e r ' s   h a n d l e r   s o   w e   n e e d   t o   p r e s e r v e   c o n t e x t . 
     t h i s . d e s t r o y   =   t h i s . d e s t r o y . b i n d ( t h i s ) ; 
 
     / /   J S O N   V i e w e r   f o r   ' a p p l i c a t i o n / j s o n '   d o c u m e n t s . 
     J s o n V i e w . i n i t i a l i z e ( ) ; 
 
     A b o u t D e v T o o l s . r e g i s t e r ( ) ; 
 
     E v e n t E m i t t e r . d e c o r a t e ( t h i s ) ; 
 
     S e r v i c e s . o b s . a d d O b s e r v e r ( t h i s . d e s t r o y ,   " q u i t - a p p l i c a t i o n " ,   f a l s e ) ; 
 
     / /   T h i s   i s   i m p o r t a n t   s t e p   i n   i n i t i a l i z a t i o n   c o d e p a t h   w h e r e   w e   a r e   g o i n g   t o 
     / /   s t a r t   r e g i s t e r i n g   a l l   d e f a u l t   t o o l s   a n d   t h e m e s :   c r e a t e   m e n u i t e m s ,   k e y s ,   e m i t 
     / /   r e l a t e d   e v e n t s . 
     t h i s . r e g i s t e r D e f a u l t s ( ) ; 
 } ; 
 
 D e v T o o l s . p r o t o t y p e   =   { 
     / /   T h e   w i n d o w t y p e   o f   t h e   m a i n   w i n d o w ,   u s e d   i n   v a r i o u s   t o o l s .   T h i s   m a y   b e   s e t 
     / /   t o   s o m e t h i n g   d i f f e r e n t   b y   o t h e r   g e c k o   a p p s . 
     c h r o m e W i n d o w T y p e :   " n a v i g a t o r : b r o w s e r " , 
 
     r e g i s t e r D e f a u l t s ( )   { 
         / /   E n s u r e   r e g i s t e r i n g   i t e m s   i n   t h e   s o r t e d   o r d e r   ( g e t D e f a u l t *   f u n c t i o n s 
         / /   r e t u r n   s o r t e d   l i s t s ) 
         t h i s . g e t D e f a u l t T o o l s ( ) . f o r E a c h ( d e f i n i t i o n   = >   t h i s . r e g i s t e r T o o l ( d e f i n i t i o n ) ) ; 
         t h i s . g e t D e f a u l t T h e m e s ( ) . f o r E a c h ( d e f i n i t i o n   = >   t h i s . r e g i s t e r T h e m e ( d e f i n i t i o n ) ) ; 
     } , 
 
     u n r e g i s t e r D e f a u l t s ( )   { 
         f o r   ( l e t   d e f i n i t i o n   o f   t h i s . g e t T o o l D e f i n i t i o n A r r a y ( ) )   { 
             t h i s . u n r e g i s t e r T o o l ( d e f i n i t i o n . i d ) ; 
         } 
         f o r   ( l e t   d e f i n i t i o n   o f   t h i s . g e t T h e m e D e f i n i t i o n A r r a y ( ) )   { 
             t h i s . u n r e g i s t e r T h e m e ( d e f i n i t i o n . i d ) ; 
         } 
     } , 
 
     / * * 
       *   R e g i s t e r   a   n e w   d e v e l o p e r   t o o l . 
       * 
       *   A   d e f i n i t i o n   i s   a   l i g h t   o b j e c t   t h a t   h o l d s   d i f f e r e n t   i n f o r m a t i o n   a b o u t   a 
       *   d e v e l o p e r   t o o l .   T h i s   o b j e c t   i s   n o t   s u p p o s e d   t o   h a v e   a n y   o p e r a t i o n a l   c o d e . 
       *   S e e   i t   a s   a   " m a n i f e s t " . 
       *   T h e   o n l y   a c t u a l   c o d e   l i v e s   i n   t h e   b u i l d ( )   f u n c t i o n ,   w h i c h   w i l l   b e   u s e d   t o 
       *   s t a r t   a n   i n s t a n c e   o f   t h i s   t o o l . 
       * 
       *   E a c h   t o o l D e f i n i t i o n   h a s   t h e   f o l l o w i n g   p r o p e r t i e s : 
       *   -   i d :   U n i q u e   i d e n t i f i e r   f o r   t h i s   t o o l   ( s t r i n g | r e q u i r e d ) 
       *   -   v i s i b i l i t y s w i t c h :   P r o p e r t y   n a m e   t o   a l l o w   u s   t o   h i d e   t h i s   t o o l   f r o m   t h e 
       *                                           D e v T o o l s   T o o l b o x . 
       *                                           A   f a l s y   v a l u e   i n d i c a t e s   t h a t   i t   c a n n o t   b e   h i d d e n . 
       *   -   i c o n :   U R L   p o i n t i n g   t o   a   g r a p h i c   w h i c h   w i l l   b e   u s e d   a s   t h e   s r c   f o r   a n 
       *                   1 6 x 1 6   i m g   t a g   ( s t r i n g | r e q u i r e d ) 
       *   -   i n v e r t I c o n F o r L i g h t T h e m e :   T h e   i c o n   c a n   a u t o m a t i c a l l y   h a v e   a n   i n v e r s i o n 
       *                   f i l t e r   a p p l i e d   ( d e f a u l t   i s   f a l s e ) .     A l l   b u i l t i n   t o o l s   a r e   t r u e ,   b u t 
       *                   a d d o n s   m a y   o m i t   t h i s   t o   p r e v e n t   u n w a n t e d   c h a n g e s   t o   t h e   ` i c o n ` 
       *                   i m a g e .   f i l t e r :   i n v e r t ( 1 )   i s   a p p l i e d   t o   t h e   i m a g e   ( b o o l e a n | o p t i o n a l ) 
       *   -   u r l :   U R L   p o i n t i n g   t o   a   X U L / X H T M L   d o c u m e n t   c o n t a i n i n g   t h e   u s e r   i n t e r f a c e 
       *                 ( s t r i n g | r e q u i r e d ) 
       *   -   l a b e l :   L o c a l i z e d   n a m e   f o r   t h e   t o o l   t o   b e   d i s p l a y e d   t o   t h e   u s e r 
       *                     ( s t r i n g | r e q u i r e d ) 
       *   -   h i d e I n O p t i o n s :   B o o l e a n   i n d i c a t i n g   w h e t h e r   o r   n o t   t h i s   t o o l   s h o u l d   b e 
                                             s h o w n   i n   t o o l b o x   o p t i o n s   o r   n o t .   D e f a u l t s   t o   f a l s e . 
       *                                     ( b o o l e a n ) 
       *   -   b u i l d :   F u n c t i o n   t h a t   t a k e s   a n   i f r a m e ,   w h i c h   h a s   b e e n   p o p u l a t e d   w i t h   t h e 
       *                     m a r k u p   f r o m   | u r l | ,   a n d   a l s o   t h e   t o o l b o x   c o n t a i n i n g   t h e   p a n e l . 
       *                     A n d   r e t u r n s   a n   i n s t a n c e   o f   T o o l P a n e l   ( f u n c t i o n | r e q u i r e d ) 
       * / 
     r e g i s t e r T o o l :   f u n c t i o n   D T _ r e g i s t e r T o o l ( t o o l D e f i n i t i o n )   { 
         l e t   t o o l I d   =   t o o l D e f i n i t i o n . i d ; 
 
         i f   ( ! t o o l I d   | |   F O R B I D D E N _ I D S . h a s ( t o o l I d ) )   { 
             t h r o w   n e w   E r r o r ( " I n v a l i d   d e f i n i t i o n . i d " ) ; 
         } 
 
         / /   M a k e   s u r e   t h a t   a d d i t i o n a l   t o o l s   w i l l   a l w a y s   b e   a b l e   t o   b e   h i d d e n . 
         / /   W h e n   b e i n g   c a l l e d   f r o m   m a i n . j s ,   d e f a u l t T o o l s   h a s   n o t   y e t   b e e n   e x p o r t e d . 
         / /   B u t ,   w e   c a n   a s s u m e   t h a t   i n   t h i s   c a s e ,   i t   i s   a   d e f a u l t   t o o l . 
         i f   ( D e f a u l t T o o l s . i n d e x O f ( t o o l D e f i n i t i o n )   = =   - 1 )   { 
             t o o l D e f i n i t i o n . v i s i b i l i t y s w i t c h   =   " d e v t o o l s . "   +   t o o l I d   +   " . e n a b l e d " ; 
         } 
 
         t h i s . _ t o o l s . s e t ( t o o l I d ,   t o o l D e f i n i t i o n ) ; 
 
         t h i s . e m i t ( " t o o l - r e g i s t e r e d " ,   t o o l I d ) ; 
     } , 
 
     / * * 
       *   R e m o v e s   a l l   t o o l s   t h a t   m a t c h   t h e   g i v e n   | t o o l I d | 
       *   N e e d e d   s o   t h a t   a d d - o n s   c a n   r e m o v e   t h e m s e l v e s   w h e n   t h e y   a r e   d e a c t i v a t e d 
       * 
       *   @ p a r a m   { s t r i n g | o b j e c t }   t o o l 
       *                 D e f i n i t i o n   o r   t h e   i d   o f   t h e   t o o l   t o   u n r e g i s t e r .   P a s s i n g   t h e 
       *                 t o o l   i d   s h o u l d   b e   a v o i d e d   a s   i t   i s   a   t e m p o r a r y   m e a s u r e . 
       *   @ p a r a m   { b o o l e a n }   i s Q u i t A p p l i c a t i o n 
       *                 t r u e   t o   i n d i c a t e   t h a t   t h e   c a l l   i s   d u e   t o   a p p   q u i t ,   s o   w e   s h o u l d   n o t 
       *                 c a u s e   a   c a s c a d e   o f   c o s t l y   e v e n t s 
       * / 
     u n r e g i s t e r T o o l :   f u n c t i o n   D T _ u n r e g i s t e r T o o l ( t o o l ,   i s Q u i t A p p l i c a t i o n )   { 
         l e t   t o o l I d   =   n u l l ; 
         i f   ( t y p e o f   t o o l   = =   " s t r i n g " )   { 
             t o o l I d   =   t o o l ; 
             t o o l   =   t h i s . _ t o o l s . g e t ( t o o l ) ; 
         } 
         e l s e   { 
             t o o l I d   =   t o o l . i d ; 
         } 
         t h i s . _ t o o l s . d e l e t e ( t o o l I d ) ; 
 
         i f   ( ! i s Q u i t A p p l i c a t i o n )   { 
             t h i s . e m i t ( " t o o l - u n r e g i s t e r e d " ,   t o o l ) ; 
         } 
     } , 
 
     / * * 
       *   S o r t i n g   f u n c t i o n   u s e d   f o r   s o r t i n g   t o o l s   b a s e d   o n   t h e i r   o r d i n a l s . 
       * / 
     o r d i n a l S o r t :   f u n c t i o n   D T _ o r d i n a l S o r t ( d 1 ,   d 2 )   { 
         l e t   o 1   =   ( t y p e o f   d 1 . o r d i n a l   = =   " n u m b e r " )   ?   d 1 . o r d i n a l   :   M A X _ O R D I N A L ; 
         l e t   o 2   =   ( t y p e o f   d 2 . o r d i n a l   = =   " n u m b e r " )   ?   d 2 . o r d i n a l   :   M A X _ O R D I N A L ; 
         r e t u r n   o 1   -   o 2 ; 
     } , 
 
     g e t D e f a u l t T o o l s :   f u n c t i o n   D T _ g e t D e f a u l t T o o l s ( )   { 
         r e t u r n   D e f a u l t T o o l s . s o r t ( t h i s . o r d i n a l S o r t ) ; 
     } , 
 
     g e t A d d i t i o n a l T o o l s :   f u n c t i o n   D T _ g e t A d d i t i o n a l T o o l s ( )   { 
         l e t   t o o l s   =   [ ] ; 
         f o r   ( l e t   [ k e y ,   v a l u e ]   o f   t h i s . _ t o o l s )   { 
             i f   ( D e f a u l t T o o l s . i n d e x O f ( v a l u e )   = =   - 1 )   { 
                 t o o l s . p u s h ( v a l u e ) ; 
             } 
         } 
         r e t u r n   t o o l s . s o r t ( t h i s . o r d i n a l S o r t ) ; 
     } , 
 
     g e t D e f a u l t T h e m e s ( )   { 
         r e t u r n   D e f a u l t T h e m e s . s o r t ( t h i s . o r d i n a l S o r t ) ; 
     } , 
 
     / * * 
       *   G e t   a   t o o l   d e f i n i t i o n   i f   i t   e x i s t s   a n d   i s   e n a b l e d . 
       * 
       *   @ p a r a m   { s t r i n g }   t o o l I d 
       *                 T h e   i d   o f   t h e   t o o l   t o   s h o w 
       * 
       *   @ r e t u r n   { T o o l D e f i n i t i o n | n u l l }   t o o l 
       *                   T h e   T o o l D e f i n i t i o n   f o r   t h e   i d   o r   n u l l . 
       * / 
     g e t T o o l D e f i n i t i o n :   f u n c t i o n   D T _ g e t T o o l D e f i n i t i o n ( t o o l I d )   { 
         l e t   t o o l   =   t h i s . _ t o o l s . g e t ( t o o l I d ) ; 
         i f   ( ! t o o l )   { 
             r e t u r n   n u l l ; 
         }   e l s e   i f   ( ! t o o l . v i s i b i l i t y s w i t c h )   { 
             r e t u r n   t o o l ; 
         } 
 
         l e t   e n a b l e d ; 
         t r y   { 
             e n a b l e d   =   S e r v i c e s . p r e f s . g e t B o o l P r e f ( t o o l . v i s i b i l i t y s w i t c h ) ; 
         }   c a t c h   ( e )   { 
             e n a b l e d   =   t r u e ; 
         } 
 
         r e t u r n   e n a b l e d   ?   t o o l   :   n u l l ; 
     } , 
 
     / * * 
       *   A l l o w   T o o l B o x e s   t o   g e t   a t   t h e   l i s t   o f   t o o l s   t h a t   t h e y   s h o u l d   p o p u l a t e 
       *   t h e m s e l v e s   w i t h . 
       * 
       *   @ r e t u r n   { M a p }   t o o l s 
       *                   A   m a p   o f   t h e   t h e   t o o l   d e f i n i t i o n s   r e g i s t e r e d   i n   t h i s   i n s t a n c e 
       * / 
     g e t T o o l D e f i n i t i o n M a p :   f u n c t i o n   D T _ g e t T o o l D e f i n i t i o n M a p ( )   { 
         l e t   t o o l s   =   n e w   M a p ( ) ; 
 
         f o r   ( l e t   [ i d ,   d e f i n i t i o n ]   o f   t h i s . _ t o o l s )   { 
             i f   ( t h i s . g e t T o o l D e f i n i t i o n ( i d ) )   { 
                 t o o l s . s e t ( i d ,   d e f i n i t i o n ) ; 
             } 
         } 
 
         r e t u r n   t o o l s ; 
     } , 
 
     / * * 
       *   T o o l s   h a v e   a n   i n h e r e n t   o r d e r i n g   t h a t   c a n ' t   b e   r e p r e s e n t e d   i n   a   M a p   s o 
       *   g e t T o o l D e f i n i t i o n A r r a y   p r o v i d e s   a n   a l t e r n a t i v e   r e p r e s e n t a t i o n   o f   t h e 
       *   d e f i n i t i o n s   s o r t e d   b y   o r d i n a l   v a l u e . 
       * 
       *   @ r e t u r n   { A r r a y }   t o o l s 
       *                   A   s o r t e d   a r r a y   o f   t h e   t o o l   d e f i n i t i o n s   r e g i s t e r e d   i n   t h i s   i n s t a n c e 
       * / 
     g e t T o o l D e f i n i t i o n A r r a y :   f u n c t i o n   D T _ g e t T o o l D e f i n i t i o n A r r a y ( )   { 
         l e t   d e f i n i t i o n s   =   [ ] ; 
 
         f o r   ( l e t   [ i d ,   d e f i n i t i o n ]   o f   t h i s . _ t o o l s )   { 
             i f   ( t h i s . g e t T o o l D e f i n i t i o n ( i d ) )   { 
                 d e f i n i t i o n s . p u s h ( d e f i n i t i o n ) ; 
             } 
         } 
 
         r e t u r n   d e f i n i t i o n s . s o r t ( t h i s . o r d i n a l S o r t ) ; 
     } , 
 
     / * * 
       *   R e g i s t e r   a   n e w   t h e m e   f o r   d e v e l o p e r   t o o l s   t o o l b o x . 
       * 
       *   A   d e f i n i t i o n   i s   a   l i g h t   o b j e c t   t h a t   h o l d s   v a r i o u s   i n f o r m a t i o n   a b o u t   a 
       *   t h e m e . 
       * 
       *   E a c h   t h e m e D e f i n i t i o n   h a s   t h e   f o l l o w i n g   p r o p e r t i e s : 
       *   -   i d :   U n i q u e   i d e n t i f i e r   f o r   t h i s   t h e m e   ( s t r i n g | r e q u i r e d ) 
       *   -   l a b e l :   L o c a l i z e d   n a m e   f o r   t h e   t h e m e   t o   b e   d i s p l a y e d   t o   t h e   u s e r 
       *                     ( s t r i n g | r e q u i r e d ) 
       *   -   s t y l e s h e e t s :   A r r a y   o f   U R L s   p o i n t i n g   t o   a   C S S   d o c u m e n t ( s )   c o n t a i n i n g 
       *                                 t h e   t h e m e   s t y l e   r u l e s   ( a r r a y | r e q u i r e d ) 
       *   -   c l a s s L i s t :   A r r a y   o f   c l a s s   n a m e s   i d e n t i f y i n g   t h e   t h e m e   w i t h i n   a   d o c u m e n t . 
       *                             T h e s e   n a m e s   a r e   s e t   t o   d o c u m e n t   e l e m e n t   w h e n   a p p l y i n g 
       *                             t h e   t h e m e   ( a r r a y | r e q u i r e d ) 
       *   -   o n A p p l y :   F u n c t i o n   t h a t   i s   e x e c u t e d   b y   t h e   f r a m e w o r k   w h e n   t h e   t h e m e 
       *                         i s   a p p l i e d .   T h e   f u n c t i o n   t a k e s   t h e   c u r r e n t   i f r a m e   w i n d o w 
       *                         a n d   t h e   p r e v i o u s   t h e m e   i d   a s   a r g u m e n t s   ( f u n c t i o n ) 
       *   -   o n U n a p p l y :   F u n c t i o n   t h a t   i s   e x e c u t e d   b y   t h e   f r a m e w o r k   w h e n   t h e   t h e m e 
       *                         i s   u n a p p l i e d .   T h e   f u n c t i o n   t a k e s   t h e   c u r r e n t   i f r a m e   w i n d o w 
       *                         a n d   t h e   n e w   t h e m e   i d   a s   a r g u m e n t s   ( f u n c t i o n ) 
       * / 
     r e g i s t e r T h e m e :   f u n c t i o n   D T _ r e g i s t e r T h e m e ( t h e m e D e f i n i t i o n )   { 
         l e t   t h e m e I d   =   t h e m e D e f i n i t i o n . i d ; 
 
         i f   ( ! t h e m e I d )   { 
             t h r o w   n e w   E r r o r ( " I n v a l i d   t h e m e   i d " ) ; 
         } 
 
         i f   ( t h i s . _ t h e m e s . g e t ( t h e m e I d ) )   { 
             t h r o w   n e w   E r r o r ( " T h e m e   w i t h   t h e   s a m e   i d   i s   a l r e a d y   r e g i s t e r e d " ) ; 
         } 
 
         t h i s . _ t h e m e s . s e t ( t h e m e I d ,   t h e m e D e f i n i t i o n ) ; 
 
         t h i s . e m i t ( " t h e m e - r e g i s t e r e d " ,   t h e m e I d ) ; 
     } , 
 
     / * * 
       *   R e m o v e s   a n   e x i s t i n g   t h e m e   f r o m   t h e   l i s t   o f   r e g i s t e r e d   t h e m e s . 
       *   N e e d e d   s o   t h a t   a d d - o n s   c a n   r e m o v e   t h e m s e l v e s   w h e n   t h e y   a r e   d e a c t i v a t e d 
       * 
       *   @ p a r a m   { s t r i n g | o b j e c t }   t h e m e 
       *                 D e f i n i t i o n   o r   t h e   i d   o f   t h e   t h e m e   t o   u n r e g i s t e r . 
       * / 
     u n r e g i s t e r T h e m e :   f u n c t i o n   D T _ u n r e g i s t e r T h e m e ( t h e m e )   { 
         l e t   t h e m e I d   =   n u l l ; 
         i f   ( t y p e o f   t h e m e   = =   " s t r i n g " )   { 
             t h e m e I d   =   t h e m e ; 
             t h e m e   =   t h i s . _ t h e m e s . g e t ( t h e m e ) ; 
         } 
         e l s e   { 
             t h e m e I d   =   t h e m e . i d ; 
         } 
 
         l e t   c u r r T h e m e   =   S e r v i c e s . p r e f s . g e t C h a r P r e f ( " d e v t o o l s . t h e m e " ) ; 
 
         / /   N o t e   t h a t   w e   c a n ' t   c h e c k   i f   ` t h e m e `   i s   a n   i t e m 
         / /   o f   ` D e f a u l t T h e m e s `   a s   w e   e n d   u p   r e l o a d i n g   d e f i n i t i o n s 
         / /   m o d u l e   a n d   e n d   u p   w i t h   d i f f e r e n t   t h e m e   o b j e c t s 
         l e t   i s C o r e T h e m e   =   D e f a u l t T h e m e s . s o m e ( t   = >   t . i d   = = =   t h e m e I d ) ; 
 
         / /   R e s e t   t h e   t h e m e   i f   a n   e x t e n s i o n   t h e m e   t h a t ' s   c u r r e n t l y   a p p l i e d 
         / /   i s   b e i n g   r e m o v e d . 
         / /   I g n o r e   s h u t d o w n   s i n c e   a d d o n s   g e t   d i s a b l e d   d u r i n g   t h a t   t i m e . 
         i f   ( ! S e r v i c e s . s t a r t u p . s h u t t i n g D o w n   & & 
                 ! i s C o r e T h e m e   & & 
                 t h e m e . i d   = =   c u r r T h e m e )   { 
             S e r v i c e s . p r e f s . s e t C h a r P r e f ( " d e v t o o l s . t h e m e " ,   " l i g h t " ) ; 
 
             l e t   d a t a   =   { 
                 p r e f :   " d e v t o o l s . t h e m e " , 
                 n e w V a l u e :   " l i g h t " , 
                 o l d V a l u e :   c u r r T h e m e 
             } ; 
 
             t h i s . e m i t ( " p r e f - c h a n g e d " ,   d a t a ) ; 
 
             t h i s . e m i t ( " t h e m e - u n r e g i s t e r e d " ,   t h e m e ) ; 
         } 
 
         t h i s . _ t h e m e s . d e l e t e ( t h e m e I d ) ; 
     } , 
 
     / * * 
       *   G e t   a   t h e m e   d e f i n i t i o n   i f   i t   e x i s t s . 
       * 
       *   @ p a r a m   { s t r i n g }   t h e m e I d 
       *                 T h e   i d   o f   t h e   t h e m e 
       * 
       *   @ r e t u r n   { T h e m e D e f i n i t i o n | n u l l }   t h e m e 
       *                   T h e   T h e m e D e f i n i t i o n   f o r   t h e   i d   o r   n u l l . 
       * / 
     g e t T h e m e D e f i n i t i o n :   f u n c t i o n   D T _ g e t T h e m e D e f i n i t i o n ( t h e m e I d )   { 
         l e t   t h e m e   =   t h i s . _ t h e m e s . g e t ( t h e m e I d ) ; 
         i f   ( ! t h e m e )   { 
             r e t u r n   n u l l ; 
         } 
         r e t u r n   t h e m e ; 
     } , 
 
     / * * 
       *   G e t   m a p   o f   r e g i s t e r e d   t h e m e s . 
       * 
       *   @ r e t u r n   { M a p }   t h e m e s 
       *                   A   m a p   o f   t h e   t h e   t h e m e   d e f i n i t i o n s   r e g i s t e r e d   i n   t h i s   i n s t a n c e 
       * / 
     g e t T h e m e D e f i n i t i o n M a p :   f u n c t i o n   D T _ g e t T h e m e D e f i n i t i o n M a p ( )   { 
         l e t   t h e m e s   =   n e w   M a p ( ) ; 
 
         f o r   ( l e t   [ i d ,   d e f i n i t i o n ]   o f   t h i s . _ t h e m e s )   { 
             i f   ( t h i s . g e t T h e m e D e f i n i t i o n ( i d ) )   { 
                 t h e m e s . s e t ( i d ,   d e f i n i t i o n ) ; 
             } 
         } 
 
         r e t u r n   t h e m e s ; 
     } , 
 
     / * * 
       *   G e t   r e g i s t e r e d   t h e m e s   d e f i n i t i o n s   s o r t e d   b y   o r d i n a l   v a l u e . 
       * 
       *   @ r e t u r n   { A r r a y }   t h e m e s 
       *                   A   s o r t e d   a r r a y   o f   t h e   t h e m e   d e f i n i t i o n s   r e g i s t e r e d   i n   t h i s   i n s t a n c e 
       * / 
     g e t T h e m e D e f i n i t i o n A r r a y :   f u n c t i o n   D T _ g e t T h e m e D e f i n i t i o n A r r a y ( )   { 
         l e t   d e f i n i t i o n s   =   [ ] ; 
 
         f o r   ( l e t   [ i d ,   d e f i n i t i o n ]   o f   t h i s . _ t h e m e s )   { 
             i f   ( t h i s . g e t T h e m e D e f i n i t i o n ( i d ) )   { 
                 d e f i n i t i o n s . p u s h ( d e f i n i t i o n ) ; 
             } 
         } 
 
         r e t u r n   d e f i n i t i o n s . s o r t ( t h i s . o r d i n a l S o r t ) ; 
     } , 
 
     / * * 
       *   S h o w   a   T o o l b o x   f o r   a   t a r g e t   ( e i t h e r   b y   c r e a t i n g   a   n e w   o n e ,   o r   i f   a   t o o l b o x 
       *   a l r e a d y   e x i s t s   f o r   t h e   t a r g e t ,   b y   b r i n g   t o   t h e   f r o n t   t h e   e x i s t i n g   o n e ) 
       *   I f   | t o o l I d |   i s   s p e c i f i e d   t h e n   t h e   d i s p l a y e d   t o o l b o x   w i l l   h a v e   t h e 
       *   s p e c i f i e d   t o o l   s e l e c t e d . 
       *   I f   | h o s t T y p e |   i s   s p e c i f i e d   t h e n   t h e   t o o l b o x   w i l l   b e   d i s p l a y e d   u s i n g   t h e 
       *   s p e c i f i e d   H o s t T y p e . 
       * 
       *   @ p a r a m   { T a r g e t }   t a r g e t 
       *                   T h e   t a r g e t   t h e   t o o l b o x   w i l l   d e b u g 
       *   @ p a r a m   { s t r i n g }   t o o l I d 
       *                 T h e   i d   o f   t h e   t o o l   t o   s h o w 
       *   @ p a r a m   { T o o l b o x . H o s t T y p e }   h o s t T y p e 
       *                 T h e   t y p e   o f   h o s t   ( b o t t o m ,   w i n d o w ,   s i d e ) 
       *   @ p a r a m   { o b j e c t }   h o s t O p t i o n s 
       *                 O p t i o n s   f o r   h o s t   s p e c i f i c a l l y 
       * 
       *   @ r e t u r n   { T o o l b o x }   t o o l b o x 
       *                 T h e   t o o l b o x   t h a t   w a s   o p e n e d 
       * / 
     s h o w T o o l b o x :   f u n c t i o n   ( t a r g e t ,   t o o l I d ,   h o s t T y p e ,   h o s t O p t i o n s )   { 
         l e t   d e f e r r e d   =   d e f e r ( ) ; 
 
         l e t   t o o l b o x   =   t h i s . _ t o o l b o x e s . g e t ( t a r g e t ) ; 
         i f   ( t o o l b o x )   { 
 
             l e t   h o s t P r o m i s e   =   ( h o s t T y p e   ! =   n u l l   & &   t o o l b o x . h o s t T y p e   ! =   h o s t T y p e )   ? 
                     t o o l b o x . s w i t c h H o s t ( h o s t T y p e )   : 
                     p r o m i s e . r e s o l v e ( n u l l ) ; 
 
             i f   ( t o o l I d   ! =   n u l l   & &   t o o l b o x . c u r r e n t T o o l I d   ! =   t o o l I d )   { 
                 h o s t P r o m i s e   =   h o s t P r o m i s e . t h e n ( f u n c t i o n   ( )   { 
                     r e t u r n   t o o l b o x . s e l e c t T o o l ( t o o l I d ) ; 
                 } ) ; 
             } 
 
             r e t u r n   h o s t P r o m i s e . t h e n ( f u n c t i o n   ( )   { 
                 t o o l b o x . r a i s e ( ) ; 
                 r e t u r n   t o o l b o x ; 
             } ) ; 
         } 
         e l s e   { 
             / /   N o   t o o l b o x   f o r   t a r g e t ,   c r e a t e   o n e 
             t o o l b o x   =   n e w   T o o l b o x ( t a r g e t ,   t o o l I d ,   h o s t T y p e ,   h o s t O p t i o n s ) ; 
 
             t h i s . e m i t ( " t o o l b o x - c r e a t e d " ,   t o o l b o x ) ; 
 
             t h i s . _ t o o l b o x e s . s e t ( t a r g e t ,   t o o l b o x ) ; 
 
             t o o l b o x . o n c e ( " d e s t r o y " ,   ( )   = >   { 
                 t h i s . e m i t ( " t o o l b o x - d e s t r o y " ,   t a r g e t ) ; 
             } ) ; 
 
             t o o l b o x . o n c e ( " d e s t r o y e d " ,   ( )   = >   { 
                 t h i s . _ t o o l b o x e s . d e l e t e ( t a r g e t ) ; 
                 t h i s . e m i t ( " t o o l b o x - d e s t r o y e d " ,   t a r g e t ) ; 
             } ) ; 
 
             / /   I f   t o o l I d   w a s   p a s s e d   i n ,   i t   w i l l   a l r e a d y   b e   s e l e c t e d   b e f o r e   t h e 
             / /   o p e n   p r o m i s e   r e s o l v e s . 
             t o o l b o x . o p e n ( ) . t h e n ( ( )   = >   { 
                 d e f e r r e d . r e s o l v e ( t o o l b o x ) ; 
                 t h i s . e m i t ( " t o o l b o x - r e a d y " ,   t o o l b o x ) ; 
             } ) ; 
         } 
 
         r e t u r n   d e f e r r e d . p r o m i s e ; 
     } , 
 
     / * * 
       *   R e t u r n   t h e   t o o l b o x   f o r   a   g i v e n   t a r g e t . 
       * 
       *   @ p a r a m     { o b j e c t }   t a r g e t 
       *                   T a r g e t   v a l u e   e . g .   t h e   t a r g e t   t h a t   o w n s   t h i s   t o o l b o x 
       * 
       *   @ r e t u r n   { T o o l b o x }   t o o l b o x 
       *                   T h e   t o o l b o x   t h a t   i s   d e b u g g i n g   t h e   g i v e n   t a r g e t 
       * / 
     g e t T o o l b o x :   f u n c t i o n   D T _ g e t T o o l b o x ( t a r g e t )   { 
         r e t u r n   t h i s . _ t o o l b o x e s . g e t ( t a r g e t ) ; 
     } , 
 
     / * * 
       *   C l o s e   t h e   t o o l b o x   f o r   a   g i v e n   t a r g e t 
       * 
       *   @ r e t u r n   p r o m i s e 
       *                   T h i s   p r o m i s e   w i l l   r e s o l v e   t o   f a l s e   i f   n o   t o o l b o x   w a s   f o u n d 
       *                   a s s o c i a t e d   t o   t h e   t a r g e t .   t r u e ,   i f   t h e   t o o l b o x   w a s   s u c c e s s f u l l y 
       *                   c l o s e d . 
       * / 
     c l o s e T o o l b o x :   f u n c t i o n   D T _ c l o s e T o o l b o x ( t a r g e t )   { 
         l e t   t o o l b o x   =   t h i s . _ t o o l b o x e s . g e t ( t a r g e t ) ; 
         i f   ( t o o l b o x   = =   n u l l )   { 
             r e t u r n   p r o m i s e . r e s o l v e ( f a l s e ) ; 
         } 
         r e t u r n   t o o l b o x . d e s t r o y ( ) . t h e n ( ( )   = >   t r u e ) ; 
     } , 
 
     / * * 
       *   C a l l e d   t o   t e a r   d o w n   a   t o o l s   p r o v i d e r . 
       * / 
     _ t e a r d o w n :   f u n c t i o n   D T _ t e a r d o w n ( )   { 
         f o r   ( l e t   [ t a r g e t ,   t o o l b o x ]   o f   t h i s . _ t o o l b o x e s )   { 
             t o o l b o x . d e s t r o y ( ) ; 
         } 
         A b o u t D e v T o o l s . u n r e g i s t e r ( ) ; 
     } , 
 
     / * * 
       *   A l l   b r o w s e r   w i n d o w s   h a v e   b e e n   c l o s e d ,   t i d y   u p   r e m a i n i n g   o b j e c t s . 
       * / 
     d e s t r o y :   f u n c t i o n   ( )   { 
         S e r v i c e s . o b s . r e m o v e O b s e r v e r ( t h i s . d e s t r o y ,   " q u i t - a p p l i c a t i o n " ) ; 
 
         f o r   ( l e t   [ k e y ,   t o o l ]   o f   t h i s . g e t T o o l D e f i n i t i o n M a p ( ) )   { 
             t h i s . u n r e g i s t e r T o o l ( k e y ,   t r u e ) ; 
         } 
 
         J s o n V i e w . d e s t r o y ( ) ; 
 
         g D e v T o o l s . u n r e g i s t e r D e f a u l t s ( ) ; 
 
         / /   C l e a n i n g   d o w n   t h e   t o o l b o x e s :   i . e . 
         / /       f o r   ( l e t   [ t a r g e t ,   t o o l b o x ]   o f   t h i s . _ t o o l b o x e s )   t o o l b o x . d e s t r o y ( ) ; 
         / /   I s   t a k e n   c a r e   o f   b y   t h e   g D e v T o o l s B r o w s e r . f o r g e t B r o w s e r W i n d o w 
     } , 
 
     / * * 
       *   I t e r a t o r   t h a t   y i e l d s   e a c h   o f   t h e   t o o l b o x e s . 
       * / 
     * [ S y m b o l . i t e r a t o r   ] ( )   { 
         f o r   ( l e t   t o o l b o x   o f   t h i s . _ t o o l b o x e s )   { 
             y i e l d   t o o l b o x ; 
         } 
     } 
 } ; 
 
 c o n s t   g D e v T o o l s   =   e x p o r t s . g D e v T o o l s   =   n e w   D e v T o o l s ( ) ; 
 
 / /   W a t c h   f o r   m o d u l e   l o a d e r   u n l o a d .   F i r e s   w h e n   t h e   t o o l s   a r e   r e l o a d e d . 
 u n l o a d ( f u n c t i o n   ( )   { 
     g D e v T o o l s . _ t e a r d o w n ( ) ; 
 } ) ; 
   resource://gre/modules/commonjs/toolkit/loader.js -> resource://devtools/client/framework/devtools.js     c@                                                   	   
   =   ;      =    : Ą    Q;      =   : Ą   Q;      =   : Ą   Q;   ¸   
ş=   =   C: ;   ¸   
ş=   =   C: ;      =   :    : Q5   Ą   Q5   Ą   QQ;      =   : Ą   Q;      =   :    : Q5   Ą   QQ;      =   : Ą   Q;      =   :    : Q5   Ą   QQ;   Af    ,  R Ą   	Q×cĄ   
Qş   0   ;   Y   =   !]   "   ]   #   ]   $   ]   %   ]   &   ]   '   ]   (   ]   )   	]   *   
]   +   ]   ,   ]   -   ]   .   ]   /   ]   0   ]   1   ]   2   ]   3   ]   4   ]   5   ]   6   ]   7;   85   9á   ^0    ;   :;   A,  R  0   Ą   Q         : őĎÉĎ
ÉĎÉÜÜĎéĎÉĎÝĎÉĎÝĎÉČĚ4Ę7Ę9Ę@ĘhĘ  Ę  Ę  ĘĘ  ­Ę  şĘ  ÓĘ  çĘ 	Ę  Ę PĘ ^Ę pĘ Ę ĘĘ ÖĘ áĘ ëĘ ţ× Ď ÎÓ    Services   promise   defer   DefaultTools   DefaultThemes   EventEmitter   JsonView   AboutDevTools   unload   FORBIDDEN_IDS   MAX_ORDINAL   gDevTools   use strict   require+   devtools/shared/defer   loader#   lazyRequireGetter   ToolboxC   devtools/client/framework/toolbox!   gDevToolsBrowserU   devtools/client/framework/devtools-browser7   devtools/client/definitions-   RequireObjectCoercible   defaultTools   defaultThemes;   devtools/shared/event-emitter;   devtools/client/jsonview/maina   devtools/client/framework/about-devtools-toolbox#   sdk/system/unload	   when   Set   DevTools   prototype#   navigator:browser!   chromeWindowType!   registerDefaults%   unregisterDefaults   registerTool   unregisterTool   ordinalSort   getDefaultTools%   getAdditionalTools!   getDefaultThemes#   getToolDefinition)   getToolDefinitionMap-   getToolDefinitionArray   registerTheme   unregisterTheme%   getThemeDefinition+   getThemeDefinitionMap/   getThemeDefinitionArray   showToolbox   getToolbox   closeToolbox   _teardown   destroy   Symbol   iterator   exports   ˙˙˙˙      Services   promise   defer   DefaultTools   DefaultThemes   EventEmitter   JsonView   AboutDevTools   unload   FORBIDDEN_IDS   MAX_ORDINAL   gDevTools                       toolbox                      DevToolsC   Ô      š      8                                  ŕ       !            šW   QV   ;   A,  R  0    QV   ;   A,  R  0   QV   ;   A,  R  0   QV   V   5   ¸   
V   : 0   Q;   ¸   
:  Q;   ¸   	
:  Q;   
¸   
V   : Q;   5   ¸   
V   5   =   B: QV   ¸   
:  QÎÉÎÉÎÉ#ŘÉ&Đ(Đ*Ô,ä1Ď    _tools   Map   _themes   _toolboxes   destroy	   bind   JsonView   initialize   AboutDevTools   register   EventEmitter   decorate   Services   obs   addObserver!   quit-application!   registerDefaults   ˙˙˙˙      DevTools                        .this         š
    @           !   registerDefaults@  H      š                               
        p  	  9                  š   Q   ¸    
:  ¸   
    : Q   ¸   
:  ¸   
   : Q<ŕŕ    getDefaultTools   forEach!   getDefaultThemes    ˙˙˙˙      .this                   %   registerDefaults/<u         š                                        ˙  *	  <   #                 ¸    
T  : 1Ň    registerTool    ˙˙˙˙      definition        š    @           %   registerDefaults/<u         š                                        Q	  }	  =   $                 ¸    
T  : 2Ň    registerTheme    ˙˙˙˙      definition        š    @           %   unregisterDefaults@  ß      š      >                                	  |
  @                šW   Q  QV   ¸    
:  -Á
     /m  Q5     QV   ¸   
V  5   : QăQ¸   
:   5   ˙˙˙Ŕć É  QV   ¸   
:  -Á
     /m  Q5     QV   ¸   
V  5   : QăQ¸   
:   5   ˙˙˙Ŕć ÉŃĚ8EŇ˙˙˙îŘAË˙˙˙éŐDŃĚ8EŇ˙˙˙îŘDË˙˙˙éŐG -   getToolDefinitionArray   value   unregisterTool   id	   next	   done/   getThemeDefinitionArray   unregisterTheme    ˙˙˙˙      .this                      definition                      definition               E      "   E         f   ˙˙˙˙   x   f   ˙˙˙˙š    @              DT_registerToolC  ˝      š      *                                e  Â  h   (            šW   Q  QT  5      QV   D   ćQ;   ¸   
V  : ć   ć;   A=   ,  R pć;   ¸   
T  : ×˙   ćT  =   V  =   	0   QćV   5   
¸   
V  T  : QV   ¸   
=   V  : QÉÍkÜĎrĎÚvŰxŮ    id   FORBIDDEN_IDS   has   Error+   Invalid definition.id   DefaultTools   indexOf!   visibilityswitch   devtools.   .enabled   _tools   set	   emit   tool-registered   ˙˙˙˙      DT_registerTool                        toolDefinition   .this                   toolId               °   ˙˙˙˙š    @           #   DT_unregisterToolC        š      -                         	       Ő       ,            šW   Q  Q@  QT  '=       -ćT  W  QV   5   ¸   
T  : U  Q   ćT  5   W  QćV   5   ¸   
V  : QT     ćV   ¸   
=   T  : QćÉĘ(ČÓÍÎŘŮ    string   _tools   get   id   delete	   emit#   tool-unregistered   ˙˙˙˙   #   DT_unregisterTool                     	   tool#   isQuitApplication   .this                   toolId                  ˙˙˙˙š    @              DT_ordinalSortC  t       š                                         6     &                 QT  5    Ä=      ćT  5       ć;   ć   QT 5    Ä=      ćT 5       ć;   ć  QV   V  ÉÉĘĎßĎßÉ    ordinal   number   MAX_ORDINAL   ˙˙˙˙      DT_ordinalSort                        d1   d2                    o1   o2             
   i   ˙˙˙˙   q          š    @           %   DT_getDefaultToolsC          š      
                                  g       .            šW   Q;    ¸   
V   5   : Ő    DefaultTools	   sort   ordinalSort   ˙˙˙˙   %   DT_getDefaultTools                        .this         š
    @           +   DT_getAdditionalToolsC        š   	   =                                Ö    Ł          
      šW   Q  QZ      Q    QV   5    -Á
     Ťm    Q5   -Á
  ¸   
:   5      ćQĺ   ć5   ć  Q¸   
:   5      ćQĺ   ć5   ć  QQQ   ¸   
V  : ×˙   ćV  ¸   
V  : QćăQ¸   
:   5   ˙˙˙Dć ÉV  ¸   
V   5   : ÉÉĘÜ8  ÁÖ	ŃË	í	ÜĐ
Ô  ĽË˙˙˙çŐ  ŞÔ    _tools   value	   next	   done   DefaultTools   indexOf	   push	   sort   ordinalSort   ˙˙˙˙   +   DT_getAdditionalTools                        .this                     tools                     key   value            1   Á           ˙˙˙˙       Ý                             !   getDefaultThemes@         š      
                                  ´  í  ­                šW   Q;    ¸   
V   5   : Ő    DefaultThemes	   sort   ordinalSort    ˙˙˙˙      .this         š    @           )   DT_getToolDefinitionC  ž      š      N                        	         [  ş   2            šW   Q    QV   5    ¸   
T  :   QV      ć@É   ćV  5       ćV  Éć  Q;   5   ¸   
V  5   : W  Q   !ć  Qv  QCW  QÉ    ćV     ćV     ć@ćÉÉĘÓČ
  ĘÉ  žĘ  Ę  Â#Ú
ĐĚÎ
Ň    _tools   get!   visibilityswitch   Services   prefs   getBoolPref   ˙˙˙˙   )   DT_getToolDefinition                        toolId   .this                	   tool   enabled                     e              Y   '         ­   ˙˙˙˙   9             V                          ť          š    @           /   DT_getToolDefinitionMapC        š      >                                l  ,  Ó          
      šW   Q  Q;    A,  R    Q    QV   5   -Á
     Ťm    Q5   -Á
  ¸   
:   5      ćQĺ   ć5   ć  Q¸   
:   5      ćQĺ   ć5   ć  QQQV   ¸   
V  :    ćV  ¸   
V  V  : QćăQ¸   
:   5   ˙˙˙Dć ÉV  ÉÉĘČÜ8  ÁÖ	ŃË	í	ÜĎ
Ř  Ö!Ë˙˙˙ăŐ  Ü    Map   _tools   value	   next	   done#   getToolDefinition   set   ˙˙˙˙   /   DT_getToolDefinitionMap                        .this                     tools                     id   definition            9   Á           ˙˙˙˙   (   Ý                             3   DT_getToolDefinitionArrayC        š      >                                Ś     ç          
      šW   Q  QZ      Q    QV   5    -Á
     §m    Q5   -Á
  ¸   
:   5      ćQĺ   ć5   ć  Q¸   
:   5      ćQĺ   ć5   ć  QQQV   ¸   
V  :    ćV  ¸   
V  : QćăQ¸   
:   5   ˙˙˙Hć ÉV  ¸   
V   5   : ÉÉĘÜ8  ˝Ö	ŃË	í	ÜĎ
Ô  ę!Ë˙˙˙ăŐ  đÔ    _tools   value	   next	   done#   getToolDefinition	   push	   sort   ordinalSort   ˙˙˙˙   3   DT_getToolDefinitionArray                        .this                     definitions                     id   definition            1   ˝           ˙˙˙˙       Ů                             !   DT_registerThemeC        š   	   +                                '%  {&  	  *            šW   Q  QT  5      QV      ć;   A=   ,  R pćV   5   ¸   
V  :    ć;   A=   ,  R pćV   5   ¸   
V  T  : QV   ¸   
=   V  : QÉÍĎÔĎŰŮ    id   Error!   Invalid theme id   _themes   getY   Theme with the same id is already registered   set	   emit!   theme-registered   ˙˙˙˙   !   DT_registerTheme                        themeDefinition   .this                   themeId                  ˙˙˙˙š    @           %   DT_unregisterThemeC  k     š      g                               Ť'  Č+                  šW   Q    QÇ   @   QT  '=       .ćT     QV   5   ¸   
T  : U  Q   ćT  5      Qć;   5   ¸   
=   :   Q;   ¸   	
    :   Q;   5   
5    E    ćQV   E   ćQT  5   V  ć   ć  Q;   5   ¸   
=   =   : Q[   =   ]   =   ]   V  ]     QV   ¸   
=   V  : QV   ¸   
=   T  : QÉćV   5   ¸   
   : QČĎĘ)ÉÓÍĎÖČ /ŇČ 4×ĚÎß
ĘĘÎŘŮÚ    string   _themes   get   id   Services   prefs   getCharPref   devtools.theme   DefaultThemes	   some   startup   shuttingDown   setCharPref   light	   pref   newValue   oldValue	   emit   pref-changed%   theme-unregistered   delete   ˙˙˙˙   %   DT_unregisterTheme                        theme   .this                   themeId   currTheme   isCoreTheme                  	   data                  ?   DT_unregisterTheme/isCoreTheme<u         š                                        v)  )  /  )              T  5          H.Ó    id    ˙˙˙˙      t        š    @              	   pref         newValue         oldValue             U  ˙˙˙˙   Ů   v                 +   DT_getThemeDefinitionC  @      š                                      Ű,  R-  P  4            šW   Q  QV   5    ¸   
T  :   QV      
ć@ÉćV  ÉÉÓČ U    _themes   get   ˙˙˙˙   +   DT_getThemeDefinition                        themeId   .this                   theme               3   ˙˙˙˙   5             =          š    @           1   DT_getThemeDefinitionMapC        š      >                                ).  î.  ^         
      šW   Q  Q;    A,  R    Q    QV   5   -Á
     Ťm    Q5   -Á
  ¸   
:   5      ćQĺ   ć5   ć  Q¸   
:   5      ćQĺ   ć5   ć  QQQV   ¸   
V  :    ćV  ¸   
V  V  : QćăQ¸   
:   5   ˙˙˙Dć ÉV  ÉÉĘ	ČÜ8  ÁÖ	ŃË	í	ÜĎ
Ř a!Ë˙˙˙ăŐ g    Map   _themes   value	   next	   done%   getThemeDefinition   set   ˙˙˙˙   1   DT_getThemeDefinitionMap                        .this                     themes                     id   definition            9   Á           ˙˙˙˙   (   Ý                             5   DT_getThemeDefinitionArrayC        š      >                                í/  Î0  p         
      šW   Q  QZ      Q    QV   5    -Á
     §m    Q5   -Á
  ¸   
:   5      ćQĺ   ć5   ć  Q¸   
:   5      ćQĺ   ć5   ć  QQQV   ¸   
V  :    ćV  ¸   
V  : QćăQ¸   
:   5   ˙˙˙Hć ÉV  ¸   
V   5   : ÉÉĘÜ8  ˝Ö	ŃË	í	ÜĎ
Ô s!Ë˙˙˙ăŐ yÔ    _themes   value	   next	   done%   getThemeDefinition	   push	   sort   ordinalSort   ˙˙˙˙   5   DT_getThemeDefinitionArray                        .this                     definitions                     id   definition            1   ˝           ˙˙˙˙       Ů                             =   DevTools.prototype.showToolboxc  ź     š      z                        3       â3  ó8                  š   QÇ   ;        :     Q  5   ¸   
  :    Q      ść   QT @E   ćQ   5   T ć   ć   ¸   
T :    ć;   ¸   
@: ć   Q  @E   ćQ   5     ć   ćV   ¸   
    : W   QćV   ¸   
   : ÉČÉ   ¸ć;   	A    T T ,  R    Q  ¸   

=      : Q  5   ¸   
     : Q   ¸   
=      : Q   ¸   
=      : Q   ¸   
:  ¸   
   : Qć   5   ČČĘÉÖ
É  ą
ŰĎ
ÉÍ
ÉßĐÉ  Đ żË ĽÚ
ÉÚßŰŰ ¸á žĘ    defer   _toolboxes   get   hostType   switchHost   promise   resolve   currentToolId	   then   Toolbox	   emit   toolbox-created   set	   once   destroy   destroyed	   open    ˙˙˙˙      target   toolId   hostType   hostOptions   .this                    deferred   toolbox                       hostPromise                   W   DevTools.prototype.showToolbox/hostPromise<c          š      
                                   s5  Ž5    0                    ¸    
  : 
Ö    selectTool    ˙˙˙˙              š    @          A   DevTools.prototype.showToolbox/<c          š                                         á5  6     '                    ¸    
:  Q   Ő    raise    ˙˙˙˙              š    @          A   DevTools.prototype.showToolbox/<e          š                                         7  X7  ­                  ¸    
=     : QÚ 	   emit   toolbox-destroy    ˙˙˙˙              š    @          A   DevTools.prototype.showToolbox/<e   5       š                                	         |7  ă7  ą                   5    ¸   
  : Q  ¸   
=     : QÚÚ    _toolboxes   delete	   emit#   toolbox-destroyed    ˙˙˙˙              š    @          A   DevTools.prototype.showToolbox/<e   :       š                                         j8  É8  ¸                      ¸    
      : Q  ¸   
=      : QßÚ    resolve	   emit   toolbox-ready    ˙˙˙˙              š    @       Ż  ˙˙˙˙   O   Ľ          ń             ň             š                      DT_getToolboxC        š      
                                 :  K:  Ę  $            šW   QV   5    ¸   
T  : Ó    _toolboxes   get   ˙˙˙˙      DT_getToolbox                        target   .this       š
    @              DT_closeToolboxC  j      š      #                        
       p;  "<  Ö               šW   Q  QV   5    ¸   
T  :   QV  @   ć;   ¸   
B: ÉćV  ¸   
:  ¸   
    : ÉÉÓ
ČÍ ŰËÓ    _toolboxes   get   promise   resolve   destroy	   then   ˙˙˙˙      DT_closeToolbox                        target   .this                   toolbox                  #   DT_closeToolbox/<u          š                                           <  <  Ű  "              C(     ˙˙˙˙              š    @       ]   ˙˙˙˙   E             g                       DT_teardownC   Ý      š      0                                }<  ů<  á         	      šW   Q    QV   5    -Á
     m    Q5   -Á
  ¸   
:   5      ćQĺ   ć5   ć  Q¸   
:   5      ćQĺ   ć5   ć  QQQV  ¸   
:  QăQ¸   
:   5   ˙˙˙eć É   ¸   
:  QÜ8   Ö	ŃË	í	ÜĎ â"Ë˙˙˙âŐĐ    _toolboxes   value	   next	   done   destroy   AboutDevTools   unregister   ˙˙˙˙      DT_teardown                        .this                     target   toolbox            !             ź   ˙˙˙˙          5   DevTools.prototype.destroyc        š      E                                b=  ?  ë         	       šW   Q    5   ¸   
V   5   =   : Q    QV   ¸   
:  -Á
     m    Q5   -Á
  ¸   
:   5      ćQĺ   ć5   ć  Q¸   
:   5      ćQĺ   ć5   ć  QQQV   ¸   	
V  C: QăQ¸   
:   5   ˙˙˙`ć É   
¸   
:  Q   ¸   
:  QăŐĚ8  ĽÖ˙˙˙íŃË	í	ÜÔ îË˙˙˙čŐĐĐ ů    Services   obs   removeObserver   destroy!   quit-application)   getToolDefinitionMap   value	   next	   done   unregisterTool   JsonView   gDevTools%   unregisterDefaults    ˙˙˙˙      .this                      key	   tool            I   Ľ      3   Ć   ˙˙˙˙          %   DevTools.prototype%@        š      (                              a?  Ż?  ţ                š   QÔ   Ę   ĐQÇ     5    -Á
     3mĆ5      Q[       ]   B]     Ë  ĐQăQ¸   
:   5   ˙˙˙źć Č[   ]   C]      Ě ţĚŘ8IÍ	ŕ ˙Ë˙˙˙ěí    _toolboxes   value	   done	   next    ˙˙˙˙      .generator   .this                      toolbox                           value      	   done                       value      	   done          )   I         f   ˙˙˙˙   \              C          š                                         A@  `@                  ;    ¸   
:  QĐ    gDevTools   _teardown    ˙˙˙˙              š    @ 