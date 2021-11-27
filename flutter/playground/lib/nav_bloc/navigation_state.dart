part of 'navigation_bloc.dart';

class NavigationState extends Equatable {
  final Map<String, Widget> routes;
  final String selected;

  const NavigationState({required this.routes, required this.selected});

  @override
  List<Object> get props => [routes, selected];
}
