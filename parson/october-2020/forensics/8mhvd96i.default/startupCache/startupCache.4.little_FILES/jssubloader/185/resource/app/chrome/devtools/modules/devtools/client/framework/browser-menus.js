   20170118123726  A   ¹                                       `  B+       / *   T h i s   S o u r c e   C o d e   F o r m   i s   s u b j e c t   t o   t h e   t e r m s   o f   t h e   M o z i l l a   P u b l i c 
   *   L i c e n s e ,   v .   2 . 0 .   I f   a   c o p y   o f   t h e   M P L   w a s   n o t   d i s t r i b u t e d   w i t h   t h i s 
   *   f i l e ,   Y o u   c a n   o b t a i n   o n e   a t   h t t p : / / m o z i l l a . o r g / M P L / 2 . 0 / .   * / 
 
 " u s e   s t r i c t " ; 
 
 / * * 
   *   T h i s   m o d u l e   i n j e c t   d y n a m i c a l l y   m e n u   i t e m s   a n d   k e y   s h o r t c u t s   i n t o   b r o w s e r   U I . 
   * 
   *   M e n u   a n d   s h o r t c u t   d e f i n i t i o n s   a r e   f e t c h e d   f r o m : 
   *   -   d e v t o o l s / c l i e n t / m e n u s   f o r   t o p   l e v e l   e n t i r e s 
   *   -   d e v t o o l s / c l i e n t / d e f i n i t i o n s   f o r   t o o l - s p e c i f i c s   e n t r i e s 
   * / 
 
 c o n s t   { L o c a l i z a t i o n H e l p e r }   =   r e q u i r e ( " d e v t o o l s / s h a r e d / l 1 0 n " ) ; 
 c o n s t   M E N U S _ L 1 0 N   =   n e w   L o c a l i z a t i o n H e l p e r ( " d e v t o o l s / l o c a l e / m e n u s . p r o p e r t i e s " ) ; 
 
 l o a d e r . l a z y R e q u i r e G e t t e r ( t h i s ,   " g D e v T o o l s " ,   " d e v t o o l s / c l i e n t / f r a m e w o r k / d e v t o o l s " ,   t r u e ) ; 
 l o a d e r . l a z y R e q u i r e G e t t e r ( t h i s ,   " g D e v T o o l s B r o w s e r " ,   " d e v t o o l s / c l i e n t / f r a m e w o r k / d e v t o o l s - b r o w s e r " ,   t r u e ) ; 
 
 / /   K e e p   l i s t   o f   i n s e r t e d   D O M   E l e m e n t s   i n   o r d e r   t o   r e m o v e   t h e m   o n   u n l o a d 
 / /   M a p s   b r o w s e r   x u l   d o c u m e n t   = >   l i s t   o f   D O M   E l e m e n t s 
 c o n s t   F r a g m e n t s C a c h e   =   n e w   M a p ( ) ; 
 
 f u n c t i o n   l 1 0 n ( k e y )   { 
     r e t u r n   M E N U S _ L 1 0 N . g e t S t r ( k e y ) ; 
 } 
 
 / * * 
   *   C r e a t e   a   x u l : k e y   e l e m e n t 
   * 
   *   @ p a r a m   { X U L D o c u m e n t }   d o c 
   *                 T h e   d o c u m e n t   t o   w h i c h   k e y s   a r e   t o   b e   a d d e d . 
   *   @ p a r a m   { S t r i n g }   i d 
   *                 k e y ' s   i d ,   a u t o m a t i c a l l y   p r e f i x e d   w i t h   " k e y _ " . 
   *   @ p a r a m   { S t r i n g }   s h o r t c u t 
   *                 T h e   k e y   s h o r t c u t   v a l u e . 
   *   @ p a r a m   { S t r i n g }   k e y t e x t 
   *                 I f   ` s h o r t c u t `   r e f e r s   t o   a   f u n c t i o n   k e y ,   r e f e r s   t o   t h e   l o c a l i z e d 
   *                 s t r i n g   t o   d e s c r i b e   a   n o n - c h a r a c t e r   s h o r t c u t . 
   *   @ p a r a m   { S t r i n g }   m o d i f i e r s 
   *                 S p a c e   s e p a r a t e d   l i s t   o f   m o d i f i e r   n a m e s . 
   *   @ p a r a m   { F u n c t i o n }   o n c o m m a n d 
   *                 T h e   f u n c t i o n   t o   c a l l   w h e n   t h e   s h o r t c u t   i s   p r e s s e d . 
   * 
   *   @ r e t u r n   X U L K e y E l e m e n t 
   * / 
 f u n c t i o n   c r e a t e K e y ( {   d o c ,   i d ,   s h o r t c u t ,   k e y t e x t ,   m o d i f i e r s ,   o n c o m m a n d   } )   { 
     l e t   k   =   d o c . c r e a t e E l e m e n t ( " k e y " ) ; 
     k . i d   =   " k e y _ "   +   i d ; 
 
     i f   ( s h o r t c u t . s t a r t s W i t h ( " V K _ " ) )   { 
         k . s e t A t t r i b u t e ( " k e y c o d e " ,   s h o r t c u t ) ; 
         i f   ( k e y t e x t )   { 
             k . s e t A t t r i b u t e ( " k e y t e x t " ,   k e y t e x t ) ; 
         } 
     }   e l s e   { 
         k . s e t A t t r i b u t e ( " k e y " ,   s h o r t c u t ) ; 
     } 
 
     i f   ( m o d i f i e r s )   { 
         k . s e t A t t r i b u t e ( " m o d i f i e r s " ,   m o d i f i e r s ) ; 
     } 
 
     / /   B u g   3 7 1 9 0 0 :   c o m m a n d   e v e n t   i s   f i r e d   o n l y   i f   " o n c o m m a n d "   a t t r i b u t e   i s   s e t . 
     k . s e t A t t r i b u t e ( " o n c o m m a n d " ,   " ; " ) ; 
     k . a d d E v e n t L i s t e n e r ( " c o m m a n d " ,   o n c o m m a n d ) ; 
 
     r e t u r n   k ; 
 } 
 
 / * * 
   *   C r e a t e   a   x u l : m e n u i t e m   e l e m e n t 
   * 
   *   @ p a r a m   { X U L D o c u m e n t }   d o c 
   *                 T h e   d o c u m e n t   t o   w h i c h   k e y s   a r e   t o   b e   a d d e d . 
   *   @ p a r a m   { S t r i n g }   i d 
   *                 E l e m e n t   i d . 
   *   @ p a r a m   { S t r i n g }   l a b e l 
   *                 M e n u   l a b e l . 
   *   @ p a r a m   { S t r i n g }   a c c e s s k e y   ( o p t i o n a l ) 
   *                 A c c e s s   k e y   o f   t h e   m e n u i t e m ,   u s e d   a s   s h o r t c u t   w h i l e   o p e n i n g   t h e   m e n u . 
   *   @ p a r a m   { B o o l e a n }   i s C h e c k b o x   ( o p t i o n a l ) 
   *                 I f   t r u e ,   t h e   m e n u i t e m   w i l l   a c t   a s   a   c h e c k b o x   a n d   h a v e   a n   o p t i o n a l 
   *                 t i c k   o n   i t s   l e f t . 
   * 
   *   @ r e t u r n   X U L M e n u I t e m E l e m e n t 
   * / 
 f u n c t i o n   c r e a t e M e n u I t e m ( {   d o c ,   i d ,   l a b e l ,   a c c e s s k e y ,   i s C h e c k b o x   } )   { 
     l e t   m e n u i t e m   =   d o c . c r e a t e E l e m e n t ( " m e n u i t e m " ) ; 
     m e n u i t e m . i d   =   i d ; 
     m e n u i t e m . s e t A t t r i b u t e ( " l a b e l " ,   l a b e l ) ; 
     i f   ( a c c e s s k e y )   { 
         m e n u i t e m . s e t A t t r i b u t e ( " a c c e s s k e y " ,   a c c e s s k e y ) ; 
     } 
     i f   ( i s C h e c k b o x )   { 
         m e n u i t e m . s e t A t t r i b u t e ( " t y p e " ,   " c h e c k b o x " ) ; 
         m e n u i t e m . s e t A t t r i b u t e ( " a u t o c h e c k " ,   " f a l s e " ) ; 
     } 
     r e t u r n   m e n u i t e m ; 
 } 
 
 / * * 
   *   A d d   a   < k e y >   t o   < k e y s e t   i d = " d e v t o o l s K e y s e t " > . 
   *   A p p e n d i n g   a   < k e y >   e l e m e n t   i s   n o t   a l w a y s   e n o u g h .   T h e   < k e y s e t >   n e e d s 
   *   t o   b e   d e t a c h e d   a n d   r e a t t a c h e d   t o   m a k e   s u r e   t h e   < k e y >   i s   t a k e n   i n t o 
   *   a c c o u n t   ( s e e   b u g   8 3 2 9 8 4 ) . 
   * 
   *   @ p a r a m   { X U L D o c u m e n t }   d o c 
   *                 T h e   d o c u m e n t   t o   w h i c h   k e y s   a r e   t o   b e   a d d e d 
   *   @ p a r a m   { X U L E l e m e n t }   o r   { D o c u m e n t F r a g m e n t }   k e y s 
   *                 K e y s   t o   a d d 
   * / 
 f u n c t i o n   a t t a c h K e y b i n d i n g s T o B r o w s e r ( d o c ,   k e y s )   { 
     l e t   d e v t o o l s K e y s e t   =   d o c . g e t E l e m e n t B y I d ( " d e v t o o l s K e y s e t " ) ; 
 
     i f   ( ! d e v t o o l s K e y s e t )   { 
         d e v t o o l s K e y s e t   =   d o c . c r e a t e E l e m e n t ( " k e y s e t " ) ; 
         d e v t o o l s K e y s e t . s e t A t t r i b u t e ( " i d " ,   " d e v t o o l s K e y s e t " ) ; 
     } 
     d e v t o o l s K e y s e t . a p p e n d C h i l d ( k e y s ) ; 
     l e t   m a i n K e y s e t   =   d o c . g e t E l e m e n t B y I d ( " m a i n K e y s e t " ) ; 
     m a i n K e y s e t . p a r e n t N o d e . i n s e r t B e f o r e ( d e v t o o l s K e y s e t ,   m a i n K e y s e t ) ; 
 } 
 
 / * * 
   *   A d d   a   m e n u   e n t r y   f o r   a   t o o l   d e f i n i t i o n 
   * 
   *   @ p a r a m   { O b j e c t }   t o o l D e f i n i t i o n 
   *                 T o o l   d e f i n i t i o n   o f   t h e   t o o l   t o   a d d   a   m e n u   e n t r y . 
   *   @ p a r a m   { X U L D o c u m e n t }   d o c 
   *                 T h e   d o c u m e n t   t o   w h i c h   t h e   t o o l   m e n u   i t e m   i s   t o   b e   a d d e d . 
   * / 
 f u n c t i o n   c r e a t e T o o l M e n u E l e m e n t s ( t o o l D e f i n i t i o n ,   d o c )   { 
     l e t   i d   =   t o o l D e f i n i t i o n . i d ; 
     l e t   m e n u I d   =   " m e n u i t e m _ "   +   i d ; 
 
     / /   P r e v e n t   m u l t i p l e   e n t r i e s   f o r   t h e   s a m e   t o o l . 
     i f   ( d o c . g e t E l e m e n t B y I d ( m e n u I d ) )   { 
         r e t u r n ; 
     } 
 
     l e t   o n c o m m a n d   =   f u n c t i o n   ( i d ,   e v e n t )   { 
         l e t   w i n d o w   =   e v e n t . t a r g e t . o w n e r D o c u m e n t . d e f a u l t V i e w ; 
         g D e v T o o l s B r o w s e r . s e l e c t T o o l C o m m a n d ( w i n d o w . g B r o w s e r ,   i d ) ; 
     } . b i n d ( n u l l ,   i d ) ; 
 
     l e t   k e y   =   n u l l ; 
     i f   ( t o o l D e f i n i t i o n . k e y )   { 
         k e y   =   c r e a t e K e y ( { 
             d o c , 
             i d , 
             s h o r t c u t :   t o o l D e f i n i t i o n . k e y , 
             m o d i f i e r s :   t o o l D e f i n i t i o n . m o d i f i e r s , 
             o n c o m m a n d :   o n c o m m a n d 
         } ) ; 
     } 
 
     l e t   m e n u i t e m   =   c r e a t e M e n u I t e m ( { 
         d o c , 
         i d :   " m e n u i t e m _ "   +   i d , 
         l a b e l :   t o o l D e f i n i t i o n . m e n u L a b e l   | |   t o o l D e f i n i t i o n . l a b e l , 
         a c c e s s k e y :   t o o l D e f i n i t i o n . a c c e s s k e y 
     } ) ; 
     i f   ( k e y )   { 
         / /   R e f e r   t o   t h e   k e y   i n   o r d e r   t o   d i s p l a y   t h e   k e y   s h o r t c u t   a t   m e n u   e n d s 
         m e n u i t e m . s e t A t t r i b u t e ( " k e y " ,   k e y . i d ) ; 
     } 
     m e n u i t e m . a d d E v e n t L i s t e n e r ( " c o m m a n d " ,   o n c o m m a n d ) ; 
 
     r e t u r n   { 
         k e y , 
         m e n u i t e m 
     } ; 
 } 
 
 / * * 
   *   C r e a t e   x u l   m e n u i t e m ,   k e y   e l e m e n t s   f o r   a   g i v e n   t o o l . 
   *   A n d   t h e n   i n s e r t   t h e m   i n t o   b r o w s e r   D O M . 
   * 
   *   @ p a r a m   { X U L D o c u m e n t }   d o c 
   *                 T h e   d o c u m e n t   t o   w h i c h   t h e   t o o l   i s   t o   b e   r e g i s t e r e d . 
   *   @ p a r a m   { O b j e c t }   t o o l D e f i n i t i o n 
   *                 T o o l   d e f i n i t i o n   o f   t h e   t o o l   t o   r e g i s t e r . 
   *   @ p a r a m   { O b j e c t }   p r e v D e f 
   *                 T h e   t o o l   d e f i n i t i o n   a f t e r   w h i c h   t h e   t o o l   m e n u   i t e m   i s   t o   b e   a d d e d . 
   * / 
 f u n c t i o n   i n s e r t T o o l M e n u E l e m e n t s ( d o c ,   t o o l D e f i n i t i o n ,   p r e v D e f )   { 
     l e t   {   k e y ,   m e n u i t e m   }   =   c r e a t e T o o l M e n u E l e m e n t s ( t o o l D e f i n i t i o n ,   d o c ) ; 
 
     i f   ( k e y )   { 
         a t t a c h K e y b i n d i n g s T o B r o w s e r ( d o c ,   k e y ) ; 
     } 
 
     l e t   r e f ; 
     i f   ( p r e v D e f )   { 
         l e t   m e n u i t e m   =   d o c . g e t E l e m e n t B y I d ( " m e n u i t e m _ "   +   p r e v D e f . i d ) ; 
         r e f   =   m e n u i t e m   & &   m e n u i t e m . n e x t S i b l i n g   ?   m e n u i t e m . n e x t S i b l i n g   :   n u l l ; 
     }   e l s e   { 
         r e f   =   d o c . g e t E l e m e n t B y I d ( " m e n u _ d e v t o o l s _ s e p a r a t o r " ) ; 
     } 
 
     i f   ( r e f )   { 
         r e f . p a r e n t N o d e . i n s e r t B e f o r e ( m e n u i t e m ,   r e f ) ; 
     } 
 } 
 e x p o r t s . i n s e r t T o o l M e n u E l e m e n t s   =   i n s e r t T o o l M e n u E l e m e n t s ; 
 
 / * * 
   *   R e m o v e   a   t o o l ' s   m e n u i t e m   f r o m   a   w i n d o w 
   * 
   *   @ p a r a m   { s t r i n g }   t o o l I d 
   *                 I d   o f   t h e   t o o l   t o   a d d   a   m e n u   e n t r y   f o r 
   *   @ p a r a m   { X U L D o c u m e n t }   d o c 
   *                 T h e   d o c u m e n t   t o   w h i c h   t h e   t o o l   m e n u   i t e m   i s   t o   b e   r e m o v e d   f r o m 
   * / 
 f u n c t i o n   r e m o v e T o o l F r o m M e n u ( t o o l I d ,   d o c )   { 
     l e t   k e y   =   d o c . g e t E l e m e n t B y I d ( " k e y _ "   +   t o o l I d ) ; 
     i f   ( k e y )   { 
         k e y . r e m o v e ( ) ; 
     } 
 
     l e t   m e n u i t e m   =   d o c . g e t E l e m e n t B y I d ( " m e n u i t e m _ "   +   t o o l I d ) ; 
     i f   ( m e n u i t e m )   { 
         m e n u i t e m . r e m o v e ( ) ; 
     } 
 } 
 e x p o r t s . r e m o v e T o o l F r o m M e n u   =   r e m o v e T o o l F r o m M e n u ; 
 
 / * * 
   *   A d d   a l l   t o o l s   t o   t h e   d e v e l o p e r   t o o l s   m e n u   o f   a   w i n d o w . 
   * 
   *   @ p a r a m   { X U L D o c u m e n t }   d o c 
   *                 T h e   d o c u m e n t   t o   w h i c h   t h e   t o o l   i t e m s   a r e   t o   b e   a d d e d . 
   * / 
 f u n c t i o n   a d d A l l T o o l s T o M e n u ( d o c )   { 
     l e t   f r a g K e y s   =   d o c . c r e a t e D o c u m e n t F r a g m e n t ( ) ; 
     l e t   f r a g M e n u I t e m s   =   d o c . c r e a t e D o c u m e n t F r a g m e n t ( ) ; 
 
     f o r   ( l e t   t o o l D e f i n i t i o n   o f   g D e v T o o l s . g e t T o o l D e f i n i t i o n A r r a y ( ) )   { 
         i f   ( ! t o o l D e f i n i t i o n . i n M e n u )   { 
             c o n t i n u e ; 
         } 
 
         l e t   e l e m e n t s   =   c r e a t e T o o l M e n u E l e m e n t s ( t o o l D e f i n i t i o n ,   d o c ) ; 
 
         i f   ( ! e l e m e n t s )   { 
             c o n t i n u e ; 
         } 
 
         i f   ( e l e m e n t s . k e y )   { 
             f r a g K e y s . a p p e n d C h i l d ( e l e m e n t s . k e y ) ; 
         } 
         f r a g M e n u I t e m s . a p p e n d C h i l d ( e l e m e n t s . m e n u i t e m ) ; 
     } 
 
     a t t a c h K e y b i n d i n g s T o B r o w s e r ( d o c ,   f r a g K e y s ) ; 
 
     l e t   m p s   =   d o c . g e t E l e m e n t B y I d ( " m e n u _ d e v t o o l s _ s e p a r a t o r " ) ; 
     i f   ( m p s )   { 
         m p s . p a r e n t N o d e . i n s e r t B e f o r e ( f r a g M e n u I t e m s ,   m p s ) ; 
     } 
 } 
 
 / * * 
   *   A d d   g l o b a l   m e n u s   a n d   s h o r t c u t s   t h a t   a r e   n o t   p a n e l   s p e c i f i c . 
   * 
   *   @ p a r a m   { X U L D o c u m e n t }   d o c 
   *                 T h e   d o c u m e n t   t o   w h i c h   k e y s   a n d   m e n u s   a r e   t o   b e   a d d e d . 
   * / 
 f u n c t i o n   a d d T o p L e v e l I t e m s ( d o c )   { 
     l e t   k e y s   =   d o c . c r e a t e D o c u m e n t F r a g m e n t ( ) ; 
     l e t   m e n u I t e m s   =   d o c . c r e a t e D o c u m e n t F r a g m e n t ( ) ; 
 
     l e t   {   m e n u i t e m s   }   =   r e q u i r e ( " . . / m e n u s " ) ; 
     f o r   ( l e t   i t e m   o f   m e n u i t e m s )   { 
         i f   ( i t e m . s e p a r a t o r )   { 
             l e t   s e p a r a t o r   =   d o c . c r e a t e E l e m e n t ( " m e n u s e p a r a t o r " ) ; 
             s e p a r a t o r . i d   =   i t e m . i d ; 
             m e n u I t e m s . a p p e n d C h i l d ( s e p a r a t o r ) ; 
         }   e l s e   { 
             l e t   {   i d ,   l 1 0 n K e y   }   =   i t e m ; 
 
             / /   C r e a t e   a   < m e n u i t e m > 
             l e t   m e n u i t e m   =   c r e a t e M e n u I t e m ( { 
                 d o c , 
                 i d , 
                 l a b e l :   l 1 0 n ( l 1 0 n K e y   +   " . l a b e l " ) , 
                 a c c e s s k e y :   l 1 0 n ( l 1 0 n K e y   +   " . a c c e s s k e y " ) , 
                 i s C h e c k b o x :   i t e m . c h e c k b o x 
             } ) ; 
             m e n u i t e m . a d d E v e n t L i s t e n e r ( " c o m m a n d " ,   i t e m . o n c o m m a n d ) ; 
             m e n u I t e m s . a p p e n d C h i l d ( m e n u i t e m ) ; 
 
             i f   ( i t e m . k e y   & &   l 1 0 n K e y )   { 
                 / /   C r e a t e   a   < k e y > 
                 l e t   s h o r t c u t   =   l 1 0 n ( l 1 0 n K e y   +   " . k e y " ) ; 
                 l e t   k e y   =   c r e a t e K e y ( { 
                     d o c , 
                     i d :   i t e m . k e y . i d , 
                     s h o r t c u t :   s h o r t c u t , 
                     k e y t e x t :   s h o r t c u t . s t a r t s W i t h ( " V K _ " )   ?   l 1 0 n ( l 1 0 n K e y   +   " . k e y t e x t " )   :   n u l l , 
                     m o d i f i e r s :   i t e m . k e y . m o d i f i e r s , 
                     o n c o m m a n d :   i t e m . o n c o m m a n d 
                 } ) ; 
                 / /   R e f e r   t o   t h e   k e y   i n   o r d e r   t o   d i s p l a y   t h e   k e y   s h o r t c u t   a t   m e n u   e n d s 
                 m e n u i t e m . s e t A t t r i b u t e ( " k e y " ,   k e y . i d ) ; 
                 k e y s . a p p e n d C h i l d ( k e y ) ; 
             } 
             i f   ( i t e m . a d d i t i o n a l K e y s )   { 
                 / /   C r e a t e   a d d i t i o n a l   < k e y > 
                 f o r   ( l e t   k e y   o f   i t e m . a d d i t i o n a l K e y s )   { 
                     l e t   s h o r t c u t   =   l 1 0 n ( k e y . l 1 0 n K e y   +   " . k e y " ) ; 
                     l e t   n o d e   =   c r e a t e K e y ( { 
                         d o c , 
                         i d :   k e y . i d , 
                         s h o r t c u t :   s h o r t c u t , 
                         k e y t e x t :   s h o r t c u t . s t a r t s W i t h ( " V K _ " )   ?   l 1 0 n ( k e y . l 1 0 n K e y   +   " . k e y t e x t " )   :   n u l l , 
                         m o d i f i e r s :   k e y . m o d i f i e r s , 
                         o n c o m m a n d :   i t e m . o n c o m m a n d 
                     } ) ; 
                     k e y s . a p p e n d C h i l d ( n o d e ) ; 
                 } 
             } 
         } 
     } 
 
     / /   C a c h e   a l l   n o d e s   b e f o r e   i n s e r t i o n   t o   b e   a b l e   t o   r e m o v e   t h e m   o n   u n l o a d 
     l e t   n o d e s   =   [ ] ; 
     f o r   ( l e t   n o d e   o f   k e y s . c h i l d r e n )   { 
         n o d e s . p u s h ( n o d e ) ; 
     } 
     f o r   ( l e t   n o d e   o f   m e n u I t e m s . c h i l d r e n )   { 
         n o d e s . p u s h ( n o d e ) ; 
     } 
     F r a g m e n t s C a c h e . s e t ( d o c ,   n o d e s ) ; 
 
     a t t a c h K e y b i n d i n g s T o B r o w s e r ( d o c ,   k e y s ) ; 
 
     l e t   m e n u   =   d o c . g e t E l e m e n t B y I d ( " m e n u W e b D e v e l o p e r P o p u p " ) ; 
     m e n u . a p p e n d C h i l d ( m e n u I t e m s ) ; 
 
     / /   T h e r e   i s   s t i l l   " P a g e   S o u r c e "   m e n u i t e m   h a r d c o d e d   i n t o   b r o w s e r . x u l .   I n s t e a d 
     / /   o f   m a n u a l l y   i n s e r t i n g   e v e r y t h i n g   a r o u n d   i t ,   m o v e   i t   t o   t h e   e x p e c t e d 
     / /   p o s i t i o n . 
     l e t   p a g e S o u r c e   =   d o c . g e t E l e m e n t B y I d ( " m e n u _ p a g e S o u r c e " ) ; 
     l e t   e n d S e p a r a t o r   =   d o c . g e t E l e m e n t B y I d ( " d e v T o o l s E n d S e p a r a t o r " ) ; 
     m e n u . i n s e r t B e f o r e ( p a g e S o u r c e ,   e n d S e p a r a t o r ) ; 
 } 
 
 / * * 
   *   R e m o v e   g l o b a l   m e n u s   a n d   s h o r t c u t s   t h a t   a r e   n o t   p a n e l   s p e c i f i c . 
   * 
   *   @ p a r a m   { X U L D o c u m e n t }   d o c 
   *                 T h e   d o c u m e n t   t o   w h i c h   k e y s   a n d   m e n u s   a r e   t o   b e   a d d e d . 
   * / 
 f u n c t i o n   r e m o v e T o p L e v e l I t e m s ( d o c )   { 
     l e t   n o d e s   =   F r a g m e n t s C a c h e . g e t ( d o c ) ; 
     i f   ( ! n o d e s )   { 
         r e t u r n ; 
     } 
     F r a g m e n t s C a c h e . d e l e t e ( d o c ) ; 
     f o r   ( l e t   n o d e   o f   n o d e s )   { 
         n o d e . r e m o v e ( ) ; 
     } 
 } 
 
 / * * 
   *   A d d   m e n u s   a n d   s h o r t c u t s   t o   a   b r o w s e r   d o c u m e n t 
   * 
   *   @ p a r a m   { X U L D o c u m e n t }   d o c 
   *                 T h e   d o c u m e n t   t o   w h i c h   k e y s   a n d   m e n u s   a r e   t o   b e   a d d e d . 
   * / 
 e x p o r t s . a d d M e n u s   =   f u n c t i o n   ( d o c )   { 
     a d d T o p L e v e l I t e m s ( d o c ) ; 
 
     a d d A l l T o o l s T o M e n u ( d o c ) ; 
 } ; 
 
 / * * 
   *   R e m o v e   m e n u s   a n d   s h o r t c u t s   f r o m   a   b r o w s e r   d o c u m e n t 
   * 
   *   @ p a r a m   { X U L D o c u m e n t }   d o c 
   *                 T h e   d o c u m e n t   t o   w h i c h   k e y s   a n d   m e n u s   a r e   t o   b e   r e m o v e d . 
   * / 
 e x p o r t s . r e m o v e M e n u s   =   f u n c t i o n   ( d o c )   { 
     / /   W e   o n l y   r e m o v e   t o p   l e v e l   e n t r i e s .   P e r - t o o l   e n t r i e s   a r e   r e m o v e d   w h i l e 
     / /   u n r e g i s t e r i n g   e a c h   t o o l . 
     r e m o v e T o p L e v e l I t e m s ( d o c ) ; 
 } ; 
   resource://gre/modules/commonjs/toolkit/loader.js -> resource://devtools/client/framework/browser-menus.js     B+                                                             	=   ;      =   :    : Q5    ¡    QQ    A=   ,  R ¡   Q;   ¸   	
º=   
=   C: ;   ¸   	
º=   =   C: ;   A,  R  ¡   Q;      0   ;      0   ;      
0   ;      0   Ô	0	Y	r	  	  ¼	  Ù	  ì	 	 e	ÏÝÏÉÜÜÊÉ0Yr    ¼  ÏÐ  Ù  äÐ  ì  e vÐ Ð %   LocalizationHelper   MENUS_L10N   FragmentsCache   use strict   require)   devtools/shared/l10n-   RequireObjectCoercibleA   devtools/locale/menus.properties   loader#   lazyRequireGetter   gDevToolsE   devtools/client/framework/devtools!   gDevToolsBrowserU   devtools/client/framework/devtools-browser   Map   exports-   insertToolMenuElements%   removeToolFromMenu   addMenus   removeMenus   ÿÿÿÿ   	   l10n   createKey   createMenuItem5   attachKeybindingsToBrowser-   createToolMenuElements-   insertToolMenuElements%   removeToolFromMenu#   addAllToolsToMenu!   addTopLevelItems'   removeTopLevelItems%   LocalizationHelper   MENUS_L10N   FragmentsCache
   
             	   l10n         ¹                                        Ö                      ;    ¸   
T  : Ï    MENUS_L10N   getStr    ÿÿÿÿ      key        ¹    @              createKey  U      ¹      :                                 |  ¥  0                 T      : Q5   W   Q5   W  Q5   W  Q5   W  Q5   W  Q5   W  QQ  QV   ¸   
=   :   QV  =   	V  0   QV  ¸   

=   :    FæV  ¸   
=   V  : QV     æV  ¸   
=   V  : Qæ   æV  ¸   
=   V  : QæV     æV  ¸   
=   V  : QæV  ¸   
=   =   : QV  ¸   
=   V  : QV  ÉÉÿÔÐÈÔ4ÐAØß9Ù=ÙBÙØE -   RequireObjectCoercible   doc   id   shortcut   keytext   modifiers   oncommand   createElement   key	   key_   startsWith   VK_   setAttribute   keycode   ;!   addEventListener   command    ÿÿÿÿ       doc   id   shortcut   keytext   modifiers   oncommand                    k            Y   û   ÿÿÿÿ    R                      createMenuItem  õ       ¹      (                                 Á
  2  Y          
       T      : Q5   W   Q5   W  Q5   W  Q5   W  Q5   W  QQ  QV   ¸   
=   :   QV  V  0   QV  ¸   
=   V  : QV     æV  ¸   
=   V  : QæV     8æV  ¸   
=   	=   
: QV  ¸   
=   =   : QæV  ÉÉÿÉÐÈÎØÙ`ÙÚd -   RequireObjectCoercible   doc   id   label   accesskey   isCheckbox   createElement   menuitem   setAttribute	   type   checkbox   autocheck   false    ÿÿÿÿ       doc   id   label   accesskey   isCheckbox                    menuitem            N   ¦   ÿÿÿÿ    ò                    5   attachKeybindingsToBrowser  ¤       ¹   
   *                                 Ô  D  r   #                  QT  ¸    
=   :    QV       6æT  ¸   
=   : W   QV   ¸   
=   =   : QæV   ¸   
T : QT  ¸    
=   :   QV  5   ¸   	
V   V  : QÉÊÏÈuÏÈÚyÒÏÈÝ    getElementById   devtoolsKeyset   createElement   keyset   setAttribute   id   appendChild   mainKeyset   parentNode   insertBefore    ÿÿÿÿ      doc	   keys                     devtoolsKeyset   mainKeyset             
      ÿÿÿÿ¹    @           -   createToolMenuElements  {      ¹                                      V  (            
                  QT  5       Q=   V     QT ¸   
V  :    
æÉæ    ¸   
@V   :   Q@  QT  5      Qæ;      [   T ]   V   ]    T  5   ]   T  5   ]   V  ]   	: W  Qæ;   
   
[   T ]   =   V   ]    T  5   D   æQT  5   æ]   T  5   ]   :   QV     #æV  ¸   
=   V  5    : QæV  ¸   
=   V  : Q[   V  ]   V  ]   ÉÉÖÍÏÎ  ¯  Ì  È  ÈÏÈÉÍÍÉ  
É  ÏÈÏÝÍ  È  ¥ÞØÉÉ    id   menuitem_   getElementById	   bind   key   createKey   doc   shortcut   modifiers   oncommand   createMenuItem   menuLabel   label   accesskey   setAttribute!   addEventListener   command   menuitem    ÿÿÿÿ      toolDefinition   doc                     id   menuId   oncommand   key   menuitem                   C   createToolMenuElements/oncommand<c  ;       ¹                                       /  ¶                     QT 5    5   5      Q;   ¸   
V   5   T  : QÉ×Ý    target   ownerDocument   defaultView!   gDevToolsBrowser#   selectToolCommand   gBrowser    ÿÿÿÿ      id   event                     window                4   ÿÿÿÿ¹    @                 doc         id         shortcut         modifiers         oncommand                       doc         id         label         accesskey                       key         menuitem             d  ÿÿÿÿ    L              x                   -   insertToolMenuElements        ¹      8                                 Ì  £  ¼                        Q        T T  :    : Q5      Q5     QQV      æ      T  V   : Qæ  QT    cæ  QT  ¸   
=   T 5   :   QV  E   æQV  5   æ   æV  5      æ@æW  QÉ   æT  ¸   
=   	: W  QæV     "æV  5   
¸   
V  V  : QæÉÎÐçÖ^ØÈÕãÏÉÞ -   createToolMenuElements-   RequireObjectCoercible   key   menuitem5   attachKeybindingsToBrowser   getElementById   menuitem_   id   nextSibling/   menu_devtools_separator   parentNode   insertBefore    ÿÿÿÿ      doc   toolDefinition   prevDef                     key   menuitem   ref                      menuitem                 ÿÿÿÿ   z   R                 %   removeToolFromMenu  v       ¹                                        Þ  ¬  Ù                     QT ¸    
=   T  :    QV      æV   ¸   
:  QæT ¸    
=   T  :   QV     æV  ¸   
:  QæÉÊÓÈÐÓÈÑ    getElementById	   key_   remove   menuitem_    ÿÿÿÿ      toolId   doc                     key   menuitem             
   k   ÿÿÿÿ¹    @           #   addAllToolsToMenu  e      ¹      l                                    ì                       QT  ¸    
:     QT  ¸    
:    Q  Q;   ¸   
:  -Á
      m  Q5     Q  QV  5       æÉ   ræ;      V  T  :   QV      æÉ   GæV  5      æV   ¸   
V  5   : QæV  ¸   
V  5   : QÉãQ¸   	
:   5   
ÿÿÿOæ É;      T  V   : QT  ¸   
=   :   QV     "æV  5   ¸   
V  V  : QæÉÎÊÈÊÈÒÌ8  ¶ÒÿÿÿêÊAÑÈAÉÙÙ  ðËÿÿÿåÕ ÕÏÈÞ -   createDocumentFragment   gDevTools-   getToolDefinitionArray   value   inMenu-   createToolMenuElements   key   appendChild   menuitem	   next	   done5   attachKeybindingsToBrowser   getElementById/   menu_devtools_separator   parentNode   insertBefore    ÿÿÿÿ      doc                     fragKeys   fragMenuItems   mps                      toolDefinition                     elements            U   ¶         V  ÿÿÿÿ   8   Ø          m            ~            ©         ¹    @           !   addTopLevelItems        ¹   /            
      	       p        ß  '                                 QT  ¸    
:     QT  ¸    
:    Q;      =   :    : Q5     QQ  QV  -Á
    m  Q5     QV  5      Oæ  QT  ¸   
=   :   QV  V  5   	0   	QV  ¸   

V  : QÉ  æ    	  
QV     : Q5   	  Q5     	QQ      [    T  ]   V  ]   	      V  	=   : ]         V  	=   : ]   V  5   ]   :   
QV  
¸   
=   V  5   : QV  ¸   

V  
: QV  5   E   æQV  	æ   öæ    Q      V  	=   :   Q      [   T  ]   V  5   5   	]   	V  ]   V  ¸   
=   :    "æ      V  	=   :    æ@æ]   V  5   5    ]    V  5   ]   :   QV  
¸   !
=   V  5   	: QV   ¸   

V  : QÉæV  5   "  (æ  QV  5   "-Á
     êm  Q5     Q    Q      V  5   =   :   Q      [   T  ]   V  5   	]   	V  ]   V  ¸   
=   :    'æ      V  5   =   :    æ@æ]   V  5    ]    V  5   ]   :   QV   ¸   

V  : QÉãQ¸   #
:   5   $ÿÿÿæ ÉæÉæãQ¸   #
:   5   $ÿÿükæ ÉZ      Q  QV   5   %-Á
     *m  Q5     QV  ¸   &
V  : QãQ¸   #
:   5   $ÿÿÿÅæ É  QV  5   %-Á
     *m  Q5     QV  ¸   &
V  : QãQ¸   #
:   5   $ÿÿÿÅæ É   '¸   (
T  V  : Q   )   )T  V   : QT  ¸   *
=   +:   QV  ¸   

V  : QT  ¸   *
=   ,:   QT  ¸   *
=   -:   QV  ¸   .
V  V  : QÉÞÊÈÊÈÏÜÓ8 ÒÉJ
ÏÈÓÚÎ
è
ÏÈÉÔÈÔÈÎ È $ÝÓÕÊÔÈÏ
È
Ó
É
Ð	ÚÐ
Ó
Î *È 3ÝÕÉØ8  ÒÊÙÈÏÈÎÉÐ	"ßÐÎÎ :È B
Ô 8ËÿÿÿðØ ËÿÿÿïÕ IÊØ8@ÒÓ JËÿÿÿïÕØ8@ÒÓ MËÿÿÿïÕ×ÕÏÈÓ ZÏÈÏÈØ -   createDocumentFragment   require   ../menus-   RequireObjectCoercible   menuitems   value   separator   createElement   menuseparator   id   appendChild   l10nKey   createMenuItem   doc	   l10n   .label   label   .accesskey   accesskey   checkbox   isCheckbox!   addEventListener   command   oncommand   key	   .key   createKey   shortcut   startsWith   VK_   .keytext   keytext   modifiers   setAttribute   additionalKeys	   next	   done   children	   push   FragmentsCache   set5   attachKeybindingsToBrowser   getElementById+   menuWebDeveloperPopup   menu_pageSource)   devToolsEndSeparator   insertBefore    ÿÿÿÿ      doc                  	   keys   menuItems   menuitems   nodes	   menu   pageSource   endSeparator                   	   item                     separator      	               id   l10nKey   menuitem                     shortcut   key                     key                     shortcut	   node                  	   node                  	   node                         doc         id         label         accesskey         isCheckbox                       doc         id         shortcut         keytext         modifiers         oncommand                       doc         id         shortcut         keytext         modifiers         oncommand          ­  @      K  @              ü           p  ÿÿÿÿ   s   ±         ¬   >         þ           é  æ         å            É         4  \       	     \                 '   removeTopLevelItems         ¹      8                                ^(  ÿ(  e                  Q;    ¸   
T  :    QV       
æÉæ;    ¸   
T  : Q  QV   -Á
     &m  Q5     QV  ¸   
:  QãQ¸   
:   5   ÿÿÿÉæ ÉÉÏÈ n jÓÓ8<ÒÏ kËÿÿÿïÖ    FragmentsCache   get   delete   value   remove	   next	   done    ÿÿÿÿ      doc                     nodes                   	   node            X   <            ÿÿÿÿ    +             F   S       ¹    @           !   exports.addMenusc  #       ¹                                        µ)  ò)  v                ;        T  : Q;      T  : QÑÑ !   addTopLevelItems#   addAllToolsToMenu    ÿÿÿÿ      doc        ¹    @           '   exports.removeMenusc         ¹                                        ³*  @+                  ;        T  : QÑ '   removeTopLevelItems    ÿÿÿÿ      doc        ¹    @ 