import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:myfirstapp/widgets/samples/cubit_sample/post_cubit.dart';

class BlocBuilder4CubitSample extends StatelessWidget {
  const BlocBuilder4CubitSample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<PostCubit, PostState>(
      builder: (context, state) {
        final PostCubit postBloc = BlocProvider.of<PostCubit>(context);
        return Column(
          children: [
            Text(state.selected.toString()),
            TextButton(
              onPressed: () {
                // print(postBloc);
                postBloc.next();
              },
              child: const Text('cubit increment'),
            ),
            TextButton(
              onPressed: state.selected > 0 ? () => postBloc.prev() : null,
              child: const Text('cubit decrement '),
            ),
            TextButton(
              onPressed: () {
                print(postBloc);
                postBloc.setSelected(111);
              },
              child: const Text('cubit  -> id 111'),
            ),
          ],
        );
      },
    );
  }
}
