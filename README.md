
# NodeJS Student Management




## POST Request

```bash
http://localhost:5000/api/students

{
  "studentId": 6,
  "name": "Daniel Wilson",
  "age": 17,
  "grade": 4,
}
```
    
  Response 

  ```bash
{
    "studentId": 6,
    "name": "Daniel Wilson",
    "age": 17,
    "grade": 4,
    "_id": "673094443ed738cb5fa0f124",
    "__v": 0
}
```




## GET Request (All)
 
```bash
http://localhost:5000/api/students
```
    
  Response 

  ```bash
[
    {
        "_id": "673092813ed738cb5fa0f115",
        "studentId": 1,
        "name": "John Smith",
        "age": 17,
        "grade": 12,
        "__v": 0
    },
    {
        "_id": "6730928a3ed738cb5fa0f118",
        "studentId": 2,
        "name": "Emily Johnson",
        "age": 15,
        "grade": 10,
        "__v": 0
    },
    {
        "_id": "673092923ed738cb5fa0f11b",
        "studentId": 3,
        "name": "Michael Brown",
        "age": 16,
        "grade": 11,
        "__v": 0
    },
    {
        "_id": "6730929a3ed738cb5fa0f11e",
        "studentId": 4,
        "name": "Olivia Davis",
        "age": 14,
        "grade": 9,
        "__v": 0
    },
    {
        "_id": "673092a73ed738cb5fa0f121",
        "studentId": 5,
        "name": "Daniel Wilson",
        "age": 17,
        "grade": 4,
        "__v": 0
    },
    {
        "_id": "673094443ed738cb5fa0f124",
        "studentId": 6,
        "name": "Daniel Wilson",
        "age": 17,
        "grade": 4,
        "__v": 0
    }
]
```

## GET Request (by studentId)
 
```bash
http://localhost:5000/api/students/6
```
    
  Response 

  ```bash
{
    "_id": "673094443ed738cb5fa0f124",
    "studentId": 6,
    "name": "Daniel Wilson",
    "age": 17,
    "grade": 4,
    "__v": 0
}
```


## PUT Request
 
```bash
http://localhost:5000/api/students/6

{
  "name": "Jane Doe",
  "age": 16,
  "grade": 11
}
```
    
  Response 

  ```bash
{
    "_id": "673094443ed738cb5fa0f124",
    "studentId": 6,
    "name": "Jane Doe",
    "age": 16,
    "grade": 11,
    "__v": 0
}
```


## DELETE Request
 
```bash
http://localhost:5000/api/students/6
```
    
  Response 

  ```bash
{
    "message": "Student deleted successfully"
}
```