import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:myfirstapp/widgets/services/post_model.dart';
import 'package:myfirstapp/widgets/services/rest.dart';

class FutureBuilderSample extends StatelessWidget {
  const FutureBuilderSample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Center(
        child: FutureBuilder<PostModel>(
            future: PostService().getPostById(1),
            builder: (context, snapshot) {
              if (snapshot.hasError) {
                return _buildErrorText(snapshot, context);
              } else if (snapshot.hasData) {
                return Text(snapshot.data!.title!);
              }
              return const CircularProgressIndicator();
            }),
      ),
    );
  }

  Text _buildErrorText(
      AsyncSnapshot<PostModel?> snapshot, BuildContext context) {
    print(snapshot.error);
    return Text(
      '${snapshot.error}',
      style: TextStyle(
        color: Theme.of(context).colorScheme.error,
      ),
    );
  }
}
