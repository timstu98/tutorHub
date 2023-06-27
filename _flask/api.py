from flask import Blueprint, request, abort, jsonify

api = Blueprint('api', __name__)

@api.route('/student')
def function():
    return 'student Name cool'