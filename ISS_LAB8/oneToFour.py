# Q1
s=["hyderabad", "mumbai", "bengal"]
print([(x,len(x)) for x in s ])

# Q2
l1=[1,2,3]
l2=[4,5,6]
print([x*y for x in l1 for y in l2])

# Q3
print(sorted(list(set([x for x in range(1,50) for y in range(5,7) if x%y == 0]))))

# Q4
l1=[5,10,15]
l2=[-5,-10,-15]
print([x+y for x,y in zip(l1,l2)])
