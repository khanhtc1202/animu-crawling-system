import os
import logging

# setting root dir
_dir_path = os.path.dirname(os.path.realpath(__file__))

# config logging
logging.basicConfig(filename = _dir_path + '/../logs/run.log',level=logging.WARNING)

def local():
    return {
        "root_path": _dir_path + '/',
        "resource_path": _dir_path + '/../resources/',
        "script_path": _dir_path + '/../scripts/',
        "logging": logging
    }