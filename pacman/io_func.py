import json

DUMMY_FEEDS_JSON = {
    "title": "FEED LIST",
    "data": []
}


def load_json_data(file_path):
    with open(file_path, 'r') as fin:
        data = json.load(fin)
    return data

def write_data(file_path, json_data=DUMMY_FEEDS_JSON):
    with open(file_path, 'w') as fout:
        fout.write(json.dumps(json_data))
