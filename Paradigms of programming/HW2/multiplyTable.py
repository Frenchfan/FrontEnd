def main():
    number = int(input("Введите число: "))
    multiplyTable(number)

def multiplyTable(number):
    for i in range(1, 10):
        print(f"{number} * {i} = {number * i}")

if __name__ == "__main__":
    main()
