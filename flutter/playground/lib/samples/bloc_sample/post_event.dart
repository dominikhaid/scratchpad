part of 'post_bloc.dart';

@immutable
abstract class PostEvent {}

class PostNextEvent extends PostEvent {}

class PostPrevEvent extends PostEvent {}

class PostSetEvent extends PostEvent {
  final int selected;

  PostSetEvent(this.selected);
}
