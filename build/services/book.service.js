"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newBook = exports.getBooks = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _book = _interopRequireDefault(require("../models/book.model"));

// create new book
var newBook = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
    var response, foundBook, _newBook, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            response = {
              status: 201,
              success: true,
              message: '',
              data: ''
            };
            _context.next = 3;
            return _book["default"].findOne({
              bookName: body.bookName
            });

          case 3:
            foundBook = _context.sent;

            if (foundBook) {
              _context.next = 16;
              break;
            }

            _newBook = new _book["default"]({
              bookName: body.bookName,
              author: body.author,
              description: body.description,
              quantity: body.quantity,
              price: body.price,
              wishlist: body.wishlist
            });
            _context.next = 8;
            return _book["default"].create(_newBook);

          case 8:
            data = _context.sent;
            response.status = 201;
            response.success = true;
            response.message = 'Book Added Successful';
            response.data = data;
            return _context.abrupt("return", response);

          case 16:
            response.status = 200;
            response.success = false;
            response.message = 'Book is Alreary Exists';
            response.data = body;
            return _context.abrupt("return", response);

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function newBook(_x) {
    return _ref.apply(this, arguments);
  };
}(); // get all books


exports.newBook = newBook;

var getBooks = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var data, response;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _book["default"].find();

          case 2:
            data = _context2.sent;
            response = {
              status: 201,
              success: true,
              message: '',
              data: ''
            };
            response.status = 200;
            response.success = true;
            response.message = 'Get All Books';
            response.data = data;
            return _context2.abrupt("return", response);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getBooks() {
    return _ref2.apply(this, arguments);
  };
}();

exports.getBooks = getBooks;