from datetime import date, time, datetime
import locale

locale.setlocale(locale.LC_ALL, "de_DE.utf8")

myDate = date(1985, 8, 19)
print(myDate)
print(date.min)
print(date.max)
print(date(1985, 8, 19).toordinal())
print(date.fromordinal(3500))
print(date.today().weekday())
print(date.today().strftime("%A"))
print(myDate.year, myDate.day, myDate.month)
print(myDate.strftime("%d. %B %Y"))
print("Date \n")

myTime = time(15, 6, 23, 56)
print(myTime)
print(myTime.hour, myTime.minute)
print(myTime.strftime("%X"))
print("Time \n")

myDateTime = datetime(2020, 5, 23, 16, 44, 45)
print(myDateTime)
print(datetime.now().time())
print(datetime.now())
print(datetime.now().date())
print("Datetime \n")

print((date.today() - myDate).days)
print(date.today() - myDate)

christmas = date(date.today().year, 12, 24)
if (christmas - date.today()).days < 0:
    christmas = date(date.today().year + 1, 12, 24)
    daysToChristmas = (christmas - date.today()).days
else:
    daysToChristmas = (christmas - date.today()).days

print(f"{daysToChristmas} days to christmas.")
