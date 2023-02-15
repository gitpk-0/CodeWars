def ipv4__parser(ip_addr, mask):
    return net_addr, host_addr



print(ipv4__parser('192.168.50.1', '255.255.255.0')) 
# ('192.168.50.0', '0.0.0.1')
print(ipv4__parser('192.168.50.129', '255.255.255.192')) 
# ('192.168.50.128', '0.0.0.1')
print(ipv4__parser('65.196.188.53', '255.255.240.0'))
# ('65.196.176.0', '0.0.12.53')


# Write a function that takes two string parameters, an IP (v4) address and
# a subnet mask, and returns two strings: the network block,
# and the host identifier.

# For example:
# >>> print ipv4__parser('192.168.50.1', '255.255.255.0')
# ('192.168.50.0', '0.0.0.1')