import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:myfirstapp/widgets/services/post_model.dart';
import 'package:myfirstapp/widgets/services/rest.dart';

class SliverViewSample extends StatelessWidget {
  const SliverViewSample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return CustomScrollView(
      slivers: [
        const SliverAppBar(
          title: Text('Slivers Example'),
          backgroundColor: Colors.deepOrange,
          elevation: 10,
          expandedHeight: 200,
          pinned: true,
        ),
        SliverPadding(
          padding: EdgeInsets.symmetric(vertical: 0),
          sliver: SliverGrid(
            delegate: SliverChildBuilderDelegate(
                (context, index) => _buildFromIndex(index),
                childCount: 80),
            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2, mainAxisSpacing: 10, crossAxisSpacing: 10),
          ),
        ),
        SliverPadding(
          padding: EdgeInsets.symmetric(vertical: 10),
          sliver: SliverList(
            delegate: SliverChildBuilderDelegate(
                (context, index) => Container(
                      height: 10,
                      color: Colors.red,
                      margin: EdgeInsets.only(top: 5, bottom: 5),
                    ),
                childCount: 300),
          ),
        ),
        SliverGrid(
          delegate: SliverChildBuilderDelegate(
              (context, index) => _buildFromIndex(index),
              childCount: 50),
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 3, mainAxisSpacing: 10, crossAxisSpacing: 10),
        ),
        SliverPadding(
          padding: EdgeInsets.symmetric(vertical: 10),
          sliver: SliverToBoxAdapter(
            child: Container(
              color: Colors.deepOrange,
              height: 50,
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildFromColor(Color color) {
    return Container(
      color: color,
    );
  }

  Widget _buildFromIndex(int index) {
    switch (index % 8) {
      case 0:
        return _buildFromColor(Colors.deepPurple);
      case 1:
        return _buildFromColor(Colors.amber);
      case 2:
        return _buildFromColor(Colors.blue);
      case 3:
        return _buildFromColor(Colors.red);
      case 4:
        return _buildFromColor(Colors.green);
      case 5:
        return _buildFromColor(Colors.teal);
      case 6:
        return _buildFromColor(Colors.cyan);
      case 7:
        return _buildFromColor(Colors.orange);
    }
    throw Exception();
  }
}
