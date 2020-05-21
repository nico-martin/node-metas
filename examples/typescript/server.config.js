const fetch = require('node-fetch');

module.exports = {
  routes: [
    {
      path: '/user/:id/',
      metas: request => ({
        'using-id': 'id' in request.params ? request.params.id : '',
        hello: 'world',
      }),
    },
    {
      path: '/post/:id/',
      metas: async request => {
        const id = 'id' in request.params ? request.params.id : 0;
        let metas = {};
        try {
          const resp = await (
            await fetch(`https://sayhello.ch/wp-json/wp/v2/posts/${id}/`)
          ).json();
          metas = {
            title: resp.title.rendered,
          };
        } catch (error) {
          console.log('Error for /post/:id/', error);
        }
        return metas;
      },
    },
  ],
  port: 8050,
};
