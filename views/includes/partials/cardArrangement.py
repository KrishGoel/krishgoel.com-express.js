cardsTotal = int(input("Enter the total number of cards: "))

i = 0
allCards = []
while (i < cardsTotal):
    cardTemp = input("")
    allCards.append(cardTemp)
    i += 1

print("""
---4 Column Layout---
""")
for i in range (0,4):
    print("Column", i+1)
    x = i
    while (x < cardsTotal):
        print(allCards[x])
        x += 4
    print("""

    """)

print("""
---2 Column Layout---
""")
for i in range (0,2):
    print("Column", i+1)
    x = i
    while (x < cardsTotal):
        print(allCards[x])
        x += 2
    print("""

    """)
