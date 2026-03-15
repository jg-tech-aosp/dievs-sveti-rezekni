export default {
  async fetch(request, env) {
    return new Response("SC Worker online", { status: 200 });
  }
}
