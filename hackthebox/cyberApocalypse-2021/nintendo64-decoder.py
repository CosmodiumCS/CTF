#!/usr/bin/python

import base64

# base 64 string from 'output.txt'
flag = "Vm0weE5GbFdWWGhTV0d4VVYwZG9XVmxyWkZOV1JteDBaVWRHYWxac1NsWldSM1JQWVd4S2RHVkljRmRpUjJoMlZrZHplRmRHVm5WaVJtUlhUVEZLZVZkV1VrZFpWMUpHVDFaV1ZtSkdXazlXYWtwdlYxWmFjbHBFVWxWTlZXdzBWa2MxVTFSc1duTlhiR2hXWWtaS1dGVXhXbUZTTVdSelYyczFWMkY2VmtwV2JURXdZakZrU0ZOc2JGWmlSa3BYV1d0YVlVMHhjRVpYYlVaVFRWWmFlVmt3VlRGV01ERkhZak5rVjJFeVRYaFdha3BIVmpGU2NtRkdXbWxoTTBKWVYxWlNSMWxXWkVkVmJGWlRZbXMxY2xWc1VsZFRiR1J5VjJ0a1YySkdjRVpWVmxKV1VGRTlQUT09"

# decodes base64 eight times
for i in range(1, 9):
    decoded_data = base64.b64decode(flag)
    flag = decoded_data

print(flag)
