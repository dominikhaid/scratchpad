import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:training/rest/post_model.dart';
import 'package:training/rest/post_service.dart';

class FutureBuilderSample extends StatelessWidget {
  const FutureBuilderSample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: FutureBuilder<PostModel>(
        future: PostService('https://jsonplaceholder.typicode.com/posts')
            .getPostById(100),
        builder: (context, snapshot) {
          if (snapshot.hasError) {
            return Text(
              snapshot.error.toString(),
              style: TextStyle(color: Theme.of(context).colorScheme.error),
            );
          } else if (snapshot.hasData) {
            return Text(
              snapshot.data?.title ?? 'no title received',
            );
          }
          return const CircularProgressIndicator();
        },
      ),
    );
  }
}
