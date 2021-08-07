import locale

locale.setlocale(locale.LC_ALL, "de_DE.utf8")

result = 4.55454

# NOTE :total.commaf :numbers .commafields f for folat
print("{:.2f}".format(result))  # 4.55
print("{:4.3f}".format(result))  # 4.555
print("{:06.3f}".format(result))  # 04.55
print(f"{result:4.3f}")  # 4.555
print(f"{result:06.3f}")  # 04.55
print(f"{result:n}")
