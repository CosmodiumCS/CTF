# Cyber Apocalypse
> Chris Taylor [C0SM0] | 04/19/2021

## RESOURCES
## WARMUP
## WEB

### BLITZPROP
'entrypoint.sh' FILE CREATES RAND FLAG NAME USING
```
cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 5 | head -n 1
```
- FLAG FILE LOCATED IN 'app' DIRECTORY
NOTE:
- ENTRYPOINT SAME NAME AS ENTRYPOINT ADDRESS [READELF]

### MiniSTRyplace
USE THE LANG TO GET THE FLAG
```
?lang=....//....//flag
```
## PWN
## CRYPTO

### NINTENDO BASE64
'output.txt' CONTENT
```
            Vm                                                   0w               eE5GbFdWW         GhT            V0d4VVYwZ
            G9              XV                                   mx              yWk    ZOV       1JteD           BaV     WRH
                            YW                                   xa             c1              NsWl dS   M1   JQ WV       d4
S2RHVkljRm  Rp UjJoMlZrZH plRmRHV m5WaVJtUl hUVEZLZVZk   V1VrZFpWMU  pHVDFaV1Z  tSkdXazlXYW   twdl   Yx    Wm Fj  bHBFVWxWTlZ
Xdz     BWa 2M xVT     FSc  1d   uTl     hi R2h     XWW taS     1dG VXh     XbU ZTT     VdS elYy     cz     FWM    kY2VmtwV2
JU       RX dZ ak       Zr  U0   ZOc2JGWmlS a3       BY V1       d0 YV       lV MH       hj RVpYYlVaVFRWW  mF lV  mt       3V
lR       GV 01 ER       kh  Zak  5rVj   JFe VR       Ya Fdha   3BIV mpGU   2NtR kdX     bWx          oT   TB   KW VYxW   lNSM
Wx       XW kV kV       mJ  GWlRZ bXMxY2xWc 1V       sZ  FRiR1J5VjJ  0a1YySkdj   RVpWVmxKV           1V            GRTlQUT09
```
- 'output.txt' IS BASE64 ENCODED 8 TIMES
USE 'nintendo64-decoder.py' TO DECODE
```
CHTB{3nc0d1ng_n0t_3qu4l_t0_3ncrypt10n}
```

### PHASESTREAM1
FLAG ENCRYPTED VIA XOR [STREAM CIPHER]
```
2e313f2702184c5a0b1e321205550e03261b094d5c171f56011904
```
- DECRYPT ENCRYPTED FLAG WITH A 5 BYTE KEY
- USE 'phasestream1.py' TO GET KEY
```
mykey
```
USE 'https://www.dcode.fr/xor-cipher' TO DECRYPT
```
CHTB{u51ng_kn0wn_pl41nt3xt}
```

### PHASESTREAM2
- THE FILE 'phasestream2-output.txt' CONTAINS 9999 ENCRYPTED FLAGS
- USE 'phasestream2.py' TO GET LIST OF FLAGS MOST LIKELY TO BE CORRECT
```
CHTB{n33dl3_1n_4_h4yst4ck}
```

## REVERSING

### PASSPHRASE
MEMORABLE COMMANDS
```
strings
readelf -h/-a
./
```

## FORENSIC
## HARDWARE
## MISC
