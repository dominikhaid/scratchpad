import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:myfirstapp/widgets/samples/bloc_sample/post_bloc.dart';

class BlocBuilderSample extends StatelessWidget {
  const BlocBuilderSample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<PostBloc, PostState>(
      builder: (context, state) {
        final PostBloc postBloc = BlocProvider.of<PostBloc>(context);
        return Column(
          children: [
            Text(state.selected.toString()),
            TextButton(
              onPressed: () {
                // print(postBloc);
                postBloc.add(PostNext());
              },
              child: const Text('increment'),
            ),
            TextButton(
              onPressed:
                  state.selected > 0 ? () => postBloc.add(PostPrev()) : null,
              child: const Text('decrement '),
            ),
            TextButton(
              onPressed: () {
                print(postBloc);
                postBloc.add(PostSetSelectedEvent(111));
              },
              child: const Text('show news with id 111'),
            ),
          ],
        );
      },
    );
  }
}
