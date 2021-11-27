part of 'post_cubit.dart';

@immutable
abstract class PostState {
  abstract final int selected;
}

class PostSetSelected extends PostState {
  @override
  final int selected;

  PostSetSelected({required this.selected});
}
