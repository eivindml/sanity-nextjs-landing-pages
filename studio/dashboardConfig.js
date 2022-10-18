export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '634eadf2ef4723757c5c2d3c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nq18x52p',
                  apiId: '3f746140-286d-4d90-ad74-2dd3f35d79c4'
                },
                {
                  buildHookId: '634eadf26810a667f3e50fed',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-pqe1y8td',
                  apiId: 'ff8a8255-2941-4742-9708-95827e250773'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eivindml/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-pqe1y8td.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
