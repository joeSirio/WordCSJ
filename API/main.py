import json
import os
from datetime import datetime
from flask import Flask, jsonify, redirect, url_for, request, render_template
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin
from flask_restful import Api
from tinydb import TinyDB, Query

app = Flask(__name__, static_folder='./build', static_url_path='/')
api = Api(app)
CORS(app)
db = TinyDB('db.json')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False, port=int(os.environ.get("PORT", 5000)))

@app.route('/')
def index():
    get_word_list_data()
    return ""#app.send_static_file('index.html')

@app.errorhandler(404)
def not_found(e):
    return "" #app.send_static_file('index.html')

@app.route('/word_list', methods = ['GET'])
@cross_origin(supports_credentials=True)
def get_word_list_data():
    print("***********************************")
    print("***********************************")
    print("***********************************")
    
    db_data = db.all()
    print(db_data)

    print("***********************************")
    print("***********************************")
    print("***********************************")
    return db_data

@app.route('/word_list_filter', methods = ['GET'])
@cross_origin(supports_credentials=True)
def filter_data():#column, filter_includes):
    db_data = db.all()
    print(db_data)
    column = request.args.get('column', '')
    filter_includes = request.args.get('filter_includes', '')
    print("***********************************")
    print("***********************************")
    print("***********************************")
    print(column)
    print(filter_includes)
    test = ""
    Word = Query()
    print(Word)
    print(db.search(Query()["word"]== "Cat"))
    print(db.search(Query().word == "Cat"))
    # db.search(where('field') == 'value')
    print(db.search(Query()["category"].any("Places")))
    print(db.search(Query().category.any("Places")))
    
    print(db.search(Query().gameTypeAndDifficulty["difficulty"].any("Easy")))
    # print(db.search(Word["game"].any("Easy")))
    if column == "gameType" or column == "difficulty":
        test = db.search(Word("gameType")[column].any(filter_includes))

    elif column == "category":
        test = db.search(Word.groups.any(filter_includes))
        # db.search(where(column) == filter_includes)
    else:
        test = db.search(Word.groups.any(['admin', 'sudo']))
        # db.search(where(column) == filter_includes)

    print(test)
    print("***********************************")
    print("***********************************")
    print("***********************************")
    return test

@app.route('/add_word', methods = ['GET', 'POST'])
@cross_origin()
def add_word():
    print("Adding Word")
    data = request.get_json()
    print(data)
    db.insert(data)
    return data

@app.route('update_word', methods = ['POST'])
@cross_origin()
def update_word():
    Word = Query()
    print("Updating word")
    data = request.get_json()
    print(data)
    db.update({"gameTypeAndDifficulty": data.gameTypeAndDifficulty, "category": data.category}, Word.word == data.word)
    return data