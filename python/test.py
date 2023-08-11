from pychatgpt import Chat, Options

options = Options()

# [New] Pass Moderation. https://github.com/rawandahmad698/PyChatGPT/discussions/103
# options.pass_moderation = False

# [New] Enable, Disable logs
options.log = True

# Track conversationpy
options.track = True 

# Use a proxy
options.proxies = 'http://user-god-region-us-st-oregon-sessid-usxjabl4xewvre7k2b-sesstime-1:god258369@pr.lunaproxy67.com:12233'

# Optionally, you can pass a file path to save the conversation
# They're created if they don't exist

# options.chat_log = "chat_log.txt"
# options.id_log = "id_log.txt"

# Create a Chat object
chat = Chat(email="FaviolaPinter@mail.com", password="Z7q0!J96rFK?_u-k", options=options)
answer = chat.ask("How are you?")
print(answer)