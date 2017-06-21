C:
cd Program Files\MongoDB\Server\3.4\bin
mongo.exe --eval "use tododb"
mongo.exe tododb --eval "db.tasks.insertMany([{name: 'Practice yoga', created_date: '2017-06-21T21:46:30', status: ['pending']}, {name: 'Eat breakfast', created_date: '2017-06-22T08:46:30', status: ['ongoing']}]);"
exit