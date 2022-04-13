import sqlite3
class DBclass:
    def __init__(self, path):
        self.path = path
        self.db = sqlite3.connect(self.path)
        self.cur = self.db.cursor()

    def execute(self, query):
        self.cur.execute(query)
        return [i[0] for i in self.cur.description], self.cur.fetchall()
db = DBclass('chinook.db')

query = 'SELECT * from CUSTOMER LIMIT 5'
cols, res = db.execute(query)
print(cols)
for i in res:
    print(i)