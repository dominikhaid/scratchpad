import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:training/samples/bloc_sample/post_bloc.dart';

class UseBlocSample extends StatelessWidget {
  const UseBlocSample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    PostBloc bloc = BlocProvider.of<PostBloc>(context);
    return BlocBuilder<PostBloc, PostState>(
      builder: (context, state) => Column(
        children: [
          Text('selected := ${state.selected}'),
          TextButton(
            onPressed: () {
              bloc.add(PostNextEvent());
            },
            child: const Text('next'),
          ),
          TextButton(
            onPressed: state.selected > 1
                ? () {
                    bloc.add(PostPrevEvent());
                  }
                : null,
            child: const Text('prev'),
          ),
          TextButton(
            onPressed: () {
              bloc.add(PostSetEvent(22));
            },
            child: const Text('set to 22'),
          ),
        ],
      ),
    );
  }
}
