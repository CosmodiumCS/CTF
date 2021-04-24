#!/usr/bin/python
# tool to ger phasestream2 key [1 byte]
# created by : C0SM0

# import tools
from pwn import xor
from itertools import cycle

# get encrypted flags
flag_list = open('phasestream2-output.txt', 'r').readlines()

# decryption process
for line in flag_list:
    # format flag
    line = line.strip()
    encrypted_flag = bytes.fromhex(line)

    flag_format = b'CHTB{'

    # get key based on the flags formatting
    plaintext_key = ''.join(chr(c^m) for c, m in zip(encrypted_flag, flag_format))

    # decrypt the encrypted flag
    flag = ''.join(chr(c ^ ord(m)) for c, m in zip(encrypted_flag, cycle(plaintext_key)))

    # output flags
    if flag.startswith('CHTB{') and flag.endswith('}'):
        print(flag)
