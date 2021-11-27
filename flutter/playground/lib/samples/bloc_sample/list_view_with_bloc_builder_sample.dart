import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:training/rest/post_model.dart';
import 'package:training/rest/post_service.dart';
import 'package:training/samples/bloc_sample/post_bloc.dart';

class ListViewWithBlocBuilderSample extends StatelessWidget {
  const ListViewWithBlocBuilderSample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<List<PostModel>>(
      future:
          PostService('https://jsonplaceholder.typicode.com/posts').getPosts(),
      builder: (context, snapshot) {
        if (snapshot.hasError) {
          return _buildErrorText(snapshot, context);
        } else if (snapshot.hasData) {
          return BlocBuilder<PostBloc, PostState>(
            builder: (context, state) {
              final PostBloc postBloc = BlocProvider.of<PostBloc>(context);
              return _buildListViews(snapshot.data!, state.selected, postBloc);
            },
          );
        }
        return const CircularProgressIndicator();
      },
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

  Widget _buildListViews(
      List<PostModel> posts, int selected, PostBloc postBloc) {
    return ListView.builder(
      itemBuilder: (context, index) => _buildListTileFromPost(posts[index],
          isSelected: posts[index].id == selected, postBloc: postBloc),
      itemCount: posts.length,
    );
  }

  Widget _buildListTileFromPost(
    PostModel post, {
    bool isSelected = false,
    required PostBloc postBloc,
  }) =>
      ListTile(
        contentPadding: const EdgeInsets.all(16),
        selected: isSelected,
        onTap: () => isSelected
            ? postBloc.add(PostSetEvent(0))
            : postBloc.add(PostSetEvent(post.id!)),
        tileColor: post.id! % 2 == 0 ? Colors.teal.shade700 : Colors.teal,
        selectedTileColor: Colors.tealAccent,
        subtitle: Text(
          post.body!,
          maxLines: 2,
          overflow: TextOverflow.ellipsis,
        ),
        title: Text(
          post.title!,
          maxLines: 1,
          overflow: TextOverflow.ellipsis,
        ),
        leading: Icon(Icons.adaptive.share_outlined),
        // trailing: Icon(Icons.adaptive.more_outlined),
      );
}
