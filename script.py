def sum_of_cubes(n):
        sum = 0
        while n > 0:
            sum += n**3
            n -= 1
        return sum
print(sum_of_cubes(3))