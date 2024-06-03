def print_pyramid(rows): 
    for i in range(rows): #start with 8 space and one start then increment 1 stpace and add 2 star
        print(" " * (rows - i - 1) + "*" * (2 * i + 1)) 

print_pyramid(9);