import sqlite3 as sq
# from threading import Lock

# lock= Lock()
#ip, id, category, name, process_status, port, port_status
class Database:

    def __init__(self):
        self.conn = sq.connect('component_informations.db')
        self.c = self.conn.cursor()
        try:
            self.c.execute("""CREATE TABLE COMPONENT_DETAILS (
                ip text,
                id text,
                category text,
                name text,
                process_status text,
                port text,
                port_status text,
                startTime text,
                endTime text,
                runninngDates text,
                uptime text
                )""")
            print("SERVER_DETAILS table created")

        except Exception as e:
            print(e)
            error = e
            
    def is_id_in_db(self, ip, id):
        self.c.execute("SELECT * FROM COMPONENT_DETAILS WHERE ip = :ip AND id = :id ", {'ip': ip,'id': id})
        if len(self.c.fetchall()) > 0:
            return True
        else:
            return False

    def insert_entry(self,ip, id, category, name, process_status, port, port_status,startTime,endTime,runninngDates,uptime):
        with self.conn:
                self.c.execute("INSERT INTO COMPONENT_DETAILS VALUES (:ip, :id, :category, :name, :process_status, :port, :port_status, :startTime, :endTime, :runninngDates, :uptime)", {'ip': ip, 'id': id,  'category': category, 'name': name, 'process_status': process_status,'port': port,  'port_status': port_status,'startTime': startTime,'endTime': endTime,'runninngDates': runninngDates, 'uptime':uptime})

    def update_status(self, ip, id, category, name, process_status, port, port_status,startTime,endTime,runninngDates,uptime):
        with self.conn:
            self.c.execute("""UPDATE COMPONENT_DETAILS SET category=:category, name=:name, process_status=:process_status, port=:port, port_status=:port_status, startTime=:startTime, endTime=:endTime, runninngDates=:runninngDates, uptime=:uptime  WHERE ip = :ip AND id = :id""",{'ip': ip, 'id': id,  'category': category, 'name': name, 'process_status': process_status,'port': port,  'port_status': port_status,'startTime': startTime,'endTime': endTime,'runninngDates': runninngDates, 'uptime':uptime})

    def get_table(self, table):
        self.c.execute(f"SELECT * FROM {table} ")
        output = self.c.fetchall()
        return output

    def get_sort_by_name(self):
        self.c.execute("""SELECT * FROM COMPONENT_DETAILS ORDER BY name ASC""")
        output =  self.c.fetchall()
        return output
        
    
    def delete_table(self, table):
        self.c.execute(f"""DROP TABLE {table}""")

    
        

# db = Database()
# db.insert_server('172.20.151.10', 'mubasher', 'AWS_NV', 'statusal,international','Analyser,Inlt,Asia')
# print(db.get_table('COMPONENT_DETAILS'))
# print(db.get_sort_by_id())
# db.get_sort_by_id()
# db.delete_table('SERVER_DETAILS')
# print(db.is_id_in_db('10.148.148.152'))



