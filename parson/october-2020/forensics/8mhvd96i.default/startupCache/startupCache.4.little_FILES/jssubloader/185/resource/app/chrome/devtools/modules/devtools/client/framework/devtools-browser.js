   20170118123726  U   ¹   h   ¿                       p       `  &e       / *   T h i s   S o u r c e   C o d e   F o r m   i s   s u b j e c t   t o   t h e   t e r m s   o f   t h e   M o z i l l a   P u b l i c 
   *   L i c e n s e ,   v .   2 . 0 .   I f   a   c o p y   o f   t h e   M P L   w a s   n o t   d i s t r i b u t e d   w i t h   t h i s 
   *   f i l e ,   Y o u   c a n   o b t a i n   o n e   a t   h t t p : / / m o z i l l a . o r g / M P L / 2 . 0 / .   * / 
 
 " u s e   s t r i c t " ; 
 
 / * * 
   *   T h i s   i s   t h e   m a i n   m o d u l e   l o a d e d   i n   F i r e f o x   d e s k t o p   t h a t   h a n d l e s   b r o w s e r 
   *   w i n d o w s   a n d   c o o r d i n a t e s   d e v t o o l s   a r o u n d   e a c h   w i n d o w . 
   * 
   *   T h i s   m o d u l e   i s   l o a d e d   l a z i l y   b y   d e v t o o l s - c l h a n d l e r . j s ,   o n c e   t h e   f i r s t 
   *   b r o w s e r   w i n d o w   i s   r e a d y   ( i . e .   f i r e d   b r o w s e r - d e l a y e d - s t a r t u p - f i n i s h e d   e v e n t ) 
   * * / 
 
 c o n s t   { C c ,   C i ,   C u }   =   r e q u i r e ( " c h r o m e " ) ; 
 c o n s t   S e r v i c e s   =   r e q u i r e ( " S e r v i c e s " ) ; 
 c o n s t   p r o m i s e   =   r e q u i r e ( " p r o m i s e " ) ; 
 c o n s t   d e f e r   =   r e q u i r e ( " d e v t o o l s / s h a r e d / d e f e r " ) ; 
 c o n s t   T e l e m e t r y   =   r e q u i r e ( " d e v t o o l s / c l i e n t / s h a r e d / t e l e m e t r y " ) ; 
 c o n s t   {   g D e v T o o l s   }   =   r e q u i r e ( " . / d e v t o o l s " ) ; 
 c o n s t   {   w h e n :   u n l o a d   }   =   r e q u i r e ( " s d k / s y s t e m / u n l o a d " ) ; 
 
 / /   L o a d   t a r g e t   a n d   t o o l b o x   l a z i l y   a s   t h e y   n e e d   g D e v T o o l s   t o   b e   f u l l y   i n i t i a l i z e d 
 l o a d e r . l a z y R e q u i r e G e t t e r ( t h i s ,   " T a r g e t F a c t o r y " ,   " d e v t o o l s / c l i e n t / f r a m e w o r k / t a r g e t " ,   t r u e ) ; 
 l o a d e r . l a z y R e q u i r e G e t t e r ( t h i s ,   " T o o l b o x " ,   " d e v t o o l s / c l i e n t / f r a m e w o r k / t o o l b o x " ,   t r u e ) ; 
 l o a d e r . l a z y R e q u i r e G e t t e r ( t h i s ,   " D e b u g g e r S e r v e r " ,   " d e v t o o l s / s e r v e r / m a i n " ,   t r u e ) ; 
 l o a d e r . l a z y R e q u i r e G e t t e r ( t h i s ,   " D e b u g g e r C l i e n t " ,   " d e v t o o l s / s h a r e d / c l i e n t / m a i n " ,   t r u e ) ; 
 l o a d e r . l a z y R e q u i r e G e t t e r ( t h i s ,   " B r o w s e r M e n u s " ,   " d e v t o o l s / c l i e n t / f r a m e w o r k / b r o w s e r - m e n u s " ) ; 
 
 l o a d e r . l a z y I m p o r t e r ( t h i s ,   " C u s t o m i z a b l e U I " ,   " r e s o u r c e : / / / m o d u l e s / C u s t o m i z a b l e U I . j s m " ) ; 
 l o a d e r . l a z y I m p o r t e r ( t h i s ,   " A p p C o n s t a n t s " ,   " r e s o u r c e : / / g r e / m o d u l e s / A p p C o n s t a n t s . j s m " ) ; 
 
 c o n s t   { L o c a l i z a t i o n H e l p e r }   =   r e q u i r e ( " d e v t o o l s / s h a r e d / l 1 0 n " ) ; 
 c o n s t   L 1 0 N   =   n e w   L o c a l i z a t i o n H e l p e r ( " d e v t o o l s / l o c a l e / t o o l b o x . p r o p e r t i e s " ) ; 
 
 c o n s t   T A B S _ O P E N _ P E A K _ H I S T O G R A M   =   " D E V T O O L S _ T A B S _ O P E N _ P E A K _ L I N E A R " ; 
 c o n s t   T A B S _ O P E N _ A V G _ H I S T O G R A M   =   " D E V T O O L S _ T A B S _ O P E N _ A V E R A G E _ L I N E A R " ; 
 c o n s t   T A B S _ P I N N E D _ P E A K _ H I S T O G R A M   =   " D E V T O O L S _ T A B S _ P I N N E D _ P E A K _ L I N E A R " ; 
 c o n s t   T A B S _ P I N N E D _ A V G _ H I S T O G R A M   =   " D E V T O O L S _ T A B S _ P I N N E D _ A V E R A G E _ L I N E A R " ; 
 
 / * * 
   *   g D e v T o o l s B r o w s e r   e x p o s e s   f u n c t i o n s   t o   c o n n e c t   t h e   g D e v T o o l s   i n s t a n c e   w i t h   a 
   *   F i r e f o x   i n s t a n c e . 
   * / 
 v a r   g D e v T o o l s B r o w s e r   =   e x p o r t s . g D e v T o o l s B r o w s e r   =   { 
     / * * 
       *   A   r e c o r d   o f   t h e   w i n d o w s   w h o s e   m e n u s   w e   a l t e r e d ,   s o   w e   c a n   u n d o   t h e   c h a n g e s 
       *   a s   t h e   w i n d o w   i s   c l o s e d 
       * / 
     _ t r a c k e d B r o w s e r W i n d o w s :   n e w   S e t ( ) , 
 
     _ t e l e m e t r y :   n e w   T e l e m e t r y ( ) , 
 
     _ t a b S t a t s :   { 
         p e a k O p e n :   0 , 
         p e a k P i n n e d :   0 , 
         h i s t O p e n :   [ ] , 
         h i s t P i n n e d :   [ ] 
     } , 
 
     / * * 
       *   T h i s   f u n c t i o n   i s   f o r   t h e   b e n e f i t   o f   T o o l s : D e v T o o l b o x   i n 
       *   b r o w s e r / b a s e / c o n t e n t / b r o w s e r - s e t s . i n c   a n d   s h o u l d   n o t   b e   u s e d   o u t s i d e 
       *   o f   t h e r e 
       * / 
     / /   u s e d   b y   b r o w s e r - s e t s . i n c ,   c o m m a n d 
     t o g g l e T o o l b o x C o m m a n d :   f u n c t i o n   ( g B r o w s e r )   { 
         l e t   t a r g e t   =   T a r g e t F a c t o r y . f o r T a b ( g B r o w s e r . s e l e c t e d T a b ) ; 
         l e t   t o o l b o x   =   g D e v T o o l s . g e t T o o l b o x ( t a r g e t ) ; 
 
         / /   I f   a   t o o l b o x   e x i s t s ,   u s i n g   t o g g l e   f r o m   t h e   M a i n   w i n d o w   : 
         / /   -   s h o u l d   c l o s e   a   d o c k e d   t o o l b o x 
         / /   -   s h o u l d   f o c u s   a   w i n d o w e d   t o o l b o x 
         l e t   i s D o c k e d   =   t o o l b o x   & &   t o o l b o x . h o s t T y p e   ! =   T o o l b o x . H o s t T y p e . W I N D O W ; 
         i s D o c k e d   ?   t o o l b o x . d e s t r o y ( )   :   g D e v T o o l s . s h o w T o o l b o x ( t a r g e t ) ; 
     } , 
 
     / * * 
       *   T h i s   f u n c t i o n   e n s u r e s   t h e   r i g h t   c o m m a n d s   a r e   e n a b l e d   i n   a   w i n d o w , 
       *   d e p e n d i n g   o n   t h e i r   r e l e v a n t   p r e f s .   I t   g e t s   r u n   w h e n   a   w i n d o w   i s   r e g i s t e r e d , 
       *   o r   w h e n   a n y   o f   t h e   d e v t o o l s   p r e f s   c h a n g e . 
       * / 
     u p d a t e C o m m a n d A v a i l a b i l i t y :   f u n c t i o n   ( w i n )   { 
         l e t   d o c   =   w i n . d o c u m e n t ; 
 
         f u n c t i o n   t o g g l e M e n u I t e m ( i d ,   i s E n a b l e d )   { 
             l e t   c m d   =   d o c . g e t E l e m e n t B y I d ( i d ) ; 
             i f   ( i s E n a b l e d )   { 
                 c m d . r e m o v e A t t r i b u t e ( " d i s a b l e d " ) ; 
                 c m d . r e m o v e A t t r i b u t e ( " h i d d e n " ) ; 
             }   e l s e   { 
                 c m d . s e t A t t r i b u t e ( " d i s a b l e d " ,   " t r u e " ) ; 
                 c m d . s e t A t t r i b u t e ( " h i d d e n " ,   " t r u e " ) ; 
             } 
         } 
 
         / /   E n a b l e   d e v e l o p e r   t o o l b a r ? 
         l e t   d e v T o o l b a r E n a b l e d   =   S e r v i c e s . p r e f s . g e t B o o l P r e f ( " d e v t o o l s . t o o l b a r . e n a b l e d " ) ; 
         t o g g l e M e n u I t e m ( " m e n u _ d e v T o o l b a r " ,   d e v T o o l b a r E n a b l e d ) ; 
         l e t   f o c u s E l   =   d o c . g e t E l e m e n t B y I d ( " m e n u _ d e v T o o l b a r " ) ; 
         i f   ( d e v T o o l b a r E n a b l e d )   { 
             f o c u s E l . r e m o v e A t t r i b u t e ( " d i s a b l e d " ) ; 
         }   e l s e   { 
             f o c u s E l . s e t A t t r i b u t e ( " d i s a b l e d " ,   " t r u e " ) ; 
         } 
         i f   ( d e v T o o l b a r E n a b l e d   & &   S e r v i c e s . p r e f s . g e t B o o l P r e f ( " d e v t o o l s . t o o l b a r . v i s i b l e " ) )   { 
             w i n . D e v e l o p e r T o o l b a r . s h o w ( f a l s e ) . c a t c h ( c o n s o l e . e r r o r ) ; 
         } 
 
         / /   E n a b l e   W e b I D E ? 
         l e t   w e b I D E E n a b l e d   =   S e r v i c e s . p r e f s . g e t B o o l P r e f ( " d e v t o o l s . w e b i d e . e n a b l e d " ) ; 
         t o g g l e M e n u I t e m ( " m e n u _ w e b i d e " ,   w e b I D E E n a b l e d ) ; 
 
         l e t   s h o w W e b I D E W i d g e t   =   S e r v i c e s . p r e f s . g e t B o o l P r e f ( " d e v t o o l s . w e b i d e . w i d g e t . e n a b l e d " ) ; 
         i f   ( w e b I D E E n a b l e d   & &   s h o w W e b I D E W i d g e t )   { 
             g D e v T o o l s B r o w s e r . i n s t a l l W e b I D E W i d g e t ( ) ; 
         }   e l s e   { 
             g D e v T o o l s B r o w s e r . u n i n s t a l l W e b I D E W i d g e t ( ) ; 
         } 
 
         / /   E n a b l e   B r o w s e r   T o o l b o x ? 
         l e t   c h r o m e E n a b l e d   =   S e r v i c e s . p r e f s . g e t B o o l P r e f ( " d e v t o o l s . c h r o m e . e n a b l e d " ) ; 
         l e t   d e v t o o l s R e m o t e E n a b l e d   =   S e r v i c e s . p r e f s . g e t B o o l P r e f ( " d e v t o o l s . d e b u g g e r . r e m o t e - e n a b l e d " ) ; 
         l e t   r e m o t e E n a b l e d   =   c h r o m e E n a b l e d   & &   d e v t o o l s R e m o t e E n a b l e d ; 
         t o g g l e M e n u I t e m ( " m e n u _ b r o w s e r T o o l b o x " ,   r e m o t e E n a b l e d ) ; 
         t o g g l e M e n u I t e m ( " m e n u _ b r o w s e r C o n t e n t T o o l b o x " ,   r e m o t e E n a b l e d   & &   w i n . g M u l t i P r o c e s s B r o w s e r ) ; 
 
         / /   E n a b l e   D e v T o o l s   c o n n e c t i o n   s c r e e n ,   i f   t h e   p r e f e r e n c e   a l l o w s   t h i s . 
         t o g g l e M e n u I t e m ( " m e n u _ d e v t o o l s _ c o n n e c t " ,   d e v t o o l s R e m o t e E n a b l e d ) ; 
     } , 
 
     o b s e r v e :   f u n c t i o n   ( s u b j e c t ,   t o p i c ,   p r e f N a m e )   { 
         s w i t c h   ( t o p i c )   { 
             c a s e   " b r o w s e r - d e l a y e d - s t a r t u p - f i n i s h e d " : 
                 t h i s . _ r e g i s t e r B r o w s e r W i n d o w ( s u b j e c t ) ; 
                 b r e a k ; 
             c a s e   " n s P r e f : c h a n g e d " : 
                 i f   ( p r e f N a m e . e n d s W i t h ( " e n a b l e d " ) )   { 
                     f o r   ( l e t   w i n   o f   t h i s . _ t r a c k e d B r o w s e r W i n d o w s )   { 
                         t h i s . u p d a t e C o m m a n d A v a i l a b i l i t y ( w i n ) ; 
                     } 
                 } 
                 b r e a k ; 
         } 
     } , 
 
     _ p r e f O b s e r v e r R e g i s t e r e d :   f a l s e , 
 
     e n s u r e P r e f O b s e r v e r :   f u n c t i o n   ( )   { 
         i f   ( ! t h i s . _ p r e f O b s e r v e r R e g i s t e r e d )   { 
             t h i s . _ p r e f O b s e r v e r R e g i s t e r e d   =   t r u e ; 
             S e r v i c e s . p r e f s . a d d O b s e r v e r ( " d e v t o o l s . " ,   t h i s ,   f a l s e ) ; 
         } 
     } , 
 
     / * * 
       *   T h i s   f u n c t i o n   i s   f o r   t h e   b e n e f i t   o f   T o o l s : { t o o l I d }   c o m m a n d s , 
       *   t r i g g e r e d   f r o m   t h e   W e b D e v e l o p e r   m e n u   a n d   k e y b o a r d   s h o r t c u t s . 
       * 
       *   s e l e c t T o o l C o m m a n d ' s   b e h a v i o r : 
       *   -   i f   t h e   t o o l b o x   i s   c l o s e d , 
       *       w e   o p e n   t h e   t o o l b o x   a n d   s e l e c t   t h e   t o o l 
       *   -   i f   t h e   t o o l b o x   i s   o p e n ,   a n d   t h e   t a r g e t e d   t o o l   i s   n o t   s e l e c t e d , 
       *       w e   s e l e c t   i t 
       *   -   i f   t h e   t o o l b o x   i s   o p e n ,   a n d   t h e   t a r g e t e d   t o o l   i s   s e l e c t e d , 
       *       a n d   t h e   h o s t   i s   N O T   a   w i n d o w ,   w e   c l o s e   t h e   t o o l b o x 
       *   -   i f   t h e   t o o l b o x   i s   o p e n ,   a n d   t h e   t a r g e t e d   t o o l   i s   s e l e c t e d , 
       *       a n d   t h e   h o s t   i s   a   w i n d o w ,   w e   r a i s e   t h e   t o o l b o x   w i n d o w 
       * / 
     / /   U s e d   w h e n :   -   r e g i s t e r i n g   a   n e w   t o o l 
     / /                         -   n e w   x u l   w i n d o w ,   t o   a d d   m e n u   i t e m s 
     s e l e c t T o o l C o m m a n d :   f u n c t i o n   ( g B r o w s e r ,   t o o l I d )   { 
         l e t   t a r g e t   =   T a r g e t F a c t o r y . f o r T a b ( g B r o w s e r . s e l e c t e d T a b ) ; 
         l e t   t o o l b o x   =   g D e v T o o l s . g e t T o o l b o x ( t a r g e t ) ; 
         l e t   t o o l D e f i n i t i o n   =   g D e v T o o l s . g e t T o o l D e f i n i t i o n ( t o o l I d ) ; 
 
         i f   ( t o o l b o x   & & 
                 ( t o o l b o x . c u r r e n t T o o l I d   = =   t o o l I d   | | 
                     ( t o o l I d   = =   " w e b c o n s o l e "   & &   t o o l b o x . s p l i t C o n s o l e ) ) ) 
         { 
             t o o l b o x . f i r e C u s t o m K e y ( t o o l I d ) ; 
 
             i f   ( t o o l D e f i n i t i o n . p r e v e n t C l o s i n g O n K e y   | |   t o o l b o x . h o s t T y p e   = =   T o o l b o x . H o s t T y p e . W I N D O W )   { 
                 t o o l b o x . r a i s e ( ) ; 
             }   e l s e   { 
                 t o o l b o x . d e s t r o y ( ) ; 
             } 
             g D e v T o o l s . e m i t ( " s e l e c t - t o o l - c o m m a n d " ,   t o o l I d ) ; 
         }   e l s e   { 
             g D e v T o o l s . s h o w T o o l b o x ( t a r g e t ,   t o o l I d ) . t h e n ( ( )   = >   { 
                 l e t   t a r g e t   =   T a r g e t F a c t o r y . f o r T a b ( g B r o w s e r . s e l e c t e d T a b ) ; 
                 l e t   t o o l b o x   =   g D e v T o o l s . g e t T o o l b o x ( t a r g e t ) ; 
 
                 t o o l b o x . f i r e C u s t o m K e y ( t o o l I d ) ; 
                 g D e v T o o l s . e m i t ( " s e l e c t - t o o l - c o m m a n d " ,   t o o l I d ) ; 
             } ) ; 
         } 
     } , 
 
     / * * 
       *   O p e n   a   t a b   o n   " a b o u t : d e b u g g i n g " ,   o p t i o n a l l y   p r e - s e l e c t   a   g i v e n   t a b . 
       * / 
       / /   U s e d   b y   b r o w s e r - s e t s . i n c ,   c o m m a n d 
     o p e n A b o u t D e b u g g i n g :   f u n c t i o n   ( g B r o w s e r ,   h a s h )   { 
         l e t   u r l   =   " a b o u t : d e b u g g i n g "   +   ( h a s h   ?   " # "   +   h a s h   :   " " ) ; 
         g B r o w s e r . s e l e c t e d T a b   =   g B r o w s e r . a d d T a b ( u r l ) ; 
     } , 
 
     / * * 
       *   O p e n   a   t a b   t o   a l l o w   c o n n e c t s   t o   a   r e m o t e   b r o w s e r 
       * / 
       / /   U s e d   b y   b r o w s e r - s e t s . i n c ,   c o m m a n d 
     o p e n C o n n e c t S c r e e n :   f u n c t i o n   ( g B r o w s e r )   { 
         g B r o w s e r . s e l e c t e d T a b   =   g B r o w s e r . a d d T a b ( " c h r o m e : / / d e v t o o l s / c o n t e n t / f r a m e w o r k / c o n n e c t / c o n n e c t . x h t m l " ) ; 
     } , 
 
     / * * 
       *   O p e n   W e b I D E 
       * / 
       / /   U s e d   b y   b r o w s e r - s e t s . i n c ,   c o m m a n d 
       / /                   i t s e l f ,   w e b i d e   w i d g e t 
     o p e n W e b I D E :   f u n c t i o n   ( )   { 
         l e t   w i n   =   S e r v i c e s . w m . g e t M o s t R e c e n t W i n d o w ( " d e v t o o l s : w e b i d e " ) ; 
         i f   ( w i n )   { 
             w i n . f o c u s ( ) ; 
         }   e l s e   { 
             S e r v i c e s . w w . o p e n W i n d o w ( n u l l ,   " c h r o m e : / / w e b i d e / c o n t e n t / " ,   " w e b i d e " ,   " c h r o m e , c e n t e r s c r e e n , r e s i z a b l e " ,   n u l l ) ; 
         } 
     } , 
 
     _ g e t C o n t e n t P r o c e s s T a r g e t :   f u n c t i o n   ( p r o c e s s I d )   { 
         / /   C r e a t e   a   D e b u g g e r S e r v e r   i n   o r d e r   t o   c o n n e c t   l o c a l l y   t o   i t 
         i f   ( ! D e b u g g e r S e r v e r . i n i t i a l i z e d )   { 
             D e b u g g e r S e r v e r . i n i t ( ) ; 
             D e b u g g e r S e r v e r . a d d B r o w s e r A c t o r s ( ) ; 
         } 
         D e b u g g e r S e r v e r . a l l o w C h r o m e P r o c e s s   =   t r u e ; 
 
         l e t   t r a n s p o r t   =   D e b u g g e r S e r v e r . c o n n e c t P i p e ( ) ; 
         l e t   c l i e n t   =   n e w   D e b u g g e r C l i e n t ( t r a n s p o r t ) ; 
 
         l e t   d e f e r r e d   =   d e f e r ( ) ; 
         c l i e n t . c o n n e c t ( ) . t h e n ( ( )   = >   { 
             c l i e n t . g e t P r o c e s s ( p r o c e s s I d ) 
                         . t h e n ( r e s p o n s e   = >   { 
                             l e t   o p t i o n s   =   { 
                                 f o r m :   r e s p o n s e . f o r m , 
                                 c l i e n t :   c l i e n t , 
                                 c h r o m e :   t r u e , 
                                 i s T a b A c t o r :   f a l s e 
                             } ; 
                             r e t u r n   T a r g e t F a c t o r y . f o r R e m o t e T a b ( o p t i o n s ) ; 
                         } ) 
                         . t h e n ( t a r g e t   = >   { 
                             / /   E n s u r e   c l o s i n g   t h e   c o n n e c t i o n   i n   o r d e r   t o   c l e a n u p 
                             / /   t h e   d e b u g g e r   c l i e n t   a n d   a l s o   t h e   s e r v e r   c r e a t e d   i n   t h e 
                             / /   c o n t e n t   p r o c e s s 
                             t a r g e t . o n ( " c l o s e " ,   ( )   = >   { 
                                 c l i e n t . c l o s e ( ) ; 
                             } ) ; 
                             d e f e r r e d . r e s o l v e ( t a r g e t ) ; 
                         } ) ; 
         } ) ; 
 
         r e t u r n   d e f e r r e d . p r o m i s e ; 
     } , 
 
       / /   U s e d   b y   m e n u s . j s 
     o p e n C o n t e n t P r o c e s s T o o l b o x :   f u n c t i o n   ( g B r o w s e r )   { 
         l e t   {   c h i l d C o u n t   }   =   S e r v i c e s . p p m m ; 
         / /   G e t   t h e   p r o c e s s   m e s s a g e   m a n a g e r   f o r   t h e   c u r r e n t   t a b 
         l e t   m m   =   g B r o w s e r . s e l e c t e d B r o w s e r . m e s s a g e M a n a g e r . p r o c e s s M e s s a g e M a n a g e r ; 
         l e t   p r o c e s s I d   =   n u l l ; 
         f o r   ( l e t   i   =   1 ;   i   <   c h i l d C o u n t ;   i + + )   { 
             l e t   c h i l d   =   S e r v i c e s . p p m m . g e t C h i l d A t ( i ) ; 
             i f   ( c h i l d   = =   m m )   { 
                 p r o c e s s I d   =   i ; 
                 b r e a k ; 
             } 
         } 
         i f   ( p r o c e s s I d )   { 
             t h i s . _ g e t C o n t e n t P r o c e s s T a r g e t ( p r o c e s s I d ) 
                     . t h e n ( t a r g e t   = >   { 
                         / /   D i s p l a y   a   n e w   t o o l b o x ,   i n   a   n e w   w i n d o w ,   w i t h   d e b u g g e r   b y   d e f a u l t 
                         r e t u r n   g D e v T o o l s . s h o w T o o l b o x ( t a r g e t ,   " j s d e b u g g e r " , 
                                                                                   T o o l b o x . H o s t T y p e . W I N D O W ) ; 
                     } ) ; 
         }   e l s e   { 
             l e t   m s g   =   L 1 0 N . g e t S t r ( " t o o l b o x . n o C o n t e n t P r o c e s s F o r T a b . m e s s a g e " ) ; 
             S e r v i c e s . p r o m p t . a l e r t ( n u l l ,   " " ,   m s g ) ; 
         } 
     } , 
 
     / * * 
       *   I n s t a l l   D e v e l o p e r   w i d g e t 
       * / 
     i n s t a l l D e v e l o p e r W i d g e t :   f u n c t i o n   ( )   { 
         l e t   i d   =   " d e v e l o p e r - b u t t o n " ; 
         l e t   w i d g e t   =   C u s t o m i z a b l e U I . g e t W i d g e t ( i d ) ; 
         i f   ( w i d g e t   & &   w i d g e t . p r o v i d e r   = =   C u s t o m i z a b l e U I . P R O V I D E R _ A P I )   { 
             r e t u r n ; 
         } 
         C u s t o m i z a b l e U I . c r e a t e W i d g e t ( { 
             i d :   i d , 
             t y p e :   " v i e w " , 
             v i e w I d :   " P a n e l U I - d e v e l o p e r " , 
             s h o r t c u t I d :   " k e y _ d e v T o o l b o x M e n u I t e m " , 
             t o o l t i p t e x t :   " d e v e l o p e r - b u t t o n . t o o l t i p t e x t 2 " , 
             d e f a u l t A r e a :   A p p C o n s t a n t s . M O Z _ D E V _ E D I T I O N   ? 
                                           C u s t o m i z a b l e U I . A R E A _ N A V B A R   : 
                                           C u s t o m i z a b l e U I . A R E A _ P A N E L , 
             o n V i e w S h o w i n g :   f u n c t i o n   ( a E v e n t )   { 
                 / /   P o p u l a t e   t h e   s u b v i e w   w i t h   w h a t e v e r   m e n u i t e m s   a r e   i n   t h e   d e v e l o p e r 
                 / /   m e n u .   W e   s k i p   m e n u   e l e m e n t s ,   b e c a u s e   t h e   m e n u   p a n e l   h a s   n o   w a y 
                 / /   o f   d e a l i n g   w i t h   t h o s e   r i g h t   n o w . 
                 l e t   d o c   =   a E v e n t . t a r g e t . o w n e r D o c u m e n t ; 
                 l e t   w i n   =   d o c . d e f a u l t V i e w ; 
 
                 l e t   m e n u   =   d o c . g e t E l e m e n t B y I d ( " m e n u W e b D e v e l o p e r P o p u p " ) ; 
 
                 l e t   i t e m s T o D i s p l a y   =   [ . . . m e n u . c h i l d r e n ] ; 
                 / /   H a r d c o d e   t h e   a d d i t i o n   o f   t h e   " w o r k   o f f l i n e "   m e n u i t e m   a t   t h e   b o t t o m : 
                 i t e m s T o D i s p l a y . p u s h ( { l o c a l N a m e :   " m e n u s e p a r a t o r " ,   g e t A t t r i b u t e :   ( )   = >   { } } ) ; 
                 i t e m s T o D i s p l a y . p u s h ( d o c . g e t E l e m e n t B y I d ( " g o O f f l i n e M e n u i t e m " ) ) ; 
 
                 l e t   d e v e l o p e r I t e m s   =   d o c . g e t E l e m e n t B y I d ( " P a n e l U I - d e v e l o p e r I t e m s " ) ; 
                 / /   I m p o r t   p r i v a t e   h e l p e r s   f r o m   C u s t o m i z a b l e W i d g e t s 
                 l e t   {   c l e a r S u b v i e w ,   f i l l S u b v i e w F r o m M e n u I t e m s   }   = 
                     C u . i m p o r t ( " r e s o u r c e : / / / m o d u l e s / C u s t o m i z a b l e W i d g e t s . j s m " ,   { } ) ; 
                 c l e a r S u b v i e w ( d e v e l o p e r I t e m s ) ; 
                 f i l l S u b v i e w F r o m M e n u I t e m s ( i t e m s T o D i s p l a y ,   d e v e l o p e r I t e m s ) ; 
             } , 
             o n B e f o r e C r e a t e d :   f u n c t i o n   ( d o c )   { 
                 / /   B u g   1 2 2 3 1 2 7 ,   C U I   s h o u l d   m a k e   t h i s   e a s i e r   t o   d o . 
                 i f   ( d o c . g e t E l e m e n t B y I d ( " P a n e l U I - d e v e l o p e r I t e m s " ) )   { 
                     r e t u r n ; 
                 } 
                 l e t   v i e w   =   d o c . c r e a t e E l e m e n t ( " p a n e l v i e w " ) ; 
                 v i e w . i d   =   " P a n e l U I - d e v e l o p e r I t e m s " ; 
                 l e t   p a n e l   =   d o c . c r e a t e E l e m e n t ( " v b o x " ) ; 
                 p a n e l . s e t A t t r i b u t e ( " c l a s s " ,   " p a n e l - s u b v i e w - b o d y " ) ; 
                 v i e w . a p p e n d C h i l d ( p a n e l ) ; 
                 d o c . g e t E l e m e n t B y I d ( " P a n e l U I - m u l t i V i e w " ) . a p p e n d C h i l d ( v i e w ) ; 
             } 
         } ) ; 
     } , 
 
     / * * 
       *   I n s t a l l   W e b I D E   w i d g e t 
       * / 
     / /   U s e d   b y   i t s e l f 
     i n s t a l l W e b I D E W i d g e t :   f u n c t i o n   ( )   { 
         i f   ( t h i s . i s W e b I D E W i d g e t I n s t a l l e d ( ) )   { 
             r e t u r n ; 
         } 
 
         l e t   d e f a u l t A r e a ; 
         i f   ( S e r v i c e s . p r e f s . g e t B o o l P r e f ( " d e v t o o l s . w e b i d e . w i d g e t . i n N a v b a r B y D e f a u l t " ) )   { 
             d e f a u l t A r e a   =   C u s t o m i z a b l e U I . A R E A _ N A V B A R ; 
         }   e l s e   { 
             d e f a u l t A r e a   =   C u s t o m i z a b l e U I . A R E A _ P A N E L ; 
         } 
 
         C u s t o m i z a b l e U I . c r e a t e W i d g e t ( { 
             i d :   " w e b i d e - b u t t o n " , 
             s h o r t c u t I d :   " k e y _ w e b i d e " , 
             l a b e l :   " d e v t o o l s - w e b i d e - b u t t o n 2 . l a b e l " , 
             t o o l t i p t e x t :   " d e v t o o l s - w e b i d e - b u t t o n 2 . t o o l t i p t e x t " , 
             d e f a u l t A r e a :   d e f a u l t A r e a , 
             o n C o m m a n d :   f u n c t i o n   ( a E v e n t )   { 
                 g D e v T o o l s B r o w s e r . o p e n W e b I D E ( ) ; 
             } 
         } ) ; 
     } , 
 
     i s W e b I D E W i d g e t I n s t a l l e d :   f u n c t i o n   ( )   { 
         l e t   w i d g e t W r a p p e r   =   C u s t o m i z a b l e U I . g e t W i d g e t ( " w e b i d e - b u t t o n " ) ; 
         r e t u r n   ! ! ( w i d g e t W r a p p e r   & &   w i d g e t W r a p p e r . p r o v i d e r   = =   C u s t o m i z a b l e U I . P R O V I D E R _ A P I ) ; 
     } , 
 
     / * * 
       *   T h e   d e f e r r e d   p r o m i s e   w i l l   b e   r e s o l v e d   b y   W e b I D E ' s   U I . i n i t ( ) 
       * / 
     i s W e b I D E I n i t i a l i z e d :   d e f e r ( ) , 
 
     / * * 
       *   U n i n s t a l l   W e b I D E   w i d g e t 
       * / 
     u n i n s t a l l W e b I D E W i d g e t :   f u n c t i o n   ( )   { 
         i f   ( t h i s . i s W e b I D E W i d g e t I n s t a l l e d ( ) )   { 
             C u s t o m i z a b l e U I . r e m o v e W i d g e t F r o m A r e a ( " w e b i d e - b u t t o n " ) ; 
         } 
         C u s t o m i z a b l e U I . d e s t r o y W i d g e t ( " w e b i d e - b u t t o n " ) ; 
     } , 
 
     / * * 
       *   M o v e   W e b I D E   w i d g e t   t o   t h e   n a v b a r 
       * / 
       / /   U s e d   b y   w e b i d e . j s 
     m o v e W e b I D E W i d g e t I n N a v b a r :   f u n c t i o n   ( )   { 
         C u s t o m i z a b l e U I . a d d W i d g e t T o A r e a ( " w e b i d e - b u t t o n " ,   C u s t o m i z a b l e U I . A R E A _ N A V B A R ) ; 
     } , 
 
     / * * 
       *   A d d   t h i s   D e v T o o l s ' s   p r e s e n c e   t o   a   b r o w s e r   w i n d o w ' s   d o c u m e n t 
       * 
       *   @ p a r a m   { X U L D o c u m e n t }   d o c 
       *                 T h e   d o c u m e n t   t o   w h i c h   d e v t o o l s   s h o u l d   b e   h o o k e d   t o . 
       * / 
     _ r e g i s t e r B r o w s e r W i n d o w :   f u n c t i o n   ( w i n )   { 
         i f   ( g D e v T o o l s B r o w s e r . _ t r a c k e d B r o w s e r W i n d o w s . h a s ( w i n ) )   { 
             r e t u r n ; 
         } 
         g D e v T o o l s B r o w s e r . _ t r a c k e d B r o w s e r W i n d o w s . a d d ( w i n ) ; 
 
         B r o w s e r M e n u s . a d d M e n u s ( w i n . d o c u m e n t ) ; 
 
         / /   R e g i s t e r   t h e   D e v e l o p e r   w i d g e t   i n   t h e   H a m b u r g e r   m e n u   o r   n a v b a r 
         / /   o n l y   o n c e   m e n u s   a r e   r e g i s t e r e d   a s   i t   d e p e n d s   o n   i t . 
         g D e v T o o l s B r o w s e r . i n s t a l l D e v e l o p e r W i d g e t ( ) ; 
 
         / /   I n j e c t   l a z i l y   D e v e l o p e r T o o l b a r   o n   t h e   c h r o m e   w i n d o w 
         l o a d e r . l a z y G e t t e r ( w i n ,   " D e v e l o p e r T o o l b a r " ,   f u n c t i o n   ( )   { 
             l e t   {   D e v e l o p e r T o o l b a r   }   =   r e q u i r e ( " d e v t o o l s / c l i e n t / s h a r e d / d e v e l o p e r - t o o l b a r " ) ; 
             r e t u r n   n e w   D e v e l o p e r T o o l b a r ( w i n ) ; 
         } ) ; 
 
         t h i s . u p d a t e C o m m a n d A v a i l a b i l i t y ( w i n ) ; 
         t h i s . e n s u r e P r e f O b s e r v e r ( ) ; 
         w i n . a d d E v e n t L i s t e n e r ( " u n l o a d " ,   t h i s ) ; 
 
         l e t   t a b C o n t a i n e r   =   w i n . g B r o w s e r . t a b C o n t a i n e r ; 
         t a b C o n t a i n e r . a d d E v e n t L i s t e n e r ( " T a b S e l e c t " ,   t h i s ,   f a l s e ) ; 
         t a b C o n t a i n e r . a d d E v e n t L i s t e n e r ( " T a b O p e n " ,   t h i s ,   f a l s e ) ; 
         t a b C o n t a i n e r . a d d E v e n t L i s t e n e r ( " T a b C l o s e " ,   t h i s ,   f a l s e ) ; 
         t a b C o n t a i n e r . a d d E v e n t L i s t e n e r ( " T a b P i n n e d " ,   t h i s ,   f a l s e ) ; 
         t a b C o n t a i n e r . a d d E v e n t L i s t e n e r ( " T a b U n p i n n e d " ,   t h i s ,   f a l s e ) ; 
     } , 
 
     / * * 
       *   H o o k   t h e   J S   d e b u g g e r   t o o l   t o   t h e   " D e b u g   S c r i p t "   b u t t o n   o f   t h e   s l o w   s c r i p t 
       *   d i a l o g . 
       * / 
     s e t S l o w S c r i p t D e b u g H a n d l e r :   f u n c t i o n   D T _ s e t S l o w S c r i p t D e b u g H a n d l e r ( )   { 
         l e t   d e b u g S e r v i c e   =   C c [ " @ m o z i l l a . o r g / d o m / s l o w - s c r i p t - d e b u g ; 1 " ] 
                                                   . g e t S e r v i c e ( C i . n s I S l o w S c r i p t D e b u g ) ; 
         l e t   t m   =   C c [ " @ m o z i l l a . o r g / t h r e a d - m a n a g e r ; 1 " ] . g e t S e r v i c e ( C i . n s I T h r e a d M a n a g e r ) ; 
 
         f u n c t i o n   s l o w S c r i p t D e b u g H a n d l e r ( a T a b ,   a C a l l b a c k )   { 
             l e t   t a r g e t   =   T a r g e t F a c t o r y . f o r T a b ( a T a b ) ; 
 
             g D e v T o o l s . s h o w T o o l b o x ( t a r g e t ,   " j s d e b u g g e r " ) . t h e n ( t o o l b o x   = >   { 
                 l e t   t h r e a d C l i e n t   =   t o o l b o x . g e t C u r r e n t P a n e l ( ) . p a n e l W i n . g T h r e a d C l i e n t ; 
 
                 / /   B r e a k   i n   p l a c e ,   w h i c h   m e a n s   r e s u m i n g   t h e   d e b u g g e e   t h r e a d   a n d   p a u s i n g 
                 / /   r i g h t   b e f o r e   t h e   n e x t   s t e p   h a p p e n s . 
                 s w i t c h   ( t h r e a d C l i e n t . s t a t e )   { 
                     c a s e   " p a u s e d " : 
                         / /   W h e n   t h e   d e b u g g e r   i s   a l r e a d y   p a u s e d . 
                         t h r e a d C l i e n t . r e s u m e T h e n P a u s e ( ) ; 
                         a C a l l b a c k ( ) ; 
                         b r e a k ; 
                     c a s e   " a t t a c h e d " : 
                         / /   W h e n   t h e   d e b u g g e r   i s   a l r e a d y   o p e n . 
                         t h r e a d C l i e n t . i n t e r r u p t ( ( )   = >   { 
                             t h r e a d C l i e n t . r e s u m e T h e n P a u s e ( ) ; 
                             a C a l l b a c k ( ) ; 
                         } ) ; 
                         b r e a k ; 
                     c a s e   " r e s u m i n g " : 
                         / /   T h e   d e b u g g e r   i s   n e w l y   o p e n e d . 
                         t h r e a d C l i e n t . a d d O n e T i m e L i s t e n e r ( " r e s u m e d " ,   ( )   = >   { 
                             t h r e a d C l i e n t . i n t e r r u p t ( ( )   = >   { 
                                 t h r e a d C l i e n t . r e s u m e T h e n P a u s e ( ) ; 
                                 a C a l l b a c k ( ) ; 
                             } ) ; 
                         } ) ; 
                         b r e a k ; 
                     d e f a u l t : 
                         t h r o w   E r r o r ( " i n v a l i d   t h r e a d   c l i e n t   s t a t e   i n   s l o w   s c r i p t   d e b u g   h a n d l e r :   "   + 
                                                 t h r e a d C l i e n t . s t a t e ) ; 
                 } 
             } ) ; 
         } 
 
         d e b u g S e r v i c e . a c t i v a t i o n H a n d l e r   =   f u n c t i o n   ( a W i n d o w )   { 
             l e t   c h r o m e W i n d o w   =   a W i n d o w . Q u e r y I n t e r f a c e ( C i . n s I I n t e r f a c e R e q u e s t o r ) 
                                                                 . g e t I n t e r f a c e ( C i . n s I W e b N a v i g a t i o n ) 
                                                                 . Q u e r y I n t e r f a c e ( C i . n s I D o c S h e l l T r e e I t e m ) 
                                                                 . r o o t T r e e I t e m 
                                                                 . Q u e r y I n t e r f a c e ( C i . n s I I n t e r f a c e R e q u e s t o r ) 
                                                                 . g e t I n t e r f a c e ( C i . n s I D O M W i n d o w ) 
                                                                 . Q u e r y I n t e r f a c e ( C i . n s I D O M C h r o m e W i n d o w ) ; 
 
             l e t   s e t u p F i n i s h e d   =   f a l s e ; 
             s l o w S c r i p t D e b u g H a n d l e r ( c h r o m e W i n d o w . g B r o w s e r . s e l e c t e d T a b , 
                                                           ( )   = >   {   s e t u p F i n i s h e d   =   t r u e ;   } ) ; 
 
             / /   D o n ' t   r e t u r n   f r o m   t h e   i n t e r r u p t   h a n d l e r   u n t i l   t h e   d e b u g g e r   i s   b r o u g h t 
             / /   u p ;   n o   r e a s o n   t o   c o n t i n u e   e x e c u t i n g   t h e   s l o w   s c r i p t . 
             l e t   u t i l s   =   a W i n d o w . Q u e r y I n t e r f a c e ( C i . n s I I n t e r f a c e R e q u e s t o r ) 
                                                   . g e t I n t e r f a c e ( C i . n s I D O M W i n d o w U t i l s ) ; 
             u t i l s . e n t e r M o d a l S t a t e ( ) ; 
             w h i l e   ( ! s e t u p F i n i s h e d )   { 
                 t m . c u r r e n t T h r e a d . p r o c e s s N e x t E v e n t ( t r u e ) ; 
             } 
             u t i l s . l e a v e M o d a l S t a t e ( ) ; 
         } ; 
 
         d e b u g S e r v i c e . r e m o t e A c t i v a t i o n H a n d l e r   =   f u n c t i o n   ( a B r o w s e r ,   a C a l l b a c k )   { 
             l e t   c h r o m e W i n d o w   =   a B r o w s e r . o w n e r D o c u m e n t . d e f a u l t V i e w ; 
             l e t   t a b   =   c h r o m e W i n d o w . g B r o w s e r . g e t T a b F o r B r o w s e r ( a B r o w s e r ) ; 
             c h r o m e W i n d o w . g B r o w s e r . s e l e c t e d   =   t a b ; 
 
             f u n c t i o n   c a l l b a c k ( )   { 
                 a C a l l b a c k . f i n i s h D e b u g g e r S t a r t u p ( ) ; 
             } 
 
             s l o w S c r i p t D e b u g H a n d l e r ( t a b ,   c a l l b a c k ) ; 
         } ; 
     } , 
 
     / * * 
       *   U n s e t   t h e   s l o w   s c r i p t   d e b u g   h a n d l e r . 
       * / 
     u n s e t S l o w S c r i p t D e b u g H a n d l e r :   f u n c t i o n   D T _ u n s e t S l o w S c r i p t D e b u g H a n d l e r ( )   { 
         l e t   d e b u g S e r v i c e   =   C c [ " @ m o z i l l a . o r g / d o m / s l o w - s c r i p t - d e b u g ; 1 " ] 
                                                   . g e t S e r v i c e ( C i . n s I S l o w S c r i p t D e b u g ) ; 
         d e b u g S e r v i c e . a c t i v a t i o n H a n d l e r   =   u n d e f i n e d ; 
     } , 
 
     / * * 
       *   A d d   t h e   m e n u i t e m   f o r   a   t o o l   t o   a l l   o p e n   b r o w s e r   w i n d o w s . 
       * 
       *   @ p a r a m   { o b j e c t }   t o o l D e f i n i t i o n 
       *                 p r o p e r t i e s   o f   t h e   t o o l   t o   a d d 
       * / 
     _ a d d T o o l T o W i n d o w s :   f u n c t i o n   D T _ a d d T o o l T o W i n d o w s ( t o o l D e f i n i t i o n )   { 
         / /   N o   m e n u   i t e m   o r   g l o b a l   s h o r t c u t   i s   r e q u i r e d   f o r   o p t i o n s   p a n e l . 
         i f   ( ! t o o l D e f i n i t i o n . i n M e n u )   { 
             r e t u r n ; 
         } 
 
         / /   S k i p   i f   t h e   t o o l   i s   d i s a b l e d . 
         t r y   { 
             i f   ( t o o l D e f i n i t i o n . v i s i b i l i t y s w i t c h   & & 
                   ! S e r v i c e s . p r e f s . g e t B o o l P r e f ( t o o l D e f i n i t i o n . v i s i b i l i t y s w i t c h ) )   { 
                 r e t u r n ; 
             } 
         }   c a t c h   ( e )   { } 
 
         / /   W e   n e e d   t o   i n s e r t   t h e   n e w   t o o l   i n   t h e   r i g h t   p l a c e ,   w h i c h   m e a n s   k n o w i n g 
         / /   t h e   t o o l   t h a t   c o m e s   b e f o r e   t h e   t o o l   t h a t   w e ' r e   t r y i n g   t o   a d d 
         l e t   a l l D e f s   =   g D e v T o o l s . g e t T o o l D e f i n i t i o n A r r a y ( ) ; 
         l e t   p r e v D e f ; 
         f o r   ( l e t   d e f   o f   a l l D e f s )   { 
             i f   ( ! d e f . i n M e n u )   { 
                 c o n t i n u e ; 
             } 
             i f   ( d e f   = = =   t o o l D e f i n i t i o n )   { 
                 b r e a k ; 
             } 
             p r e v D e f   =   d e f ; 
         } 
 
         f o r   ( l e t   w i n   o f   g D e v T o o l s B r o w s e r . _ t r a c k e d B r o w s e r W i n d o w s )   { 
             B r o w s e r M e n u s . i n s e r t T o o l M e n u E l e m e n t s ( w i n . d o c u m e n t ,   t o o l D e f i n i t i o n ,   p r e v D e f ) ; 
         } 
 
         i f   ( t o o l D e f i n i t i o n . i d   = = =   " j s d e b u g g e r " )   { 
             g D e v T o o l s B r o w s e r . s e t S l o w S c r i p t D e b u g H a n d l e r ( ) ; 
         } 
     } , 
 
     h a s T o o l b o x O p e n e d :   f u n c t i o n   ( w i n )   { 
         l e t   t a b   =   w i n . g B r o w s e r . s e l e c t e d T a b ; 
         f o r   ( l e t   [ t a r g e t ,   t o o l b o x ]   o f   g D e v T o o l s . _ t o o l b o x e s )   { 
             i f   ( t a r g e t . t a b   = =   t a b )   { 
                 r e t u r n   t r u e ; 
             } 
         } 
         r e t u r n   f a l s e ; 
     } , 
 
     / * * 
       *   U p d a t e   t h e   " T o g g l e   T o o l s "   c h e c k b o x   i n   t h e   d e v e l o p e r   t o o l s   m e n u .   T h i s   i s 
       *   c a l l e d   w h e n   a   t o o l b o x   i s   c r e a t e d   o r   d e s t r o y e d . 
       * / 
     _ u p d a t e M e n u C h e c k b o x :   f u n c t i o n   D T _ u p d a t e M e n u C h e c k b o x ( )   { 
         f o r   ( l e t   w i n   o f   g D e v T o o l s B r o w s e r . _ t r a c k e d B r o w s e r W i n d o w s )   { 
 
             l e t   h a s T o o l b o x   =   g D e v T o o l s B r o w s e r . h a s T o o l b o x O p e n e d ( w i n ) ; 
 
             l e t   m e n u   =   w i n . d o c u m e n t . g e t E l e m e n t B y I d ( " m e n u _ d e v T o o l b o x " ) ; 
             i f   ( h a s T o o l b o x )   { 
                 m e n u . s e t A t t r i b u t e ( " c h e c k e d " ,   " t r u e " ) ; 
             }   e l s e   { 
                 m e n u . r e m o v e A t t r i b u t e ( " c h e c k e d " ) ; 
             } 
         } 
     } , 
 
     / * * 
       *   R e m o v e   t h e   m e n u i t e m   f o r   a   t o o l   t o   a l l   o p e n   b r o w s e r   w i n d o w s . 
       * 
       *   @ p a r a m   { s t r i n g }   t o o l I d 
       *                 i d   o f   t h e   t o o l   t o   r e m o v e 
       * / 
     _ r e m o v e T o o l F r o m W i n d o w s :   f u n c t i o n   D T _ r e m o v e T o o l F r o m W i n d o w s ( t o o l I d )   { 
         f o r   ( l e t   w i n   o f   g D e v T o o l s B r o w s e r . _ t r a c k e d B r o w s e r W i n d o w s )   { 
             B r o w s e r M e n u s . r e m o v e T o o l F r o m M e n u ( t o o l I d ,   w i n . d o c u m e n t ) ; 
         } 
 
         i f   ( t o o l I d   = = =   " j s d e b u g g e r " )   { 
             g D e v T o o l s B r o w s e r . u n s e t S l o w S c r i p t D e b u g H a n d l e r ( ) ; 
         } 
     } , 
 
     / * * 
       *   C a l l e d   o n   b r o w s e r   u n l o a d   t o   r e m o v e   m e n u   e n t r i e s ,   t o o l b o x e s   a n d   e v e n t 
       *   l i s t e n e r s   f r o m   t h e   c l o s e d   b r o w s e r   w i n d o w . 
       * 
       *   @ p a r a m     { X U L W i n d o w }   w i n 
       *                   T h e   w i n d o w   c o n t a i n i n g   t h e   m e n u   e n t r y 
       * / 
     _ f o r g e t B r o w s e r W i n d o w :   f u n c t i o n   ( w i n )   { 
         i f   ( ! g D e v T o o l s B r o w s e r . _ t r a c k e d B r o w s e r W i n d o w s . h a s ( w i n ) )   { 
             r e t u r n ; 
         } 
         g D e v T o o l s B r o w s e r . _ t r a c k e d B r o w s e r W i n d o w s . d e l e t e ( w i n ) ; 
         w i n . r e m o v e E v e n t L i s t e n e r ( " u n l o a d " ,   t h i s ) ; 
 
         B r o w s e r M e n u s . r e m o v e M e n u s ( w i n . d o c u m e n t ) ; 
 
         / /   D e s t r o y   t o o l b o x e s   f o r   c l o s e d   w i n d o w 
         f o r   ( l e t   [ t a r g e t ,   t o o l b o x ]   o f   g D e v T o o l s . _ t o o l b o x e s )   { 
             i f   ( t o o l b o x . w i n   = =   w i n )   { 
                 t o o l b o x . d e s t r o y ( ) ; 
             } 
         } 
 
         / /   D e s t r o y   t h e   D e v e l o p e r   t o o l b a r   i f   i t   h a s   b e e n   a c c e s s e d 
         l e t   d e s c   =   O b j e c t . g e t O w n P r o p e r t y D e s c r i p t o r ( w i n ,   " D e v e l o p e r T o o l b a r " ) ; 
         i f   ( d e s c   & &   ! d e s c . g e t )   { 
             w i n . D e v e l o p e r T o o l b a r . d e s t r o y ( ) ; 
         } 
 
         l e t   t a b C o n t a i n e r   =   w i n . g B r o w s e r . t a b C o n t a i n e r ; 
         t a b C o n t a i n e r . r e m o v e E v e n t L i s t e n e r ( " T a b S e l e c t " ,   t h i s ,   f a l s e ) ; 
         t a b C o n t a i n e r . r e m o v e E v e n t L i s t e n e r ( " T a b O p e n " ,   t h i s ,   f a l s e ) ; 
         t a b C o n t a i n e r . r e m o v e E v e n t L i s t e n e r ( " T a b C l o s e " ,   t h i s ,   f a l s e ) ; 
         t a b C o n t a i n e r . r e m o v e E v e n t L i s t e n e r ( " T a b P i n n e d " ,   t h i s ,   f a l s e ) ; 
         t a b C o n t a i n e r . r e m o v e E v e n t L i s t e n e r ( " T a b U n p i n n e d " ,   t h i s ,   f a l s e ) ; 
     } , 
 
     h a n d l e E v e n t :   f u n c t i o n   ( e v e n t )   { 
         s w i t c h   ( e v e n t . t y p e )   { 
             c a s e   " T a b O p e n " : 
             c a s e   " T a b C l o s e " : 
             c a s e   " T a b P i n n e d " : 
             c a s e   " T a b U n p i n n e d " : 
                 l e t   o p e n   =   0 ; 
                 l e t   p i n n e d   =   0 ; 
 
                 f o r   ( l e t   w i n   o f   t h i s . _ t r a c k e d B r o w s e r W i n d o w s )   { 
                     l e t   t a b C o n t a i n e r   =   w i n . g B r o w s e r . t a b C o n t a i n e r ; 
                     l e t   n u m P i n n e d T a b s   =   w i n . g B r o w s e r . _ n u m P i n n e d T a b s   | |   0 ; 
                     l e t   n u m T a b s   =   t a b C o n t a i n e r . i t e m C o u n t   -   n u m P i n n e d T a b s ; 
 
                     o p e n   + =   n u m T a b s ; 
                     p i n n e d   + =   n u m P i n n e d T a b s ; 
                 } 
 
                 t h i s . _ t a b S t a t s . h i s t O p e n . p u s h ( o p e n ) ; 
                 t h i s . _ t a b S t a t s . h i s t P i n n e d . p u s h ( p i n n e d ) ; 
                 t h i s . _ t a b S t a t s . p e a k O p e n   =   M a t h . m a x ( o p e n ,   t h i s . _ t a b S t a t s . p e a k O p e n ) ; 
                 t h i s . _ t a b S t a t s . p e a k P i n n e d   =   M a t h . m a x ( p i n n e d ,   t h i s . _ t a b S t a t s . p e a k P i n n e d ) ; 
                 b r e a k ; 
             c a s e   " T a b S e l e c t " : 
                 g D e v T o o l s B r o w s e r . _ u p d a t e M e n u C h e c k b o x ( ) ; 
                 b r e a k ; 
             c a s e   " u n l o a d " : 
                 / /   t o p - l e v e l   b r o w s e r   w i n d o w   u n l o a d 
                 g D e v T o o l s B r o w s e r . _ f o r g e t B r o w s e r W i n d o w ( e v e n t . t a r g e t . d e f a u l t V i e w ) ; 
                 b r e a k ; 
         } 
     } , 
 
     _ p i n g T e l e m e t r y :   f u n c t i o n   ( )   { 
         l e t   m e a n   =   f u n c t i o n   ( a r r )   { 
             i f   ( a r r . l e n g t h   = = =   0 )   { 
                 r e t u r n   0 ; 
             } 
 
             l e t   t o t a l   =   a r r . r e d u c e ( ( a ,   b )   = >   a   +   b ) ; 
             r e t u r n   M a t h . c e i l ( t o t a l   /   a r r . l e n g t h ) ; 
         } ; 
 
         l e t   t a b S t a t s   =   g D e v T o o l s B r o w s e r . _ t a b S t a t s ; 
         t h i s . _ t e l e m e t r y . l o g ( T A B S _ O P E N _ P E A K _ H I S T O G R A M ,   t a b S t a t s . p e a k O p e n ) ; 
         t h i s . _ t e l e m e t r y . l o g ( T A B S _ O P E N _ A V G _ H I S T O G R A M ,   m e a n ( t a b S t a t s . h i s t O p e n ) ) ; 
         t h i s . _ t e l e m e t r y . l o g ( T A B S _ P I N N E D _ P E A K _ H I S T O G R A M ,   t a b S t a t s . p e a k P i n n e d ) ; 
         t h i s . _ t e l e m e t r y . l o g ( T A B S _ P I N N E D _ A V G _ H I S T O G R A M ,   m e a n ( t a b S t a t s . h i s t P i n n e d ) ) ; 
     } , 
 
     / * * 
       *   A l l   b r o w s e r   w i n d o w s   h a v e   b e e n   c l o s e d ,   t i d y   u p   r e m a i n i n g   o b j e c t s . 
       * / 
     d e s t r o y :   f u n c t i o n   ( )   { 
         S e r v i c e s . p r e f s . r e m o v e O b s e r v e r ( " d e v t o o l s . " ,   g D e v T o o l s B r o w s e r ) ; 
         S e r v i c e s . o b s . r e m o v e O b s e r v e r ( g D e v T o o l s B r o w s e r ,   " b r o w s e r - d e l a y e d - s t a r t u p - f i n i s h e d " ) ; 
         S e r v i c e s . o b s . r e m o v e O b s e r v e r ( g D e v T o o l s B r o w s e r . d e s t r o y ,   " q u i t - a p p l i c a t i o n " ) ; 
 
         g D e v T o o l s B r o w s e r . _ p i n g T e l e m e t r y ( ) ; 
         g D e v T o o l s B r o w s e r . _ t e l e m e t r y   =   n u l l ; 
 
         f o r   ( l e t   w i n   o f   g D e v T o o l s B r o w s e r . _ t r a c k e d B r o w s e r W i n d o w s )   { 
             g D e v T o o l s B r o w s e r . _ f o r g e t B r o w s e r W i n d o w ( w i n ) ; 
         } 
     } , 
 } ; 
 
 / /   H a n d l e   a l l   a l r e a d y   r e g i s t e r e d   t o o l s , 
 g D e v T o o l s . g e t T o o l D e f i n i t i o n A r r a y ( ) 
                   . f o r E a c h ( d e f   = >   g D e v T o o l s B r o w s e r . _ a d d T o o l T o W i n d o w s ( d e f ) ) ; 
 / /   a n d   t h e   n e w   o n e s . 
 g D e v T o o l s . o n ( " t o o l - r e g i s t e r e d " ,   f u n c t i o n   ( e v ,   t o o l I d )   { 
     l e t   t o o l D e f i n i t i o n   =   g D e v T o o l s . _ t o o l s . g e t ( t o o l I d ) ; 
     g D e v T o o l s B r o w s e r . _ a d d T o o l T o W i n d o w s ( t o o l D e f i n i t i o n ) ; 
 } ) ; 
 
 g D e v T o o l s . o n ( " t o o l - u n r e g i s t e r e d " ,   f u n c t i o n   ( e v ,   t o o l I d )   { 
     i f   ( t y p e o f   t o o l I d   ! =   " s t r i n g " )   { 
         t o o l I d   =   t o o l I d . i d ; 
     } 
     g D e v T o o l s B r o w s e r . _ r e m o v e T o o l F r o m W i n d o w s ( t o o l I d ) ; 
 } ) ; 
 
 g D e v T o o l s . o n ( " t o o l b o x - r e a d y " ,   g D e v T o o l s B r o w s e r . _ u p d a t e M e n u C h e c k b o x ) ; 
 g D e v T o o l s . o n ( " t o o l b o x - d e s t r o y e d " ,   g D e v T o o l s B r o w s e r . _ u p d a t e M e n u C h e c k b o x ) ; 
 
 S e r v i c e s . o b s . a d d O b s e r v e r ( g D e v T o o l s B r o w s e r . d e s t r o y ,   " q u i t - a p p l i c a t i o n " ,   f a l s e ) ; 
 S e r v i c e s . o b s . a d d O b s e r v e r ( g D e v T o o l s B r o w s e r ,   " b r o w s e r - d e l a y e d - s t a r t u p - f i n i s h e d " ,   f a l s e ) ; 
 
 / /   F a k e   e n d   o f   b r o w s e r   w i n d o w   l o a d   e v e n t   f o r   a l l   a l r e a d y   o p e n e d   w i n d o w s 
 / /   t h a t   i s   a l r e a d y   f u l l y   l o a d e d . 
 l e t   e n u m e r a t o r   =   S e r v i c e s . w m . g e t E n u m e r a t o r ( g D e v T o o l s . c h r o m e W i n d o w T y p e ) ; 
 w h i l e   ( e n u m e r a t o r . h a s M o r e E l e m e n t s ( ) )   { 
     l e t   w i n   =   e n u m e r a t o r . g e t N e x t ( ) ; 
     i f   ( w i n . g B r o w s e r I n i t   & &   w i n . g B r o w s e r I n i t . d e l a y e d S t a r t u p F i n i s h e d )   { 
         g D e v T o o l s B r o w s e r . _ r e g i s t e r B r o w s e r W i n d o w ( w i n ) ; 
     } 
 } 
 
 / /   W a t c h   f o r   m o d u l e   l o a d e r   u n l o a d .   F i r e s   w h e n   t h e   t o o l s   a r e   r e l o a d e d . 
 u n l o a d ( f u n c t i o n   ( )   { 
     g D e v T o o l s B r o w s e r . d e s t r o y ( ) ; 
 } ) ; 
   resource://gre/modules/commonjs/toolkit/loader.js -> resource://devtools/client/framework/devtools-browser.js     &e                       ¢                           	   
                  =   ;      =   :    : Q5   ¡   Q5   ¡   Q5   ¡   QQ;      =   : ¡   Q;      =   : ¡   Q;      =   : ¡   Q;      =   : ¡   Q;      =   :    : Q5   	¡   	QQ;      =   :    : Q5   ¡   
QQ;   ¸   
º=   =   C: ;   ¸   
º=   =   C: ;   ¸   
º=    =   !C: ;   ¸   
º=   "=   #C: ;   ¸   
º=   $=   %: ;   ¸   &
º=   '=   (: ;   ¸   &
º=   )=   *: ;      =   +:    : Q5   ¡   QQ   A=   ,,  R ¡   Q=   -¡   Q=   .¡   Q=   /¡   Q=   0¡   QÖ    ;   1[   ;   2A,  R  ]   3   A,  R  ]   4[    >]   5>]   6Z    ]   7Z    ]   8]   9   ]   :   ]   ;   ]   <B]   =   ]   >   ]   ?   ]   @   ]   A   ]   B   	]   C   
]   D   ]   E   ]   F   ]   G      :  ]   H   ]   I   ]   J   ]   K   ]   L   ]   M   ]   N   ]   O   ]   P   ]   Q   ]   R   ]   S   ]   T   ]   U0        Q   	¸   V
:  ¸   W
@   :    	¸   X
=   Y   :    	¸   X
=   Z   :    	¸   X
=   [    5   P:    	¸   X
=   \    5   P:    5   ]¸   ^
    5   U=   _B:    5   ]¸   ^
    =   `B:    5   a¸   b
   	5   c: ¡   Qæ   [m   Q   ¸   d
:     QV   5   eE   æQV   5   e5   fæ   æ    ¸   K
V   : æÉã   ¸   g
:  ÿÿÿæ   
   
   : ÏÿÏõÏÉÏ
ÉÏÉÏÉÏÝÏÝÜÜÜÜÛÛÛ!ÏÝÏÉ$ËËËË-Ï2ÊÈ4ÊÈ6ÊÏCÊSÊ  Ê  Ê  ¬Ê  ÌÊ  ÕÊ  ÞÊ  çÊ Ê )Ê `Ê xÊ ÊÈ Ê Ê Ê ¼Ê Ê Ê ?Ê MÊ aÊ rÊ Ê ±Ê ÅÕ ÔÖ ÔÚ ÜÚ ãßßåàÛÊ(l ìÌÈßÖ ì× ôÓ !   gDevToolsBrowser   enumerator   Cc   Ci   Cu   Services   promise   defer   Telemetry   gDevTools   unload%   LocalizationHelper	   L10N1   TABS_OPEN_PEAK_HISTOGRAM/   TABS_OPEN_AVG_HISTOGRAM5   TABS_PINNED_PEAK_HISTOGRAM3   TABS_PINNED_AVG_HISTOGRAM   use strict   require   chrome-   RequireObjectCoercible+   devtools/shared/deferA   devtools/client/shared/telemetry   ./devtools#   sdk/system/unload	   when   loader#   lazyRequireGetter   TargetFactoryA   devtools/client/framework/target   ToolboxC   devtools/client/framework/toolbox   DebuggerServer)   devtools/server/main   DebuggerClient7   devtools/shared/client/main   BrowserMenusO   devtools/client/framework/browser-menus   lazyImporter   CustomizableUIM   resource:///modules/CustomizableUI.jsm   AppConstantsO   resource://gre/modules/AppConstants.jsm)   devtools/shared/l10nE   devtools/locale/toolbox.properties=   DEVTOOLS_TABS_OPEN_PEAK_LINEARC   DEVTOOLS_TABS_OPEN_AVERAGE_LINEARA   DEVTOOLS_TABS_PINNED_PEAK_LINEARG   DEVTOOLS_TABS_PINNED_AVERAGE_LINEAR   exports   Set-   _trackedBrowserWindows   _telemetry   peakOpen   peakPinned   histOpen   histPinned   _tabStats)   toggleToolboxCommand3   updateCommandAvailability   observe/   _prefObserverRegistered%   ensurePrefObserver#   selectToolCommand%   openAboutDebugging#   openConnectScreen   openWebIDE1   _getContentProcessTarget3   openContentProcessToolbox-   installDeveloperWidget'   installWebIDEWidget/   isWebIDEWidgetInstalled'   isWebIDEInitialized+   uninstallWebIDEWidget1   moveWebIDEWidgetInNavbar-   _registerBrowserWindow3   setSlowScriptDebugHandler7   unsetSlowScriptDebugHandler#   _addToolToWindows!   hasToolboxOpened'   _updateMenuCheckbox-   _removeToolFromWindows)   _forgetBrowserWindow   handleEvent   _pingTelemetry   destroy-   getToolDefinitionArray   forEach   on   tool-registered#   tool-unregistered   toolbox-ready#   toolbox-destroyed   obs   addObserver!   quit-applicationA   browser-delayed-startup-finished   wm   getEnumerator!   chromeWindowType   getNext   gBrowserInit-   delayedStartupFinished   hasMoreElements   ÿÿÿÿ   !   gDevToolsBrowser   enumerator   Cc   Ci   Cu   Services   promise   defer   Telemetry   gDevTools   unload%   LocalizationHelper	   L10N1   TABS_OPEN_PEAK_HISTOGRAM/   TABS_OPEN_AVG_HISTOGRAM5   TABS_PINNED_PEAK_HISTOGRAM3   TABS_PINNED_AVG_HISTOGRAM                   win                          peakOpen         peakPinned         histOpen         histPinned                 [   exports.gDevToolsBrowser.toggleToolboxCommandc  ¡       ¹      #                                 F
  á  C   !                    Q;    ¸   
T  5   :    Q;   ¸   
V   :   QV  E    æQV  5   ;   5   5   æ  QV     æV  ¸   	
:     æ;   ¸   

V   : æQÉÎÔ	ÈÐ
ÈJêÑÙ    TargetFactory   forTab   selectedTab   gDevTools   getToolbox   hostType   Toolbox   HostType   WINDOW   destroy   showToolbox    ÿÿÿÿ      gBrowser                     target   toolbox   isDocked                   ÿÿÿÿ¹    @           e   exports.gDevToolsBrowser.updateCommandAvailabilityc  :      ¹      {                        3        Ý  
  S                               QÇ       W   QT  5       Q;   5   ¸   
=   :   QV   =   V  : Q   ¸   
=   :   QV     æV  ¸   
=   : Q   æV  ¸   	
=   =   
: QæV  E    æQ;   5   ¸   
=   : æ   .æT  5   ¸   
B: ¸   
;   5   : Qæ;   5   ¸   
=   :   QV   =   V  : Q;   5   ¸   
=   :   QV  E   æQV  æ   æ;   ¸   
:  Q   æ;   ¸   
:  Qæ;   5   ¸   
=   :   Q;   5   ¸   
=   :   QV  E   æQV  æ  QV   =   V  : QV   =   V  E   æQT  5   æ: QV   =   V  : QÈãVÊTÎVbÖÈÒÑ
ÈÚÚjáéoÖÈÒrÖÈÐÖÑzÖÈÖÈÕÒâÓ    document   Services   prefs   getBoolPref1   devtools.toolbar.enabled   menu_devToolbar   getElementById   removeAttribute   disabled   setAttribute	   true1   devtools.toolbar.visible!   DeveloperToolbar	   show   catch   console   error/   devtools.webide.enabled   menu_webide=   devtools.webide.widget.enabled!   gDevToolsBrowser'   installWebIDEWidget+   uninstallWebIDEWidget/   devtools.chrome.enabledA   devtools.debugger.remote-enabled'   menu_browserToolbox5   menu_browserContentToolbox)   gMultiProcessBrowser+   menu_devtools_connect    ÿÿÿÿ      win   toggleMenuItem                    doc#   devToolbarEnabled   focusEl   webIDEEnabled!   showWebIDEWidget   chromeEnabled+   devtoolsRemoteEnabled   remoteEnabled                     toggleMenuItem         ¹                                          4  V                   Q      ¸    
T  :    QT    3æV   ¸   
=   : QV   ¸   
=   : Q   8æV   ¸   
=   =   : QV   ¸   
=   =   : QæÉ
ÔÈ.ÔÚÙÛ_    getElementById   removeAttribute   disabled   hidden   setAttribute	   true    ÿÿÿÿ      id   isEnabled                     cmd                   ÿÿÿÿ¹    @    #     ÿÿÿÿ          A   exports.gDevToolsBrowser.observec  À      ¹   
   =                               !                     ¹W   QT x=    y   æ=   y   #æz   æV   ¸   
T  : Q   æT ¸   
=   :    hæ  QV   5   -Á
     *m  Q5     QV   ¸   
V  : QãQ¸   
:   5   	ÿÿÿÅæ Éæ   æk  µvËpÌÒXÏØ8@ÒÓ  ËÿÿÿðÖX A   browser-delayed-startup-finished   nsPref:changed-   _registerBrowserWindow   endsWith   enabled-   _trackedBrowserWindows   value3   updateCommandAvailability	   next	   done    ÿÿÿÿ      subject   topic   prefName   .this                    win            m   @      \   \   ÿÿÿÿ¹    @           W   exports.gDevToolsBrowser.ensurePrefObserverc   B      ¹                                        å                    ¹W   QV   5        0æV   C0    Q;   5   ¸   
=   V   B: QæÊËà /   _prefObserverRegistered   Services   prefs   addObserver   devtools.    ÿÿÿÿ      .this         ¹
    @           U   exports.gDevToolsBrowser.selectToolCommandc  U      ¹      G                        &        ^  Ó  ¬                        Q;    ¸   
   5   :    Q;   ¸   
V   :   Q;   ¸   
   :   QV  E   8æQV  5      D   "æQ   =   E   æQV  5   æ   æV  ¸   	
   : QV  5   
D    æQV  5   ;   5   5   æ   æV  ¸   
:  Q   æV  ¸   
:  Qæ;   ¸   
=      : Q   /æ;   ¸   
V      : ¸   
    : QæÉÎÖ	ÈÐ
ÈÑÈËÖÜ  ÔêÕÐàë  Æ    TargetFactory   forTab   selectedTab   gDevTools   getToolbox#   getToolDefinition   currentToolId   webconsole   splitConsole   fireCustomKey'   preventClosingOnKey   hostType   Toolbox   HostType   WINDOW   raise   destroy	   emit'   select-tool-command   showToolbox	   then    ÿÿÿÿ      gBrowser   toolId                    target   toolbox   toolDefinition                   Y   exports.gDevToolsBrowser.selectToolCommand/<e   p       ¹                                        ä  Ç  ¾   1                  Q;    ¸   
   5   :    Q;   ¸   
V   :   QV  ¸   
   : Q;   ¸   
=      : QÉÊÖ	ÈÐ
ÈÔÛ    TargetFactory   forTab   selectedTab   gDevTools   getToolbox   fireCustomKey	   emit'   select-tool-command    ÿÿÿÿ                           target   toolbox             
   e   ÿÿÿÿ¹    @       F  ÿÿÿÿ          W   exports.gDevToolsBrowser.openAboutDebuggingc  K       ¹                                       r  õ  Ì                   Q=    T    æ=   T    æ=   æ   QT  T  ¸   
V   : 0   QÉÈáÑÊ    about:debugging   #      selectedTab   addTab    ÿÿÿÿ      gBrowser	   hash                     url                D   ÿÿÿÿ¹    @           U   exports.gDevToolsBrowser.openConnectScreenc         ¹                                          ù  Õ                 T  T  ¸   
=   : 0    QÒÉ    selectedTab   addTabs   chrome://devtools/content/framework/connect/connect.xhtml    ÿÿÿÿ      gBrowser        ¹    @           G   exports.gDevToolsBrowser.openWebIDEc   l       ¹   
                            
         |  l   Þ                   Q;    5   ¸   
=   :    QV      æV   ¸   
:  Q   ,æ;    5   ¸   
@=   =   =   	@: QæÉÖÈÕè    Services   wm'   getMostRecentWindow   devtools:webide   focus   ww   openWindow1   chrome://webide/content/   webide;   chrome,centerscreen,resizable    ÿÿÿÿ                           win                e   ÿÿÿÿ¹    @           c   exports.gDevToolsBrowser._getContentProcessTargetc  ¶       ¹      ;                                   ì$  ç                    QÇ   ;    5       &æ;    ¸   
:  Q;    ¸   
:  Qæ;    C0   Q;    ¸   
:     Q;   AV   ,  R    Q;      :     Q   ¸   
:  ¸   	
    : Q   5   
ÈÈËËÐÑÌÌÈÎ	ÉÊÉà 	Ê    DebuggerServer   initialized	   init!   addBrowserActors%   allowChromeProcess   connectPipe   DebuggerClient   defer   connect	   then   promise    ÿÿÿÿ      processId                    transport   client   deferred                   g   exports.gDevToolsBrowser._getContentProcessTarget/<e   ;       ¹      !                                  "  È$  ó                        ¸    
  : ¸   
    : ¸   
   : Qà  ôÊ  þ  ô     getProcess	   then    ÿÿÿÿ                        k   exports.gDevToolsBrowser._getContentProcessTarget/</<e  P       ¹                                      ["  d#  õ                   Q[    T  5    ]          ]   C]   B]      Q;   ¸   
V   : ÉÉÍÏËÐ 	   form   client   chrome   isTabActor   TargetFactory   forRemoteTab    ÿÿÿÿ      response                     options                       	   form         client         chrome         isTabActor             I   ÿÿÿÿ    M          ¹    @           k   exports.gDevToolsBrowser._getContentProcessTarget/</<e  2       ¹                                       x#  À$  þ                  T  ¸    
=       : Q      ¸   
T  : QÙØ    on   close   resolve    ÿÿÿÿ      target                  o   exports.gDevToolsBrowser._getContentProcessTarget/</</<e          ¹                                         Q$  $    !                    ¸    
:  QÕ    close    ÿÿÿÿ              ¹    @       ª   ÿÿÿÿ    ³                    e   exports.gDevToolsBrowser.openContentProcessToolboxc  @     ¹      m                              ,%  r(                  ¹W   Q      Q    5      : Q5     QQT  5   5   5     Q@  Q  Q?  Q    Xm  Q    5   ¸   
V  :   QV  V     æV  W  QÉ   &æÉæV  #?W  QQãV  V  ÿÿÿ¢æÉV     .æV   ¸   
V  : ¸   	
    : Q   Eæ  Q   
¸   
=   :   Q    5   ¸   
@=   V  : QÉæÉÎã×	&XIc 
ÕÈÉÉIÈ $Î  Ò )Ù Ê  
ÑÈâ    Services	   ppmm-   RequireObjectCoercible   childCount   selectedBrowser   messageManager+   processMessageManager   getChildAt1   _getContentProcessTarget	   then	   L10N   getStrM   toolbox.noContentProcessForTab.message   prompt   alert       ÿÿÿÿ      gBrowser   .this                    childCount   mm   processId                     i                     child                     msg                  i   exports.gDevToolsBrowser.openContentProcessToolbox/<d" ý&  æ'       ¹    @     `   c         +  ÿÿÿÿ   Z   q          m   =         £              9                 _   exports.gDevToolsBrowser.installDeveloperWidgetc   ã       ¹      Z                                 Â(  ×0  )                     Q=       Q;   ¸   
V   :   QV  E   æQV  5   ;   5   æ   
æÉæ;   ¸   
[   V   ]   =   ]   =   	]   
=   ]   =   ]   ;   5      æ;   5      æ;   5   æ]       ]      ]   : QÉÊÊÐ	Èà Z /ÑÉÊÊÊÊÊÐÐÊ MÊ / Z !   developer-button   CustomizableUI   getWidget   provider   PROVIDER_API   createWidget   id	   view	   type#   PanelUI-developer   viewId-   key_devToolboxMenuItem   shortcutId;   developer-button.tooltiptext2   tooltiptext   AppConstants   MOZ_DEV_EDITION   AREA_NAVBAR   AREA_PANEL   defaultArea   onViewShowing   onBeforeCreated    ÿÿÿÿ                           id   widget                      exports.gDevToolsBrowser.installDeveloperWidget/<.onViewShowingc  f      ¹      V                               è*  Ú.  8                               QT  5    5      QV   5     QV   ¸   
=   :   QZ    >V  5   -Á
     m5   _ã,  ¸   
:   5   ÿÿÿáæ Q  QV  ¸   	
[   =   
]       ]   : QV  ¸   	
V   ¸   
=   : : QV   ¸   
=   :   Q   ¸   
=   [   :    : Q5     Q5     QQV  V  : QV  V  V  : QÉÞÒÎÐÈÕ8$õÐÊËÿÿÿÏÛÿÿÿìÐÈÖ
çÍÒ    target   ownerDocument   defaultView   getElementById+   menuWebDeveloperPopup   children   value	   next	   done	   push   menuseparator   localName   getAttribute#   goOfflineMenuitem-   PanelUI-developerItems   Cu   importW   resource:///modules/CustomizableWidgets.jsm-   RequireObjectCoercible   clearSubview1   fillSubviewFromMenuItems    ÿÿÿÿ      aEvent                     doc   win	   menu   itemsToDisplay   developerItems   clearSubview1   fillSubviewFromMenuItems                      exports.gDevToolsBrowser.installDeveloperWidget/<.onViewShowing/<.getAttributed"  -  -  C  G   ¹    @                 localName         getAttribute                         v   $         G  ÿÿÿÿ            exports.gDevToolsBrowser.installDeveloperWidget/<.onBeforeCreatedc  ³       ¹      6                                 ü.  Ë0  M                     QT  ¸    
=   :    
æÉæT  ¸   
=   :    QV   =   0   QT  ¸   
=   :   QV  ¸   
=   =   : QV   ¸   	
V  : QT  ¸    
=   
: ¸   	
V   : QÉÙ
 X RÏÈÏÏÈÙÓâ    getElementById-   PanelUI-developerItems   createElement   panelview   id	   vbox   setAttribute   class%   panel-subview-body   appendChild#   PanelUI-multiView    ÿÿÿÿ      doc                  	   view   panel             
   ¨   ÿÿÿÿ    %          ¹    @                 id      	   type         viewId         shortcutId         tooltiptext         defaultArea         onViewShowing         onBeforeCreated          
   Ø   ÿÿÿÿ    U                    Y   exports.gDevToolsBrowser.installWebIDEWidgetc   Á      ¹      R                                51  3  `                ¹W   Q  QV   ¸    
:     
æÉæ  Q;   5   ¸   
=   :    æ;   5   W  Q   æ;   5   W  Qæ;   ¸   
[   =   	]   
=   ]   =   ]   =   ]   V  ]       ]   : QÉÑ v eÖÕÐÑÊÊÊÊÉÊ l v /   isWebIDEWidgetInstalled   Services   prefs   getBoolPrefQ   devtools.webide.widget.inNavbarByDefault   CustomizableUI   AREA_NAVBAR   AREA_PANEL   createWidget   webide-button   id   key_webide   shortcutId;   devtools-webide-button2.label   labelG   devtools-webide-button2.tooltiptext   tooltiptext   defaultArea   onCommand    ÿÿÿÿ      .this                      defaultArea                  q   exports.gDevToolsBrowser.installWebIDEWidget/<.onCommandc         ¹                                        R3  3  r                ;    ¸   
:  QÐ !   gDevToolsBrowser   openWebIDE    ÿÿÿÿ      aEvent        ¹    @                 id         shortcutId         label         tooltiptext         defaultArea         onCommand             ´   ÿÿÿÿ    #                    a   exports.gDevToolsBrowser.isWebIDEWidgetInstalledc   F       ¹                                        ¾3  `4  x  $                Q;    ¸   
=   :    QV   E   æQV   5   ;    5   æ  ÉÉÑÈâ    CustomizableUI   getWidget   webide-button   provider   PROVIDER_API    ÿÿÿÿ                           widgetWrapper                ?   ÿÿÿÿ    C          ¹    @           ]   exports.gDevToolsBrowser.uninstallWebIDEWidgetc   F      ¹                                        5  Ã5    "             ¹W   QV   ¸    
:     æ;   ¸   
=   : Qæ;   ¸   
=   : QËÖÕ /   isWebIDEWidgetInstalled   CustomizableUI)   removeWidgetFromArea   webide-button   destroyWidget    ÿÿÿÿ      .this         ¹
    @           c   exports.gDevToolsBrowser.moveWebIDEWidgetInNavbarc           ¹                                         56  6    %              ;    ¸   
=   ;    5   : Qß    CustomizableUI   addWidgetToArea   webide-button   AREA_NAVBAR    ÿÿÿÿ              ¹    @           _   exports.gDevToolsBrowser._registerBrowserWindowc  b     ¹      V                        +       d7  ¤;                  ¹W   Q  Q    5   ¸   
   :    
æÉæ    5   ¸   
   : Q;   ¸   
   5   : Q    ¸   
:  Q;   ¸   	
   =   
    : QV   ¸   
   : QV   ¸   
:  Q   ¸   
=   V   : Q   5   5     QV  ¸   
=   V   B: QV  ¸   
=   V   B: QV  ¸   
=   V   B: QV  ¸   
=   V   B: QV  ¸   
=   V   B: QÉÜ ¶ ÚÚÐß ¬ÔÏÙÔÙÙÙÙÚ !   gDevToolsBrowser-   _trackedBrowserWindows   has   add   BrowserMenus   addMenus   document-   installDeveloperWidget   loader   lazyGetter!   DeveloperToolbar3   updateCommandAvailability%   ensurePrefObserver!   addEventListener   unload   gBrowser   tabContainer   TabSelect   TabOpen   TabClose   TabPinned   TabUnpinned    ÿÿÿÿ      win   .this                   tabContainer                  c   exports.gDevToolsBrowser._registerBrowserWindow/<c   G       ¹                                        @9  È9  §                   Q;        =   :    : Q5      QQV   A   ,  R ÉÉ
ÏÜÎ    requireQ   devtools/client/shared/developer-toolbar-   RequireObjectCoercible!   DeveloperToolbar    ÿÿÿÿ                        !   DeveloperToolbar                @   ÿÿÿÿ    D                U  ÿÿÿÿ    .                    9   DT_setSlowScriptDebugHandlerC   }       ¹   	   ;                                 Q<  H  ¼                  QÇ         Q;    5   ¸   
;   5   :    Q;    5   ¸   
;   5   :    QV      0   QV      0   QÈËË ½ÑÊ ½ÈÛÉ æÏ þÐ 	    CcI   @mozilla.org/dom/slow-script-debug;1   getService   Ci%   nsISlowScriptDebug;   @mozilla.org/thread-manager;1!   nsIThreadManager#   activationHandler/   remoteActivationHandler   ÿÿÿÿ   9   DT_setSlowScriptDebugHandler                     -   slowScriptDebugHandler                     debugService   tm                   -   slowScriptDebugHandler  H       ¹                                      K=  5B  Á                   Q;    ¸   
T  :    Q;   ¸   
V   =   : ¸   
    : QÉ
Ï	Èê ä    TargetFactory   forTab   gDevTools   showToolbox   jsdebugger	   then    ÿÿÿÿ   	   aTab   aCallback                    target                   1   slowScriptDebugHandler/<e  Ò       ¹      R                                Æ=  -B  Ä                 Ç   T  ¸    
:  5   5      Q   5   x=   y   !æ=   y   6æ=   y   Gæz   bæ   ¸   
:  Q  :  Q   aæ   ¸   
    : Q   Eæ   ¸   	
=   
   : Q   $æ;      =      5   : pæÈÊÓÊh  £vËpËpÌÐÊXÖXÛ ÞXÏË à    getCurrentPanel   panelWin   gThreadClient   state   paused   attached   resuming   resumeThenPause   interrupt%   addOneTimeListener   resumed   Erroru   invalid thread client state in slow script debug handler:     ÿÿÿÿ      toolbox                     threadClient                    5   slowScriptDebugHandler/</<e           ¹                                         Û?  9@  Ñ  #                    ¸    
:  Q  :  QÕÊ    resumeThenPause    ÿÿÿÿ              ¹    @          5   slowScriptDebugHandler/</<e          ¹                                        Î@  oA  Ø                       ¸    
    : QÛ    interrupt    ÿÿÿÿ                        9   slowScriptDebugHandler/</</<e           ¹                                         û@  _A  Ù  %                    ¸    
:  Q  :  QÕÊ    resumeThenPause    ÿÿÿÿ              ¹    @       Ì   ÿÿÿÿ      A   ÿÿÿÿ         w   DT_setSlowScriptDebugHandler/debugService.activationHandlerc  9      ¹                             .        eB  F  æ                     QÇ   T  ¸    
;   5   : ¸   
;   5   : ¸    
;   5   : 5   ¸    
;   5   : ¸   
;   5   : ¸    
;   5   :    QB   Q  V   5   	5   
    : QT  ¸    
;   5   : ¸   
;   5   :   QV  ¸   
:  Qæ   !m    5   ¸   
C: Qã    ÿÿÿÜæV  ¸   
:  QÈÏ
ÔÊÊ çÊÊ çÏÊ çÊ ìÊ çÊ íÊ çÈ ï
Þ õ
ÔÊÊ õÈÐ() øÛ øÎÐ    QueryInterface   Ci+   nsIInterfaceRequestor   getInterface!   nsIWebNavigation'   nsIDocShellTreeItem   rootTreeItem   nsIDOMWindow%   nsIDOMChromeWindow   gBrowser   selectedTab#   nsIDOMWindowUtils   enterModalState   currentThread!   processNextEvent   leaveModalState    ÿÿÿÿ      aWindow                     chromeWindow   setupFinished   utils                   {   DT_setSlowScriptDebugHandler/debugService.activationHandler/<e          ¹                                           ÄD  ãD  ñ                C      Q%Ì     ÿÿÿÿ              ¹    @     þ   )         )  ÿÿÿÿ            DT_setSlowScriptDebugHandler/debugService.remoteActivationHandlerc  h       ¹      '                                ÇF  H  þ                    Q    W   QT  5    5     QV  5   ¸   
T  :   QV  5   V  0   Q  V  V   : QÉÊÊ ÿ
Ò
ÓÈÓÓ    ownerDocument   defaultView   gBrowser!   getTabForBrowser   selected    ÿÿÿÿ      aBrowser   aCallback   callback                   chromeWindow   tab                     callback          ¹                                         ¢G  ÙG                     ¸    
:  QÐ +   finishDebuggerStartup    ÿÿÿÿ              ¹    @    
   ]   ÿÿÿÿ      q   ÿÿÿÿ          =   DT_unsetSlowScriptDebugHandlerC   :       ¹                                        H  HI    F               Q;    5   ¸   
;   5   :    QV   ;   0   QÉÑÊ ÈÐ    CcI   @mozilla.org/dom/slow-script-debug;1   getService   Ci%   nsISlowScriptDebug#   activationHandler   undefined   ÿÿÿÿ   =   DT_unsetSlowScriptDebugHandler                                            debugService                3   ÿÿÿÿ¹    @           '   DT_addToolToWindowsC  ¡      ¹                              !        J  ÿM    1      
           QT  5        
æÉæT  5   E   $æQ;   5   ¸   
T  5   :  æ   
æÉæ   æ  Qv  QÉ    æ;   ¸   
:     Q  Q  QV   -Á
     Jm  Q5     QV  5        æ   #æV  T  H   æ   *æV  W  QãQ¸   
:   5   	ÿÿÿ¥æ É  Q;   
5   -Á
     7m  Q5     Q;   ¸   
V  5   T  V  : QãQ¸   
:   5   	ÿÿÿ¸æ ÉT  5   =   H   æ;   
¸   
:  QæÉÊÉ = !9Ï	Ù =Ì &ÔÌ
ÈÓ8`Ò	
Ê@ÈHÉ ,ËÿÿÿðÕ 6Ù8MÒ	à 6ËÿÿÿðÕÎÒ    inMenu!   visibilityswitch   Services   prefs   getBoolPref   gDevTools-   getToolDefinitionArray   value	   next	   done!   gDevToolsBrowser-   _trackedBrowserWindows   BrowserMenus-   insertToolMenuElements   document   id   jsdebugger3   setSlowScriptDebugHandler   ÿÿÿÿ   '   DT_addToolToWindows                        toolDefinition                    allDefs   prevDef                      e                     def                     win            (  M      ¥   `           =      
     ÿÿÿÿ                U             e                w            j       ¹8    @           S   exports.gDevToolsBrowser.hasToolboxOpenedc  ó       ¹      >                                N  àN  ?         	          QT  5    5      Q    Q   5   -Á
     m    Q5   -Á
  ¸   
:   5      æQå   æ5   æ  Q¸   
:   5      æQå   æ5   æ  QQQV  5   V      æCÉÉ æãQ¸   
:   5   ÿÿÿWæ ÉBÉÉÒÝ8  ®Ö	ÑË	í	ÜÎÈ A"ËÿÿÿâÕ F    gBrowser   selectedTab   gDevTools   _toolboxes   value	   next	   done   tab    ÿÿÿÿ      win                     tab                      target   toolbox            :   ®         ì   ÿÿÿÿ   "   Ë          Ç             È             ð                    +   DT_updateMenuCheckboxC   Ï       ¹      =                                 ¥O  úP  M  5      	         Q;    5   -Á
     m   Q5      Q    Q;    ¸   
V   :   QV   5   ¸   
=   :   QV     $æV  ¸   
=   =   	: Q   æV  ¸   

=   : QæÉãQ¸   
:   5   ÿÿÿZæ ÉÙ8  «Ò	Ê
ÐÈ
ÕÈßÖ NËÿÿÿðÕ Y !   gDevToolsBrowser-   _trackedBrowserWindows   value!   hasToolboxOpened   document   getElementById   menu_devToolbox   setAttribute   checked	   true   removeAttribute	   next	   done   ÿÿÿÿ   +   DT_updateMenuCheckbox                                            win                      hasToolbox	   menu               «         È   ÿÿÿÿ   :   t       ¹    @           1   DT_removeToolFromWindowsC         ¹   
   (                                ËQ  »R  a  ;               Q;    5   -Á
     3m   Q5      Q;   ¸   
T  V   5   : QãQ¸   
:   5   ÿÿÿ¼æ ÉT  =   H   æ;    ¸   	
:  QæÙ8IÒ	Ü bËÿÿÿðÕÉÑ !   gDevToolsBrowser-   _trackedBrowserWindows   value   BrowserMenus%   removeToolFromMenu   document	   next	   done   jsdebugger7   unsetSlowScriptDebugHandler   ÿÿÿÿ   1   DT_removeToolFromWindows                        toolId                    win                I         f   ÿÿÿÿ¹    @           [   exports.gDevToolsBrowser._forgetBrowserWindowc  2     ¹                              6       ¸S  W  r                ¹W   Q    Q    5   ¸   
T  :     
æÉæ    5   ¸   
T  : QT  ¸   
=   V   : Q;   ¸   
T  5   : Q    Q   	5   
-Á
     m    Q5   -Á
  ¸   
:   5      æQå   æ5   æ  Q¸   
:   5      æQå   æ5   æ  QQQV  5   T     æV  ¸   
:  QæãQ¸   
:   5   ÿÿÿQæ É;   ¸   
T  =   :   QV  E   æQV  5    æ   æT  5   ¸   
:  QæT  5   5     QV  ¸   
=   V   B: QV  ¸   
=   V   B: QV  ¸   
=   V   B: QV  ¸   
=   V   B: QV  ¸   
=   V   B: QÉÊÔ  vØ×ØÝ8  ´Ö	ÑË	í	ÜÍÐ |"ËÿÿÿâÕ ÔÈËËÔÒÙÙÙÙÚ !   gDevToolsBrowser-   _trackedBrowserWindows   has   delete'   removeEventListener   unload   BrowserMenus   removeMenus   document   gDevTools   _toolboxes   value	   next	   done   win   destroy   Object1   getOwnPropertyDescriptor!   DeveloperToolbar   get   gBrowser   tabContainer   TabSelect   TabOpen   TabClose   TabPinned   TabUnpinned    ÿÿÿÿ      win   .this                 	   desc   tabContainer                     target   toolbox               ´         !  ÿÿÿÿ    1                Ñ                 I   exports.gDevToolsBrowser.handleEventc       ¹                              )       ³W  [                 ¹W   QT  5        Qx=   y   Bæ=   y   7æ=   y   ,æ=   y   !æ=   y  ~æ=   y  æz  ¦æ>  Q>  Q  QV   5   -Á
     m  Q5     Q      QV  5   	5   
  QV  5   	5   D   æQ>æ  QV  5   V    QV  V  W  QV  V  W  QÉãQ¸   
:   5   ÿÿÿkæ ÉV   5   5   ¸   
V  : QV   5   5   ¸   
V  : QV   5   ;   ¸   
V  V   5   5   : 0   QV   5   ;   ¸   
V  V   5   5   : 0   Q   >æ;   ¸   
:  Q   (æ;   ¸   
T  5   5   : Q   æÉÒh évËpËpËpËpËpÌØ8  ÒÎÓÜÓ
Î
Ï ËÿÿÿðÕ ¢ÝÝçÉçÉXÐXÝX 	   type   TabOpen   TabClose   TabPinned   TabUnpinned   TabSelect   unload-   _trackedBrowserWindows   value   gBrowser   tabContainer   _numPinnedTabs   itemCount	   next	   done   _tabStats   histOpen	   push   histPinned   peakOpen	   Math   max   peakPinned!   gDevToolsBrowser'   _updateMenuCheckbox)   _forgetBrowserWindow   target   defaultView    ÿÿÿÿ      event   .this                 	   open   pinned                     win                     tabContainer   numPinnedTabs   numTabs                        ë  ÿÿÿÿ   s   ¶          ª   _      ¹    @           O   exports.gDevToolsBrowser._pingTelemetryc   Ã      ¹      /                                »[  Ø]  ±         	       ¹W   Q    Q      Q;    5     QV   5   ¸   
;   V  5   : QV   5   ¸   
;   V  V  5   : : QV   5   ¸   
;   V  5   	: QV   5   ¸   
;   
V  V  5   : : QÉÊÊ »Ïâã-ÿÿÿÓâã/ÿÿÿÑ !   gDevToolsBrowser   _tabStats   _telemetry   log1   TABS_OPEN_PEAK_HISTOGRAM   peakOpen/   TABS_OPEN_AVG_HISTOGRAM   histOpen5   TABS_PINNED_PEAK_HISTOGRAM   peakPinned3   TABS_PINNED_AVG_HISTOGRAM   histPinned    ÿÿÿÿ      .this                   	   mean   tabStats                  Y   exports.gDevToolsBrowser._pingTelemetry/meanc  T       ¹      "                                Ø[  y\  ²                   QT  Ù    >H   
æ>ÉæT  ¸   
    :    Q;   ¸   
V   T  Ù    : ÉÉÐ ¹ ·
ÐÈÙ    length   reduce	   Math	   ceil    ÿÿÿÿ      arr                     total                   g   exports.gDevToolsBrowser._pingTelemetry/mean/total<u  	       ¹                                          6\  E\  ·                T  T '     ÿÿÿÿ      a   b        ¹    @       M   ÿÿÿÿ                  Q                ²   ÿÿÿÿ          A   exports.gDevToolsBrowser.destroyc   ã       ¹      5                                 A^  ù_  Å               ;    5   ¸   
=   ;   : Q;    5   ¸   
;   =   : Q;    5   ¸   
;   5   =   : Q;   ¸   	
:  Q;   @0   
Q   Q;   5   -Á
     +m   Q5      Q;   ¸   
V   : QãQ¸   
:   5   ÿÿÿÄæ ÉßßäÐÌÙ8AÒ	Ô ÍËÿÿÿðÕ    Services   prefs   removeObserver   devtools.!   gDevToolsBrowser   obsA   browser-delayed-startup-finished   destroy!   quit-application   _pingTelemetry   _telemetry-   _trackedBrowserWindows   value)   _forgetBrowserWindow	   next	   done    ÿÿÿÿ                           win                A         ^   ÿÿÿÿ¹    @              -   _trackedBrowserWindows         _telemetry         _tabStats      )   toggleToolboxCommand      3   updateCommandAvailability         observe      /   _prefObserverRegistered      %   ensurePrefObserver      #   selectToolCommand      %   openAboutDebugging      #   openConnectScreen         openWebIDE      1   _getContentProcessTarget      3   openContentProcessToolbox      -   installDeveloperWidget      '   installWebIDEWidget      /   isWebIDEWidgetInstalled      '   isWebIDEInitialized      +   uninstallWebIDEWidget      1   moveWebIDEWidgetInNavbar      -   _registerBrowserWindow      3   setSlowScriptDebugHandler      7   unsetSlowScriptDebugHandler      #   _addToolToWindows      !   hasToolboxOpened      '   _updateMenuCheckbox      -   _removeToolFromWindows      )   _forgetBrowserWindow         handleEvent         _pingTelemetry         destroy                  U         ¹                                        \`  `  Õ                ;    ¸   
T  : Ò' !   gDevToolsBrowser#   _addToolToWindows    ÿÿÿÿ      def        ¹    @            C  8       ¹                                       Ë`  Fa  ×  )                Q;    5   ¸   
T :    Q;   ¸   
V   : QÉÔÈÕ    gDevTools   _tools   get!   gDevToolsBrowser#   _addToolToWindows    ÿÿÿÿ      ev   toolId                     toolDefinition                1   ÿÿÿÿ¹    @            C  1       ¹                                        ua  ÷a  Ü  +              T '=       æT 5   U Qæ;   ¸   
T : QÊÍÓ    string   id!   gDevToolsBrowser-   _removeToolFromWindows    ÿÿÿÿ      ev   toolId        ¹    @            C          ¹                                         ÿd  #e  ô                ;    ¸   
:  QÐ !   gDevToolsBrowser   destroy    ÿÿÿÿ              ¹    @     ¸  l        O   ÿÿÿÿ