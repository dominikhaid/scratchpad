part of 'post_bloc.dart';

@immutable
abstract class PostEvent {}

class PostSetSelectedEvent extends PostEvent {
  final int id;

  PostSetSelectedEvent(this.id);
}

class PostNext extends PostEvent {}

class PostPrev extends PostEvent {}
