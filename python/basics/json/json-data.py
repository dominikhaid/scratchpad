import json
import os 
dir_path = os.path.dirname(os.path.realpath(__file__))

#json to dict
person = '{"name": "Bob", "languages": ["English", "French"]}'
person_dict = json.loads(person)
print( person_dict)
print(person_dict['languages'])

#read json file
with open(dir_path+'/../../../json/sample.json', 'r') as f:
  data = json.load(f)

print(data)

#dict to json
person_dict = {'name': 'Bob',
'age': 12,
'children': None
}
person_json = json.dumps(person_dict)
print(person_json)

# write to file
person_dict = {"name": "Bob",
"languages": ["English", "French"],
"married": True,
"age": 32
}

with open(dir_path+'/../../../json/sample.json', 'w') as json_file:
  json.dump(person_dict, json_file)


person_string = '{"name": "Bob", "languages": "English", "numbers": [2, 1.6, null]}'

# Getting dictionary
person_dict = json.loads(person_string)

# Pretty Printing JSON string back
print(json.dumps(person_dict, indent = 4, sort_keys=True))