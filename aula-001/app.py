from flask import Flask
from redis import Redis, RedisError
import os
import socket

# redis
redis = Redis(host="redis_db", db=0, socket_connect_timeout=2, socket_timeout=2)

# Flask
app = Flask(__name__)

@app.route("/")
def hello():
    html = "<h3>Olá Docker</h3>"
    return html
    
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)


