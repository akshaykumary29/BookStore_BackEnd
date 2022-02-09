"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = exports.login = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _user = _interopRequireDefault(require("../models/user.model"));

//create new user
var register = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
    var findUser, len, hashedPassword, newUser, saveData, response, _response;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _user["default"].find({
              email: body.email
            });

          case 2:
            findUser = _context.sent;
            len = findUser.length;

            if (!(len == 0)) {
              _context.next = 16;
              break;
            }

            _context.next = 7;
            return _bcrypt["default"].hash(body.password, 8);

          case 7:
            hashedPassword = _context.sent;
            newUser = new _user["default"]({
              firstName: body.firstName,
              lastName: body.lastName,
              email: body.email,
              password: hashedPassword
            });
            _context.next = 11;
            return _user["default"].create(newUser);

          case 11:
            saveData = _context.sent;
            // return saveData;
            response = {
              status: 201,
              success: true,
              message: 'user registration successfull',
              data: saveData
            };
            return _context.abrupt("return", response);

          case 16:
            _response = {
              status: 409,
              success: false,
              message: 'user already exists',
              data: body
            };
            return _context.abrupt("return", _response);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function register(_x) {
    return _ref.apply(this, arguments);
  };
}(); // login user


exports.register = register;

var login = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var response, findUser;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            response = {
              success: true,
              message: '',
              data: ''
            };
            _context2.next = 3;
            return _user["default"].find({
              email: body.email
            });

          case 3:
            findUser = _context2.sent;
            console.log("user details ".concat(findUser));
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              if (findUser.length > 0) {
                _bcrypt["default"].compare(body.password, findUser[0].password).then(function (result) {
                  if (result) {
                    var token = _jsonwebtoken["default"].sign({
                      email: findUser[0].email,
                      userId: findUser[0].id
                    }, 'your-secret-key');

                    var obj = {
                      firstName: findUser[0].firstName,
                      lastName: findUser[0].lastName,
                      userId: findUser[0]._id,
                      email: findUser[0].email,
                      token: token
                    };
                    response.success = true, response.message = 'Login Successfull';
                    response.data = obj, response.status = 200;
                    resolve(response);
                  } else {
                    response.success = false, response.message = 'Incorrect Password';
                    response.data = '', response.status = 401;
                    reject(response);
                  }
                })["catch"](function (err) {
                  response.success = false, response.message = 'Error In Checking Password';
                  response.data = err, response.status = 500;
                  reject(response);
                });
              } else {
                response.success = false, response.message = 'User Not Found';
                response.data = '', response.status = 404;
                reject(response);
              }
            }));

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function login(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.login = login;