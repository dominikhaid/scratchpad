import 'dart:convert';

import 'package:http/http.dart' as http;

import 'post_model.dart';

class PostService {
  final String url;

  PostService(this.url);

  Future<PostModel> createPost(PostModel post) async {
    String? errMsg;
    try {
      final response = await http.post(
        Uri.parse(url),
        body: post.toJsonString(true),
        headers: {'Content-type': 'application/json; charset=UTF-8'},
      );
      if (response.statusCode == 201) {
        return PostModel.fromJson(jsonDecode(response.body));
      } else {
        errMsg = 'Failed to create Post with body:= ${post.toJsonString(true)}';
      }
    } catch (err) {
      errMsg =
          'Failed to create Post with body:= ${post.toJsonString(true)} - because -> $err ';
    }

    throw Exception(errMsg);
  }

  Future<List<PostModel>> getPosts() async {
    String? errMsg;
    try {
      final response = await http.get(Uri.parse(url));
      if (response.statusCode == 200) {
        return (jsonDecode(response.body) as List<dynamic>)
            .map((post) => PostModel.fromJson(post))
            .toList();
      } else {
        errMsg = 'Failed to load Posts';
      }
    } catch (err) {
      errMsg = 'Failed to load Posts because -> $err ';
    }
    throw Exception(errMsg);
  }

  Future<PostModel> getPostById(int id) async {
    String? errMsg;
    try {
      final http.Response respose = await http.get(
        Uri.parse('$url/$id'),
      ); //https://jsonplaceholder.typicode.com/posts/5

      if (respose.statusCode == 200) {
        return PostModel.fromJson(jsonDecode(respose.body));
      } else {
        errMsg = 'Could not load Post with ID:= $id';
      }
    } catch (err) {
      errMsg = 'Could not load Post with ID:= $id because -> $err';
    }

    throw Exception(errMsg);
  }
}
