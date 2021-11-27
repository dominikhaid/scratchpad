import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:training/rest/post_model.dart';
import 'package:training/rest/post_service.dart';

class ListViewStatefullSample extends StatefulWidget {
  final int? selected;

  const ListViewStatefullSample({Key? key, this.selected}) : super(key: key);

  @override
  _ListViewStatefullSampleState createState() =>
      _ListViewStatefullSampleState();
}

class _ListViewStatefullSampleState extends State<ListViewStatefullSample> {
  late final Future<List<PostModel>> future;

  late int? selected = widget.selected;

  @override
  void initState() {
    super.initState();
    print('state init');
    future =
        PostService('https://jsonplaceholder.typicode.com/posts').getPosts();
  }

  @override
  void dispose() {
    super.dispose();
    print('disposing state');
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<List<PostModel>>(
      future: future,
      builder: (context, snapshot) {
        if (snapshot.hasError) {
          return _buildErrorText(snapshot, context);
        } else if (snapshot.hasData) {
          List<PostModel> dataProvider = snapshot.data!;

          return ListView.builder(
            itemBuilder: (context, index) =>
                _buildListTile(dataProvider[index]),
            itemCount: dataProvider.length,
          );
        }
        return const CircularProgressIndicator();
      },
    );
  }

  ListTile _buildListTile(PostModel post, {double contentPadding = 16}) {
    return ListTile(
      onTap: () {
        setState(() {
          selected = selected == post.id ? null : post.id;
        });
      },
      contentPadding: EdgeInsets.all(contentPadding),
      tileColor: post.id! % 2 == 0 ? Colors.teal : Colors.teal.shade700,
      selectedTileColor: Colors.tealAccent,
      selected: selected == post.id,
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
