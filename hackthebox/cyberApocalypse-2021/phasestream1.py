#!/usr/bin/python
# tool to get phasestream1 key [5 bytes]
# created by : C0SM0

# import tools
from pwn import xor

encrypted_flag = bytes.fromhex('2e313f2702184c5a0b1e321205550e03261b094d5c171f56011904') # ecnrtypted flag via xor
flag_format = b'CHTB{' # bytes form of flag

# gets key based on the flags formatting
plaintext_key = ''.join(chr(c^m) for c, m in zip(encrypted_flag, flag_format))

# output key
print(plaintext_key) # key = mykey
