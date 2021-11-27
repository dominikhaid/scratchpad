import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:training/samples/column_sample.dart';
import 'package:training/samples/column_sample_advanced.dart';

void setPreferredOrientations() {
  WidgetsFlutterBinding.ensureInitialized();
  SystemChrome.setPreferredOrientations([
    DeviceOrientation.portraitUp,
    DeviceOrientation.portraitDown,
    DeviceOrientation.landscapeLeft,
    DeviceOrientation.landscapeRight,
  ]);
}

class OrientationBuilderSample extends StatelessWidget {
  const OrientationBuilderSample({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return OrientationBuilder(
      builder: (context, orientation) => orientation == Orientation.portrait
          ? const ColumnSample()
          : const ColumnSampleAdvanced(),
    );
  }
}

class MediaQuerySample extends StatelessWidget {
  const MediaQuerySample({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    MediaQueryData queryData = MediaQuery.of(context);
    print(queryData);
    return Center(
      child: Row(
        children: queryData.orientation == Orientation.portrait
            ? [const Text('ein spaltig')]
            : [const Text('spalte 1'), const Text('spalte 2')],
      ),
    );
  }
}
