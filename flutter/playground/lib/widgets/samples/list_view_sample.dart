import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:myfirstapp/widgets/services/post_model.dart';
import 'package:myfirstapp/widgets/services/rest.dart';

class ListViewSample extends StatelessWidget {
  const ListViewSample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(5.0),
      child: FutureBuilder<List<PostModel>>(
          future: PostService().getPosts(),
          builder: (context, snapshot) {
            if (snapshot.hasError) {
              return _buildErrorText(snapshot, context);
            } else if (snapshot.hasData) {
              return _buildListViews(snapshot.data!);
            }
            return const CircularProgressIndicator();
          }),
    );
  }

  Text _buildErrorText(
      AsyncSnapshot<List<PostModel>?> snapshot, BuildContext context) {
    print(snapshot.error);
    return Text(
      '${snapshot.error}',
      style: TextStyle(
        color: Theme.of(context).colorScheme.error,
      ),
    );
  }

  Widget _buildListViews(List<PostModel> persons) {
    return PageView(
      scrollDirection: Axis.horizontal,
      children: [
        ListView(
          // physics: const NeverScrollableScrollPhysics(),
          children: persons
              .map((e) => _buildListTileFromPost(e, prefix: 'Default'))
              .toList(),
        ),
        ListView.separated(
          separatorBuilder: (context, index) => const Divider(),
          itemBuilder: (context, index) =>
              _buildListTileFromPost(persons[index], prefix: 'Separated'),
          itemCount: persons.length,
        ),
        ListView.builder(
          itemBuilder: (context, index) =>
              _buildListTileFromPost(persons[index], prefix: 'Builder'),
          itemCount: persons.length,
        ),
      ],
    );
  }

  Widget _buildListTileFromPost(PostModel post, {String prefix = 'Element'}) =>
      ListTile(
        contentPadding: const EdgeInsets.all(16),
        selected: post.id == 1,
        tileColor: post.id! % 2 == 0 ? Colors.teal.shade700 : Colors.teal,
        selectedTileColor: Colors.tealAccent,
        subtitle: Text(
          post.body!,
          maxLines: 2,
          overflow: TextOverflow.ellipsis,
        ),
        title: Text(
          '$prefix ${post.title}',
          maxLines: 1,
          overflow: TextOverflow.ellipsis,
        ),
        leading: Icon(Icons.adaptive.share_outlined),
        trailing: Icon(Icons.adaptive.more_outlined),
      );
}
