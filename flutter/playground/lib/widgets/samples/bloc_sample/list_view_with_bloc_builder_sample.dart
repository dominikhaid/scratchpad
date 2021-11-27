import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:myfirstapp/widgets/samples/bloc_sample/post_bloc.dart';
import 'package:myfirstapp/widgets/services/post_model.dart';
import 'package:myfirstapp/widgets/services/rest.dart';

class ListViewWithBlocBuilderSample extends StatelessWidget {
  const ListViewWithBlocBuilderSample({Key? key}) : super(key: key);

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
            return BlocBuilder<PostBloc, PostState>(
              builder: (context, state) {
                final PostBloc postBloc = BlocProvider.of<PostBloc>(context);
                return _buildListViews(
                    snapshot.data!, state.selected, postBloc);
              },
            );
          }
          return const CircularProgressIndicator();
        },
      ),
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
      List<PostModel> persons, int selected, PostBloc postBloc) {
    return PageView(
      scrollDirection: Axis.horizontal,
      children: [
        ListView(
          // physics: const NeverScrollableScrollPhysics(),
          children: persons
              .map(
                (e) => _buildListTileFromPost(e,
                    prefix: 'Default',
                    isSelected: e.id == selected,
                    postBloc: postBloc),
              )
              .toList(),
        ),
        ListView.separated(
          separatorBuilder: (context, index) => const Divider(),
          itemBuilder: (context, index) => _buildListTileFromPost(
              persons[index],
              prefix: 'Separated',
              isSelected: persons[index].id == selected,
              postBloc: postBloc),
          itemCount: persons.length,
        ),
        ListView.builder(
          itemBuilder: (context, index) => _buildListTileFromPost(
              persons[index],
              prefix: 'Builder',
              isSelected: persons[index].id == selected,
              postBloc: postBloc),
          itemCount: persons.length,
        ),
      ],
    );
  }

  Widget _buildListTileFromPost(
    PostModel post, {
    String prefix = 'Element',
    bool isSelected = false,
    required PostBloc postBloc,
  }) =>
      ListTile(
        contentPadding: const EdgeInsets.all(16),
        selected: isSelected,
        onTap: () => postBloc.add(PostSetSelectedEvent(post.id!)),
        tileColor: post.id! % 2 == 0 ? Colors.teal.shade700 : Colors.teal,
        selectedTileColor: Colors.tealAccent,
        subtitle: Text(
          post.body!,
          maxLines: 1,
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
