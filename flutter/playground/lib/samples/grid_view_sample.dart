import 'dart:math';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:training/rest/post_model.dart';
import 'package:training/rest/post_service.dart';

class GridViewSample extends StatelessWidget {
  const GridViewSample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: FutureBuilder<List<PostModel>>(
        future: PostService('https://jsonplaceholder.typicode.com/posts')
            .getPosts(),
        builder: (context, snapshot) {
          if (snapshot.hasError) {
            return _buildErrorText(snapshot, context);
          } else if (snapshot.hasData) {
            return GridView.builder(
              gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2,
              ),
              itemBuilder: (context, index) =>
                  _buildListTile(snapshot.data![index]),
              itemCount: snapshot.data?.length ?? 0,
            );
          }
          return const CircularProgressIndicator();
        },
      ),
    );
  }

  Container _buildListTile(PostModel post, {double contentPadding = 16}) {
    List<Color> colors = [Colors.red, Colors.green, Colors.teal, Colors.yellow];
    return Container(
      color: colors[Random().nextInt(3)],
      child: Text(
        post.title!,
        maxLines: 1,
        overflow: TextOverflow.ellipsis,
      ),
    );
  }

  Text _buildErrorText(
      AsyncSnapshot<List<PostModel>> snapshot, BuildContext context) {
    return Text(
      snapshot.error.toString(),
      style: TextStyle(color: Theme.of(context).colorScheme.error),
    );
  }
}
