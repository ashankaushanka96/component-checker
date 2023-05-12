import sqlite3 as sq

class Database:

    def __init__(self):
        self.conn = sq.connect('component_informations.db')
        self.c = self.conn.cursor()
            
    def deleteEntry(self, ip):
        self.c.execute("SELECT * FROM COMPONENT_DETAILS WHERE ip = :ip ORDER BY id ASC", {'ip': ip})
        output =  self.c.fetchall()
        for i in output:
            print(i)
        if len(output) > 0 :
            response = input("Do you want to delete these? (y/n) : ")
            if response == 'y':
                self.c.execute("DELETE FROM COMPONENT_DETAILS WHERE ip = :ip", {'ip': ip})
                self.conn.commit()
                print(f"All the entries for {ip} are deleted. Please restart the relevant component watcher to fetch data again")
            else:
                print("Nothing deleted")
        else:
            print("No any matches")
        self.conn.close()
    

    
        

db = Database()
ip = input("Enter the IP : ")

db.deleteEntry(ip)




