# WebSocketTest
WebSocket Sample Program

## How to use  
test.pyがサーバ、client.htmlがクライアント  
サーバーに接続があるとサーバーは0を送信する、  
クライアントは受け取ったメッセージ(0)を3秒待って送り返す。  
サーバーはメッセージを受け取ったら、1足して送り返す、ただし送られてきた値が2だった場合、0を返す  
つまり、0~2が３秒ごとに飛び交う  
また、クライアントはその数字によって画面を変化させる。  
