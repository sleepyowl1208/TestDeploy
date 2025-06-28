from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

# CORS config: Allow everything (for development only!)
CORS(app, resources={r"/*": {"origins": "*"}},
     supports_credentials=True,
     allow_headers=["Content-Type", "Authorization"],
     methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"])


@app.route('/api/hello', methods=["GET"])
def hello():
    return jsonify(message="Hello from Flask!")


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)
