part of 'navigation_bloc.dart';

abstract class NavigationEvent extends Equatable {
  const NavigationEvent();
}

class NavigateTo extends NavigationEvent {
  final String to;

  const NavigateTo(this.to);

  @override
  List<Object?> get props => [to];
}
