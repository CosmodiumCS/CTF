# decrypts sams password form BASIC 6

encrypted_password = "0d574;h8" # SAMS ENCRPYTED PASSWORD
decrypted_password = ""
iteration = 0
char_list = []

for i in encrypted_password:
	char_list.append(ord(i))

for char in char_list:
	decrypted_password += chr(char - iteration)
	iteration += 1

print(decrypted_password)
