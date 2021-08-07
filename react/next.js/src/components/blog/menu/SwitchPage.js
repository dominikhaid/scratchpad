export default function SwitchPage(e, arr, router) {
  e.preventDefault();

  if (
    e.target.getAttribute('name') === null ||
    e.target.getAttribute('name') ===
      window.location.pathname.replace(/\/|blog/gm, '')
  )
    return;

  let marked = arr.findIndex(a => a.slug === e.target.getAttribute('name'));

  if (marked > -1) arr[marked].marked = true;
  window.location.pathname.lastIndexOf('/') >= 0
    ? router.push('/blog/' + e.target.getAttribute('name'))
    : router.push(e.target.getAttribute('name'));
  document.querySelector('main').scrollTo(0, 0);
}
