   201701181237264      �                                      `  �       / *   T h i s   S o u r c e   C o d e   F o r m   i s   s u b j e c t   t o   t h e   t e r m s   o f   t h e   M o z i l l a   P u b l i c 
   *   L i c e n s e ,   v .   2 . 0 .   I f   a   c o p y   o f   t h e   M P L   w a s   n o t   d i s t r i b u t e d   w i t h   t h i s 
   *   f i l e ,   Y o u   c a n   o b t a i n   o n e   a t   h t t p : / / m o z i l l a . o r g / M P L / 2 . 0 / .   * / 
 
 " u s e   s t r i c t " ; 
 
 / /   S e e   b u g   1 2 7 3 9 4 1   t o   u n d e r s t a n d   t h i s   c h o i c e   o f   p r o m i s e . 
 c o n s t   P r o m i s e   =   r e q u i r e ( " p r o m i s e " ) ; 
 
 / * * 
   *   R e t u r n s   a   d e f e r r e d   o b j e c t ,   w i t h   a   r e s o l v e   a n d   r e j e c t   p r o p e r t y . 
   *   h t t p s : / / d e v e l o p e r . m o z i l l a . o r g / e n - U S / d o c s / M o z i l l a / J a v a S c r i p t _ c o d e _ m o d u l e s / P r o m i s e . j s m / D e f e r r e d 
   * / 
 m o d u l e . e x p o r t s   =   f u n c t i o n   d e f e r ( )   { 
     l e t   r e s o l v e ,   r e j e c t ; 
     l e t   p r o m i s e   =   n e w   P r o m i s e ( f u n c t i o n   ( )   { 
         r e s o l v e   =   a r g u m e n t s [ 0 ] ; 
         r e j e c t   =   a r g u m e n t s [ 1 ] ; 
     } ) ; 
     r e t u r n   { 
         r e s o l v e :   r e s o l v e , 
         r e j e c t :   r e j e c t , 
         p r o m i s e :   p r o m i s e 
     } ; 
 } ; 
   resource://gre/modules/commonjs/toolkit/loader.js -> resource://devtools/shared/defer.js     �                    �    =   �;   �   =   : �    Q;   �    0   �����ψ
ɘИ�    Promise   use strict   require   promise   module   exports   ����      Promise                     deferC   W       �                                          �                  ��   Q�   �   Q�   Q;    A�    ,  R �   Q[   �   ]   �   ]   V   ]   �șș�ˈ�	��ψ
Ș���ʐ�ʐ�ɘ    Promise   resolve   reject   promise   ����      defer                                            resolve   reject   promise                      defer/promise<c   )      �                                        "  F  �     %             	W   QV   >7�   �   QV   ?7�   �   Q���ѐ�ѐ�     ����      arguments         �    @                 resolve         reject         promise             K   ����   T          