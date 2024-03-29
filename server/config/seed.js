/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Story from '../api/story/story.model';
import Song from '../api/song/song.model';

//FIXME seperate into smaller files
Song.find({}).remove()
  .then(() => {
    Song.create({
        game: 'The War of the Lions',
        name: 'Chapel',
        likes: 2
      }, {
        game: 'XCOM',
        name: 'Main Theme',
        likes: 4
      }, {
        game: 'Baten Kaitos',
        name: 'The True Mirror',
        likes: 1
      }, {
        game: 'League of Legends',
        name: 'Ranked Theme',
        likes: 6
      }, {
        game: 'Pokemon',
        name: 'Gym Leader Theme',
        likes: 9
      }, {
        game: 'Legend of Zelda',
        name: 'Song of Storms',
        likes: 10
      }
    );
  });


Story.find({}).remove()
  .then(() => {
    Story.create({
        title: 'Smashing noobs to 30',
        content: 'I distinctly remember getting a pentakill with Katarina when my account ' +
        'was level 15ish. My mom also brought a blue coolatta from Dunkin Donuts. ' +
        'I was also listening to Katy Perry, E.T. on youtube repeat. Good times.',
        creator: 'Ashikul',
        game: 'League of Legends'
      }, {
        title: 'I love candy crush',
        content: 'OMG. I PLAYED THIS SO MUCH. ',
        creator: 'Pippi Longstocking',
        game: 'Candy Crush'
      }, {
        title: 'Starcraft after school breh',
        content: 'Turf War OG ',
        creator: 'Zero Blade',
        game: 'Starcraft'
      }, {
        title: 'Smashing noobs to 60',
        content: 'I distinctly remember getting a [Krol Blade] with my undead rogue around ' +
        'level 30ish. My mom also brought a strawberry coolatta from Dunkin Donuts. ' +
        'I was also listening to Linken Park on youtube repeat. Good times.',
        creator: 'Ashikul',
        game: 'World of Warcraft'
      }, {
        title: 'Smashing noobs to 130',
        content: 'I distinctly remember getting a pentakill with Katarina when my account ' +
        'was level 25ish. My mom also brought a blue coolatta from Dunkin Donuts. ' +
        'I was also listening to Katy Perry, E.T. on youtube repeat. Good times.',
        creator: 'Ashikul2',
        game: 'League of Legends'
      }, {
        title: 'Smashing noobs to 301',
        content: 'I distinctly remember getting a pentakill with Katarina when my account ' +
        'was level 5ish. My mom also brought a blue coolatta from Dunkin Donuts. ' +
        'I was also listening to Katy Perry, E.T. on youtube repeat. Good times.',
        creator: 'Ashikul3',
        game: 'League of Legends'
      }, {
        title: 'Smashing noobs to 230',
        content: 'I distinctly remember getting a pentakill with Katarina when my account ' +
        'was level 65ish. My mom also brought a blue coolatta from Dunkin Donuts. ' +
        'I was also listening to Katy Perry, E.T. on youtube repeat. Good times.',
        creator: 'Ashikul4',
        game: 'League of Legends'
      }
    );
  });




Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
      'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
      'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
      'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
      'tests alongside code. Automatic injection of scripts and ' +
      'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
      'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
      'payload, minifies your scripts/css/images, and rewrites asset ' +
      'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
      'and openshift subgenerators'
    });
  });


User.find({}).remove()
  .then(() => {
    User.create({
        provider: 'local',
        name: 'Test User',
        email: 'test@example.com',
        password: 'test'
      }, {
        provider: 'local',
        role: 'admin',
        name: 'Admin',
        email: 'admin@example.com',
        password: 'admin'
      })
      .then(() => {
        console.log('finished populating users');
      })
  });
