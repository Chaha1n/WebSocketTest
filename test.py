from websocket_server import WebsocketServer
from datetime import datetime


def new_client(client, server):
    server.send_message_to_all("0")


def received(client, server, message):
    cnt = int(message)
    if(cnt == 2):
        cnt = 0
    else:
        cnt += 1
    server.send_message_to_all(str(cnt))


server = WebsocketServer(9999, host="localhost")
server.set_fn_new_client(new_client)
server.set_fn_message_received(received)
server.run_forever()
