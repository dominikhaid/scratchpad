import 'package:flutter/material.dart';
import 'package:myfirstapp/widgets/services/post_model.dart';
import 'package:myfirstapp/widgets/services/rest.dart';

class FutureSampleWithPosts extends StatelessWidget {
  const FutureSampleWithPosts({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<List<PostModel>>(
      future: PostService().getPosts(),
      builder: (context, snapshot) {
        if (snapshot.hasError) {
          return Text('ups .... ${snapshot.error}',
              style: TextStyle(
                color: Theme.of(context).colorScheme.error,
              ));
        } else if (snapshot.hasData) {
          return buildListViewWithBuilder(snapshot.data!);
          // return buildListView();
          // return buildListViewWithSeperator();
          // return Text(snapshot.data!.title!);
        }
        return const CircularProgressIndicator();
      },
    );
  }

  ListView buildListView() {
    return ListView(
      children: List.generate(
          5, (index) => buildListTileOld(index, usePadding: true)),
    );
  }

  ListView buildListViewWithBuilder(List<PostModel> posts) {
    return ListView.builder(
      itemBuilder: (context, index) => buildListTile(
        index,
        usePadding: true,
        post: posts[index],
      ),
      itemCount: posts.length,
    );
  }

  ListView buildListViewWithSeperator() {
    return ListView.separated(
      separatorBuilder: (context, index) => Divider(),
      itemBuilder: (context, index) =>
          buildListTileOld(index, usePadding: false),
      itemCount: 5,
    );
  }

  ListTile buildListTile(int index,
      {bool? usePadding = true, required PostModel post}) {
    return ListTile(
      contentPadding: usePadding == true
          ? EdgeInsets.all(16)
          : EdgeInsets.all(0), // besser touchbar
      tileColor: index % 2 == 0 ? Colors.teal : Colors.teal.shade700,
      selected: index == 0,
      selectedTileColor: Colors.tealAccent,
      title: Text(post.title!),
      subtitle: Text(post.body!),
      leading: Icon(Icons.adaptive.share_outlined),
      trailing: Icon(Icons.adaptive.more_outlined),
    );
  }

  ListTile buildListTileOld(int index, {bool? usePadding = true}) {
    return ListTile(
      contentPadding: usePadding == true
          ? EdgeInsets.all(16)
          : EdgeInsets.all(0), // besser touchbar
      tileColor: index % 2 == 0 ? Colors.teal : Colors.teal.shade700,
      selected: index == 0,
      selectedTileColor: Colors.tealAccent,
      title: Text('$index'),
      subtitle: Text('$index'),
      leading: Icon(Icons.adaptive.share_outlined),
      trailing: Icon(Icons.adaptive.more_outlined),
    );
  }
}
