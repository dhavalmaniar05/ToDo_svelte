var ghpages = require('gh-pages');

ghpages.publish(
  'public', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/dhavalmaniar05/ToDo_svelte', // Update to point to your repository  
    user: {
      name: 'Dhaval Maniar', // update to use your name
      email: 'Your Email address' // Update to use your email
    }
  },
  () => {
    console.log('Deploy Complete!')
  }
)