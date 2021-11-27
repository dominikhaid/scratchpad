import 'package:flutter/material.dart';
import '../rest/post_model.dart';
import '../rest/post_service.dart';

class FutureSample extends StatelessWidget {
  const FutureSample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: FutureBuilder<List<PostModel>>(
        future: PostService("https://jsonplaceholder.typicode.com/posts")
            .getPosts(),
        builder: (context, snapshot) {
          if (snapshot.hasError) {
            return buildErrorText(snapshot, context);
          } else if (snapshot.hasData) {
            return ListView.separated(
              itemBuilder: (context, index) =>
                  _buildListTile(snapshot.data![index]),
              separatorBuilder: (context, index) => const Divider(),
              itemCount: snapshot.data?.length ?? 0,
            );
            ListView.builder(
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

  ListTile _buildListTile(PostModel post) {
    return ListTile(
      contentPadding: const EdgeInsets.all(16),
      tileColor: post.id! % 2 == 0 ? Colors.teal : Colors.teal.shade700,
      selectedTileColor: Colors.tealAccent,
      selected: post.id == 2,
      leading: Icon(Icons.adaptive.share_outlined),
      title: Text(
        post.title!,
        maxLines: 1,
        overflow: TextOverflow.ellipsis,
      ),
      subtitle: Text(
        post.body!,
        maxLines: 2,
        overflow: TextOverflow.ellipsis,
      ),
    );
  }

  Text buildErrorText(
      AsyncSnapshot<List<PostModel>> snapshot, BuildContext context) {
    return Text(
      snapshot.error.toString(),
      style: TextStyle(color: Theme.of(context).colorScheme.error),
    );
  }
}
