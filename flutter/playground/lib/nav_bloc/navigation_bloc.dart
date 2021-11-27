import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/widgets.dart';

part 'navigation_event.dart';

part 'navigation_state.dart';

class NavigationBloc extends Bloc<NavigationEvent, NavigationState> {
  NavigationBloc(Map<String, Widget> routes, String initialRoute)
      : super(NavigationState(routes: routes, selected: initialRoute)) {
    on<NavigateTo>((event, emit) {
      emit(NavigationState(routes: state.routes, selected: event.to));
    });
  }
}
