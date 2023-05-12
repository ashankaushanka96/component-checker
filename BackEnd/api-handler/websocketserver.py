#!/usr/bin/env python

import asyncio
import websockets
import json

from dbHandler import Database

db = Database()

async def receive_data(websocket):
    async for message in websocket:
        data = json.loads(message)
        ip = data['ip']
        id = data['id']
        category = data['category']
        name = data['name']
        process_status = data['process_status']
        port = data['port']
        port_status = data['port_status']
        startTime = data['startTime']
        endTime = data['endTime']
        runninngDates = data['runninngDates']
        uptime = data['uptime']
        print(f"id = {id}, process_status = {process_status} port_status = {port_status}")
        if db.is_id_in_db(ip, id):
            db.update_status(ip, id, category, name, process_status, port, port_status,startTime,endTime,runninngDates,uptime)
            print('db.updated')
        else:
            db.insert_entry(ip, id, category, name, process_status, port, port_status,startTime,endTime,runninngDates,uptime)

async def main():
    async with websockets.serve(receive_data, '172.20.162.55', 8765):
        await asyncio.Future()  # run forever

asyncio.run(main())