import 'package:flutter/material.dart';
import 'package:myfirstapp/widgets/navigation/build_scaffold.dart';
import 'package:myfirstapp/widgets/samples/grid_view_sample.dart';
import 'package:myfirstapp/widgets/samples/image_fit_sample.dart';
import 'package:myfirstapp/widgets/samples/list_view_sample.dart';
import 'package:myfirstapp/widgets/samples/list_view_statefull_sample.dart';

const page_list = 'list';
const page_image = 'image';
const page_gird = 'gird';

const pages = [page_image, page_list, page_gird];

Navigator buildNavigator() {
  return Navigator(
    initialRoute: page_image,
    onGenerateRoute: (routeSettings) {
      // simuliere das immer das Parameter 1 übergeben wird!
      final Uri uri = Uri.parse('${routeSettings.name ?? ''}/1');
      final String path =
          uri.pathSegments.isNotEmpty ? uri.pathSegments.elementAt(0) : '';
      switch (path) {
        case page_image:
          return MaterialPageRoute(
              builder: (context) => buildScaffold(
                  child: const ImageFitSample(),
                  appBarTitle: routeSettings.name));
        case page_list:
          int? selected;
          try {
            selected = int.tryParse(uri.pathSegments.elementAt(1), radix: 10);
          } catch (err) {}
          print(selected);
          return MaterialPageRoute(
              builder: (context) => buildScaffold(
                  child: ListViewStatefulSample(selected: selected),
                  appBarTitle: routeSettings.name));
        case page_gird:
          return MaterialPageRoute(
              builder: (context) => buildScaffold(
                  child: const GridViewSample(),
                  appBarTitle: routeSettings.name));
      }
    },
    onUnknownRoute: (routeSettings) => MaterialPageRoute(
      builder: (context) => Center(
        child: Text('Route ${routeSettings.name} unavailable!'),
      ),
    ),
  );
}
