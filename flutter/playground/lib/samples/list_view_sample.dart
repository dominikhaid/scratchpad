import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:training/rest/post_model.dart';
import 'package:training/rest/post_service.dart';

class ListViewSample extends StatelessWidget {
  const ListViewSample({Key? key}) : super(key: key);

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
            // return ListView.separated(
            //   separatorBuilder: (context, index) => const Divider(),
            //   itemBuilder: (context, index) =>
            //       _buildListTile(snapshot.data![index], contentPadding: 0 ),
            //   itemCount: snapshot.data?.length ?? 0,
            // );
/*

            List<PostModel> dataProvider = snapshot.data!
                .where((element) => element.id! % 2 == 0)
                .toList()
              ..sort((a, b) => a.title!.compareTo(b.title!));
*/

            List<PostModel> dataProvider = snapshot.data!;

            return ListView.builder(
              itemBuilder: (context, index) =>
                  _buildListTile(dataProvider[index]),
              // _buildListTile(snapshot.data![index]),
              itemCount: dataProvider.length,
              // itemCount: snapshot.data?.length ?? 0,
            );
          }
          return const CircularProgressIndicator();
        },
      ),
    );
  }

  ListTile _buildListTile(PostModel post, {double contentPadding = 16}) {
    return ListTile(
      onTap: post.id == 2 ? null : () {},
      contentPadding: EdgeInsets.all(contentPadding),
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

  Text _buildErrorText(
      AsyncSnapshot<List<PostModel>> snapshot, BuildContext context) {
    return Text(
      snapshot.error.toString(),
      style: TextStyle(color: Theme.of(context).colorScheme.error),
    );
  }
}
