import 'package:flutter/material.dart';
import 'package:myfirstapp/widgets/routes/route_handler.dart';

class HomeRouteHandler extends RouteHandler {
  @override
  Page buildPage(
      Map<String, dynamic> routeParams, Map<String, String> queryParams) {
    return MaterialPage(
      child: Scaffold(
        appBar: AppBar(
          title: Text('Home'),
        ),
        body: Center(
          child: Text('Home'),
        ),
      ),
    );
  }
}
