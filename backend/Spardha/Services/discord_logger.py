import requests
import json
from decouple import config

def send_message(message):
    url = config("DISCORD_WEBHOOK_URL")
    data = {"content": message}
    headers = {"Content-Type": "application/json"}
    response = requests.post(url, data=json.dumps(data), headers=headers)
    if response.status_code != 204:
        print(f'Error sending message """{message}""" to discord!')
