> March, 2016: If you're on an old version of Jekyll Now and run into a) build warnings or b) syntax highlighting issues caused by [Jekyll 3 and GitHub Pages updates](https://github.com/blog/2100-github-pages-now-faster-and-simpler-with-jekyll-3-0), just :sparkles:[update your _config.yml](https://github.com/barryclark/jekyll-now/pull/445/files):sparkles: and you'll be set!

# Jekyll Now

**Jekyll** is a static site generator that's perfect for GitHub hosted blogs ([Jekyll Repository](https://github.com/jekyll/jekyll))

**Jekyll Now** makes it easier to create your Jekyll blog, by eliminating a lot of the up front setup.

- You don't need to touch the command line
- You don't need to install/configure ruby, rvm/rbenv, ruby gems :relaxed:
- You don't need to install runtime dependencies like markdown processors, Pygments, etc
- If you're on Windows, this will make setting up Jekyll a lot easier
- It's easy to try out, you can just delete your forked repository if you don't like it

In a few minutes you'll be set up with a minimal, responsive blog like the one below giving you more time to spend on writing epic blog posts!

![Jekyll Now Theme Screenshot](/images/jekyll-now-theme-screenshot.jpg "Jekyll Now Theme Screenshot")

## Quick Start

### Step 1) Fork Jekyll Now to your User Repository

Fork this repo, then rename the repository to yourgithubusername.github.io.

Your Jekyll blog will often be viewable immediately at <http://yourgithubusername.github.io> (if it's not, you can often force it to build by completing step 2)

![Step 1](/images/step1.gif "Step 1")

### Step 2) Customize and view your site

Enter your site name, description, avatar and many other options by editing the _config.yml file. You can easily turn on Google Analytics tracking, Disqus commenting and social icons here too.

Making a change to _config.yml (or any file in your repository) will force GitHub Pages to rebuild your site with jekyll. Your rebuilt site will be viewable a few seconds later at <http://yourgithubusername.github.io> - if not, give it ten minutes as GitHub suggests and it'll appear soon

> There are 3 different ways that you can make changes to your blog's files:

> 1. Edit files within your new username.github.io repository in the browser at GitHub.com (shown below).
> 2. Use a third party GitHub content editor, like [Prose by Development Seed](http://prose.io). It's optimized for use with Jekyll making markdown editing, writing drafts, and uploading images really easy.
> 3. Clone down your repository and make updates locally, then push them to your GitHub repository.

![_config.yml](/images/config.png "_config.yml")

### Step 3) Publish your first blog post

Edit `/_posts/2014-3-3-Hello-World.md` to publish your first blog post. This [Markdown Cheatsheet](http://www.jekyllnow.com/Markdown-Style-Guide/) might come in handy.

![First Post](/images/first-post.png "First Post")

> You can add additional posts in the browser on GitHub.com too! Just hit the + icon in `/_posts/` to create new content. Just make sure to include the [front-matter](http://jekyllrb.com/docs/frontmatter/) block at the top of each new blog post and make sure the post's filename is in this format: year-month-day-title.md

## Local Development

1. Install Jekyll and plug-ins in one fell swoop. `gem install github-pages` This mirrors the plug-ins used by GitHub Pages on your local machine including Jekyll, Sass, etc.
2. Clone down your fork `git clone https://github.com/yourusername/yourusername.github.io.git`
3. Serve the site and watch for markup/sass changes `jekyll serve`
4. View your website at http://127.0.0.1:4000/
5. Commit any changes and push everything to the master branch of your GitHub user repository. GitHub Pages will then rebuild and serve your website.

## Moar!

I've created a more detailed walkthrough, [**Build A Blog With Jekyll And GitHub Pages**](http://www.smashingmagazine.com/2014/08/01/build-blog-jekyll-github-pages/) over at the Smashing Magazine website. Check it out if you'd like a more detailed walkthrough and some background on Jekyll. :metal:

It covers:

- A more detailed walkthrough of setting up your Jekyll blog
- Common issues that you might encounter while using Jekyll
- Importing from Wordpress, using your own domain name, and blogging in your favorite editor
- Theming in Jekyll, with Liquid templating examples
- A quick look at Jekyll 2.0’s new features, including Sass/Coffeescript support and Collections

## Jekyll Now Features

✓ Command-line free _fork-first workflow_, using GitHub.com to create, customize and post to your blog  
✓ Fully responsive and mobile optimized base theme (**[Theme Demo](http://jekyllnow.com)**)  
✓ Sass/Coffeescript support using Jekyll 2.0  
✓ Free hosting on your GitHub Pages user site  
✓ Markdown blogging  
✓ Syntax highlighting  
✓ Disqus commenting  
✓ Google Analytics integration  
✓ SVG social icons for your footer  
✓ 3 http requests, including your avatar  

✘ No installing dependencies
✘ No need to set up local development  
✘ No configuring plugins  
✘ No need to spend time on theming  
✘ More time to code other things ... wait ✓!  

## Questions?

[Open an Issue](https://github.com/barryclark/jekyll-now/issues/new) and let's chat!

## Other forkable themes

You can use the [Quick Start](https://github.com/barryclark/jekyll-now#quick-start) workflow with other themes that are set up to be forked too! Here are some of my favorites:

- [Hyde](https://github.com/poole/hyde) by MDO
- [Lanyon](https://github.com/poole/lanyon) by MDO
- [mojombo.github.io](https://github.com/mojombo/mojombo.github.io) by Tom Preston-Werner
- [Left](https://github.com/holman/left) by Zach Holman
- [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) by Michael Rose
- [Skinny Bones](https://github.com/mmistakes/skinny-bones-jekyll) by Michael Rose

## Credits

- [Jekyll](https://github.com/jekyll/jekyll) - Thanks to its creators, contributors and maintainers.
- [SVG icons](https://github.com/neilorangepeel/Free-Social-Icons) - Thanks, Neil Orange Peel. They're beautiful.
- [Solarized Light Pygments](https://gist.github.com/edwardhotchkiss/2005058) - Thanks, Edward.
- [Joel Glovier](http://joelglovier.com/writing/) - Great Jekyll articles. I used Joel's feed.xml in this repository.
- [David Furnes](https://github.com/dfurnes), [Jon Uy](https://github.com/jonuy), [Luke Patton](https://github.com/lkpttn) - Thanks for the design/code reviews.
- [Bart Kiers](https://github.com/bkiers), [Florian Simon](https://github.com/vermluh), [Henry Stanley](https://github.com/henryaj), [Hun Jae Lee](https://github.com/hunjaelee), [Javier Cejudo](https://github.com/javiercejudo), [Peter Etelej](https://github.com/etelej), [Ben Abbott](https://github.com/jaminscript), [Ray Nicholus](https://github.com/rnicholus), [Erin Grand](https://github.com/eringrand), [Léo Colombaro](https://github.com/LeoColomb), [Dean Attali](https://github.com/daattali), [Clayton Errington](https://github.com/cjerrington), [Colton Fitzgerald](https://github.com/coltonfitzgerald), [Trace Mayer](https://github.com/sunnankar) - Thanks for your [fantastic contributions](https://github.com/barryclark/jekyll-now/commits/master) to the project!

## Contributing

Issues and Pull Requests are greatly appreciated. If you've never contributed to an open source project before I'm more than happy to walk you through how to create a pull request.

You can start by [opening an issue](https://github.com/barryclark/jekyll-now/issues/new) describing the problem that you're looking to resolve and we'll go from there.

I want to keep Jekyll Now as minimal as possible. Every line of code should be one that's useful to 90% of the people using it. Please bear that in mind when submitting feature requests. If it's not something that most people will use, it probably won't get merged. :guardsman:

# Installed Bootstrap template

# [Material Kit - Free Bootstrap UI Kit](http://demos.creative-tim.com/material-kit/index.html)

![alt text](http://s3.amazonaws.com/creativetim_bucket/products/38/original/opt_mk_thumbnail.jpg "Material Kit Free")

Material Kit is a Free Bootstrap UI Kit with a fresh, new design inspired by Google's material design. You asked for it, so we built it. It's a great pleasure to introduce to you the material concepts in an easy to use and beautiful set of components. Along with the restyling of the Bootstrap elements, you will find three fully-coded example pages, to help you design your next project.

Material Kit makes use of light, surface and movement. It uses a deliberate color choice, edge-to-edge imagery and large scale typography. The general layout resembles sheets of paper following multiple different layers, so that the depth and order is obvious. The navigation stays mainly on the left and the actions on the right.

This new design has elements that have been the result of research regarding ink and paper and the way objects and materials interact in real life. The result is a beautiful and consistent set of elements that can get you started with your next project. Material Kit is a great tool if you are looking to create a web presence for your Android application and need to be consistent, leaving the impression of visually similar elements. It is also a great resource in its own right, looking gorgeous and helping you build your web pages.

Material Kit is based on the Github Repo from Fez (http://fezvrasta.github.io/bootstrap-material-design/) who did an amazing job creating the backbone for the material effects, animations and transitions. Big thanks to his team for their forward thinking efforts.

## Links:

+ [Live Preview](http://demos.creative-tim.com/material-kit/index.html)
+ [Material Kit PRO](http://demos.creative-tim.com/material-kit-pro/presentation.html) (from $79)

## Quick start

Quick start options:

- [Download from Github](https://github.com/timcreative/material-kit/releases/tag/v1.1.0).
- [Download from Creative Tim](http://www.creative-tim.com/product/material-kit).
- Install with [Bower](https://bower.io/): ```bower install material-kit```.
- Clone the repo: `git clone https://github.com/timcreative/material-kit.git`.


### What's included

Within the download you'll find the following directories and files:

```
x_mk/
├── assets/
|   ├── css/
|   |   ├── bootstrap.min.css
|   |   ├── material-kit.css
|   |   └── demo.css
|   ├── js/
|   |   ├── bootstrap-datepicker.js
|   |   ├── bootstrap.min.js
|   |   ├── jquery.min.js
|   |   ├── material-kit.js
|   |   ├── material.min.js
|   |   └── nouislider.min.js
|   ├── sass/
|   |    ├── material-kit
|   |    └── material-kit.scss
|   └── img/
|
├── changelog.txt
├── examples/
├── components-documentation.html
├── Creative Tim License.pdf
├── index.html
├── template.html
└── tutorial.html

```

### Version logs

V1.0 - 15 March 2016 initial release

- V1.0.1, 21 June 2016 - Bugfixing
 - fixed sidebar in documentation
 - fixed checkboxes and radios on Firefox
 - fixed Dropdown in Navbars for mobile
 - fixed broken link in documentation

IMPORTANT! Before upgrading from V1.0/V1.0.1 to V1.1.0, please read all the change long and then follow the instructions for the upgrade.

- V1.1.0, 11 July 2016 - Minor Updates and Bug Fixes
 - Added colored shadows under the Buttons, Pagination & Nav Pills
 - Removed ".btn-raised" class and made the raised button default (too many persons are using the .btn-raised as the default state so let's keep it simple and with less classes). Find more details in on the Upgrading Info below.
 - Added ".btn-simple" class instead of the default link like buttons. Find more details in on the Upgrading Info below.
 - Added a new color for buttons: White, you can use it with ".btn-white"
 - Change the structure of \_buttons.scss and made it more easy to be customized
 - Added subtile animation on Tooltips
 - Removed Glyphicons from bootstrap.min.css
 - Update Bootstrap to v3.3.6
 - Change structure of the "Feature with Icon and Title" to "Info Area with Icon and Title" to keep classes consistency with the PRO version. Find more details in on the Upgrading Info below.
 - Update Font Awesome to the latest Version
 - Added animations and transitions vendor prefixes for old browsers on Checkboxes and Radios

UPGRADING V1.0/V1.0.1 to V1.1.0

1. Buttons:
Please remove all the "btn-raised" classes from all the buttons. Now all the buttons have the "Raised" style on the default state. If you want to use the buttons without that style, like the old "Default" state from the V1.0 please add the class "btn-simple" to those buttons.

2. Features Area:
Please change this structure:

```html
    <div class="feature feature-primary">
        <i class="material-icons">chat</i>
        <h4 class="title">First Feature</h4>
        <p class="description">Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
    </div>
```
with the new one:

```html
    <div class="info">
        <div class="icon icon-primary">
            <i class="material-icons">chat</i>
        </div>
        <h4 class="info-title">First Feature</h4>
        <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
    </div>
```


## Useful Links

More products from Creative Tim: <http://www.creative-tim.com/products>

Tutorials: <https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w>

Freebies: <http://www.creative-tim.com/products>

Affiliate Program (earn money): <http://www.creative-tim.com/affiliates/new>

Social Media:

Twitter: <https://twitter.com/CreativeTim>

Facebook: <https://www.facebook.com/CreativeTim>

Dribbble: <https://dribbble.com/creativetim>

Google+: <https://plus.google.com/+CreativetimPage>

Instagram: <https://instagram.com/creativetimofficial>
