import asyncio
import websockets
from time import sleep
import random
import json
import socket
from dbHandler import Database

db = Database()

hostname = socket.gethostname()
local_ip = socket.gethostbyname(hostname)

def json_data():
    output = db.get_sort_by_name()
    data_set_array = []
    for i in output:
        obj = {'ip': i[0], 'id': i[1],  'category': i[2], 'name': i[3], 'process_status': i[4],'port': i[5],  'port_status': i[6],'startTime': i[7],'endTime': i[8],'runninngDates': i[9], 'uptime':i[10]}
        
        data_set_array.append(obj)
    data_set = {'result': data_set_array}
    json_dump = json.dumps(data_set)

    return json_dump


async def handle_websocket_connection(websocket, path):
    while True:
        data = json_data()
        try:
            if websocket.open:
                await websocket.send(data)
                print('data has been sent')
        except websockets.exceptions.ConnectionClosedOK as e:
            if e.code == 1001:
                print("WebSocket connection closed with code 1001: going away")
            else:
                print(
                    f'WebSocket connection closed with code {e.code}: {e.reason}')
        
        await asyncio.sleep(2)


async def main():
    # Create the WebSocket server
    async with websockets.serve(handle_websocket_connection, local_ip, 8000):
        print("WebSocket server listening on localhost:8000")

        # Keep the server running indefinitely
        await asyncio.Future()

if __name__ == "__main__":
    asyncio.run(main())
