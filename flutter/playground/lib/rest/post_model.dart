import 'dart:convert';

import 'dart:math';

/// userId : 1
/// id : 5
/// title : "nesciunt quas odio"
/// body : "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"

class PostModel {
  PostModel({
    int? userId,
    int? id,
    String? title,
    String? body,
  }) {
    _userId = userId;
    _id = id;
    _title = title;
    _body = body;
  }

  PostModel.fromJson(dynamic json) {
    _userId = json['userId'];
    _id = json['id'];
    _title = json['title'];
    _body = json['body'];
  }
  int? _userId;
  int? _id;
  String? _title;
  String? _body;

  int? get userId => _userId;
  int? get id => _id;
  String? get title => _title;
  String? get body => _body;

  Map<String, dynamic> toJson() {
    final map = <String, dynamic>{};
    map['userId'] = _userId;
    map['id'] = _id;
    map['title'] = _title;
    map['body'] = _body;
    return map;
  }

  String toJsonString([bool ignoreID = false]) {
    final Map map = toJson();
    if (ignoreID) {
      map.remove('id');
    }
    return jsonEncode(map);
  }

  @override
  String toString() {
    return jsonEncode(toJson()
      // ..remove('body')
      ..updateAll((String key, dynamic value) {
        if (value is String) {
          int max = 12;
          max = min(
              max, value.length); // if string.length < max use string.length
          return '${value.substring(0, max)}...';
        }
        return value;
      }));
  }
}
